import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const App = () => {

const [todo, settodo] = useState("")
const [todos, settodos] = useState([])

const handleAdd=()=>{
  settodos([...todos,{id: uuidv4(),todo,isCompleted: false}])
  settodo("")
}

const handleChange=(e)=>{
  e.preventDefault()
  settodo(e.target.value)

}
const handleCheckbox=(e)=>{
  let id=e.target.name
  let index = todos.findIndex(item=>{
    return item.id === id; 
  })
  let newTodos = [...todos];
  newTodos[index].isCompleted = !newTodos[index].isCompleted;
  settodos(newTodos)


}
const handleDelete=(e,id)=>{
  let newTodos = todos.filter(item=>{
    return item.id!==id
  }); 
  settodos(newTodos) 


}
const handleEdit=(e,id)=>{
  let t = todos.filter(i=>i.id === id) 
  settodo(t[0].todo)
  let newTodos = todos.filter(item=>{
    return item.id!==id
  }); 
  settodos(newTodos) 


}








  return (
<>
<div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-[35%]">
<h1 className='font-bold text-center text-3xl'>TO DO LIST</h1>
<div className="addTodo my-5 flex flex-col gap-4">
  <h2> ADD MY TODO</h2>
  <div className='flex'>
    <input type='text' onChange={handleChange} value={todo}  placeholder='Enter your Task' className='w-full rounded-full px-5 py-1 border-2 border-zinc-400'/>
    <button onClick={handleAdd} className='bg-violet-800 mx-2 rounded-full hover:bg-violet-950 disabled:bg-violet-500 p-4 py-2 text-sm font-bold text-white'>SAVE</button>

  </div>
  <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'> </div>
  <h2 className='text-2xl font-bold'>My Todos</h2>
  <div className='todos'>
  {todos.length ===0 && <div className='m-5'>No Todos to display</div> }
  {todos.map(item=>{
    return (<div className='flex gap-5'> 
     <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />
     <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
     <div className='buttons flex h-full'>
     <button onClick={(e)=>handleEdit(e, item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Edit</button>
     <button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'>Delete</button>

     </div>

    </div>
    
  )
   
    
  })}

  </div>

 


</div>



</div>
</>
  )
}

export default App