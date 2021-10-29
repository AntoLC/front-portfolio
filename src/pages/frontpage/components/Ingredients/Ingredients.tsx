import './Ingredients.scss';

interface IngredientsProps {
    css?: string;
}

export const Ingredients = (props:IngredientsProps) => {
    return (
        <div className={"Ingredients-" + global.app_config.CSS_ID + " absolute " + ((props.css) ? props.css : "")}>
            <div className="capsule-powder animate-pulse capsule-powder-1 capsule-powder-bg1 w-2 h-2 rounded-full absolute capsule-powder-1-abs"/>
            <div className="capsule-powder animate-pulse capsule-powder-2 capsule-powder-bg2 w-2 h-2 rounded-full absolute capsule-powder-2-abs"/>
            <div className="capsule-powder capsule-powder-3 capsule-powder-bg2 w-3 h-3 rounded-full absolute capsule-powder-3-abs"/>
            <div className="capsule-powder animate-bounce capsule-powder-4 capsule-powder-bg1 w-4 h-4 rounded-full absolute capsule-powder-4-abs"/>
            <div className="capsule-powder capsule-powder-5 capsule-powder-bg1 w-2 h-2 rounded-full absolute capsule-powder-5-abs"/>
            <div className="capsule-powder animate-bounce capsule-powder-6 capsule-powder-bg2 w-2 h-2 rounded-full absolute capsule-powder-6-abs"/>
        </div>
    );
}