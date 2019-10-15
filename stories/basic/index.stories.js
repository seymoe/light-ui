import React from 'react'
import { Button } from '../../packages/bundle/lib/lightui.esm'
import '../../packages/bundle/src/index.scss'
import './index.scss'

export default { title: 'Basic Components' }

export const button = () => {
  return (
    <div>
      <h1>Button 按钮</h1>
      <p>按钮类型</p>
      <div className='flex-row button-list'>
        <Button type="default">Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="info">Info</Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
      </div>
      <p>按钮尺寸</p>
      <div className="flex-row button-list">
        <Button size="large">Large</Button>
        <Button size="normal">Normal</Button>
        <Button size="small">Small</Button>
        <Button size="mini">Mini</Button>
      </div>
    </div>
  )
}
