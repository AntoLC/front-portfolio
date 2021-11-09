import './Top.scss';

export const Top = () => {
    return (
        <div className={ "Top-" + global.app_config.CSS_ID + " flex justify-between" }>
            <div className="user-container">
                <span className="form inline-block w-6 h-6 rounded-full align-middle"/>
                <span className="font-sans text-white align-middle ml-2">Ae.</span>
            </div>
            <div className="menu-container">
                <span className="font-sans text-white px-6 text-sm align-middle">Explore</span>
                <span className="font-sans text-white px-6 text-sm align-middle">Blog</span>
                <span className="font-sans text-white px-6 text-sm align-middle">About</span>
                <span className="material-icons text-white px-6 align-middle">summarize</span>
                <span className="material-icons text-white px-6 align-middle">&#xe7ff;</span>
            </div>
        </div>
    );
}