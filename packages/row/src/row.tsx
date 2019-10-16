import * as React from 'react'
import classnames from 'classnames'

interface RowPropsType {
  cls?: string;
  type?: string;
  justify?: 'center' | 'end' | 'space-between' | 'space-around';
  align?: 'center' | 'bottom';
  gutter?: number | string;
}

export default class Row extends React.PureComponent<RowPropsType, any> {
  render() {
    const {
      cls,
      type,
      justify,
      align,
      gutter,
      children
    } = this.props
    const flex = type === 'flex'
    const prefixCls = 'lt-row'
    const margin = `-${Number(gutter) / 2}px`
    const style = gutter ? { marginLeft: margin, marginRight: margin } : {};
    const wrapCls = classnames(cls, prefixCls, {
      [`${ prefixCls }--flex`]: flex,
      [`${ prefixCls }--justify-${justify}`]: flex && justify,
      [`${ prefixCls }--align-${align}`]: flex && align,
    })
    const kids = React.Children.map(children, child => child)
    return (
      <div className={ wrapCls } style={ style }>
        { kids }
      </div>
    )
  }
}