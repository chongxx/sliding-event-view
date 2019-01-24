var touch_dot = 0;//触摸时的原点
var touch_move = 0;
var is_move = false;

Component({
  externalClasses: ['s-class'],
  methods: {
    touchStart(e) {
      touch_dot = e.touches[0].pageX; // 获取触摸时的原点
      // console.log('touch_dot -> ', touch_dot);
    },
    touchMove(e) {
      touch_move = e.touches[0].pageX;
      is_move = true;
      // console.log('touch_move -> ', touch_move);
    },
    touchEnd(e) {
      if (!is_move) { return; }
      let move_distance = touch_move - touch_dot;
      // console.log('move_distance -> ', move_distance);
      // 向左滑动
      if (move_distance <= -50) {
        this.triggerEvent('onSliding', { direction: 'left'});
      }
      // 向右滑动
      if (move_distance >= 50) {
        this.triggerEvent('onSliding', { direction: 'right'});
      }

      // 每次动作之后参数重置
      touch_dot = 0;
      touch_move = 0;
      is_move = false;
    },
  },
})
