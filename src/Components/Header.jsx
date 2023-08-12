
import React from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import { BarChart } from '@mui/icons-material';

function Header() {
  return (
      <div className='header'>
          <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc"
        alt=""
        className="logo"
      />
         <div className='inputBox'>
            <SearchRoundedIcon/>
            <input type="text" placeholder='Search'/>
         </div>
        <div className='shoppingCart'>
                <ShoppingCartRoundedIcon className='cart'/>
                <div className='cart_content'>
                    <p>2</p>
                </div>
        </div>
            <div className='profileContainer'>
                <div className='imgBox'>
                    <img className='profilePic'
                src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=36821495-39b9-4145-bde3-16c47c6ff937"
                alt=""
            />
                </div>
                <h2 className="userName">Pushparaj</h2>
            </div>
            <div className='toggleMenu'>
                    <BarChart className='toggleIcon'/>
            </div>
      </div>
  )
}

export default Header;