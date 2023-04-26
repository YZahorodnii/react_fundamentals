// отримати пости та вивести їх використовуючи класові копмоненти
// отримати коментарі та вивести їх використовуючи класові копмоненти

import {Posts} from "./components/Posts/Posts";
import {Comments} from "./components/Comments/Comments";

function App() {
  return (
    <div>
      {/*<Posts/>*/}
        <Comments/>
    </div>
  );
}

export default App;
