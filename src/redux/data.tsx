import task_icon from "../assets/task.svg";
import idea_icon from "../assets/idea.svg";
import thought_icon from "../assets/random_thought.svg";
import quote_icon from "../assets/quote.svg";

let tasks = [
  {   
    id: 0,
    name: 'Shopping list',
    created: 'April 20, 2021',
    category: 'Task',
    content: 'Tomatoes, bread',
    isActive: true,
  },
  {   
    id: 1,
    name: 'The theory of evolution',
    created: 'April 27, 2021',
    category: 'Random Thought',
    content: `Evolution is the change in the characteristics of a species over several generations and relies on the process of natural selection`,
    isActive: true,
  },
  {
    id: 2,
    name: 'Radency',
    created: 'May 03, 2021',
    category: 'Idea',
    content: 'Internship from 2/5/2022 till 3/6/2022',
    isActive: true,
  },
  {
    id: 3,
    name: 'William Gaddis',
    created: 'May 07, 2021',
    category: 'Quote',
    content: "Power doesn't co...",
    isActive: true,
  },
  {   
    id: 4,
    name: 'Books',
    created: 'May 15, 2021',
    category: 'Task',
    content: "The Lean Startup",
    isActive: false,
  },
  {   
    id: 5,
    name: 'Project',
    created: 'May 15, 2021',
    category: 'Idea',
    content: "To create a project for my portfolio 4/15/2022",
    isActive: true,
  },
  {   
    id: 6,
    name: 'Covid',
    created: 'May 15, 2021',
    category: 'Random Thought',
    content: "Covid is not dangerous anymore",
    isActive: false,
  }
]

export let categories = [
  {
    id: 0,
    name: 'Task',
    icon: task_icon
  },
  {
    id: 1,
    name: 'Random Thought',
    icon: thought_icon
  },
  {
    id: 2,
    name: 'Idea',
    icon: idea_icon
  },
  {
    id: 3,
    name: 'Quote',
    icon: quote_icon
  }
]

export default tasks;