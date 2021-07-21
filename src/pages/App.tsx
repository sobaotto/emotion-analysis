import "src/assets/css/reset.css";
import "src/assets/css/style.css";
import Img from "src/assets/img/a.png";

export const App = (): JSX.Element => {
  return (
    <div>
      hello！！！！ <img src={Img}></img>
    </div>
  );
};
