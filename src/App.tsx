import "./public/css/reset.css";
import Img from "./public/img/a.png";

export const App = (): JSX.Element => {
  const a = 0;
  return (
    <div>
      hello <img src={Img}></img>
    </div>
  );
};
