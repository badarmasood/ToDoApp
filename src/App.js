import react, { useState } from "react";
import reactDom from "react-dom";
import "./index.css";

import Button from "@mui/material/Button";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import DeleteIcon from "@mui/icons-material/Delete";

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
          <Button className="newbtn" onClick={Additem}>
            <AddCircleRoundedIcon fontSize="large" />
          </Button>

          {/* <button onClick={Additem}>+</button> */}

          {/* <ol>
            <li>My items</li>
          </ol> */}

          <ol>
            {list.map((items, index) => {
              return (
                <div className="todo_style">
                  <span>
                    <DeleteIcon className="listIcon" fontSize="small" />
                  </span>
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
