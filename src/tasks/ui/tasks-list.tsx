

import { ReactNode } from "react";
import { OwnerSelectParams, TasksRepository } from "../types";
import { useTasks } from "../model/use-tasks";
import { TaskItem } from "./task-item";
import { ToggleTaskCheckbox } from "./toggle-task-checkbox";
import { DeleteTaskButton } from "./delete-task-button";
import { CreateTaskForm } from "./create-task-from";

type Props = {
  renderOwnerSelect: (params: OwnerSelectParams) => ReactNode;
  tasksRepository: TasksRepository;
}

export function TasksList(props: Props) {
  const { renderOwnerSelect, tasksRepository } = props

  const { addTask, removeTask, tasks, toggleCheckTask, updateOwner } = useTasks(
    { tasksRepository },
  );
  return (
    <div>
      <CreateTaskForm onCreate={addTask} />
      {tasks.map(task => (
        <TaskItem title={task.title} key={task.id} actions={
          <>
            <ToggleTaskCheckbox
              value={task.done}
              onToggle={toggleCheckTask.bind(null, task.id)}
            />
            <DeleteTaskButton onClick={removeTask.bind(null, task.id)} />
            {renderOwnerSelect({
              ownerId: task.ownerId,
              onChangeOwnerId: updateOwner.bind(null, task.id),
            })}
          </>} />
      ))}
    </div>
  );
}

