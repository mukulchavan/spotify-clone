import './App.css';
import Login from './Components/Login/Login'
import React , { useEffect ,useState} from 'react'; 
import { getTokenFromUrl } from './spotify';
function App() {

  const [token , setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ''

    const _token = hash.access_token;
    if(_token){
      setToken(_token)
    }
    console.log("Token ", token)
  },[])

  return (
    <div className="app">

      { token ?
      (
      <h1> Logged In </h1> 
      ) :  
     (
     <Login/>
     )
    }
    </div>
  );
}

export default App;
