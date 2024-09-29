import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryMenu, subscriptionMenu, watchLetterMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';
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
    
    <div className="p-5 shadow-xl w-72 bg-gray-50 rounded-lg">
      <ul className="space-y-4">
        <li className="text-xl font-medium hover:text-blue-600 transition-colors cursor-pointer">
          <Link to="/">🏠 Home</Link>
        </li>
        <li className="text-xl font-medium hover:text-blue-600 transition-colors cursor-pointer">📺 Shorts</li>
        <li className="text-xl font-medium hover:text-blue-600 transition-colors cursor-pointer">🎥 Videos</li>
        <li className="text-xl font-medium hover:text-blue-600 transition-colors cursor-pointer">🔴 Live</li>
      </ul>
      
      {/* Categories Section */}
      <h1
        onClick={() => dispatch(categoryMenu())}
        className="text-lg font-bold mt-6 mb-3 cursor-pointer hover:text-blue-500 transition-all duration-300"
      >
        Categories
      </h1>
      <ul
        className={`space-y-3 transition-all duration-500 ease-in-out ${
          isCatMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <li className="text-lg hover:text-blue-400 transition-colors cursor-pointer">🎵 Music</li>
        <li className="text-lg hover:text-blue-400 transition-colors cursor-pointer">🏅 Sports</li>
        <li className="text-lg hover:text-blue-400 transition-colors cursor-pointer">🎮 Gaming</li>
        <li className="text-lg hover:text-blue-400 transition-colors cursor-pointer">🎬 Movies</li>
      </ul>

      {/* Subscriptions Section */}
      <h1
        onClick={() => dispatch(subscriptionMenu())}
        className="text-lg font-bold mt-6 mb-3 cursor-pointer hover:text-green-500 transition-all duration-300"
      >
        Subscriptions
      </h1>
      <ul
        className={`space-y-3 transition-all duration-500 ease-in-out  ${
          isSubMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <li className="text-lg hover:text-green-400 transition-colors cursor-pointer">🎵 Music</li>
        <li className="text-lg hover:text-green-400 transition-colors cursor-pointer">🏅 Sports</li>
        <li className="text-lg hover:text-green-400 transition-colors cursor-pointer">🎮 Gaming</li>
        <li className="text-lg hover:text-green-400 transition-colors cursor-pointer">🎬 Movies</li>
      </ul>

      {/* Watch Later Section */}
      <h1
        onClick={() => dispatch(watchLetterMenu())}
        
        className="text-lg font-bold mt-6 mb-3 cursor-pointer hover:text-red-500 transition-all duration-300"
      >
        Watch Later
      </h1>
      <ul
        className={`space-y-3 transition-all duration-500 ease-in-out  ${
          isWatchMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <li className="text-lg hover:text-red-400 transition-colors cursor-pointer">🎵 Music</li>
        <li className="text-lg hover:text-red-400 transition-colors cursor-pointer">🏅 Sports</li>
        <li className="text-lg hover:text-red-400 transition-colors cursor-pointer">🎮 Gaming</li>
        <li className="text-lg hover:text-red-400 transition-colors cursor-pointer">🎬 Movies</li>
      </ul>
    </div>
</>

  )
}

export default Sidebar