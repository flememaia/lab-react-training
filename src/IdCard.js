
function IdCard(props){
    return(
        <div>
            <img src={props.pic} alt="id pic"/>
            <h1>IdCard</h1>
            <p>´First name: {props.firstName}`</p>
            <p>´Last name: {props.lastName}`</p>
            <p>´Gender: {props.gender}`</p>
            <p>´Height: {props.height}`</p>
            <p>´Birth: {props.birth}`</p>
        </div>
    )
}

export default IdCard