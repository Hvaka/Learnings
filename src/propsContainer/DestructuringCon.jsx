const DestructuringCon = (props) => {
    const { make, model, year, color } = props.myCar;
    return (
        <div>
            <p>Name: {make}</p>
            <p>Age: {model}</p>
            <p>Email: {year}</p>
            <p>Address: {color}</p>
        </div>
    );
};

export default DestructuringCon;