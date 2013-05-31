;(function(Snap, exports){
	var elem, opts, snap, footer;

	function Footer(element, options) {
		elem = element;
		opts = options;

		footer = document.createElement('footer');
		footer.id = 'footer'
		footer.className = 'borders';
		footer.dataset.status = 'closed';

		var button = document.createElement('img');
		button.className = 'footerIcon'
		button.src = 'img/menu-icon.png';
		button.addEventListener("click",function() {
			if (footer.dataset.status=='closed') {
				footer.dataset.status='open';
				snap.easeTo(100);
			} else {
				footer.dataset.status='closed';
				snap.easeTo(0);
			}
		});

		footer.appendChild(button);
		var footerMenu = document.createElement('ul');
		
		var item = document.createElement('li');
		item.className = 'footerLink twitter';
		var img = document.createElement('img');
		img.src='media/twitter.png';
		item.appendChild(img);
		footerMenu.appendChild(item);

		item = document.createElement('li');
		item.className = 'footerLink help';
		img = document.createElement('img');
		img.src='media/question.png';
		item.appendChild(img);
		footerMenu.appendChild(item);

		item = document.createElement('li');
		item.className = 'footerLink maps';
		img = document.createElement('img');
		img.src='media/maps.png';
		item.appendChild(img);
		footerMenu.appendChild(item);
		
		footer.appendChild(footerMenu);
		elem.appendChild(footer);

		snap = new Snap({
			element: footer,
			maxPosition: 450,
			minPosition: 30,
			tapToClose: false,
			axis: 'vertical'
		});

		
	}

	exports.Footer = new Footer(document.getElementsByTagName('body')[0]);
})(window.Snap, window);