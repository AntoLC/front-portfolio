import { useEffect, useState } from "react";

export enum ECounter {H,M,S}

interface CounterProps {
    type: ECounter,
    typeString: string,
}

const calculIntervalLeft = (type:ECounter, setValue:React.Dispatch<React.SetStateAction<number>>) => {
    const midnight = new Date();
    midnight.setUTCHours(24,0,0,0);
    const now = new Date();
    const seconde = Math.round((+midnight - +now) / 1000);

    //console.debug("seconde:",seconde);
    //console.debug("Minutes:",Math.round(seconde / (60)) % 60 );

    if(type === ECounter.H)
        setValue(Math.round(seconde / (60 * 60)));
    else if(type === ECounter.M)
        setValue(Math.round(seconde / 60) % 60 );
    else if(type === ECounter.S)
        setValue((seconde+30) % 60 ); // Not sure why
}

export const Counter = (props: CounterProps) => {
    const [value, setValue] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            calculIntervalLeft(props.type, setValue);
        }, 1000);

        return () => clearInterval(interval);
    }, [props.type]);

    return (
        <div className={ "Counter-" + global.app_config.CSS_ID + " mx-4 text-center" }>
            <div className="text-4xl">{value}</div><div className="text-xs">{props.typeString}</div>
        </div>
    );
}