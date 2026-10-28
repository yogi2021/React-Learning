
function Student2(){
    return(
        <>
           <style>
            {
               `
               .div-card{
                    background-color:lightblue;
                    padding:18px;
                    width:220px;
                    border:2px solid navy;
                 }

                .btn{
                   background-color:navy;
                   color:white;
                   padding: 10px 12px;
                   border-radius: 16px;
                   border:none;
                }
                
                `}
           </style>

           <div className="div-card">
            <h2 className="name">Name: Yogesh Pawar</h2>
            <p>Course: Java Fullstack Developer</p>
            <p>Duration: 6 months</p>
            <button className="btn">Check-It</button>

           </div>
        </>
    )
}
 export default Student2