
// Inline css in react js

function Student1(){
  return(
    <>
      <div style={{
        backgroundColor:'pink',
        padding:'20px',
        width:'220px',
        border:'2px solid orange',
      }}>
        <h2 style={{
            color:'orange',
        }}> Name: Yogesh Pawar</h2>
        <p>Course: Java Development</p>
        <p>Duration: 6 months</p>
        <button style={{
            backgroundColor:'lightred',
            padding:'10px 12px',
            borderRadius:'12px',
            border:'none',
            color:'lightgreen'
        }}>View Profile</button>
      </div>
    </>
  )
}
export default Student1;