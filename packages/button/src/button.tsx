import * as React from 'react'
import classnames from 'classnames'

interface ButtonPropsType {
  cls?: string;
  type?: 'default' | 'primary' | 'info' | 'warning' | 'danger';
  size?: 'large' | 'normal' | 'small' | 'mini';
  round?: boolean;
  square?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default class Button extends React.Component<ButtonPropsType, any> {
  static defaultProps = {
    cls: 'lt-button',
    type: 'default',
    size: 'normal',
    disabled: false,
    loading: false,
  }
  render() {
    const {
      cls,
      type,
      size,
      round,
      square,
      disabled,
      loading,
      onClick,
      children
    } = this.props
    const prefixCls = 'lt-button'
    const wrapCls = classnames(cls, prefixCls, {
      [`${ prefixCls }--default`]: type === 'default',
      [`${ prefixCls }--primary`]: type === 'primary',
      [`${ prefixCls }--info`]: type === 'info',
      [`${ prefixCls }--warning`]: type === 'warning',
      [`${ prefixCls }--danger`]: type === 'danger',
      [`${ prefixCls }--large`]: size === 'large',
      [`${ prefixCls }--normal`]: size === 'normal',
      [`${ prefixCls }--small`]: size === 'small',
      [`${ prefixCls }--mini`]: size === 'mini',
      [`${ prefixCls }--disabled`]: disabled,
      [`${ prefixCls }--loading`]: loading,
      [`${ prefixCls }--square`]: square,
      [`${ prefixCls }--round`]: round
    })
    const kids = React.Children.map(children, child => child)
    return (
      <button
        className={ wrapCls }
        onClick={ disabled ? undefined : onClick }>
          { kids }
      </button>
    )
  }
}
