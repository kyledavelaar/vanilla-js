
var DEFAULT_DELIMITER = ', ';

var keyIdentifier = {
  ',': "U+002C"
};

var keyCode = {
  ',': 188
};

var defaultTokenTemplate = document.createElement('template');
defaultTokenTemplate.innerHTML = '\n<label class="token">\n  <input type="text" value="" autocorrect="off">\n  <span class="uk-badge">\n    <span class="value"></span>\n    <i class="uk-icon-remove" data-remove=".token"></i>\n  </span>\n</label>';

var defaultTokenInputTemplate = document.createElement('template');
defaultTokenInputTemplate.innerHTML = '\n<div class="token-input">\n  <input type="text" class="new-token" autocorrect="off"\n</div>';

function TokenInput(input) {
  // Allow calling using new TokenInput(element), or TokenInput(element).
  if (!(this instanceof TokenInput)) {
    return new TokenInput(input);
  }

  // FULL_DELIMITER will be used for re-joining tokens into string.
  // DELIMITER will be used for splitting. We do this so that slightly
  // mal-formed values (ie "foo,bar") still tokenises into ["foo", "bar"],
  // even if the delimiter token in ", ".
  var FULL_DELIMITER = input.dataset.tokenDelimiter || DEFAULT_DELIMITER;
  var DELIMITER = FULL_DELIMITER.replace(/ /g, '');

  // Strip whitespace (and token delimiter) from the token.
  var strip = function strip(value) {
    return value.replace(new RegExp('(^ *)|(' + DELIMITER + '? *$)', 'g'), '');
  };

  // We need the token template.
  var tokenTemplate = document.querySelector('template#token') || defaultTokenTemplate;

  // Create a new Token instance.
  // This assumes that the token template contains a single <input> element,
  // and a single <element class="value"></element> that will contain the
  // label text.
  function Token(value) {
    console.log('value', value);
    tokenTemplate.content.querySelector('input').value = value;
    tokenTemplate.content.querySelector('.value').innerHTML = value;
    return document.importNode(tokenTemplate.content, true);
  }

  var tokenInputTemplate = document.querySelector('template#token-input') || defaultTokenInputTemplate;
  // We need the container element for the new widget. This needs to be inserted directly
  // after the input element we are "replacing".
  input.insertAdjacentHTML('afterend', tokenInputTemplate.innerHTML);
  var widget = input.nextElementSibling;
  var newTokenInput = widget.querySelector('input.new-token');

  // Given an input string, split it into tokens, and rebuild the tokens array+widget.
  // Eventually, this should get smarter, and only add/replace stuff to what is already
  // there.
  function rebuildTokens(value) {
    Array.apply(null, widget.querySelectorAll('.token')).forEach(function(element) {
      return element.remove();
    });
    input.value.split(DELIMITER).map(strip).filter(Boolean).forEach(function(token) {
      console.log('widget', widget);
      return widget.insertBefore(new Token(token), newTokenInput);
    });
  }

  rebuildTokens(input.value);

  // The opposite of rebuildTokens(): get the value that represents the full list of tokens.
  function aggregateTokens() {
    input.value = Array.apply(null, widget.querySelectorAll('.token > input')).map(function(token) {
      return token.value;
    }).filter(Boolean).join(FULL_DELIMITER);
  }

  function updateWidth(event) {
    if (event.target.closest('.token') && event.target.nextElementSibling) {
      event.target.style.width = event.target.nextElementSibling.getBoundingClientRect().width + 'px';
    }
  }

  function updateLabel(event) {
    if (event.target.closest('.token')) {
      event.target.closest('.token').querySelector('.value').innerHTML = event.target.value;
    }
  }

  // Event handlers.

  function click(event) {
    if (event.target.dataset.remove) {
      event.stopPropagation();
      event.stopImmediatePropagation();
      event.preventDefault();
      event.target.closest(event.target.dataset.remove).remove();
      aggregateTokens();
    } else if (event.target === widget) {
      newTokenInput.focus();
    }
  }

  function tokenValueUpdated(event) {
    if (event.target.closest('.token')) {
      updateLabel(event);
    } else {
      // New token, at the end.
      widget.insertBefore(new Token(event.target.value), event.target);
      event.target.value = '';
    }
    aggregateTokens();
  }

  function keyUp(event) {
    // If this was the delimiter, then we want to create a new token.
    // Otherwise, update the label and the width of the input element.
    // We need to update the label to get the width from that!
    if (event.key == DELIMITER || event.keyIdentifier == keyIdentifier[DELIMITER] || event.keyCode == keyCode[DELIMITER]) {
      var tokens = event.target.value.split(DELIMITER).map(strip);
      var element = event.target.closest('.token') || event.target;
      if (tokens[0]) {
        widget.insertBefore(new Token(tokens[0]), element);
      }
      event.target.value = tokens[1] || '';
      aggregateTokens();
    } else if (event.target.closest('.token')) {
      updateLabel(event);
      updateWidth(event);
    }
  }

  function keyDown(event) {
    if (event.key == 'Backspace' || event.keyIdentifier == "U+0008" || event.keyCode == 8) {
      // Because this is keydown, event.target.value will be the value before the keypress,
      // therefore if it's empty, the user has pressed backspace when the field is already empty.
      if (event.target.value == '') {
        var previousToken = (event.target.closest('.token') || event.target).previousElementSibling;
        if (previousToken) {
          // Because we are going to activate the previous sub-element, we don't want the backspace
          // event to fire in that input instead, se we stop propagation.
          event.stopPropagation();
          event.preventDefault();
          previousToken.click();
        }
        event.target.blur();
        aggregateTokens();
      }
    }
  }

  function focusOut(event) {
    if (event.target.closest('.token') && !event.target.value) {
      event.target.closest('.token').remove();
      aggregateTokens();
    }
  }

  widget.addEventListener('click', click);
  widget.addEventListener('change', tokenValueUpdated);
  widget.addEventListener('keyup', keyUp);
  widget.addEventListener('keydown', keyDown);
  widget.addEventListener('focusout', focusOut);
  widget.addEventListener('focusin', updateWidth);

  input.addEventListener('change', rebuildTokens);

  input.type = 'hidden';
};

Array.apply(null, document.querySelectorAll('[type=token]')).forEach(TokenInput);
