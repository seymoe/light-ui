/*!
 * light-ui.js v0.0.1
 * (c) 2019 
 * Released under the MIT License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

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

class Button extends React.Component {
    render() {
        const { cls, type, size, round, square, disabled, loading, onClick, children } = this.props;
        const prefixCls = 'lt-button';
        const wrapCls = classnames(cls, prefixCls, {
            [`${prefixCls}--default`]: type === 'default',
            [`${prefixCls}--primary`]: type === 'primary',
            [`${prefixCls}--info`]: type === 'info',
            [`${prefixCls}--warning`]: type === 'warning',
            [`${prefixCls}--danger`]: type === 'danger',
            [`${prefixCls}--large`]: size === 'large',
            [`${prefixCls}--normal`]: size === 'normal',
            [`${prefixCls}--small`]: size === 'small',
            [`${prefixCls}--mini`]: size === 'mini',
            [`${prefixCls}--disabled`]: disabled,
            [`${prefixCls}--loading`]: loading,
            [`${prefixCls}--square`]: square,
            [`${prefixCls}--round`]: round
        });
        const kids = React.Children.map(children, child => child);
        return (React.createElement("button", { className: wrapCls, onClick: disabled ? undefined : onClick }, kids));
    }
}
Button.defaultProps = {
    cls: 'lt-button',
    type: 'default',
    size: 'normal',
    disabled: false,
    loading: false,
};

var classnames$1 = createCommonjsModule(function (module) {
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

class Row extends React.PureComponent {
    render() {
        const { cls, type, justify, align, gutter, children } = this.props;
        const flex = type === 'flex';
        const prefixCls = 'lt-row';
        const margin = `-${Number(gutter) / 2}px`;
        const style = gutter ? { marginLeft: margin, marginRight: margin } : {};
        const wrapCls = classnames$1(cls, prefixCls, {
            [`${prefixCls}--flex`]: flex,
            [`${prefixCls}--justify-${justify}`]: flex && justify,
            [`${prefixCls}--align-${align}`]: flex && align,
        });
        const kids = React.Children.map(children, child => child);
        return (React.createElement("div", { className: wrapCls, style: style }, kids));
    }
}

exports.Button = Button;
exports.Row = Row;
//# sourceMappingURL=lightui.js.map
