import react from "react";
import './Capsule.css';

interface CapsuleProps {
    isLogo?: boolean;
  }

export const Capsule = (props: CapsuleProps) => {
    const { isLogo } = props;

    return (
    <div className={"capsule relative w-52 "+ (isLogo ? "capsule-logo" : "") }>
        <div className="capsule-bg rounded-lg z-0 transform rotate-45 absolute"/>
        <div className="capsule-pills z-10 absolute">
            <div className="capsule-size capsule-top rounded-tl-full rounded-tr-full relative"/>
            <div className="capsule-size capsule-bottom rounded-bl-full rounded-br-full relative"/>
            <div className="capsule-powder absolute -right-6 top-1/3">
                <div className="animate-pulse capsule-powder-1 capsule-powder-bg1 w-2 h-2 rounded-full absolute capsule-powder-1-abs"/>
                <div className="animate-pulse capsule-powder-2 capsule-powder-bg2 w-2 h-2 rounded-full absolute capsule-powder-2-abs"/>
                <div className="capsule-powder-3 capsule-powder-bg2 w-3 h-3 rounded-full absolute capsule-powder-3-abs"/>
                <div className="animate-bounce capsule-powder-4 capsule-powder-bg1 w-4 h-4 rounded-full absolute capsule-powder-4-abs"/>
                <div className="capsule-powder-5 capsule-powder-bg1 w-2 h-2 rounded-full absolute capsule-powder-5-abs"/>
                <div className="animate-bounce capsule-powder-6 capsule-powder-bg2 w-2 h-2 rounded-full absolute capsule-powder-6-abs"/>
            </div>
        </div>
    </div>
    );
}