import { useEffect, useState } from "react";

function TitleChanger(){
    let[count, setCount]=useState(0)

    useEffect(()=>{
        document.title='You Click' + count + 'times';
    },[count])

    return(
        <>
          <h2>Title Changer</h2>
          <button onClick={()=>setCount(count+1)}>Change</button>
        </>
    
)
}
 export default TitleChanger;