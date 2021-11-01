import { DefendersType } from '../../../../Defenders';
import { Button } from '../../../Button/Button';
import { Stars } from '../../../Stars/Stars';
import './BlockRecruitment.scss';


interface BlockRecruitmentProps {
    defender: DefendersType
}

export const BlockRecruitment = (props:BlockRecruitmentProps) => {
    const {defender} = props;

    return (
        <div className={"BlockRecruitment-" + global.app_config.CSS_ID + " rounded-2xl bg-no-repeat bg-cover bg-center mt-5 inline-block"} style={{ backgroundImage: `url(${process.env.REACT_APP_SRC + defender.src })` }}>
            <div className="container-filter p-4 flex justify-between flex-col">
                <div>
                    <p className="font-sans text-white">{defender.name}</p>
                        {<Stars number={defender.star}/>}
                    <p className="font-sans mt-4 text-gray-400 text-sm">Agency</p>
                    <div className="mb-11">
                        <span className="align-middle material-icons text-white">{defender.agency_logo}</span>
                        <span className="ml-2 align-middle font-sans text-white">{defender.agency}</span>
                    </div>
                </div>
                <Button>Employ</Button>
            </div>
        </div>
    );
}