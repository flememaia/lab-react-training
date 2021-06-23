function BoxColor(props){

    function rgbToHex() {


        let hexa =  "#" + ((1 << 24) + ({props.r} << 16) + ({props.g} << 8) + {props.b}).toString(16).slice(1);

        return hexa;
    }

    return (
        <div>
            <p>`rgb({props.r}, {props.g}, {props.b})`</p>
            <p>{hexa}</p>
        </div>
    )
}

export default BoxColor;