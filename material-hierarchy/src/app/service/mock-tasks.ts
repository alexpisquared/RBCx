import { BaseTask } from '../model/base-task';

export const BaseTasksMock: BaseTask[] = [
  {
    id: 1,
    name: 'Movers',
    done: false,
    progress: 33,
    subtasks: [
      {
        id: 11,
        name: 'Book',
        done: false,
        progress: 33,
        subtasks: [
          { id: 111, name: 'Research', done: false, progress: 33, subtasks: null },
          { id: 112, name: 'Interview', done: false, progress: 33, subtasks: null },
          { id: 112, name: 'Negotiate', done: false, progress: 33, subtasks: null }
        ]
      },
      { id: 12, name: 'Exec', done: false, progress: 33, subtasks: null },
      { id: 12, name: 'Part', done: false, progress: 33, subtasks: null }
    ]
  },
  { id: 2, name: 'Garbage', done: false, progress: 33, subtasks: null },
  { id: 3, name: 'Address', done: false, progress: 33, subtasks: null },
  { id: 4, name: 'Utilits', done: false, progress: 33, subtasks: null },
  { id: 5, name: 'Internet', done: false, progress: 33, subtasks: null },
  // { id: 6, name: 'Insurance', done: false, progress: 33, subtasks: null }
  // { id: 7, name: 'Savings', done: false, progress: 33, subtasks: null },
  // { id: 8, name: 'Tips', done: false, progress: 33, subtasks: null },
  // { id: 9, name: 'Enjoy', done: false, progress: 33, subtasks: null }
];
