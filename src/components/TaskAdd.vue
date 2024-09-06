<template>
  <div class="input-add">
    <input type="text" name="task">
    <button>
      <!-- 用i来表示图标-->
      <i class="plus"></i>
    </button>
  </div>
</template>
<script setup>

</script>

<style scoped>
/* 添加框 */
.input-add {
  position: relative; /* 设置 .input-add 的定位为相对定位，允许它的子元素根据它进行绝对定位 */
  display: flex; /* 将 .input-add 设置为弹性盒布局，使其子元素按行排列 */
  align-items: center; /* 使弹性盒子内的子元素在垂直方向上居中对齐 */
}

.input-add input {
  padding: 16px 52px 16px 18px; /* 设置输入框的内边距：上、下为 16px，右侧为 52px，左侧为 18px */
  border-radius: 48px; /* 给输入框设置圆角，使其边角变圆 */
  border: none; /* 移除输入框的边框 */
  outline: none; /* 移除输入框获得焦点时的默认外边框 */
  box-shadow: 0px 0px 24px rgb(0, 0, 0, 0.09); /* 添加阴影效果，模糊半径为 24px，颜色为 88% 不透明度的黑色 */
  width: 100%; /* 设置输入框的宽度为父元素的 100%，占据可用空间 */
  font-size: 16px; /* 设置输入框中的文字大小为 16px */
  color: #626262; /* 设置输入框中文字的颜色为灰色 (#626262) */
}

.input-add button {
  width: 46px; /* 设置按钮的宽度为 46px */
  height: 48px; /* 设置按钮的高度为 48px */
  border-radius: 50%; /* 设置按钮为圆形，使用 50% 的圆角 */
  background: linear-gradient(#c0a5f3, #7f95f7); /* 设置按钮的背景为从 #c0a5f3 到 #7f95f7 的线性渐变 */
  border: none; /* 移除按钮的边框 */
  outline: none; /* 移除按钮获得焦点时的默认外边框 */

  color: wheat; /* 设置按钮上文字的颜色为小麦色 */
  position: absolute; /* 绝对定位按钮，相对于 .input-add 容器 */
  right: 0px; /* 将按钮水平定位在容器的最右边 */

  cursor: pointer; /* 当鼠标悬停在按钮上时，显示为指针手势，表明按钮是可点击的 */
}

.input-add .plus {
  display: block; /* 将 .plus 元素设置为块级元素，独占一行 */
  width: 100%; /* 设置 .plus 元素的宽度为其父元素的 100% */
  height: 100%; /* 设置 .plus 元素的高度为其父元素的 100% */
  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff); /* 使用两个线性渐变背景，这里两个渐变都为纯白色 */
  background-size: 50% 2px, 2px 50%; /* 设置背景的尺寸，第一个渐变背景为 50% 宽和 2px 高，第二个渐变背景为 2px 宽和 50% 高 */
  background-position: center; /* 背景的定位居中对齐 */
  background-repeat: no-repeat; /* 背景不平铺 */
}

</style>