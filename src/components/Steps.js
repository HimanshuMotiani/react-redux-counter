import {connect} from 'react-redux';
import {updateStep} from  '../store/action'
function Steps(props) {

    function handleClick(steps) {
        props.dispatch(updateStep(steps))
    }
    return (
        <>
        <div class="steps text-center mt-10">
            <h4>Steps</h4>
            <button className={props.step === 5 ? "px-3 py-2 rounded-md mx-5 bg-red-400 text-white" : "bg-yellow-800 text-white px-3 py-2 rounded-md mx-5"} onClick={()=>handleClick(5)}>
              5
            </button>
            <button className={props.step === 10 ? "px-3 py-2 rounded-md mx-5 bg-red-400 text-white" : "bg-yellow-800 text-white px-3 py-2 rounded-md mx-5"} onClick={()=>handleClick(10)}>
              10
            </button>
            <button className={props.step === 15 ? "px-3 py-2 rounded-md mx-5 bg-red-400 text-white" : "bg-yellow-800 text-white px-3 py-2 rounded-md mx-5"} onClick={()=>handleClick(15)}>
              15
            </button>
          </div>
        </>
    )
}

function mapStateToProp(state) {
    return {
        step:state.step
    }
}

export default connect(mapStateToProp)(Steps);