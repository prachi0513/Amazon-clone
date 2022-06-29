import '../styles/subheader.css'
import GraphicCard from './SubHeaderOpt/GraphicCard'
import Phones from './SubHeaderOpt/Phones'
import { Link } from 'react-router-dom'
export default function SubHeader() {
   return (
      <div className="SubHeader">
         <div >
            <Link to='/'>
            <button className='sub-btn'>All </button>
            </Link>
          
         </div>

         <div>
            <Link to="/phones">
               <button className='sub-btn'>Phones</button>
            </Link>
         </div>

         <div>
            <Link to="/graphics">
               <button className='sub-btn'>Graphic Cards</button>
            </Link>

         </div>
         <div>
            <Link to="/giftideas"> 
                <button className='sub-btn'>Gifty ideas</button>
            </Link>

         </div>

         <p id="add">Try Prime , Free for 30 Day  | amazon Prime</p>
      </div>
   )
}