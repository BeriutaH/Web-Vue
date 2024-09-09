<template>
  <div class="task-list">
    <!-- 渲染 TaskListItem 组件，传递 tasks 作为 prop -->
    <!--    :task="task" 中的 : 是 Vue 的简写语法，表示我们要动态地绑定一个数据到子组件的 task 属性。它相当于 v-bind:task="task"，即将 task 作为 prop 传递。-->
    <!--    task-item 是父组件中定义的变量，它在 v-for="task in tasks" 循环中，代表当前正在遍历的 task 对象。-->
    <!--    task 是传递给子组件 TodoListItem 的 prop 名称，子组件将会接收到该 task-->

    <!--    @change-state监听 change-state 事件: 当 change-state 事件触发时，这段代码会执行。-->
    <!--    task.completed = $event.target.checked 表示将 task.completed 的值更新为事件对象 $event 中 target 的 checked 属性的值-->
    <!--    通常 checked 是布尔值（true 或 false），用于表示复选框的选中状态-->
    <task-list-item
        v-for="task in tasks"
        :key="task.id"
        :task-item="task"
        @change-state="task.completed = $event.target.checked"
    ></task-list-item>
  </div>
</template>
<script setup>
import TaskListItem from "@/components/TaskListItem.vue";
// 接收父组件传递的 todos prop
defineProps({
  tasks: Array
});
</script>
<style scoped>
.task-list {
  display: grid; /* 使用网格布局来排列 .task-item 元素 */
  row-gap: 14px; /* 设置网格行间距为 14px */
}
</style>