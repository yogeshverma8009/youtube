import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryMenu, subscriptionMenu, watchLetterMenu } from '../utils/appSlice';
// import store from '../utils/store';



const Sidebar = () => {
  const dispatch = useDispatch();
  // const CateMenuHandler = () =>{
  //   dispatch((categoryMenu()));
  // };

  // const SubscriptionMenuHandler = () =>{
  //   dispatch((subscriptionMenu()));
  // };

  // const WatchLetterMenuHandler = () => {
  //   dispatch ((watchLetterMenu ()));
  // }
  
  const  isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isCatMenuOpen = useSelector((store) => store.app.isCatMenuOpen);
  const isSubMenuOpen = useSelector((store) => store.app.isSubMenuOpen);
  const isWatchMenuOpen = useSelector((store)=> store.app.isWatchMenuOpen);
  //early return
  if(!isMenuOpen) return null;
  

  return (
    <>
    
    <div className="p-5 shadow-lg w-64 bg-white rounded-lg">
      {/* Categories Section */}
      <h1 onClick={() => dispatch(categoryMenu())} className="text-lg font-semibold mb-4 cursor-pointer">
        Categories
      </h1>
      <ul
        className={`space-y-2 transition-all duration-500 overflow-hidden ${
          isCatMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <li className="hover:text-blue-500 transition-colors cursor-pointer">🎵 Music</li>
        <li className="hover:text-blue-500 transition-colors cursor-pointer">🏅 Sports</li>
        <li className="hover:text-blue-500 transition-colors cursor-pointer">🎮 Gaming</li>
        <li className="hover:text-blue-500 transition-colors cursor-pointer">🎬 Movies</li>
      </ul>

      {/* Subscriptions Section */}
      <h1 onClick={() => dispatch(subscriptionMenu())} className="text-lg font-semibold pt-5 mb-4 cursor-pointer">
        Subscriptions
      </h1>
      <ul
        className={`space-y-2 transition-all duration-500 overflow-hidden ${
          isSubMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <li className="hover:text-green-500 transition-colors cursor-pointer">🎵 Music</li>
        <li className="hover:text-green-500 transition-colors cursor-pointer">🏅 Sports</li>
        <li className="hover:text-green-500 transition-colors cursor-pointer">🎮 Gaming</li>
        <li className="hover:text-green-500 transition-colors cursor-pointer">🎬 Movies</li>
      </ul>

      {/* Watch Later Section */}
      <h1 onClick={() => dispatch(watchLetterMenu())} className="text-lg font-semibold pt-5 mb-4 cursor-pointer">
        Watch Later
      </h1>
      <ul
        className={`space-y-2 transition-all duration-500 overflow-hidden ${
          isWatchMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <li className="hover:text-red-500 transition-colors cursor-pointer">🎵 Music</li>
        <li className="hover:text-red-500 transition-colors cursor-pointer">🏅 Sports</li>
        <li className="hover:text-red-500 transition-colors cursor-pointer">🎮 Gaming</li>
        <li className="hover:text-red-500 transition-colors cursor-pointer">🎬 Movies</li>
      </ul>
    </div>
</>

  )
}

export default Sidebar