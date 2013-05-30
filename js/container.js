;(function (Snap, exports) {
	var elem, opts, cardContainer, snap, viewPort;

	/**
	 * Add cards
	 * @param  {DOM node} content
	 * @param  {Number} position where to add it, by default at the end (not implement yet)
	 * TODO: implement position
	 */
	var addCard = function addCard(content, position) {
		var card = document.createElement('div');
		card.appendChild(content);
		card.className = 'mod card';
		cardContainer.appendChild(card);
	}

	var init = function () {
		snap = new Snap({
			element: cardContainer,
			minPosition: -3600,
			maxPosition: 4000,
			tapToClose: false,
			cardWidth: 400,
			cardMargin: 20
		});

		var footerSnap = new Snap({
			element: footer,
			maxPosition: 460,
			minPosition: 10,
			tapToClose: false,
			axis: 'vertical'
		});
	}

	/**
	 * Creates a container for the cards and add it to the elem node
	 * @param {DOM node} element
	 * @param {[type]} options [description]
	 */
	function Container(element, options) {
		elem = element;
		opts = options;	
		viewPort = document.createElement('div');
		viewPort.id = 'viewPort';
		cardContainer = document.createElement('div');
		cardContainer.id = 'cardContainer'
		viewPort.appendChild(cardContainer)

		var footer = document.createElement('footer');
		footer.id = 'footer'
		footer.appendChild(document.createTextNode("Footer"));
		viewPort.appendChild(footer);

		elem.appendChild(viewPort);

		return	{
			addCard: addCard,
			init: init
		}
	}

	exports.Container = new Container(document.getElementsByTagName('body')[0]);

})(window.Snap, window)
