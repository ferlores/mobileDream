;(function(Snap, exports){
	var elem, opts, snap, footer;

	function Footer(element, options) {
		elem = element;
		opts = options;

		footer = document.createElement('footer');
		footer.id = 'footer'
		footer.dataset.status = 'closed';

		var button = document.createElement('button');
		button.innerText = 'footer';
		button.addEventListener("click",function() {
			if (footer.dataset.status=='closed') {
				footer.dataset.status='open';
				snap.y(250);
			} else {
				footer.dataset.status='closed';
				snap.y(0);
			}
		});

		footer.appendChild(button);
		var footerMenu = document.createElement('ul');
		for (var i = 0; i < 4; i++) {
			var item = document.createElement('li');
			item.appendChild(document.createTextNode("F" + i));
			footerMenu.appendChild(item);
		}
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