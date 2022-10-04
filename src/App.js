import classes from "./App.module.css";
import Card from "./component/Card";
import svg4 from "./assets/refresh.svg";
function App() {
  return (
    <div className={classes.container}>
      <div>
        <h1>Пример блока новостей</h1>
        <Card />
      </div>
      <div className={classes.refresh}>
        <button>
          <img src={svg4} />
          Загрузить еще
        </button>
      </div>
    </div>
  );
}

export default App;
