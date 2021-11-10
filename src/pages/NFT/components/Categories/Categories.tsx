import { useState } from 'react';
import { Card } from './Card/Card';
import './Categories.scss';
import { _Categories } from './CategoriesModel';

export const Categories = () => {
    const slideNone = "";
    const slideLeft = "slide-left";
    const [slide, setSlide] = useState(slideNone);

    return (
        <div className={ "Categories-" + global.app_config.CSS_ID + " mt-24 text-white" }>
            <div className="font-medium text-4xl text-center mb-12">Category</div>
            <div className="flex justify-around items-center">
                <button className={ ((slide) ? "border-white " : "border-gray-600 ") + " arrow inline-block transform rotate-180 cursor-pointer border-2 rounded-full border-opacity-100 px-2 py-2 leading-4 "} onClick={()=> setSlide(slideNone)}>➜</button>
                <div className="container-scroll relative overflow-hidden">
                    <div className={slide + " absolute pt-6 pl-3"}>
                        {
                            _Categories.map(function (item, index) {
                                return <Card key={"Category-"+index} category={item}/>;
                            })
                        }
                    </div>
                </div>
                <button className={((!slide) ? "border-white " : "border-gray-600 ") + " arrow inline-block cursor-pointer border-2 rounded-full border-opacity-100 px-2 py-2 leading-4"} onClick={()=> setSlide(slideLeft)}>➜</button>
            </div>
        </div>
    );
}