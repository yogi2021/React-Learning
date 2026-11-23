import { useEffect } from "react";

function Child({mycount}){

    useEffect({mycount}){
        useEffect(()=>{
        console.log("Child Component");
            
    },[mycount])
    return(
        <>
        <h2>Child Component</h2>
        </>
    )
}
export default Child;   