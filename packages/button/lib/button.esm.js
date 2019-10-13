/*!
 * button.js v0.0.1
 * (c) 2019 
 * Released under the MIT License.
 */
import { Component, Children, createElement } from 'react';
import classnames from 'classnames';

class Button extends Component {
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
        const kids = Children.map(children, child => child);
        return (createElement("a", { role: "button", className: wrapCls, onClick: disabled ? undefined : onClick }, kids));
    }
}
Button.defaultProps = {
    prefixCls: 'lt-button',
    type: 'primary',
    size: 'large',
    disabled: false,
    loading: false,
};

export default Button;
//# sourceMappingURL=button.esm.js.map
