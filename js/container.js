;(function (exports) {
	var elem, opts, cardContainer, viewPort;

	var move = function () {
		var children = Array.prototype.slice.call(cardContainer.children);

		var i=0;
		children.forEach(function (card) {
			var theTranslate = 'translate3d(' + -400 + 'px, 0,0)';
			card.style['webkit'+'Transform'] = theTranslate;
			card.style['webkit'+'Transition'] = 'all ' + 1 + 's ' + 'ease';
			if (i===1) {
				card.style['zoom'] = 1.1;
			} else {
				card.style['zoom'] = 0.9;
			}

			i++;
		});

	}

	var initHandlers = function () {
		document.addEventListener('click', move);
	}

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
		cardContainer.id = 'cardContainer';
		viewPort.appendChild(cardContainer);
		elem.appendChild(viewPort);
		
		initHandlers();

		return	{
			addCard: addCard
		}
	}

	exports.Container = new Container(document.getElementsByTagName('body')[0]);

})(window)
