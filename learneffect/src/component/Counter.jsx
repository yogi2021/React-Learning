import { useEffect, useState } from "react";


function Counter(){
    let [count, setCount] = useState(0);

    // withount dependencies
    // useEffect(()=>{
    //     console.log("Use effect without dependencies");
    //     console.log("Count  :" +count);
    // })

  // Dependencies with empty array
    //  useEffect(()=>{
    //     console.log("Use effect dependencies with empty array");
    //     console.log("Count  :" +count);  
    //  },[]
    // )

  // Dependencies with array
  useEffect(()=>{
    console.log("dependencies with array");
        console.log("Count  :" +count);
  },[count]
)  


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