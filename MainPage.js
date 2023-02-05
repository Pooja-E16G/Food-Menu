import React, { useState } from 'react'
import Menu from './Menu'

const MainPage = () => {

    const[item,setItem]= useState(Menu)

    const select =(CatItem)=>{
        const updateItem = Menu.filter((CurElem)=>{
        return CurElem.category===CatItem;
    });
    setItem(updateItem)

    }
  return (
    <>
<div  className='page'>
<div >
        <div className='heading'>
            <h1>
                Welcome to Eatland😋😋
            </h1>
        </div>
    </div>

    <div>
        <div className='menubutton'>
            <button onClick={()=>setItem(Menu)}>All</button>
            <button onClick={()=>select('breakfast')}>Breakfast</button>
            <button onClick={()=>select('lunch')}>Lunch</button>
            <button onClick={()=>select('evening')}>Evening</button>
            <button onClick={()=>select('dinner')}>Dinner</button>

        </div>
    </div>

    {
        item.map((elem)=>{
            const{id, name, image, description, price} = elem;
            return(
                <>
        
        <div className='cards'>
            <div>
                <div className='image'><img src={image} alt={name}/></div>
                
            </div>
            <div>
                <div> <h2>{name}</h2>
                <p>{description}</p></div>
            </div>
            <div>
                <div>
                    <h2>Price: {price}</h2>
                    <a href=' '><button>Orde Now</button></a>
                </div>
                
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

export default MainPage

