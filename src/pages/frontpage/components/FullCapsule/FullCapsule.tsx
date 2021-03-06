import { Capsule } from "../Capsule/Capsule";
import { Ingredients } from "../Ingredients/Ingredients";
import { LetterC } from "../LetterC/LetterC";
import "./FullCapsule.scss";

interface FullCapsuleProps {
  isLogo?: boolean;
  withIngredients?: boolean;
}

export const FullCapsule = (props: FullCapsuleProps) => {
  const class_adapt = props.isLogo ? " capsule-logo w-32 h-28 m-auto " : "transform scale-50 w-28 md:scale-75 md:w-40 xl:scale-100 xl:w-52 ";

  return (
    <div className={"FullCapsule-" + global.app_config.CSS_ID + " relative " + class_adapt}>
      <LetterC />
      <Capsule />
      {typeof props.withIngredients === "undefined" || props.withIngredients ? <Ingredients css=" left-32 top-3 " /> : ""}
    </div>
  );
};
