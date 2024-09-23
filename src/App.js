import './App.css';
import Head from './components/Head';
import Body from './components/Body'
import { Provider } from 'react-redux';
import store from "./utils/store"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Watchpage from './components/Watchpage';

const appRouter = createBrowserRouter([{
  //If my path is slash my bidy will render below head
  path:"/",
  element:<Body/>,
  //this children will go  where were my outlet is and outlet is inside body container
  children : [
    {
      path: "/",
      element:<MainContainer/>,
    },
    {
      path : "watch",
      element: <Watchpage/>,
    },
  ]
}])

function App() {
  return (
    <Provider store ={store}>
    <div>
      <Head/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
