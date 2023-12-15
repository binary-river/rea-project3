import "./Header.css";

const Header = ({title, leftChild, rightChild}) =>{

    return (
        <div className="Header">
            <div className="header_left">{leftChild}</div>
            <div className="header_title">{title}</div>
            <div className="header_right">{rightChild}</div>
        </div>
    );
}

Header.defaultProps = {
    title: "test_title",
    leftChild: "left_child",
    rightChild: "right_child",
}

export default Header;