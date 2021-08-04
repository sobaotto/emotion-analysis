import { useState } from "react";
import "../../assets/css/reset.css";
import "../../assets/css/style.css";

export const App = (): JSX.Element => {
  const [inputText, setInputText] = useState<string>("");

  const hundleText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const validationForm = (event: React.FormEvent<HTMLFormElement>) => {
    
    // event.preventDefault();
    const text = inputText.replace(/\r?\n/g, "");

    if (text === "") {
      alert("文章を入力していください。");
      return;
    }

    setInputText(text);
  };

  return (
    <>
      <div className="title">今日のあなたの気分は？</div>
      <form
        onSubmit={validationForm}
        action="https://asia-northeast1-emotion-analysis-72132.cloudfunctions.net/api/analysis"
        method="post"
        name="myform"
      >
        <div className="text-form">
          <textarea
            className="input-text"
            placeholder="ここに文章を入力して下さい"
            value={inputText}
            onChange={hundleText}
            rows={15}
            name="text"
          />
          <input type="submit" value="分析する" className="button"></input>
        </div>
      </form>
    </>
  );
};
