import { CategoryType } from "../CategoriesModel";
import "./Card.scss";

interface CardProps {
  category: CategoryType;
}

export const Card = (props: CardProps) => {
  const { category } = props;

  return (
    <div className={"Card-" + global.app_config.CSS_ID + " rounded-2xl p-6 font-sans mx-3 w-48 inline-block"}>
      <div className="text-center">
        <img className="image-card rounded-2xl" src={process.env.REACT_APP_SRC + category.src} alt="trending" />
      </div>
      <div className="mt-4 text-white text-center">{category.name}</div>
      <div className="mt-1 text-center">
        <span className="text-white font-medium">{category.nb_asset}</span>
        <span className="text-purple-300 font-light"> Asset</span>
      </div>
      <div className="flex justify-between font-sans mt-5 pt-5 text-white">
        <span className="rounded-xl bg-purple-700 px-4 text-sm leading-6">#{category.position}</span>
        <span className="cursor-pointer border-2 rounded border-white border-opacity-100 px-1 py-0 leading-5">+</span>
      </div>
    </div>
  );
};
