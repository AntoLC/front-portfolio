import './Defenders.scss';

export const Defenders = () => {
    return (
    <div className={ "Defenders-" + global.app_config.CSS_ID + " h-screen bg-gray-600 flex flex-wrap content-center justify-center"}>
        <div className="container-main bg-gray-900 w-4/5 h-4/5 rounded-3xl relative">
            <div className="container-shadow-1 absolute bg-gray-900 w-full h-full rounded-3xl"></div>
            <div className="container-shadow-2 absolute bg-gray-900 w-full h-full rounded-3xl"></div>
            
        </div>
    </div>
    );
}