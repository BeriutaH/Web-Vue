<template>
  <main>
    <div class="container">
<!--      <h1>欢迎使用xx待办事项！</h1>-->
      <h1>Death Note</h1>
      <!-- 它表示将 tasks.length 的值绑定到 task-add 组件的 tid 属性 -->
      <task-add :tid="tasks.length" @add-task="addTask" />
      <task-filter :selected="filter" @change-filter="filter = $event"/>
      <task-list :tasks="filterRedTasks" />
    </div>
  </main>
</template>

<script setup>
import TaskAdd from "@/components/TaskAdd.vue";
import TaskFilter from "@/components/TaskFilter.vue";
import TaskList from "@/components/TaskList.vue";
import { ref, computed } from 'vue';

// 定义响应式数据
const tasks = ref([]);

// 默认选中全部
const filter = ref("all")  // 响应式引用，初始值为 "all"

// 根据 filter 的值动态计算和返回过滤后的 tasks
const filterRedTasks = computed(() => {
  // computed 自动跟踪其依赖项（在这里是 filter.value 和 tasks.value），当这些依赖项发生变化时，计算属性会自动重新计算
  switch (filter.value) {
    // filter.value 是当前的过滤条件，它可以是 "all"、"done" 或 "task"
    case 'done':
      // 只返回那些 completed 属性为 true 的任务
      return tasks.value.filter(task => task.completed);
    case 'task':
      // 只返回那些 completed 属性为 false 的任务
      return tasks.value.filter(task => !task.completed);
    default:
      // 不对 tasks 进行任何过滤，直接返回所有任务
      return tasks.value;
  }
});

// 定义方法
const addTask = (task) => tasks.value.push(task);
</script>
<style>
/* 全局样式设置为一个盒子模型 */
* {
  box-sizing: border-box; /* 保证元素的内边距和边框包含在元素的总宽度和高度内 */
  margin: 0; /* 移除所有元素的外边距 */
  padding: 0; /* 移除所有元素的内边距 */
  font-family: Helvetica, "PingFeng SC", sans-serif; /* 设置所有文本元素的字体为 Helvetica 或 "PingFeng SC"，无这些字体则使用 sans-serif */
}

/* 整个页面 main是 文档中主要的内容区域 */
main {
  /* vw（viewport width）：表示视口宽度的百分比，vh（viewport height）：表示视口高度的百分比 */
  width: 100vw; /* 设置 main 元素的宽度为 100% 的视口宽度 */
  min-height: 100vh; /* 设置 main 元素的最小高度为 100% 的视口高度 用min-height是保证滚动条在哪，底部背景色在哪 */
  display: grid; /* 将 main 元素设置为网格布局 */
  align-items: center; /* 垂直居中对齐网格中的内容 */
  justify-items: center; /* 水平居中对齐网格中的内容 */
  background: rgb(203, 210, 240); /* 设置 main 元素的背景颜色为浅蓝色 */
}

.container {
  width: 60%; /* 设置 .container 的宽度为父元素宽度的 60% */
  max-width: 400px; /* 最大宽度限制为 400px，避免过大 */
  box-shadow: 0px 0px 24px rgb(0,0,0,0.15); /* 添加阴影效果，0px 表示没有水平或垂直位移，24px 表示模糊的阴影，颜色为带 15% 不透明度的黑色 */
  border-radius: 24px; /* 设置边角的圆角半径为 24px，给容器圆润的外观 */
  padding: 48px 28px; /* 设置容器内边距，上下为 48px，左右为 28px */
  background-color: rgb(245,246,252); /* 设置容器的背景颜色为浅蓝色 */
}

/* 标题 */
h1 {
  display: grid; /* 将 main 元素设置为网格布局 */
  align-items: center; /* 垂直居中对齐网格中的内容 */
  justify-items: center; /* 水平居中对齐网格中的内容 */
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
}

</style>
