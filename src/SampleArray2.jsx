import {users} from './data';

const SampleArray2 = () => {
    return (
        <div>
            {users.map((item)=>{
                return (<><div>
                    <h2>{item.name}</h2>
                    <p>Email: {item.email}</p>
                    <h4>Address:</h4>
                    <p>{item.address.street}</p>
                    <p>{item.address.suite}</p>
                    <p>{item.address.city}</p>
                    <p>{item.address.zipcode}</p>
                </div></>)
            })}
        </div>
    );
}
export default SampleArray2;