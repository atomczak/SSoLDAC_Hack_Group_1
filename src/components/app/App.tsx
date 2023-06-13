import { dbController } from "../../services/dependency_injection";
import GraphContainer from "../graph-container/graph-container";
import {Box} from "@mui/material";
import "./App.css"

const App = () => {

  return (
      <Box height={'100vh'} width={'100%'} margin={'0px'} >
        <GraphContainer/>
      {/*<h1>App</h1>*/}
      {/*<button onClick={backgroundClick} id="backgroundToggle">Change background</button>*/}

      </Box>
  );
};

export { App };
