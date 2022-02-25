import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import NavBar from './components/NavBar'
import loader from './load.png'
function App() {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  let detail=null;

  const getUsers = async()=>{
        setLoading(false);
    try {
        detail = await axios.get(`https://reqres.in/api/users?page=${1}`);
        setInfo(detail.data.data);
        setLoading(true);
        console.log("info ",info);
    } catch (error) {
          console.log(error)
    }
  }

  return (
    <div className="App">
      <NavBar getUsers={getUsers}/>
      <div className='cards'>
          {
            loading? info.map(item=>{
              return(
                <div key={item.id}>
                    <Card item={item}/>
                </div>
              )
            }):<img className='loader' src={loader}/>
          }
      </div>
    </div>
  );
}
export default App;
