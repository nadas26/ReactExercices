import { useState } from "react";
import "./styles.css";

/*const WorkButton = (props) => {
  const { onClick, ...otherProps} = props 
  return (
    <button {...otherProps} onclick={onClick}>
      </button>
  )
}*/
const App = () => {
  //setstate ne changera pas de def de fonction en memoir
  const [state, setState] = useState({
    coins: 0,
    nbSmallRobot: 0,
    nbBigRobot: 0
  });
  const handleClick = () => {
    if (state.nbSmallRobot !== 0 || state.nbBigRobot !== 0) {
      setState({
        ...state,
        coins: state.coins + 2
      });
    } else {
      setState({
        ...state,
        coins: state.coins + 1
      });
    }
  };

  const BuyRobot1 = () => {
    if (state.coins >= 10) {
      setState({
        ...state,
        coins: state.coins - 10,
        nbSmallRobot: state.nbSmallRobot + 1
      });
    }
  };
  const BuyRobot2 = () => {
    if (state.coins >= 20) {
      setState({
        ...state,
        coins: state.coins - 20,
        nbBigRobot: state.nbBigRobot + 1
      });
    }
  };

  return (
    <div>
      <h1>${state.coins}</h1>
      <div>
        <button onClick={handleClick}> Work </button>
      </div>
      <div>
        <button onClick={BuyRobot1}> Buy Small Robot </button>
        <button onClick={BuyRobot2}> Buy Big Robot </button>
      </div>
    </div>
  );
};
export default App;
