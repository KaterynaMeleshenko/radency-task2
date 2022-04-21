import { FunctionComponent, useState } from "react";
import archive_icon from "../../assets/archive.svg";
import delete_icon from "../../assets/delete.svg";
import edit_icon from "../../assets/edit.svg";
import {categories} from "../../redux/data";
import { useDispatch } from 'react-redux';
import { DELETE_TASK, ARCHIVE_TASK } from "../../redux/types"
import EditForm from "../EditForm";
import { BodyProps } from "../Archive/BodyArchive";
import StyledCatIcon, { StyledActIcon } from "../Styles/Icons";

export function chooseIcon(iconName: string) {
  let icon;

  categories.forEach(category => {
    if (category.name === iconName) {
      icon = category.icon;  
    }
  })

  return icon;
}

export function findDates(inputText: string) {
  const wordsInString = inputText.split(' ');
  const regex = /(\d{1,2})\/(\d{1,2})\/(\d{4})/;
  const dates = wordsInString.filter(word => word.match(regex)).join(', ');

  return dates;
}

const Body: FunctionComponent<BodyProps> = ({id, category, name, created, content, isActive }) : JSX.Element => {

  const dispatch = useDispatch();

  const catIcon: any = chooseIcon(category);
  const editIconId: string = `edit-${id}`;
  const archiveIconId: string = `archive-${id}`;
  const deleteIconId: string = `delete-${id}`;

  const [className, setClassName] = useState('modal inactive')

  function toggleClass() {
    if (className === 'modal inactive') {
      setClassName('modal active');
    } else setClassName('modal inactive');
    }

    const deleteTaskAction = ({
      type: DELETE_TASK,
      taskId: id,    
    })

    const archiveTaskAction = ({
      type: ARCHIVE_TASK,
      taskId: id,    
    })

    return (<>
      <div className="body">
        <div className="column1"><StyledCatIcon src={catIcon} alt="icon"/></div>
        <div className="column2">{name}</div>
        <div className="column3">{created}</div>
        <div className="column4">{category}</div>
        <div className="column5">{content}</div>
        <div className="column6">{findDates(content)}</div>
        <div className="column7">
          <StyledActIcon src={edit_icon} 
            id={editIconId} 
            alt="edit icon"
            onClick={toggleClass}/>
          <StyledActIcon 
            src={archive_icon} 
            id={archiveIconId} 
            alt="archive icon"
            onClick={() => {
              dispatch(archiveTaskAction);
            }}/>
            <StyledActIcon 
              src={delete_icon} 
              id={deleteIconId} 
              alt="delete icon"
              onClick={() => {
                dispatch(deleteTaskAction);
              }}/>
          </div>
      </div>
      <EditForm 
        key = {0}
        id = {'edit-form'}
        className = {className}
        onToggle={toggleClass}
        name = {name}
        category = {category}
        content = {content}
        taskId = {id}/>
      </>
    )
}

export default Body;