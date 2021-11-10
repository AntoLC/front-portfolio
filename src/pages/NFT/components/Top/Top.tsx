import './Top.scss';

export const Top = () => {
    return (
        <div className={ "Top-" + global.app_config.CSS_ID + " flex justify-between font-sans text-white " }>
            <div className="user-container">
                <span className="form inline-block w-6 h-6 rounded-full align-middle cursor-pointer"/>
                <span className="align-middle ml-2">Ae.</span>
            </div>
            <div className="menu-container">
                <span className="rounded-full py-2 px-6 text-sm align-middle cursor-pointer">Explore</span>
                <span className="rounded-full py-2 px-6 text-sm align-middle cursor-pointer">Blog</span>
                <span className="rounded-full py-2 px-6 text-sm align-middle cursor-pointer">About</span>
                <span className="rounded-full material-icons py-2 px-6 align-middle cursor-pointer">summarize</span>
                <span className="rounded-full material-icons py-2 px-6 align-middle cursor-pointer">&#xe7ff;</span>
            </div>
        </div>
    );
}