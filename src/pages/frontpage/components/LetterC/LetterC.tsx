import "./LetterC.scss";

interface LetterCProps {
  css?: string;
}

export const LetterC = (props: LetterCProps) => {
  return <div className={"LetterC-" + global.app_config.CSS_ID + " rounded-lg z-0 transform rotate-45 absolute " + (props.css ? props.css : "")}></div>;
};
