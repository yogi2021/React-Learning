const { useEffect, useState } = require("react");

function Counter(){
    let [count, setCount] = useState(0);

    return(
        <>
         <h2>Counter : {count}</h2>
         <button onClick={setCount}> Click Me</button>
        </>
    )
}

   export default Counter; 