function Header (props) {
    return (
        <h3 style={props.style}>
            {props.whichHeader}
        </h3>
    )
}

export default Header;