import Link from "next/link";

function HeaderNavItem({ title }) {
    return (
        <Link href={`/${title}`}>{title}</Link>
    );
}

export default HeaderNavItem;