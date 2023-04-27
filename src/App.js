// // Використовуючи хук useReducer в якому початковый стейт буде {cats: [], dogs:[]}
// // Реалізвути збереження окремо нового кота, та окремо собаку (приклад на зображенні)
// //
// // Advance
// // реалізувати видалення для кожного при натисканні на кнопку delete

import Cats from "./components/Cats/Cats";
import './css/App.css'
import Dogs from "./components/Dogs/Dogs";

function App() {
  return (
    <div>
      <Cats/>
    </div>
  );
}

export default App;
