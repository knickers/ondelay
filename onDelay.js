(function ($) {
	$.fn.onDelay = function(types, selector, data, fn, delay) {
		if (fn == null && delay == null) { // (types, fn, delay)
			fn = selector;
			delay = data;
			data = selector = undefined;
		}
		else if (delay == null) {
			if (typeof selector === 'string') { // (types, selector, fn, delay)
				delay = fn;
				fn = data;
				data = undefined;
			}
			else { // (types, data, fn, delay)
				delay = fn;
				fn = data;
				data = selector;
				selector = undefined;
			}
		}

		return $.fn.on.call(this, types, selector, data, function() {
			if (delay > 0) {
				if (this.onDelayTimerId) {
					clearTimeout(this.onDelayTimerId);
				}
				this.onDelayTimerId = setTimeout(function(elem, args) {
					fn.apply(elem, args);
				}, delay, this, arguments);
			}
			else {
				fn.apply(this, arguments);
			}
		});
	};
})(jQuery);
