;(function(Snap, exports){
	var elem, opts, snap, stageLeft;

	function StageLeft(element, options) {
		elem = element;
		opts = options;

		stageLeft = document.createElement('div');
		stageLeft.id = 'stageLeft';

		var menu = document.createElement('ul');
		for (var i = 0; i < 7; i++) {
			var item = document.createElement('li');
			item.appendChild(document.createTextNode('Left '+i);
			menu.appendChild(item);
		}

		stageLeft.appendChild(menu);

		snap = new Snap({
			element: stageLeft,
			maxPosition: 266,
			minPosition: 0,
			tapToClose: false,
		});

		elem.appendChild(stageLeft);

		return {
			open: snap.open('left'),
			close: snap.close()
		}
	}

	exports.StageLeft = new StageLeft(document.getElementsByTagName('body')[0])	;

})(window.Snap, window);