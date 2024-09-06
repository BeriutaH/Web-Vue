<template>
  <div class="task-list">
    <task-list-item v-for="n in 3" :key="n"></task-list-item>
  </div>
</template>
<script setup>
import TaskListItem from "@/components/TaskListItem.vue";
// export default {
//   name: "TaskList",
//   components: { TaskListItem }
// }
</script>
<style scoped>
.task-list {
  display: grid; /* 使用网格布局来排列 .task-item 元素 */
  row-gap: 14px; /* 设置网格行间距为 14px */
}
</style>