import {Provider} from 'react-redux';
import store from '../store'
import CounterStep from './CounterStep'
function App(params) {
    return (
        <>
        <div>
        <h1 class="text-4xl text-center mt-10 mb-10 font-bold text-gray-700">Redux Counter App</h1>  
        <Provider store={store}>
            <CounterStep/>
        </Provider>
        </div> 
        </>
    )
}


export default App;