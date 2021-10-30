import './BlockRecruitment.scss';


interface BlockRecruitmentProps {
    recruitment: {
        name:string;
        star:number;
        agency:string;
        src:string;
    }
}

export const BlockRecruitment = (props:BlockRecruitmentProps) => {
    const {recruitment} = props;

    return (
        <div className={"BlockRecruitment-" + global.app_config.CSS_ID + " bg-no-repeat bg-contain bg-center"} style={{ backgroundImage: `url(${process.env.REACT_APP_SRC + recruitment.src })` }}>
            <p className="text-white">{recruitment.name}</p>
            {
                Array.apply(0, Array(5)).map(function (x, i) {
                    console.debug(x, i);
                    return <span className={"material-icons " + ((i <= recruitment.star - 1) ? "text-yellow-400" : "text-yellow-800")}>star</span>;
                })
            }
            <p>Agency</p>
            <div><span className="material-icons text-white">star</span><span className="text-white">{recruitment.agency}</span></div>
            <button>Employ</button>
        </div>
    );
}