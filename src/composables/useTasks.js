/* 负责任务的管理，如添加任务和存储任务列表 */

import { ref } from 'vue';

export function useTasks() {
    // 定义响应式数据
    const tasks = ref([]);

    // 定义方法
    const addTask = (task) => tasks.value.push(task);

    return {
        tasks,
        addTask,
    };
}