import './App.css';
import AppHeader from './components/app-header/app-header';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import { data } from "./utils/data";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <main className='main'>
        <BurgerIngredients listData={data}/>
        <BurgerConstructor listData={data}/>
      </main>
    </div>
  );
}

export default App;
