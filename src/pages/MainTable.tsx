import HeadMain from "../components/Main/HeadMain";
import { useSelector } from 'react-redux';
import Body from "../components/Main/BodyMain";
import type { RootState } from "../redux/reduxConfig";
import { State } from "../redux/reducers/task-reducer";
import { useState } from "react";
import MainButton from "../components/MainButton";
import AddForm from "../components/AddForm";
import { BodyProps } from "../components/Archive/BodyArchive";



const Main = () : JSX.Element => {

  let data: State = useSelector((state: RootState) => state.taskReducer);
    

  let activeTasks: BodyProps[] = [];
  if (data.stateTasks) {
      activeTasks = (data.stateTasks).filter( (task: BodyProps) => {
          return task.isActive === true; 
    }); 
  }

  const [className, setClassName] = useState('modal inactive')

  function toggleClass() {
    if (className === 'modal inactive') {
      setClassName('modal active');
    } else setClassName('modal inactive');
          console.log(className)
  }


  return <>
  <HeadMain/>
  { 
    activeTasks.map(({ id, name, created, category, content, isActive }) => (
      <Body
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
  title='Create Task'
  id='edit-button'/>
  <AddForm 
    key = {0}
    id = {'add-form'}
    className = {className}
    onToggle={toggleClass}/>
  </>
}

export default Main;