import {useState, useEffect} from 'react';
import axios from "axios"
import './App.css';


function App() {
  const [messageList, setMessageList] = useState([]);
  const [buttonCount, setButtonCount] = useState(0);
  const url = 'http://localhost:5050';

  const fetchMessages = async () => {

    const {data} = await axios.get(url + '/messages');
    setMessageList(data.messageList);
  }

  const addMessage = async () => {
    await axios.post(url);

    setButtonCount(prev => prev+1);

  }

  useEffect(() => {
    fetchMessages();
  }, [buttonCount]);

  return (
    <div className="App">
      <h1>Welcome to my react App</h1>

    <ul>
      {
        messageList.map((message) => <li key={message._id}>{message.sentence}</li>)
      }
    </ul>

      <button onClick={addMessage}>Add a message</button>

    </div>
  );
}

export default App;
