
function Greetings(props) {
    return (
        <section className="hello">
            <p>{ props.lang } { props.text }</p>         
                       
        </section>
    )
}

export default Greetings