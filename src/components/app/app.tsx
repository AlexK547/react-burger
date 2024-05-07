import { useEffect, useState } from "react";
import "./App.css";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
// import { data } from "./utils/data";

const URLAddress = "https://norma.nomoreparties.space/api/ingredients";

function App() {
  const [data, setData] = useState({
    productData: [],
    loading: false,
    hasError: false,
  });

  useEffect(() => {
    const getData = async () => {
      setData({ ...data, loading: true, hasError: false });
      fetch(URLAddress)
        .then((res) => res.json())
        .then((dataList) => {
          setData({
            ...data,
            productData: dataList.data,
            loading: false,
            hasError: false,
          });
        })
        .catch((e) => {
          setData({ ...data, loading: false, hasError: true });
          alert("Error!");
        });
    };

    getData();
  }, []);

  return (
    <div className="app">
      <AppHeader />
      <main className="main">
        {!data.loading && !data.hasError && data.productData.length && (
          <>
            <BurgerIngredients listData={data.productData} />
            <BurgerConstructor listData={data.productData} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
