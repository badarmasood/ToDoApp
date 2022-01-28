import react, { useState } from "react";
import reactDom from "react-dom";
import "./index.css";

import Button from "@mui/material/Button";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";

function App() {
  //const [list, setlist] = useState(["banana", "mango", "apple"]);

  const [list, setlist] = useState([]);

  const [item, setitem] = useState("");

  const [line, setline] = useState(false);

  const Additem = () => {
    setlist((olditems) => {
      return [...olditems, item];
    });
    setitem("");
  };
  const itemEvent = (e) => {
    setitem(e.target.value);
  };
  const cutit = () => {
    setline(true);
    setTimeout(() => {
      setlist([]);
    }, 2000);
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
                  <span style={{ marginRight: 10 }}>
                    <LabelImportantIcon fontSize="small" />
                  </span>
                  <li
                    style={{ textDecoration: line ? "line-through" : "none" }}
                  >
                    {items}
                  </li>
                </div>
              );
            })}
          </ol>
        </div>
        <div className="dltall">
          <Button>
            <span onClick={cutit}>
              <DeleteIcon className="listIcon" fontSize="small" />
            </span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
