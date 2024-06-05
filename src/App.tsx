import { getFromStorage, saveToStorage } from "./lib/storage";
import { TasksRepository } from "./tasks/types";
import { TasksList } from "./tasks/ui/tasks-list";
import { UserSelect } from "./user/ui/user-select";

export function App() {

  const TASKS_STORAGE_KEY = "tasks";
  const tasksRepository: TasksRepository = {
    getTasks: () => getFromStorage(TASKS_STORAGE_KEY, []),
    saveTasks: (tasks) => saveToStorage(TASKS_STORAGE_KEY, tasks),
  };

  return (
    <>
      <TasksList tasksRepository={tasksRepository} renderOwnerSelect={({ ownerId, onChangeOwnerId }) => (
        <UserSelect userId={ownerId} onChangeUserId={onChangeOwnerId} />
      )} />
    </>
  );
}
