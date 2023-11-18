import SocialMediaIcon from "../SocialMediaIcon/SocialMediaIcon";

function SocialMediaContainer(props) {
const {
    items,
    style,
      } = props;

    return (
        <div className={style}>
            {
                items.map((item,i) => <SocialMediaIcon key={i} Icon={item.Icon} path={item?.path} iconStyle={item?.style}/>)
            }
        </div>
    );
}

export default SocialMediaContainer;