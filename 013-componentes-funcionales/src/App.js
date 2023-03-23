import { useRef } from "react";

const App = () => {
  const ref = useRef()
  const click = () => {
    console.log(ref.current)
  }
  
  return (
    <div onClick={click} ref={ref}>
      fulano
    </div>
  )
}

export default App