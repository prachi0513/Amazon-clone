import React from 'react'
import {Link} from 'react-router-dom'
import list from '../../object.js'
function GraphicCard({graphic}) {
     
   let graphicFilter = list.filter((ele)=> ele.type === "graphic")
    console.log(graphicFilter);

  return (
    <>
    <div className='cart-box'>

{
  graphicFilter.map((ele) => {
    return (
      <>
        <div className='cart'>
          <p className='cart-name'>{ele.name}</p>
          <img src={`${ele.product}`} className='img' />
          <strong className='cart-price'>{ele.price}</strong>
          <div>
            <button className="add-to-cart" onClick={()=> graphic(ele)} > Add to Cart</button>
          </div>
        </div>

      </>
    )
  })
}

</div>
    </>
  )
}

export default GraphicCard