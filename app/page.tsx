import { AllToDo } from '@/api';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';

export default async function Home() {

  const tasks = await AllToDo();
  console.log("response testing", tasks);
  return (
    <main>
      <div className='text-center pt-10'>
        <h1 className='font-bold text-2xl'>TO-DO List</h1>
        <AddTask />
        <TodoList tasks={tasks} />
      </div>
    </main>
  )
}
