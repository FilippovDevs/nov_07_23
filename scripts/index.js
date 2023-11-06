for(let btn of document.querySelectorAll('.btn'))
	
	btn.onclick = function(){

		location.href = `./pages/${this.getAttribute('route')}`;

	}
