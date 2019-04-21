import { BaseTask } from '../model/base-task';
export const BaseTasksMock: BaseTask[] = [
  {
    id: 1,
    name: 'Movers',
    done: false,
    imgurl: '00',
    progress: 0,
    subtasks: [
      {
        id: 11,
        name: 'Book',
        done: false,
        imgurl: '01',
        progress: 33,
        subtasks: [
          { id: 111, name: 'Find', done: false, imgurl: '28', progress: 33, subtasks: null },
          { id: 112, name: 'Book', done: false, imgurl: '48', progress: 33, subtasks: null }
        ]
      },
      {
        id: 12,
        name: 'Pack',
        done: false,
        imgurl: '12',
        progress: 33,
        subtasks: [
          { id: 121, name: 'Undo', done: false, imgurl: '28', progress: 33, subtasks: null },
          { id: 122, name: 'Pack', done: false, imgurl: '38', progress: 33, subtasks: null },
          { id: 122, name: 'Grge', done: false, imgurl: '48', progress: 33, subtasks: null }
        ]
      },
      {
        id: 13,
        name: 'Move',
        done: false,
        imgurl: '13',
        progress: 33,
        subtasks: [
          { id: 131, name: 'Load', done: false, imgurl: '17', progress: 33, subtasks: null },
          { id: 132, name: 'Move', done: false, imgurl: '27', progress: 33, subtasks: null },
          { id: 133, name: 'Dump', done: false, imgurl: '37', progress: 33, subtasks: null },
          { id: 134, name: 'Rept', done: false, imgurl: '47', progress: 33, subtasks: null }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Garbage  ',
    done: false,
    imgurl: '10',
    progress: 0,
    subtasks: [
      {
        id: 21,
        name: 'Find',
        done: false,
        imgurl: '01',
        progress: 33,
        subtasks: [
          { id: 111, name: 'Find', done: false, imgurl: '28', progress: 33, subtasks: null },
        ]
      },
      {
        id: 22,
        name: 'Pack',
        done: false,
        imgurl: '12',
        progress: 33,
        subtasks: [
          { id: 121, name: 'Bags', done: false, imgurl: '28', progress: 33, subtasks: null },
          { id: 122, name: 'Tags', done: false, imgurl: '38', progress: 33, subtasks: null },
        ]
      },
    ]
  },
  {
    id: 3,
    name: 'Address  ',
    done: false,
    imgurl: '20',
    progress: 0,
    subtasks: [
      {
        id: 11,
        name: 'Book',
        done: false,
        imgurl: '01',
        progress: 33,
        subtasks: [
          { id: 111, name: 'Find', done: false, imgurl: '28', progress: 33, subtasks: null },
          { id: 112, name: 'Book', done: false, imgurl: '48', progress: 33, subtasks: null }
        ]
      },
      {
        id: 12,
        name: 'Pack',
        done: false,
        imgurl: '12',
        progress: 33,
        subtasks: [
          { id: 121, name: 'Undo', done: false, imgurl: '28', progress: 33, subtasks: null },
          { id: 122, name: 'Pack', done: false, imgurl: '38', progress: 33, subtasks: null },
          { id: 122, name: 'Grge', done: false, imgurl: '48', progress: 33, subtasks: null }
        ]
      },
      {
        id: 13,
        name: 'Move',
        done: false,
        imgurl: '13',
        progress: 33,
        subtasks: [
          { id: 131, name: 'Load', done: false, imgurl: '17', progress: 33, subtasks: null },
          { id: 132, name: 'Move', done: false, imgurl: '27', progress: 33, subtasks: null },
          { id: 133, name: 'Dump', done: false, imgurl: '37', progress: 33, subtasks: null },
          { id: 134, name: 'Rept', done: false, imgurl: '47', progress: 33, subtasks: null }
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'Utilits  ',
    done: false,
    imgurl: '30',
    progress: 0,
    subtasks: [
      {
        id: 11,
        name: 'Book',
        done: false,
        imgurl: '01',
        progress: 33,
        subtasks: [
          { id: 111, name: 'Find', done: false, imgurl: '28', progress: 33, subtasks: null },
          { id: 112, name: 'Book', done: false, imgurl: '48', progress: 33, subtasks: null }
        ]
      },
      {
        id: 12,
        name: 'Pack',
        done: false,
        imgurl: '12',
        progress: 33,
        subtasks: [
          { id: 121, name: 'Undo', done: false, imgurl: '28', progress: 33, subtasks: null },
          { id: 122, name: 'Pack', done: false, imgurl: '38', progress: 33, subtasks: null },
          { id: 122, name: 'Grge', done: false, imgurl: '48', progress: 33, subtasks: null }
        ]
      },
      {
        id: 13,
        name: 'Move',
        done: false,
        imgurl: '13',
        progress: 33,
        subtasks: [
          { id: 131, name: 'Load', done: false, imgurl: '17', progress: 33, subtasks: null },
          { id: 132, name: 'Move', done: false, imgurl: '27', progress: 33, subtasks: null },
          { id: 133, name: 'Dump', done: false, imgurl: '37', progress: 33, subtasks: null },
          { id: 134, name: 'Rept', done: false, imgurl: '47', progress: 33, subtasks: null }
        ]
      }
    ]
  },
  {
    id: 5,
    name: 'Internet ',
    done: false,
    imgurl: '40',
    progress: 0,
    subtasks: [
      {
        id: 11,
        name: 'Book',
        done: false,
        imgurl: '01',
        progress: 33,
        subtasks: [
          { id: 111, name: 'Find', done: false, imgurl: '28', progress: 33, subtasks: null },
          { id: 112, name: 'Book', done: false, imgurl: '48', progress: 33, subtasks: null }
        ]
      },
      {
        id: 12,
        name: 'Pack',
        done: false,
        imgurl: '12',
        progress: 33,
        subtasks: [
          { id: 121, name: 'Undo', done: false, imgurl: '28', progress: 33, subtasks: null },
          { id: 122, name: 'Pack', done: false, imgurl: '38', progress: 33, subtasks: null },
          { id: 122, name: 'Grge', done: false, imgurl: '48', progress: 33, subtasks: null }
        ]
      },
      {
        id: 13,
        name: 'Move',
        done: false,
        imgurl: '13',
        progress: 33,
        subtasks: [
          { id: 131, name: 'Load', done: false, imgurl: '17', progress: 33, subtasks: null },
          { id: 132, name: 'Move', done: false, imgurl: '27', progress: 33, subtasks: null },
          { id: 133, name: 'Dump', done: false, imgurl: '37', progress: 33, subtasks: null },
          { id: 134, name: 'Rept', done: false, imgurl: '47', progress: 33, subtasks: null }
        ]
      }
    ]
  },
  {
    id: 6,
    name: 'Insurance',
    done: false,
    imgurl: '01',
    progress: 0,
    subtasks: [
      {
        id: 11,
        name: 'Book',
        done: false,
        imgurl: '01',
        progress: 33,
        subtasks: [
          { id: 111, name: 'Find', done: false, imgurl: '28', progress: 33, subtasks: null },
          { id: 112, name: 'Book', done: false, imgurl: '48', progress: 33, subtasks: null }
        ]
      },
      {
        id: 12,
        name: 'Pack',
        done: false,
        imgurl: '12',
        progress: 33,
        subtasks: [
          { id: 121, name: 'Undo', done: false, imgurl: '28', progress: 33, subtasks: null },
          { id: 122, name: 'Pack', done: false, imgurl: '38', progress: 33, subtasks: null },
          { id: 122, name: 'Grge', done: false, imgurl: '48', progress: 33, subtasks: null }
        ]
      },
      {
        id: 13,
        name: 'Move',
        done: false,
        imgurl: '13',
        progress: 33,
        subtasks: [
          { id: 131, name: 'Load', done: false, imgurl: '17', progress: 33, subtasks: null },
          { id: 132, name: 'Move', done: false, imgurl: '27', progress: 33, subtasks: null },
          { id: 133, name: 'Dump', done: false, imgurl: '37', progress: 33, subtasks: null },
          { id: 134, name: 'Rept', done: false, imgurl: '47', progress: 33, subtasks: null }
        ]
      }
    ]
  },
  {
    id: 7,
    name: 'Savings  ',
    done: false,
    imgurl: '11',
    progress: 0,
    subtasks: [
      {
        id: 11,
        name: 'Book',
        done: false,
        imgurl: '01',
        progress: 33,
        subtasks: [
          { id: 111, name: 'Find', done: false, imgurl: '28', progress: 33, subtasks: null },
          { id: 112, name: 'Book', done: false, imgurl: '48', progress: 33, subtasks: null }
        ]
      },
      {
        id: 12,
        name: 'Pack',
        done: false,
        imgurl: '12',
        progress: 33,
        subtasks: [
          { id: 121, name: 'Undo', done: false, imgurl: '28', progress: 33, subtasks: null },
          { id: 122, name: 'Pack', done: false, imgurl: '38', progress: 33, subtasks: null },
          { id: 122, name: 'Grge', done: false, imgurl: '48', progress: 33, subtasks: null }
        ]
      },
      {
        id: 13,
        name: 'Move',
        done: false,
        imgurl: '13',
        progress: 33,
        subtasks: [
          { id: 131, name: 'Load', done: false, imgurl: '17', progress: 33, subtasks: null },
          { id: 132, name: 'Move', done: false, imgurl: '27', progress: 33, subtasks: null },
          { id: 133, name: 'Dump', done: false, imgurl: '37', progress: 33, subtasks: null },
          { id: 134, name: 'Rept', done: false, imgurl: '47', progress: 33, subtasks: null }
        ]
      }
    ]
  },
  {
    id: 8,
    name: 'Tips     ',
    done: false,
    imgurl: '21',
    progress: 0,
    subtasks: [
      {
        id: 11,
        name: 'Book',
        done: false,
        imgurl: '01',
        progress: 33,
        subtasks: [
          { id: 111, name: 'Find', done: false, imgurl: '28', progress: 33, subtasks: null },
          { id: 112, name: 'Book', done: false, imgurl: '48', progress: 33, subtasks: null }
        ]
      },
      {
        id: 12,
        name: 'Pack',
        done: false,
        imgurl: '12',
        progress: 33,
        subtasks: [
          { id: 121, name: 'Undo', done: false, imgurl: '28', progress: 33, subtasks: null },
          { id: 122, name: 'Pack', done: false, imgurl: '38', progress: 33, subtasks: null },
          { id: 122, name: 'Grge', done: false, imgurl: '48', progress: 33, subtasks: null }
        ]
      },
      {
        id: 13,
        name: 'Move',
        done: false,
        imgurl: '13',
        progress: 33,
        subtasks: [
          { id: 131, name: 'Load', done: false, imgurl: '17', progress: 33, subtasks: null },
          { id: 132, name: 'Move', done: false, imgurl: '27', progress: 33, subtasks: null },
          { id: 133, name: 'Dump', done: false, imgurl: '37', progress: 33, subtasks: null },
          { id: 134, name: 'Rept', done: false, imgurl: '47', progress: 33, subtasks: null }
        ]
      }
    ]
  },
  {
    id: 9,
    name: 'Enjoy    ',
    done: false,
    imgurl: '31',
    progress: 0,
    subtasks: [
      {
        id: 11,
        name: 'Book',
        done: false,
        imgurl: '01',
        progress: 33,
        subtasks: [
          { id: 111, name: 'Find', done: false, imgurl: '28', progress: 33, subtasks: null },
          { id: 112, name: 'Book', done: false, imgurl: '48', progress: 33, subtasks: null }
        ]
      },
      {
        id: 12,
        name: 'Pack',
        done: false,
        imgurl: '12',
        progress: 33,
        subtasks: [
          { id: 121, name: 'Undo', done: false, imgurl: '28', progress: 33, subtasks: null },
          { id: 122, name: 'Pack', done: false, imgurl: '38', progress: 33, subtasks: null },
          { id: 122, name: 'Grge', done: false, imgurl: '48', progress: 33, subtasks: null }
        ]
      },
      {
        id: 13,
        name: 'Move',
        done: false,
        imgurl: '13',
        progress: 33,
        subtasks: [
          { id: 131, name: 'Load', done: false, imgurl: '17', progress: 33, subtasks: null },
          { id: 132, name: 'Move', done: false, imgurl: '27', progress: 33, subtasks: null },
          { id: 133, name: 'Dump', done: false, imgurl: '37', progress: 33, subtasks: null },
          { id: 134, name: 'Rept', done: false, imgurl: '47', progress: 33, subtasks: null }
        ]
      }
    ]
  }
];
