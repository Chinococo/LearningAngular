export var todoLists: { task: string; status: boolean }[] = [];
export function addTask(task: string) {
  todoLists.push({ task, status: false }); // 默认状态为未完成
}
export function toggleTaskStatus(index: number) {
  if (todoLists[index]) {
    todoLists[index].status = !todoLists[index].status; // 切换状态
  }
}
export function removeTask(index: number) {
  if (index >= 0 && index < todoLists.length) {
    todoLists.splice(index, 1); // 删除指定索引的任务
  }
}
export function getTasks() {
  return todoLists;
}
