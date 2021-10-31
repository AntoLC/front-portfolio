import { Button } from '../../../Button/Button';
import { Stars } from '../Stars/Stars';
import './BlockRecruitment.scss';


interface BlockRecruitmentProps {
    recruitment: {
        name:string;
        star:number;
        agency:string;
        agency_logo:string;
        src:string;
    }
}

export const BlockRecruitment = (props:BlockRecruitmentProps) => {
    const {recruitment} = props;

    return (
        <div className={"BlockRecruitment-" + global.app_config.CSS_ID + " rounded-2xl bg-no-repeat bg-cover bg-center mt-5"} style={{ backgroundImage: `url(${process.env.REACT_APP_SRC + recruitment.src })` }}>
            <div className="container-filter p-4">
                <p className="font-sans text-white">{recruitment.name}</p>
                    {<Stars number={recruitment.star}/>}
                <p className="font-sans mt-4 text-gray-400 text-sm">Agency</p>
                <div className="mb-11">
                    <span className="align-middle material-icons text-white">{recruitment.agency_logo}</span>
                    <span className="ml-2 align-middle font-sans text-white">{recruitment.agency}</span>
                </div>
                <Button>Employ</Button>
            </div>
        </div>
    );
}