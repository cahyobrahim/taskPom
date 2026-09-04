function ProfileCard(props) {
    return (
        <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
            <p>{props.phone}</p>
        </div>
    );
}

export default ProfileCard;