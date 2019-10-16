/*!
 * row.js v0.0.1
 * (c) 2019 
 * Released under the MIT License.
 */
import { PureComponent, Children, createElement } from 'react';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

class Row extends PureComponent {
    render() {
        const { cls, type, justify, align, gutter, children } = this.props;
        const flex = type === 'flex';
        const prefixCls = 'lt-row';
        const margin = `-${Number(gutter) / 2}px`;
        const style = gutter ? { marginLeft: margin, marginRight: margin } : {};
        const wrapCls = classnames(cls, prefixCls, {
            [`${prefixCls}--flex`]: flex,
            [`${prefixCls}--justify-${justify}`]: flex && justify,
            [`${prefixCls}--align-${align}`]: flex && align,
        });
        const kids = Children.map(children, child => child);
        return (createElement("div", { className: wrapCls, style: style }, kids));
    }
}

export default Row;
//# sourceMappingURL=row.esm.js.map
