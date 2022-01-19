import "./Button.scss";

interface ButtonProps {
  children?: string;
  css?: string;
  testid?: string;
  onClick: any;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      data-testid={props.testid}
      onClick={props.onClick}
      className={`Button-${global.app_config.CSS_ID} ${props.css ?? ""} w-28 sm:w-28 text-sm font-medium font-sans py-1 sm:py-2 px-4 sm:px-7 rounded-3xl`}
    >
      {props.children}
    </button>
  );
};
