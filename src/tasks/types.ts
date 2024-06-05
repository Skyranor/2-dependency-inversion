export type Task = {
	id: string;
	title: string;
	done: boolean;
	ownerId?: string;
};

export type TasksRepository = {
	getTasks: () => Task[];
	saveTasks: (tasks: Task[]) => void;
};

export type OwnerSelectParams = {
	ownerId?: string;
	onChangeOwnerId: (ownerId?: string) => void;
};