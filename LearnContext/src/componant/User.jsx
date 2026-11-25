const { useContext } = require("react");

function User(){
    let username = useContext(UserContext)
    return(
        <>
        <h2> User componant</h2>
        <h2>Welcome : {username}</h2>
        </>
    )
}
   export default User;