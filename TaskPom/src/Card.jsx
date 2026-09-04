function Card(props) {
    return(
        <div style={{border: "1px solid #ccc", padding: "16px", margin: "8px"}}>
            {props.children}
        </div>
    )
}

export default Card;