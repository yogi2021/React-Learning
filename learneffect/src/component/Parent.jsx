import { useState } from "react";

function Parent(){
    let[count, setCount]=useState(0)

    return(
        <>
          <h2> Parent Component</h2>
          <button onClick={()=>setCount(count+1)}>Click me</button>
          <child myCount={count}/>
        </>
    )
}
  export default Parent;