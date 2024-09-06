<template>
  <div class="task-item">
    <!--放到label中是因为自定义的复选框组件需要根据input的选中状态来判断该选区是选中还是不选中的-->
    <label>
      <!--复选框-->
      <input type="checkbox">
      Todo 1
      <span class="check-button"></span>  <!--span自定义复选框按钮-->
    </label>
  </div>

</template>
<script setup>

</script>
<style scoped>
.task-item {
  background: white; /* 设置 .task-item 元素的背景色为白色 */
  padding: 16px; /* 为 .task-item 元素添加 16px 的内边距 */
  border-radius: 8px; /* 设置 .task-item 元素的圆角半径为 8px，使边角圆润 */
  color: #626262; /* 设置 .task-item 元素中文本的颜色为灰色 (#626262) */
}

.task-item label {
  position: relative; /* 使 label 相对定位，允许其子元素使用绝对定位 */
  display: flex; /* 使用弹性盒布局，使子元素按行排列 */
  align-items: center; /* 垂直居中对齐子元素 */
}

.task-item label span.check-button {
  position: absolute; /* 使 .check-button 使用绝对定位 */
  top: 0; /* 将 .check-button 元素定位到其容器的顶部 */
}

/* 这里是 .task-item label span.check-button 公共的样式代码 */
.task-item label span.check-button::before,  /* before 空心的圆心*/
.task-item label span.check-button::after {  /* after 是实心的圆心*/
  content: ""; /* 设置伪元素内容为空 */
  display: block; /* 使伪元素成为块级元素 */
  position: absolute; /* 使伪元素使用绝对定位 */
  width: 18px; /* 设置伪元素的宽度为 18px */
  height: 18px; /* 设置伪元素的高度为 18px */
  border-radius: 50%; /* 将伪元素的边角设置为圆形 */
}

.task-item label span.check-button::before {
  /* 空心圆 */
  border: 1px solid #b382f9; /* solid 表示边框为实线，添加 1px 宽的实线边框，颜色为紫色 (#b382f9) */
}

.task-item label span.check-button::after {
  transition: 0.4s; /* 应用 0.4 秒的平滑过渡效果，通常用于背景色、位置、大小等属性的变化 */
  background: #b382f9; /* 设置 ::after 伪元素的背景色为紫色 (#b382f9) */
  transform: translate(1px, 1px) scale(0.8); /* 将 ::after 伪元素向右平移 1px 并缩小到 0.8 倍 */
  opacity: 0; /* 设置 ::after 伪元素的透明度为 0，使其初始不可见 */
}

.task-item input {
  margin-right: 16px; /* 为 input 元素添加右外边距，确保其与文字有 16px 的间隔 */
  opacity: 0; /* 设置 input 原本的边框透明度为 0，使其不可见 */
}

.task-item input:checked + span.check-button::after {
  opacity: 1;  /* 当选中input这个选区时，相邻的这个span就会变成可见的*/
}
</style>