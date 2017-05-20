import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div>
        <Link prefetch href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link prefetch href="/about">
            <a style={linkStyle}>About</a>
        </Link>
        <Link prefetch href="/destination">
            <a style={linkStyle}>Destination</a>
        </Link>
    </div>
)

export default Header;