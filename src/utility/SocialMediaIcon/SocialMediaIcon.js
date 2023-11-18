import Link from "next/link";

function SocialMediaIcon(props) {
const {
    Icon,
    path,
    iconStyle,
} = props;

    return (
        <Link href={path} className={iconStyle}>
              <Icon/>
        </Link>
    );
}

export default SocialMediaIcon;