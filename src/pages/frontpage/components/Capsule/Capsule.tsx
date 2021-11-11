import "./Capsule.scss";

interface CapsuleProps {
  css?: string;
}

export const Capsule = (props: CapsuleProps) => {
  return (
    <div className={"Capsule-" + global.app_config.CSS_ID + " z-10 absolute " + (props.css ? props.css : "")}>
      <div className="capsule-size capsule-top rounded-tl-full rounded-tr-full relative" />
      <div className="capsule-size capsule-bottom rounded-bl-full rounded-br-full relative" />
    </div>
  );
};
