function Product(){


    let products=[
    {
    pid:1,
    pname:'pen',
    price:30,
    type:'Stationary'
    },

      {
    pid:2,
    pname:'Mobile',
    price:30,
    type:'Electronics'
    },

      {
    pid:3,
    pname:'Notebook',
    price:70,
    type:'Stationary'
    },

      {
    pid:4,
    pname:'Keyboard',
    price:330,
    type:'Electronics'
    },
]


return(
    <>
    <table border={2} cellPadding={12}>
        <thead>
            <tr>
                <th> productID </th>
                   <th> productName </th>
                      <th> price </th>
                         <th> productType </th>
            </tr>
        </thead>
        <tbody>
            {
               products.map((product)=>(
                    <tr>
                        <td>{product.pid}</td>
                         <td>{product.pname}</td>
                          <td>{product.price}</td>
                           <td>{product.type}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    </>
)
}
 export default Product;