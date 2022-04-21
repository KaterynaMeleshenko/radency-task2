import { FunctionComponent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux/reducers/task-reducer";
import { RootState } from "../redux/reduxConfig";
import { ADD_TASK } from "../redux/types";
import StyledClose from "./Styles/CloseBtn";
import StyledModal from "./Styles/Modal";
import Submit from "./SubmitButton";

export type Form = {
  id: string,
  className: string,
  onToggle : any
}

export const closeBtn = {
    cursor: 'pointer',
    fontWeight: '800',
}

const AddForm: FunctionComponent<Form> = ({id, className, onToggle}) : JSX.Element => {
  let data: State = useSelector((state: RootState) => state.taskReducer);
  let maxId = 0;
  (data.stateTasks).forEach(task => {
    if (task.id > maxId) {
      maxId = task.id
    }
  })

  const [name, setName] = useState('');
  const [category, setCategory] = useState('Idea');
  const [content, setContent] = useState('');

  function getDate() {
    const date = new Date().toString();
    const dateParts = date.split(' ');
    const formattedDate : string = dateParts[1] + ' ' + dateParts[2] + ', ' + dateParts[3];
    
    return formattedDate;
  }

  const dispatch = useDispatch();

  const addTaskAction = ({
    type: ADD_TASK,
    taskId: maxId + 1, 
    taskName: name,
    taskCreated: getDate(),
    taskCategory: category,
    taskContent: content,
    taskStatus: true 
  })

  return(
    
    <div id={id} className={className} >
      <StyledModal>
        <StyledClose>
          <span id="close" onClick={onToggle} style={closeBtn}>X</span>
        </StyledClose>
        <div className="form">
            <label htmlFor="fname">Name: </label><br/>
              <input 
                type="text" 
                id="fname" 
                name="fname" 
                placeholder="Task Name"
                onChange={(e) => {
                 setName(e.target.value);
                }}/><br/>
            <label htmlFor="category">Category:</label><br/>
              <select 
                name="category" 
                id="fcategory" 
                onChange={(e) => {
                  setCategory(e.target.value);
                }}>
                <option value="Idea">Idea</option>
                <option value="Task">Task</option>
                <option value="Quote">Quote</option>
                <option value="Random Thought">Random Thought</option>
              </select><br/>
              <label htmlFor="fname">Content:</label><br/>
                <textarea 
                  id="fcontent" 
                  name="fcontent" 
                  placeholder="Your Content"
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}></textarea><br/>
              <Submit 
                onToggle={() => {
                  dispatch(addTaskAction);
                }}/>
        </div> 
      </StyledModal>
    </div>
    
  )
}

export default AddForm;