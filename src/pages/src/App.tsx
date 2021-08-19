import { useState } from "react";
import "../../assets/css/reset.css";
import "../../assets/css/style.css";

type AnalysisRes = {
  message: string;
  Text: string;
  SentimentScore: any;
  SentimentMagnitude: any;
};

export const App = (): JSX.Element => {
  const [inputText, setInputText] = useState<string>("");
  const [analysisRes, setAnalysisRes] = useState<AnalysisRes>();

  const hundleText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const fetchAnalysisApi = async () => {
    console.log("fdas", document.forms[0].text.value);

    // POST request using fetch with async/await
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: document.forms[0].text.value }),
    };

    const response = await fetch(
      "http://localhost:5000/emotion-analysis-72132/asia-northeast1/api/analysis",
      { ...requestOptions, mode: "cors" }
    );

    const data = await response.json();
    console.log(data);

    // setAnalysisRes({
    //   message: `POST method`,
    //   Text: data.Text,
    //   SentimentScore: data.SentimentScore,
    //   SentimentMagnitude: data.SentimentMagnitude,
    // });
  };

  const validationForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = inputText.replace(/\r?\n/g, "");

    if (text === "") {
      alert("文章を入力していください。");
      return;
    }

    setInputText(text);

    fetchAnalysisApi();
  };

  return (
    <>
      <div className="title">今日のあなたの気分は？</div>
      <form onSubmit={validationForm} name="myform">
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
      <div className="result">結果：{analysisRes}</div>
    </>
  );
};
