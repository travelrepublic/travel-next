import Header from './Header';

const layoutStyle = {
    margin: 20,
}

const Layout = (props) => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
        <style jsx global>{`
            h1 {
                font-style: italic;
            }
            * {
                font-family: Arial;
                box-sizing: border-box;
            }
        `}</style>
    </div>
)

export default Layout