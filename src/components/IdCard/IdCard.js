import './IdCard.css'
function IdCard(props) {
    return (
        <section className="card">
            <div className="img"><img src={ props.img } alt="" /></div>
            <p><strong>First name: </strong> { props.lastName }</p>
            <p><strong>Last name: </strong>{ props.firstName }</p>
            <p><strong>Gender name: </strong>{ props.gender }</p>
            <p><strong>Height name: </strong>{ props.height }</p>
            <p><strong>Birth name: </strong>{ props.birth.toDateString() }</p>            
        </section>
    )
}

export default IdCard