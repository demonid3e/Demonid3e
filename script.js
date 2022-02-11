let x = Math.random();

let min = -50;
let max = 50;

function getRandom(min, max) {
  console.log(x);
  return console.log(x * (max - min) + 1 + min);
}

getRandom(-50, 50);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  statePlus = () => {
    console.log("+++");

    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };
  //
  stateMinus = () => {
    console.log("---");
    this.setState((state) => ({ counter: state.counter - 1 }));
  };

  stateReset = () => {
    console.log("reset");
    this.setState((state) => ({ counter: (state.counter = 0) }));
  };

  stateRND = () => {
    console.log("RND");
    let rndCounter = Math.floor(Math.random() * (50 - -50 + 1)) + -50;
    console.log(rndCounter);
    this.setState((state) => ({ counter: (state.counter = rndCounter) }));
  };
  // Используйте только стрелочную форму методов
  // Почему? Подробный ответ будет в следующем уроке

  render() {
    return (
      <div class="app">
        <div class="counter">{this.state.counter}</div>
        <div class="controls">
          <button onClick={this.statePlus}>INC</button>
          <button onClick={this.stateMinus}>DEC</button>
          <button onClick={this.stateRND}>RND</button>
          <button onClick={this.stateReset}>RESET</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App counter={0} />, document.getElementById("app"));

// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов
