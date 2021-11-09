import './Top.scss';

export const Top = () => {
    return (
        <div className={ "Top-" + global.app_config.CSS_ID + " flex justify-between" }>
            <div className="user-container">
                <span className="form inline-block w-6 h-6 rounded-full align-middle cursor-pointer"/>
                <span className="font-sans text-white align-middle ml-2">Ae.</span>
            </div>
            <div className="menu-container">
                <span className="font-sans text-white px-6 text-sm align-middle cursor-pointer">Explore</span>
                <span className="font-sans text-white px-6 text-sm align-middle cursor-pointer">Blog</span>
                <span className="font-sans text-white px-6 text-sm align-middle cursor-pointer">About</span>
                <span className="material-icons text-white px-6 align-middle cursor-pointer">summarize</span>
                <span className="material-icons text-white px-6 align-middle cursor-pointer">&#xe7ff;</span>
            </div>
        </div>
    );
}