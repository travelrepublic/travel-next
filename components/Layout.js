import Header from './Header';
import Widget from './Widget';

const layoutStyle = {
    margin: 20,
}

const Layout = (props) => (
    <div style={layoutStyle}>
        <Header />
        <Widget />
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