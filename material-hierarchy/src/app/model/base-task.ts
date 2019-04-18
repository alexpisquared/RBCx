export class BaseTask {
  id: number;
  name: string;
  done: boolean;
  progress: number;
  subtasks: BaseTask[];
}
