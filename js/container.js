;(function (Snap, exports) {
	var elem, opts, cardContainer, snap, viewPort, textViewPort;

	/**
	 * Add cards
	 * @param  {DOM node} content
	 * @param  {Number} position where to add it, by default at the end (not implement yet)
	 * TODO: implement position
	 */
	var addCard = function addCard(head, content, backBody, position) {
		var card = document.createElement('div');
		
		var front = document.createElement('div');
		front.className = 'mod front face';
		
		var frontTop = document.createElement('div');
		frontTop.className = 'top';

		var flipButton = document.createElement('img');
		flipButton.className = 'tr flipper';
		flipButton.src = 'img/options-icon.png';
		
		frontTop.appendChild(flipButton);
		front.appendChild(frontTop);

		var frontInner = document.createElement('div');
		frontInner.className = 'inner';

		/*
			div card
				figure front mod
					top
						tr
							flip button
					inner
						hd bd
				figure back mod
					top
						tr
							flip button
					inner
						hd
						bd
		*/

		head.className = 'hd';
		frontInner.appendChild(head);

		content.className = 'bd';
		frontInner.appendChild(content);
		front.appendChild(frontInner);
		card.appendChild(front);

		var back = document.createElement('div');
		back.className = 'mod back face';

		var backTop = document.createElement('div');
		backTop.className = 'top';
		var backFlipButton = document.createElement('img');
		backFlipButton.className = 'tr flipper';
		backFlipButton.src = 'img/options-icon.png';

		backTop.appendChild(backFlipButton);
		back.appendChild(backTop);

		var backInner = document.createElement('div');
		backInner.className = 'inner';
		var backHead = document.createElement('div');
		backHead.className = 'hd';
		backHead.innerHTML = 'Back title';

		backBody.className = 'bd';

		backInner.appendChild(backHead);
		backInner.appendChild(backBody);
		back.appendChild(backInner);

		card.appendChild(back);
		card.className = 'card borders';

		card.addEventListener("click", function(e) {
			if (e.target.tagName == 'IMG') {
				if (this.classList.contains('flipped')) {
					this.classList.remove('flipped');
				} else {
					this.classList.add('flipped');
				}

			}
		});
		
		cardContainer.appendChild(card);
	}

	var init = function () {
		snap = new Snap({
			element: cardContainer,
			minPosition: -3600,
			maxPosition: 4000,
			tapToClose: false,
			cardWidth: 270,
			cardMargin: 10
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

		textViewPort = document.createElement('div');
		textViewPort.innerHTML = 'Pull & realease<br>&larr; to refresh &rarr;';
		textViewPort.className = 'release';
		viewPort.appendChild(textViewPort);

		cardContainer = document.createElement('div');
		cardContainer.id = 'cardContainer'
		viewPort.appendChild(cardContainer)

		elem.appendChild(viewPort);

		return	{
			addCard: addCard,
			init: init
		}
	}

	exports.Container = new Container(document.getElementsByClassName('wrapper')[0]);

})(window.Snap, window)
