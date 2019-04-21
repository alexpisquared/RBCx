import { BaseTask } from '../model/base-task';

export const BaseTasksMock: BaseTask[] = [
  {
    id: 1,
    name: 'Movers',
    done: false,
    imgurl: 'https://weather.gc.ca/weathericons/small/01.png',
    progress: 33,
    subtasks: [
      {
        id: 11,
        name: 'Book',
        done: false,
        imgurl: 'https://weather.gc.ca/weathericons/small/01.png',
        progress: 33,
        subtasks: [
          {
            id: 111,
            name: 'Research',
            done: false,
            imgurl: 'https://weather.gc.ca/weathericons/small/01.png',
            progress: 33,
            subtasks: null
          },
          {
            id: 112,
            name: 'Interview',
            done: false,
            imgurl: 'https://weather.gc.ca/weathericons/small/01.png',
            progress: 33,
            subtasks: null
          },
          {
            id: 112,
            name: 'Negotiate',
            done: false,
            imgurl: 'https://weather.gc.ca/weathericons/small/01.png',
            progress: 33,
            subtasks: null
          }
        ]
      },
      { id: 12, name: 'Pack', done: false, imgurl: 'https://weather.gc.ca/weathericons/small/12.png', progress: 33, subtasks: null },
      { id: 12, name: 'Move', done: false, imgurl: 'https://weather.gc.ca/weathericons/small/13.png', progress: 33, subtasks: null },
      { id: 12, name: 'Part', done: false, imgurl: 'https://weather.gc.ca/weathericons/small/14.png', progress: 33, subtasks: null }
    ]
  },
  { id: 2, name: 'Garbage ', done: false, imgurl: 'https://weather.gc.ca/weathericons/small/21.png', progress: 33, subtasks: null },
  { id: 3, name: 'Address ', done: false, imgurl: 'https://weather.gc.ca/weathericons/small/22.png', progress: 33, subtasks: null },
  { id: 4, name: 'Utilits ', done: false, imgurl: 'https://weather.gc.ca/weathericons/small/23.png', progress: 33, subtasks: null },
  { id: 5, name: 'Internet', done: false, imgurl: 'https://weather.gc.ca/weathericons/small/24.png', progress: 33, subtasks: null }
  // { id: 6, name: 'Insurance', done: false, imgurl: 'https://weather.gc.ca/weathericons/small/01.png', progress: 33, subtasks: null }
  // { id: 7, name: 'Savings  ', done: false, imgurl: 'https://weather.gc.ca/weathericons/small/01.png', progress: 33, subtasks: null },
  // { id: 8, name: 'Tips     ', done: false, imgurl: 'https://weather.gc.ca/weathericons/small/01.png', progress: 33, subtasks: null },
  // { id: 9, name: 'Enjoy    ', done: false, imgurl: 'https://weather.gc.ca/weathericons/small/01.png', progress: 33, subtasks: null }
];
