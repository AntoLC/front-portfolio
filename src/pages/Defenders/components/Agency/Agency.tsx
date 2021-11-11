import { Stars } from "../Stars/Stars";
import "./Agency.scss";

interface AgencyProps {
  agency: {
    star: number;
    agency: string;
    agency_logo: string;
  };
  css?: string;
}

export const Agency = (props: AgencyProps) => {
  const { agency } = props;

  return (
    <div className={"Agency-" + global.app_config.CSS_ID + " mt-3 px-6 py-2 rounded-2xl flex justify-between " + (props.css ? props.css : "")}>
      <div className="">
        <span className="align-middle material-icons text-white">{agency.agency_logo}</span>
        <span className="ml-5 font-sans text-white text-sm">{agency.agency}</span>
      </div>
      <div className="">{<Stars number={agency.star} />}</div>
    </div>
  );
};
