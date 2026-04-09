const TempLit = () => {
    const name = "Harsha";
  return (
    <div>
      {`This is a template literal example. You can use backticks to create a string that can span multiple lines and include variables like this: ${2 + 2}.`}
      <br />
      {`My name is ${name}.`}
    </div>
  );
};

export default TempLit;