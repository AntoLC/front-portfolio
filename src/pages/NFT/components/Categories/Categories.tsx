import { useRef, useState } from 'react';
import { Card } from './Card/Card';
import './Categories.scss';
import { _Categories } from './CategoriesModel';

export const Categories = () => {
    const slideValue = 440;
    const [slideL, setSlideL] = useState(false);
    const [slideR, setSlideR] = useState(true);
    const scrollCategory = useRef<null | HTMLDivElement>(null);
    const [leftCSS, setLeftCSS] = useState(0);

    const slideLeft = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if(leftCSS < 0){
            if(leftCSS + slideValue >= 0){
                setLeftCSS(0);
                setSlideL(false);
            }
            else{
                setLeftCSS(leftCSS + slideValue);
            }

            setSlideR(true);
        }
        else{
            setSlideL(false);
        }
    }

    const slideRight = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if(!scrollCategory || !scrollCategory.current ) return;
        
        const containerSize = scrollCategory.current?.clientWidth;

        if(leftCSS > -(containerSize - slideValue)){
            if(leftCSS - slideValue < -(containerSize - slideValue)){
                setSlideR(false);
                setLeftCSS(-containerSize + slideValue);
            }
            else{
                setLeftCSS(leftCSS - slideValue);
            }

            setSlideL(true);
        }
        else{
            setSlideR(false);
        }    
    }

    return (
        <div className={ "Categories-" + global.app_config.CSS_ID + " mt-24 text-white" }>
            <div className="font-medium text-4xl text-center mb-12">Category</div>
            <div className="flex justify-around items-center">
                <button onClick={slideLeft} className={ ((slideL) ? "border-white " : "border-gray-600 ") + " arrow inline-block transform rotate-180 cursor-pointer border-2 rounded-full border-opacity-100 px-2 py-2 leading-4 "} >➜</button>
                <div ref={scrollCategory} className="container-scroll relative overflow-hidden">
                    <div className={" absolute pt-6 pl-3 "} style={{ transform: `translateX(${leftCSS}px)`}} >
                        {
                            _Categories.map(function (item, index) {
                                return <Card key={"Category-"+index} category={item}/>;
                            })
                        }
                    </div>
                </div>
                <button className={((slideR) ? "border-white " : "border-gray-600 ") + " arrow inline-block cursor-pointer border-2 rounded-full border-opacity-100 px-2 py-2 leading-4"} onClick={slideRight}>➜</button>
            </div>
        </div>
    );
}