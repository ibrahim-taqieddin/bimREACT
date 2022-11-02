import React, { useState } from "react";
import Box from "./Box";

function Form(props) {
  const [height, setHeight] = useState(0);
  const [Weight, setWeight] = useState(0);
  const [calc, setCalc] = useState(false);
  // console.log(height);
  // console.log(Weight);
  return (
    <div className="container mx-auto w-50 mt-5 bg-light rounded  p-4 ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCalc(true);
        }}
      >
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            <h3> height</h3>
          </label>
          <input
            type={"text"}
            id="height"
            name="height"
            onChange={(e) => {
              setHeight(e.target.value);
            }}
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            <h3> weight</h3>
          </label>
          <input
            type={"text"}
            id="Weight"
            name="Weight"
            onChange={(e) => {
              setWeight(e.target.value);
            }}
            className="form-control"
          />
        </div>
        <button
          type="submit"
          // onClick={(e) => {
          //   this.calculateBmi();
          // }}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
      {calc ? <Box h={height} w={Weight} /> : ""}
    </div>

    //         <div className="mt-5">
    //             <form>
    //                 <label form="height">Height: </label>
    //                 <input type={'text'} id="height" name="height" onChange={e => {
    //                     this.setState({'height': e.target.value})
    //                 }}/>
    //                 <label form="wight">Wight: </label>
    //                 <input type={'text'} id="wight" name="wight" onChange={e => {
    //                     this.setState({'Weight': e.target.value})
    //                 }}/>
    //                 <button type="button" onClick={e => {
    //                     this.calculateBmi()
    //                 }}>Submit
    //                 </button>
    //             </form>
    //             <h2>BMI {this.state.val}</h2>
    //             <h2>{this.state.info}</h2>
    //         </div>
  );
}

export default Form;
