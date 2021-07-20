import "./public/css/reset.css";
import "./public/css/style.css";
import Img from "./public/img/a.png";

export const App = (): JSX.Element => {
  return (
    <div>
      hello！！！！ <img src={Img}></img>
    </div>
  );
};
