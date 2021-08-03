import { useState } from "react";
import "../../assets/css/reset.css";
import "../../assets/css/style.css";
import { Textarea, Flex, Input, Text } from "@chakra-ui/react";

export const App = (): JSX.Element => {
  const [inputText, setInputText] = useState<string>("");

  const hundleText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const fetchAnalysisResult = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = inputText.trim();

    if (text === "") {
      alert("文章を入力していください。");
      return;
    }
  };

  return (
    <>
      <Text size="3xl" textAlign="center" marginTop="100px">
        今日のあなたの気分は？
      </Text>
      <form onSubmit={fetchAnalysisResult}>
        <Flex flexDirection="column" alignItems="center">
          <Textarea
            placeholder="ここに文章を入力して下さい"
            value={inputText}
            onChange={hundleText}
            marginTop="30px"
            rows={15}
            name="text"
          />
          <Input type="submit" value="分析する" marginTop="20px"></Input>
        </Flex>
      </form>
    </>
  );
};
