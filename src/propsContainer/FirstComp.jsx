const FirstComp = (props) => {
    return (
        console.log(props),
        <div>
           {props.name}
        </div>
    );
}

export default FirstComp;