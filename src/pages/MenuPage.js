import React from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from '../components/Shimmer';
import { CDN_URL } from '../utils/constant';
import useRestMenu from '../utils/useRestMenu';

function MenuPage() {
  const {id}=useParams();
  const menu=useRestMenu(id);
  if (!menu) return <Shimmer/>;

  console.log(menu)
  return (
    <div className='flex'>
      <div className='m-5 p-5 '>
      <h1 className='text-2xl'>Rest Id: {menu?.cards[0]?.card?.card?.info?.id} </h1>
      <img src={CDN_URL+menu?.cards[0]?.card?.card?.info?.cloudinaryImageId}/>
      <h2>Rest Name: {menu?.cards[0]?.card?.card?.info?.name}</h2>
      <h3>Area: {menu?.cards[0]?.card?.card?.info?.areaName} </h3>
      <h3>City: {menu?.cards[0]?.card?.card?.info?.city}</h3>
      <h3>AvgRating: {menu?.cards[0]?.card?.card?.info?.name}</h3>
      <h3>Cost: {menu?.cards[0]?.card?.card?.info?.costForTwo}</h3> 
      </div>
      <div className='m-5 h-50 w-40'>
        <h1 className='text-xl text-right'>Menu</h1>
        <ul className='menu-items'>
          {(menu?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards).map((me)=>(<li key={me?.card?.info?.id}>{me?.card?.info?.name}</li>))}
        </ul>
      </div>
       
    </div>
  )
}

export default MenuPage
