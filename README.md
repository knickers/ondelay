# onDelay

Delay `jQuery.on()` call for a specified elapsed time after the original event. Additionally, if another event is triggered before the delay has completed, then the callback is postponed for another delay duration.

The function definition mimics that of `jQuery.on()` with the addition of a delay value as the last argument.

Useful for auto-saving text boxes as a user types, the event will only be passed through after the user stops typing for a certain period.

```javascript
jQuery('textarea').onDelay('input', function() {
	console.log('Saved:', this.value);
}, 1000);
```

## jQuery.onDelay(events[, selector][, data], handler, delay)

### events
Type: String

One or more space-separated event types and options namespaces, such as `click` or `keydown.myPlugin`.

### selector
Type: String

A selector string to filter the descendants of the selected elements that trigger the event. If the selector is `null` or omitted, the event is always triggered when it reaches the selected element.

### data
Type: Anything

Data to be passed to the handler in `event.data` when and event is triggered.

### handler
Type: Function(Event eventObject [, Anything extraParameter][, ...])

A function to execute when the event is triggered. The value `false` is also allowed as a shorthand for a function that simply does `return false`.

### delay
Type: Integer

Number of milliseconds to wait before forwarding the event. If another event is fired before the timeout, then the callback is postponed until an additional `delay` timeout.
