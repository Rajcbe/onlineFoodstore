import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Components/Header';
import MenuContainer from './Components/MenuContainer';
import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';


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
 },[])

  return (
    <>
      <div>
        <Header/>
        <main>
          <div className='mainContainer'>
            <div className='rightMenu'>

            </div>
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
