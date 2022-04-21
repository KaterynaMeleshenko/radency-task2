import { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import { EDIT_TASK } from "../redux/types";
import { closeBtn } from "./AddForm";
import StyledClose from "./Styles/CloseBtn";
import StyledModal from "./Styles/Modal";
import Submit from "./SubmitButton";

type EditForm = {
  id: string,
  className: string,
  onToggle : any,
  name: string,
  category: string,
  content: string,
  taskId: number
}

const AddForm: FunctionComponent<EditForm> = ({id, className, onToggle, name, category, content, taskId}) : JSX.Element => {

  const [thisName, setThisName] = useState(name);
  const [thisCategory, setThisCategory] = useState(category);
  const [thisContent, setThisContent] = useState(content);

  const dispatch = useDispatch();

  const editTaskAction = ({
    type: EDIT_TASK,
    taskId: taskId,
    taskName: thisName,
    taskCategory: thisCategory,
    taskContent: thisContent
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
              value={thisName || ''}
              onChange={(e) => {
                setThisName(e.target.value);
              }}/><br/>
            <label htmlFor="category">Category:</label><br/>
              <select 
                name="category" 
                id="fcategory" 
                value={thisCategory || ''}
                onChange={(e) => {
                  setThisCategory(e.target.value);
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
                value={thisContent || ''}
                onChange={(e) => {
                  setThisContent(e.target.value);
                }}></textarea><br/>
            <Submit onToggle={() => {
              dispatch(editTaskAction);
            }}/>
        </div> 
      </StyledModal>
    </div>
  )
}

export default AddForm;