/* 负责根据过滤条件动态计算和返回过滤后的任务列表 */
import { ref, computed } from 'vue';

export function userTaskFilter(tasks) {
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
    // 返回变量
    return {
        filter,
        filterRedTasks,
    };
}
