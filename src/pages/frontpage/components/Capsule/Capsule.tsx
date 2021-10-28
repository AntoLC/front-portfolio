import react from "react";
import './Capsule.css';

export const Capsule = () => {
    return (
    <div className="capsule relative -left-48">
        <div className="capsule-bg w-24 h-24 rounded-lg z-0 transform rotate-45 absolute"/>
        <div className="capsule-pills z-10 absolute left-16 -top-9">
            <div className="capsule-top w-16 h-20 rounded-tl-full rounded-tr-full relative"/>
            <div className="capsule-bottom w-16 h-20 rounded-bl-full rounded-br-full relative"/>
        </div>
    </div>
    );
}