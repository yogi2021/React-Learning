
function DataRendering(){
    let num1=30;
    let num2= 20;
    let course="React";
    let ispass = true;
    let isloggin = true;
    return(
        <>
           <h1> Data Rendering</h1>
           <h1> my Number: {num1}</h1>
           <h1>Addition: {num1+num2}</h1>
           <h1>Division: {Math.floor(num1/num2)} </h1>
           <h1>mycourse: {course}</h1>
           <h1>mycourse: {course.toLocaleUpperCase()}</h1>
           <h1>mycourse: {course.length}</h1>
           <h1>{ispass?"yes":"no"}</h1>
            <h1>{isloggin && <p>Welcome here !</p>}</h1>
             <h1>{ <p>Welcome here !</p> && isloggin }</h1>
        </>
    )
} 
   export default DataRendering;