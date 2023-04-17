import Posts from "./Components/Posts/Posts";
import {useState} from "react";
// import FullPost from "./Components/fullPost/FullPost";
// import Launches from "./Components/Launches/Launches";
import "./App.css"


function App() {
//     let [chosenPost, setChosenPost] = useState(null);
// const lift = (obj) => {
//     setChosenPost(obj)
// };
  return (
      /*<div>
          <Launches/>
      </div>*/

      <div className="container">
        <div className="leftSide">
      <Posts/>
        </div>
        {/*{
        chosenPost &&
            (
        <div className="rightSide">
        <FullPost value={chosenPost}/>
        </div>
            )
        }*/}
    </div>
  );
}

export default App;
