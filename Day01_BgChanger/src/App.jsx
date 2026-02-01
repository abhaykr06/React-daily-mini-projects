import { useState } from "react"


function App() {
  const [color, setColor] = useState("grey")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{background: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-20 px-4 inset-x-0">
          <div className="flex flex-wrap justify-center gap-7 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick= {() => setColor("red")} className="outline-none px-3 py-1 rounded-2xl text-white shadow-lg " style={{background: "red"}}> RED </button>
            <button onClick= {() => setColor("blue")} className="outline-none px-3 py-1 rounded-2xl text-white shadow-lg " style={{background: "blue"}}> BLUE </button>
            <button onClick= {() => setColor("green")} className="outline-none px-3 py-1 rounded-2xl text-white shadow-lg " style={{background: "green"}}> GREEN </button>
            <button onClick= {() => setColor("pink")} className="outline-none px-3 py-1 rounded-2xl text-white shadow-lg " style={{background: "pink"}}> PINK </button>
            <button onClick= {() => setColor("yellow")} className="outline-none px-3 py-1 rounded-2xl text-white shadow-lg " style={{background: "yellow"}}> YELLOW </button>
            <button onClick= {() => setColor("black")} className="outline-none px-3 py-1 rounded-2xl text-white shadow-lg " style={{background: "black"}}> BLACK </button>
            <button onClick= {() => setColor("orange")} className="outline-none px-3 py-1 rounded-2xl text-white shadow-lg " style={{background: "orange"}}> ORANGE </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
