const SampleArray = () => {
  const sampleArray = [1, 2, 3, "Mango", { name: 'John', age: 30 }, [5, 6, 7]];
  const sampleObject = {
    name: "Alice",
    age: 25,
    email: "alice@example.com"
  };
  return (
        <div>
            <h2>Sample Array</h2>
            {sampleArray[0]} <br />
            {sampleArray[4].name} <br />
            {sampleArray[2]} <br />
            {sampleObject.name} <br />
            {sampleObject.age} <br />
            {sampleObject.email} <br />
        </div>
    );
}
export default SampleArray;