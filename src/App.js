import './App.css';
import Post from './Components/Post/Post';
import {useState, useEffect} from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then(response=>response.json())
      .then(data=>{
        console.log(data);
        setPosts(data);
      })
  }, []);
  
  return (
    <div className="App">
      <Post posts={posts} />
    </div>
  );
}

export default App;