import { DefendersType, _defenderAtom, _defenderVisibilityAtom } from "../../../../DefendersModel";
import { Button } from "../../../Button/Button";
import { Stars } from "../../../Stars/Stars";
import "./BlockRecruitment.scss";
import { useRecoilState } from "recoil";

interface BlockRecruitmentProps {
  defender: DefendersType;
}

export const BlockRecruitment = (props: BlockRecruitmentProps) => {
  const { defender } = props;
  const [, setDefenderAtom] = useRecoilState(_defenderAtom);
  const [, setDefenderVisibility] = useRecoilState(_defenderVisibilityAtom);

  return (
    <div
      className={"BlockRecruitment-" + global.app_config.CSS_ID + " rounded-2xl bg-no-repeat bg-cover bg-center mt-5 inline-block"}
      style={{ backgroundImage: `url(${process.env.REACT_APP_SRC + defender.src})` }}
    >
      <div className="container-filter p-2 sm:p-4 flex justify-between flex-col h-full">
        <div>
          <p className="font-sans text-white">{defender.name}</p>
          {<Stars number={defender.star} />}
          <p className="font-sans mt-2 sm:mt-4 text-gray-400 text-sm">Agency</p>
          <div className="">
            <span className="align-middle material-icons text-white">{defender.agency_logo}</span>
            <span className="ml-2 align-middle font-sans text-white">{defender.agency}</span>
          </div>
        </div>
        <Button
          onClick={() => {
            setDefenderAtom(defender);
            setDefenderVisibility(true);
          }}
        >
          Employ
        </Button>
      </div>
    </div>
  );
};
