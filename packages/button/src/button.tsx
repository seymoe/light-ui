import * as React from 'react'
import classnames from 'classnames'

interface ButtonPropsType {
  prefixCls?: string;
  type?: 'primary' | 'warning' | 'ghost';
  size?: 'large' | 'small';
  disabled?: boolean;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export default class Button extends React.Component<ButtonPropsType, any> {
  static defaultProps = {
    prefixCls: 'lt-button',
    type: 'primary',
    size: 'large',
    disabled: false,
    loading: false,
  }
  render() {
    const {
      prefixCls,
      type,
      size,
      disabled,
      loading,
      onClick,
      children
    } = this.props
    const wrapCls = classnames(prefixCls, {
      [`${ prefixCls }-primary`]: type === 'primary',
      [`${ prefixCls }-warning`]: type === 'warning',
      [`${ prefixCls }-ghost`]: type === 'ghost',
      [`${ prefixCls }-small`]: size === 'small',
      [`${ prefixCls }-disabled`]: disabled,
      [`${ prefixCls }-loading`]: loading
    })
    const kids = React.Children.map(children, child => child)
    return (
      <a 
        role="button"
        className={ wrapCls }
        onClick={ disabled ? undefined : onClick }>
          { kids }
      </a>
    )
  }
}
