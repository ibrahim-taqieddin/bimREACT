function Box(props) {
  const height = props.h;
  const Weight = props.w;
  let result = (Weight / Math.pow(height, 2)) * 10000;

  console.log(height + "Box");
  console.log(Weight + "Box");

  function Check(cal) {
    if (cal <= 18.5) {
      return "Under Weight";
    } else if (cal > 18.5 && cal <= 24.9) {
      return "Normal weight";
    } else if (cal > 24.9 && cal < 30) {
      return "Overweight";
    } else {
      return "Obesity";
    }
    // console.log(this.state.Weight / Math.pow(this.state.height, 2));
  }
  return (
    <div className="div bg-danger rounded mt-5">
      {/* <h5>You Weight is : {Weight}</h5> */}
      {/* <h5>You Height is : {height}</h5> */}
      <h3>Your Body Mass Index (BMI) is : {result.toFixed(2)}</h3>
      <h1 className="color">Result : </h1>
      <h1>{Check(result)}</h1>
    </div>
  );
}

export default Box;
