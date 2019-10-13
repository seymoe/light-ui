/*!
 * button.js v0.0.1
 * (c) 2019 
 * Released under the MIT License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var classnames = _interopDefault(require('classnames'));

class Button extends React.Component {
    render() {
        const { prefixCls, type, size, disabled, loading, onClick, children } = this.props;
        const wrapCls = classnames(prefixCls, {
            [`${prefixCls}-primary`]: type === 'primary',
            [`${prefixCls}-warning`]: type === 'warning',
            [`${prefixCls}-ghost`]: type === 'ghost',
            [`${prefixCls}-small`]: size === 'small',
            [`${prefixCls}-disabled`]: disabled,
            [`${prefixCls}-loading`]: loading
        });
        const kids = React.Children.map(children, child => child);
        return (React.createElement("a", { role: "button", className: wrapCls, onClick: disabled ? undefined : onClick }, kids));
    }
}
Button.defaultProps = {
    prefixCls: 'lt-button',
    type: 'primary',
    size: 'large',
    disabled: false,
    loading: false,
};

module.exports = Button;
//# sourceMappingURL=button.js.map
