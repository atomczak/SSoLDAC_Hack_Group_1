import { dbController } from "../../services/dependency_injection";
import styled from "@emotion/styled";
import { Box } from "@mui/material";


const AppBox = styled(Box)`,
    display: flex;
    margin: 0
    width: 100vw;
    height: 100vh;
`

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
    <AppBox>
      <h1>App</h1>
      <button onClick={backgroundClick} id="backgroundToggle">Change background</button>
    </AppBox>
  );
};

export { App };
