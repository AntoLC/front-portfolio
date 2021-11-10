import './Top.scss';

export const Top = () => {
    return (
        <div className={ "Top-" + global.app_config.CSS_ID + " sm:flex sm:justify-between font-sans text-white " }>
            <div className="user-container rounded-3xl border border-light-blue-500 border-opacity-50 p-4 inline sm:p-2 sm:rounded-none sm:border-none">
                <span className="form inline-block w-6 h-6 rounded-full align-middle cursor-pointer"/>
                <span className="align-middle ml-2">Ae.</span>
            </div>
            <div className="menu-container menu-open absolute sm:relative pt-20 sm:pt-0 inset-0 sm:block">
                <span className="block sm:inline rounded-full py-2 px-6 text-sm align-middle cursor-pointer">Explore</span>
                <span className="block sm:inline rounded-full py-2 px-6 text-sm align-middle cursor-pointer">Blog</span>
                <span className="block sm:inline rounded-full py-2 px-6 text-sm align-middle cursor-pointer">About</span>
                <span className="block sm:inline rounded-full material-icons py-2 px-6 align-middle cursor-pointer">summarize</span>
                <span className="block sm:inline rounded-full material-icons py-2 px-6 align-middle cursor-pointer">&#xe7ff;</span>
            </div>
        </div>
    );
}