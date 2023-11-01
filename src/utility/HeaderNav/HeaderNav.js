import HeaderNavItem from "../HeaderNavItem/HeaderNavItem";

function HeaderNav(props) {
const {
    items,
    style,
} = props;

    return (
        <nav className={style}>
            {
                items.map((item,i) => <HeaderNavItem key={i} title={item}/>)
            }
        </nav>
    );
}

export default HeaderNav;