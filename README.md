# sliding-event-view

微信小程序左右滑动手势自定义组件

当页面需要监听用户左右滑动的手势时使用，在使用上sliding-event-view与小程序的view没有太大区别，
需要注意一点sliding-event-view只放置了一个slot，所以在sliding-event-view内部的UI结构需要一个
view包裹起来。

# 快速上手

## 使用之前

在开始使用之前，你需要先阅读 [微信小程序自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/) 的相关文档。

## 如何使用

1. 将目录下的sliding-event-view copy到你的项目中（例子里是放在项目的根目录，你可以放置在你自定义的位置）
2. 在 page.json 中引入组件

```json
"usingComponents": {
    "sliding-event-view": "../../sliding-event-view/index"
}
```
3. 在 page.wxml 中使用组件。如果要为sliding-event-view添加class需要使用`s-class`

```html
<sliding-event-view bind:onSliding="onSliding"
  s-class="custom-class">
  <view>...</view>
</sliding-event-view>
```
4. 在 page.js 中监听左右滑动事件

```javascript
Page({
  onSliding(e) {
    // 通过判断e.detail.direction得知用户的手势
    console.log(e.detail.direction); // left || right
  },
})
```
