import Steps from "./Steps";
import Max from './Max'
import { connect } from "react-redux";
import {increment,decrement,reset} from '../store/action'

function CounterStep(props) {
  return (
    <>
      <article class="flex flex-col justify-center items-center">
        <h2 class="text-6xl font-bold counter-value">{props.value}</h2>
        <div class="flex justify-between w-1/3">
          <Steps/>
          <Max/>
        </div>
        <div class="mt-10">
          <button className="bg-green-800 text-white px-3 py-2 rounded-md mx-5 increment" onClick={props.value + props.step <= props.max ?  ()=>props.dispatch(increment()): ()=>null}>
            + Increment
          </button>
          <button className="bg-green-800 text-white px-3 py-2 rounded-md mx-5 decrement" onClick={()=>props.dispatch(decrement())}>
            - Decrement
          </button>
          <button className="bg-green-800 text-white px-3 py-2 rounded-md mx-5 reset" onClick={()=>props.dispatch(reset())}>
            Reset
          </button>
        </div>
      </article>
    </>
  );
}

function mapStateToProps(state) {
    return {
        value:state.value,
        max:state.max,
        step:state.step
    }
}
export default connect(mapStateToProps)(CounterStep);
