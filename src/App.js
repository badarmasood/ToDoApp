import react from "react";
import reactDom from "react-dom";
import "./index.css";

function App() {
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> TO Do List</h1>
          <br />
          <input type="text" placeholder="add a Items" />
          <button> + </button>

          <ol>
            <li>Buy mango</li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
