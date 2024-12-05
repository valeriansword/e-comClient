import React from 'react';
import { Link } from 'react-router-dom';

function Item(props) {
  return (
   <Link to={`/product/${props.id}`}> <div onClick={window.scrollTo({top:0,behavior:"smooth"})}className='md:w-[250px]  transition ease-in-out duration-500 transform md:hover:scale-110'>
      {/* Image with max width and height control */}
      <img 
        src={props.image} 
        alt={props.name} 
        className="w-full h-[200px] max-md:w-[150px] max-md:h-[150px] max-md:shadow-md object-cover rounded-lg" 
      />
      
      <p className='my-[6px] text-center  max-md:w-[150px] '>{props.name}</p>
      
      <div className='flex justify-center gap-2 max-md:w-[150px]'>
        {/* Displaying price */}
        <p className='text-lg font-bold text-[#374151]'>${props.newPrice}</p>
        <p className='text-lg font-bold text-[#8c8c8c] line-through'>${props.oldPrice}</p>
      </div>
    </div></Link>
  );
}

export default Item;
