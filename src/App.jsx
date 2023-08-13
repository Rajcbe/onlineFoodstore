import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Components/Header';
import MenuContainer from './Components/MenuContainer';
import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import BannerName from './Components/BannerName';
import SubMenuContainer from './Components/SubMenuContainer';
import MenuCard from './Components/MenuCard';
import { MenuItems,Items } from './Components/Data';

function App() {
 useEffect(()=>{

  const menuLi=document.querySelectorAll('#menu li');
  function setMenuActive(){
    menuLi.forEach((n)=>{
      n.classList.remove('active');
      this.classList.add('active');
    })
  }
  menuLi.forEach((n)=>n.addEventListener('click',setMenuActive));


  const menuCard = document
  .querySelector(".rowContainer")
  .querySelectorAll(".rowMenuCard");

function setMenuCardActive() {
  menuCard.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
}

menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
 },[])

  return (
    <>
      <div>
        <Header/>
        <main>
          <div className='mainContainer'>
               <div className='banner'>
                 <BannerName name={'Raj'} discount={'50%'} link={'#'} />
                 <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
              alt=""
              className="deliveryPic"
            />
               </div>
               <div className="dishContainer">
                <div className="menuCard">
                  <SubMenuContainer />
                </div>
                <div className="rowContainer">
                 {MenuItems && MenuItems.map((data)=>(
                  <div key={data.id}>
                    <MenuCard imgSrc={data.imgSrc} name={data.name} isActive={data.id==1?true:false}/>
                  </div>
                  ))} 
                </div>
            </div>
          </div>
            <div className='rightMenu'>

            </div>
          
        </main>
        <div className='bottomMenu'>
          <ul id="menu">
            {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<HomeRounded />}  isHome/>
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<Chat />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<AccountBalanceWalletRounded />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<Favorite />} />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<SummarizeRounded />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<Settings />}  />
          <div className="indicator"></div>
          </ul>
        </div>
       </div>
    </>
  )
}

export default App;
