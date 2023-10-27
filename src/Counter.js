import { useState,useEffect } from "react";

function App(props) {
  const [count,setCount] = useState(props.count);
  const [text,setText] = useState(props.text);

  useEffect(() => {
    console.log("Component Did Mount");
  },[])
  useEffect(() => {
    console.log("Component Did Mount");
  },)

  return (
  <div className="App">
      <>
        <p>Butona {count} kez tıkladınız.</p>
        <p>Girilen Text:{text}</p>
        <button onClick={() => setCount(count+1)}>+1</button>
        <button onClick={() => setCount(count-1)}>-1</button>
        <button onClick={() => setCount(props.count)}>reset</button>
        <input type="text" onChange={(e) => setText(e.target.value)}/>
      </>
  </div>   
  );
}

App.defaultProps = {
  count:5,
  text:''
}

export default App;


