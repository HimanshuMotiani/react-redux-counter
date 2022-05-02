import {connect} from 'react-redux';
import {updateMax} from '../store/action'
function Max(props) {
function handleClick(max) {
    props.dispatch(updateMax(max))
}
    return (
        <>
        <div class="steps text-center mt-10">
            <h4>Max Value</h4>
            <button className={props.max === 15 ? "px-3 py-2 rounded-md mx-5 bg-red-400 text-white" : "bg-gray-800 text-white px-3 py-2 rounded-md mx-5"} onClick={()=>handleClick(15)}>
              15
            </button>
            <button className={props.max === 100 ? "px-3 py-2 rounded-md mx-5 bg-red-400 text-white" : "bg-gray-800 text-white px-3 py-2 rounded-md mx-5"} onClick={()=>handleClick(100)}>
              100
            </button>
            <button className={props.max === 200 ? "px-3 py-2 rounded-md mx-5 bg-red-400 text-white" : "bg-gray-800 text-white px-3 py-2 rounded-md mx-5"} onClick={()=>handleClick(200)}>
              200
            </button>
          </div>
        </>

    )
}

function mapStateToProps(state) {
    return {
        max : state.max
    }
}

export default connect(mapStateToProps)(Max);