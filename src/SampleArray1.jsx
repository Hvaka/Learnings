const SampleArray1 = () => {
    const sampleObject = [{
        cricketer: "Virat Kohli",
        team: "India",
        runs: 12000,
        average: 50.5
    }];
    return (
        <div>
            {/* using map function to display the data from the array of objects */}
            {sampleObject.map((item)=>{
                return (<><div>
                    <h2>{item.cricketer}</h2>
                    <p>Team: {item.team}</p>
                    <p>Runs: {item.runs}</p>
                    <p>Average: {item.average}</p>
                </div><div>
                    {/* using index to access the data from the array of objects */}
                    {sampleObject[0].cricketer} <br />
                    {sampleObject[0].team} <br />
                    {sampleObject[0].runs} <br />
                    {sampleObject[0].average} <br />
                    </div></>
                )
            })}
        </div>
    );
}
export default SampleArray1;