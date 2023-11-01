import SocialMediaIcon from "../SocialMediaIcon/SocialMediaIcon";

function SocialMediaContainer(props) {
const {
    items,
    style,
    iconStyle
      } = props;

    return (
        <div className={style}>
            {
                items.map((item,i) => <SocialMediaIcon key={i} Icon={item.Icon} path={item?.path} iconStyle={iconStyle}/>)
            }
        </div>
    );
}

export default SocialMediaContainer;