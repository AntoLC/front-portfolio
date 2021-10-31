import './Button.scss';

interface ButtonProps {
    children?:string;
    css?:string;
}

export const Button = (props: ButtonProps) => {
    return (
    <button className={ "Button-" + global.app_config.CSS_ID + " text-sm font-sans py-2 px-7 rounded-3xl" + ((props.css) ? props.css : "")}>
        {props.children}
    </button>
    );
}