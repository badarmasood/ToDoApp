import react, { useState } from "react";
import reactDom from "react-dom";
import "./index.css";

function App() {
  //const [list, setlist] = useState(["banana", "mango", "apple"]);

  const [list, setlist] = useState([]);

  const [item, setitem] = useState("");

  const Additem = () => {
    setlist((olditems) => {
      return [...olditems, item];
    });
    setitem("");
  };
  const itemEvent = (e) => {
    setitem(e.target.value);
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> To Do List</h1>
          <br />
          <input
            type="text"
            placeholder="add an Item"
            value={item}
            onChange={itemEvent}
          />
          <button onClick={Additem}>+</button>

          <ol>
            {list.map((items) => {
              return (
                <div className="todo_style">
                  <span className="fa-times"> X </span>
                  <li>{items}</li>
                </div>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
