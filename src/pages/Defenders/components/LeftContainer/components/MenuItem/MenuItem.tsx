import './MenuItem.scss';

interface MenuItemProps {
    svg_name: string;
    text: string;
}

export const MenuItem = (props:MenuItemProps) => {
    const menu_container_class = "MenuItem-" + global.app_config.CSS_ID +" transition-colors pt-3 pl-1D4 rounded-l-full cursor-pointer container-menu-item ml-1 h-12";
    const menu_svg_class = "transition-colors align-text-top material-icons text-gray-100";
    const menu_text_class = "transition-colors ml-4 text-gray-100 font-sans text-sm font-normal align-text-top";
    
    return (
        <div className={menu_container_class}><span className={menu_svg_class}>{props.svg_name}</span><span className={menu_text_class}>{props.text}</span></div>
    );
}