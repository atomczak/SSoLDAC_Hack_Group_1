import { dbController } from "../../services/dependency_injection";


const App = () => {

  const backgroundClick = () => {

    let color = "rgb(247, 140, 140)"
    if (document.body.style.backgroundColor !== `${color}`) {
      document.body.style.backgroundColor = `${color}`;
    } else {
      document.body.style.backgroundColor = '#B4E6F4';
    }
  }

  return (
    <div>
      <h1>App</h1>
      <button onClick={backgroundClick} id="backgroundToggle">Change background</button>
    </div>
  );
};

export { App };
