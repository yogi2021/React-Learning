import { useEffect, useState } from "react";

function FetchApi(){
    let[users, setUsers]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((data)=>{setUsers(data)
    })
},[])

return(
    <>
   <h2>Display Data</h2>
   <table border={1} cellPadding={10}>
    <thead>
        <tr>
            <th> ID</th>
                 <th>Name</th>
                      <th>UserName</th>
                           <th>Email</th>
        </tr>
    </thead>
       
        <tbody>
            {
                users.map((user)=>(
                    <tr>
                        <td>{user.id}</td>
                          <td>{user.name}</td>
                            <td>{user.username}</td>
                              <td>{user.email}</td>
                    </tr>
                ))
            }
        </tbody>
    </table> 
    </>
)
}
export default FetchApi;