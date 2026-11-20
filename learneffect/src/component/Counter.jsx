import { useEffect, useState } from "react";


function Counter(){
    let [count, setCount] = useState(0);

    
    useEffect(()=>{
        console.log("Use effect without dependencies");
        console.log("Count  :" +count);
    })


function AddCount(){
    setCount(++count);

}
  return(
    <>
       <h2>Counter : {count}</h2>
       <button onClick={AddCount}>Click Me</button>
    </>
  )
}
   export default Counter; 