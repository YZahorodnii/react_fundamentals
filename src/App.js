// отримати пости та вивести їх використовуючи класові копмоненти
// отримати коментарі та вивести їх використовуючи класові копмоненти
//
// Використовуючи хук useReducer в якому початковый стейт буде {cats: [], dogs:[]}
// Реалізвути збереження окремо нового кота, та окремо собаку (приклад на зображенні)
//
// Advance
// реалізувати видалення для кожного при натисканні на кнопку delete

import {Posts} from "./components/Posts/Posts";
import {Comments} from "./components/Comments/Comments";

function App() {
  return (
    <div>
      <Posts/>
        {/*<Comments/>*/}
    </div>
  );
}

export default App;
