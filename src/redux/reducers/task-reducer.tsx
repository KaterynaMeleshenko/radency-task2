
import { BodyProps } from '../../components/Archive/BodyArchive';
import tasks from '../data';
import { DELETE_TASK, ARCHIVE_TASK, UNARCHIVE_TASK, ADD_TASK, EDIT_TASK } from '../types';

export type State = {
  stateTasks: BodyProps[]
}

const initialState: State  = {
  stateTasks: tasks,
}

function taskReducer (state = initialState, action: any) {
  switch (action.type) {
    case DELETE_TASK: 
      const indexToDel: number = (state.stateTasks).findIndex(task => task.id === action.taskId);
      if (indexToDel === 0 || indexToDel > 0 ) {
        (state.stateTasks).splice(indexToDel, 1);
      }
      return {
        stateTasks: [...state.stateTasks],
      }
    case ARCHIVE_TASK: 
      const indexToArch: number = (state.stateTasks).findIndex(task => task.id === action.taskId);
      if (indexToArch === 0 || indexToArch > 0 ) {
        (state.stateTasks)[indexToArch].isActive = false;
      }
      return {
        stateTasks: [...state.stateTasks],
      }
    case UNARCHIVE_TASK: 
      const indexToUnarch: number = (state.stateTasks).findIndex(task => task.id === action.taskId);
      if (indexToUnarch === 0 || indexToUnarch > 0 ) {
        (state.stateTasks)[indexToUnarch].isActive = true;
      }
      return {
        stateTasks: [...state.stateTasks],
      }
    case ADD_TASK: 
      return {
        stateTasks: [...state.stateTasks, {
        id: action.taskId,
        name: action.taskName,
        created: action.taskCreated,
        category: action.taskCategory,
        content: action.taskContent,
        isActive: action.taskStatus,
      }]}
    case EDIT_TASK:
      const indexToEdit: number = (state.stateTasks).findIndex(task => task.id === action.taskId);
        if (indexToEdit === 0 || indexToEdit > 0 ) {
          (state.stateTasks)[indexToEdit].name = action.taskName;
          (state.stateTasks)[indexToEdit].category = action.taskCategory;
          (state.stateTasks)[indexToEdit].content = action.taskContent;
        }
      return {
        stateTasks: [...state.stateTasks],
      }
    default:
      return state
  } 
}

export default taskReducer;