;(function (exports) {
	var elem, opts, cardContainer;

	/**
	 * Add cards
	 * @param  {DOM node} content
	 * @param  {Number} position where to add it, by default at the end (not implement yet)
	 * TODO: implement position
	 */
	addCard = function addCard(content, position) {
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
		cardContainer = document.createElement('div');
		cardContainer.id = 'cardContainer'
		elem.appendChild(cardContainer);
		
		return	{
			addCard: addCard
		}
	}

	exports.Container = new Container(document.getElementsByTagName('body')[0]);

})(window)
