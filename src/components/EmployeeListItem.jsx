function EmployeeListItem (props) {
    return (
        <>
        <div style={props.style}>
        <div className='empListItem'>
        <img src={props.img} />
        <div className='block'>
        <h5>{props.name}</h5>
        <h6>{props.title}</h6>
        </div>
        </div>

        </div>
        </>
    )
}

export default EmployeeListItem;