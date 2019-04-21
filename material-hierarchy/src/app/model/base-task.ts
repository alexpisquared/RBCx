export class BaseTask {
  id: number;
  name: string;
  done: boolean;
  imgurl: string;
  progress: number;
  subtasks: BaseTask[];
}
