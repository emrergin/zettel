window.addEventListener('load', (event) => {
      var parent = document.getElementById('main');
      var var1   = parent.getElementsByTagName('br');

      for(var i = var1.length; i--;) {
          var1[i].parentNode.removeChild(var1[i]);
      }
		parent.innerHTML = parent.innerHTML.replace(/((http|https|ftp):\/\/[\w?=&./-;#~%-]+(?![\w\s?&./;#~%"=-]*>))/g, '<a href="$1">$1</a> ');
    });
	
