function Random(props){

    const min = props.min
    const max = props.max;
    const random = Math.floor(Math.random() * (max - min)) + min; // nesse caso, ta incluindo os limites. Sem os limites, vc tira 1 

    return (
        <div>
            <h1>Random</h1>
            <p>`Random value between {min} and {max} => {random}`</p>
        </div>
    )
}

export default Random