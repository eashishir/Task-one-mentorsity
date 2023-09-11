
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

import Registration from './Components/Registration';
import Login from './Components/Login';




function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:   <Registration></Registration>,
    },
    {
      path:'/login',
      element: <Login></Login>
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
     
     
    </div>
  );
}

export default App;
