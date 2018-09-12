

var log = document.getElementById('log');


var example = new Taggle('example1', {
		onTagAdd: function(e, tag) {
    		log.textContent = 'You just added "' + tag + '"'; 
    }
});