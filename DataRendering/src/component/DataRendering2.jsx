function DataRendering2(){
    let student={
        id:10,
        name:"Yogii",
        rollno:30
    }
      return(
        <>
           <h1>Data Rendering Using </h1>
           <h1>id: {student.id}</h1>
           <h1>name:{student.name}</h1>
           <h1>name:{student.rollno}</h1>
           <hr/>
  
          <table border="1" cellPadding="10">
            <thead>
                <tr>
                    <th>id</th>
                     <th>name</th>
                      <th>rollno</th>
                </tr>
            </thead>
                 
                 <tbody>
                    <tr>
                        <td>{student.id}</td>
                         <td>{student.name}</td>
                          <td>{student.rollno}</td>
                    </tr>
                 </tbody>
          </table>

        </>
      )

}
  export default DataRendering2;