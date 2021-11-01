import { DefendersType } from '../../../DefendersModel';
import { Agency } from '../../Agency/Agency';
import { Button } from '../../Button/Button';
import './Defender.scss';

interface DefenderProps {
    defender: DefendersType
}

export const Defender = (prop: DefenderProps) => {
    const defender = prop.defender;

    return (
    <div className={ "Defender-" + global.app_config.CSS_ID + " rounded-r-3xl p-7 pb-0"}>
        <div className="container-point-effect">
            <div className="container-opacity-effect">
                <img className="m-auto" src={process.env.REACT_APP_SRC + defender.src_employ } alt="avenger" />
            </div>
        </div>
        <div className="uppercase font-sans text-white text-3xl text-center -m-4 mb-0">{defender.name}</div>
        <Agency agency={defender}/>
        <div>
            <div className={"skill-container mb-2 px-6 pt-2 pb-1 rounded-2xl flex justify-between"}>
                <span className="font-sans text-sm">Experience in guarding</span>
                <div>
                    <span className="font-sans text-white font-medium">{defender.guarding}</span><span className="font-sans text-sm">/10</span>
                </div>
            </div>
            <div className={"skill-container mb-2 px-6 pt-2 pb-1 rounded-2xl flex justify-between"}>
                <span className="font-sans text-sm">Aggression</span>
                <div>
                    <span className="font-sans text-white font-medium">{defender.aggression}</span><span className="font-sans text-sm">/10</span>
                </div>
            </div>
            <div className={"skill-container mb-2 px-6 pt-2 pb-1 rounded-2xl flex justify-between"}>
                <span className="font-sans text-sm">Courage</span>
                <div>
                    <span className="font-sans text-white font-medium">{defender.courage}</span><span className="font-sans text-sm">/10</span>
                </div>
            </div>
            <div className={"skill-container mb-2 px-6 pt-2 pb-1 rounded-2xl flex justify-between"}>
                <span className="font-sans text-sm">Mind</span>
                <div>
                    <span className="font-sans text-white font-medium">{defender.mind}</span><span className="font-sans text-sm">/10</span>
                </div>
            </div>
        </div>
        <div className="text-center mt-5"><Button onClick={()=>{}} >Employ</Button></div>
    </div>
    );
}