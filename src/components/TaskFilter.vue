<template>
  <!--过滤选项-->
  <div class="filters">
    <span class="filter active">全部</span>
    <span class="filter">已完成</span>
    <span class="filter">未完成</span>
  </div>
</template>
<script setup>

</script>

<style scoped>

.filters {
  display: flex; /* 使用弹性盒布局，使子元素按行排列 */
  margin: 24px 2px; /* 设置外边距，上下为 24px，左右为 2px */
  color: #c0c2ce; /* 设置文本颜色为淡灰色 (#c0c2ce) */
  font-size: 14px; /* 设置文本字体大小为 14px */
}

.filters .filter {
  margin-right: 14px; /* 设置 .filter 元素的右外边距为 14px */
  transition: 0.8s; /* 应用 0.8 秒的过渡效果，通常用于平滑地过渡属性变化 */
}

.filters .filter.active {
  color: #6b729c; /* 设置活动状态下的文本颜色为深灰蓝色 (#6b729c) */
  transform: scale(1.2); /* 使 .filter 元素在活动状态下放大 1.2 倍 */
}

</style>