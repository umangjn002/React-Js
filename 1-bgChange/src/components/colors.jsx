import React,{useState} from 'react'

function Colors() {
  const [color, setColor] = useState("Black")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-slate-400 px-3 py-2 rounded-3xl'>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "red"}}
            onClick={()=>{setColor("red")}}>Red</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "green"}}
            onClick={()=>{setColor("green")}}>Green</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "blue"}}
            onClick={()=>{setColor("blue")}}>Blue</button>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-sm' style={{backgroundColor: "white", border:"1px solid"}}
            onClick={()=>{setColor("white")}}>White</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "black"}}
            onClick={()=>{setColor("black")}}>Black</button>
            </div>
        </div>
    </div>
  )
}

export default Colors