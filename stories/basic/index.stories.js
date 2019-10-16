import React from 'react'
import { Button } from '../../packages/bundle/lib/lightui.esm'
import '../../packages/bundle/src/index.scss'
import './index.scss'

export default { title: '基础组件' }

export const button = () => {
  return (
    <div>
      <h1>Button 按钮</h1>
      <h2>按钮类型</h2>
      <div className='flex-row button-list'>
        <Button type="default">Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="info">Info</Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
      </div>
      <h2>按钮尺寸</h2>
      <div className="flex-row button-list">
        <Button size="large">Large</Button>
        <Button size="normal">Normal</Button>
        <Button size="small">Small</Button>
        <Button size="mini">Mini</Button>
      </div>
      <h2>禁用状态</h2>
      <p>通过<code>disable</code>属性禁用按钮，禁用状态下按钮不可点击</p>
      <div className="flex-row button-list">
        <Button type="primary" disabled>Disabled</Button>
      </div>
      <h2>按钮风格</h2>
      <div className="flex-row button-list">
        <Button type="primary" square>Square</Button>
        <Button type="primary" round>Round</Button>
      </div>
      <h2>点击事件</h2>
      <div className="flex-row button-list">
        <Button type="primary" onClick={
          () => { console.log('Button onClick') }
        }>onClick</Button>
      </div>
      <h2>API</h2>

    </div>
  )
}
