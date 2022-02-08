
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios';
import Details from './Details';


const URL ='https://newsapi.org/v2'
const APIKEY ='e230b3be42f8491da2b36c208e8b7c08'


function App() {
  const [items, setItems]=useState([]);
  const [error, seterror] = useState(null);
  const [isloaded, setisloaded] = useState(false);
  const [selectedItems, setselectedItems] = useState(null);

  useEffect(() => {
    const criteria ='top-headlines?country=us&category=business'
    const addres = URL +"/"+criteria+"&apikey="+APIKEY
    axios.get(addres)
    .then((response)=>{
      //console.log(response.data.articles);
      setItems(response.data.articles)
      setisloaded(true)
    }).catch(error=>{
      alert(error)
    })
    

  }, []);

  function close(){
    setselectedItems(null)
  }
  if(selectedItems!=null){
    return <Details
    title={selectedItems.title}
    image={selectedItems.urlToImage}
    description={selectedItems.description}
    content={selectedItems.content}
    close={close}
    />
  }
  else if(error){
    return<p>{error.message}</p>
  }else if(!isloaded){
    return<p>Loading......</p>
  }else{

  return (
    <div>
      <h2>
        Top headlines
      </h2>
      <div>
      {
        items.map(item=>(
          <div key={item.title} onClick={e=> setselectedItems(item)}>
            <h3>{item.title}</h3>
            <img src={item.urlToImage}/>
            <p>{item.description}</p>
          </div>
        ))
      }
      </div>
    </div>
   )
  }
}

export default App;
