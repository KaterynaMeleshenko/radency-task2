import { useState } from "react";
import Head from "../components/Archive/HeadArchive";
import BodyArchive from "../components/Archive/BodyArchive";
import type { BodyProps } from "../components/Archive/BodyArchive";
import type { State } from "../redux/reducers/task-reducer";
import type { RootState } from "../redux/reduxConfig";
import { useSelector } from 'react-redux';
import MainButton from "../components/MainButton";

const Archive = () : JSX.Element => {
  let data: State = useSelector((state: RootState) => state.taskReducer);
    

  let archiveTasks: BodyProps[] = [];
  if (data.stateTasks) {
     archiveTasks = (data.stateTasks).filter( (task: BodyProps) => {
          return task.isActive === false; 
   }); 
  }
 
  const [className, setClassName] = useState('inactive')
  const [btnId, setBtnId] = useState('show-button-active')

  function toggleClass() {
    if (className === 'inactive') {
      setClassName('active');
      setBtnId('show-button-inactive')
    } else {
      setClassName('inactive');
      setBtnId('show-button-active')
    }
  }

  return <>
    <MainButton 
      onToggle={toggleClass}
      title='Show Archive'
      id={btnId}
    />
    <div className={className}>
    <Head/>
      { 
        archiveTasks.map(({ id, name, created, category, content, isActive }) => (
          <BodyArchive
            key = {id}
            id = {id}
            name = {name}
            created = {created}
            category = {category}
            content = {content}
            isActive = {isActive}
          />
        ))
      } 
    <MainButton 
      onToggle={toggleClass}
      title='Hide Archive'
      id='hide-button'
    />
    </div>
  </>
}

export default Archive;