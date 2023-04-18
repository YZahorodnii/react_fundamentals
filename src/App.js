// import Posts from "./Components/Posts/Posts";
import {useState} from "react";
// import FullPost from "./Components/fullPost/FullPost";
// import Launches from "./Components/Launches/Launches";
import "./App.css"
import Users from "./Components/Users/Users";
// import UserPosts from "./Components/UserPosts/UserPosts";
import UsersPosts from "./Components/UsersPost/UsersPosts";


function App() {
    let [userId,setUserId] = useState(null)
//     let [chosenPost, setChosenPost] = useState(null);
// const lift = (obj) => {
//     setChosenPost(obj)
// };
  return (
      <div>
        <Users setUserId={setUserId}/>

          {
              userId &&
              <UsersPosts userId={userId}/>
          }
      </div>

    //{<div>
    // {    <Launches/>}
    // {</div>}

    // <div className="container">
    //   <div className="leftSide">
    // <Posts/>
    //   </div>
    //     {
    //     chosenPost &&
    //         (
    //     <div className="rightSide">
    //     <FullPost value={chosenPost}/>
    //     </div>
    //         )
    //     }

  );
}

export default App;




