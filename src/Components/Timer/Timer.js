import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, setCustom } from '../../redux/state/Counter/counterSlice';

const Timer = () => {
    
    const manualNumber = useRef();
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch()

    return (
        <div className='card'>
            <div className='card-header bg-secondary'>
                <h4 className='text-white'>Counter App</h4>
            </div>

            <div className='card-body'>
                <h1>{count}</h1>
                <div className='my-4'>
                    <button onClick={() => {dispatch(increment())}} className='btn btn-success'> Increase </button>
                    <button onClick={() => {dispatch(decrement())}} className='btn mx-2 btn-danger' > Decrease </button>
                </div>
                <div className='my-4'>
                    <input ref={manualNumber} className='form-control w-50 m-2' type='number' />
                    <button onClick={ () => {dispatch(setCustom(manualNumber.current.value))}} className='btn w-50 mx-2 my-2 btn-dark'>Set Custom</button>
                </div>
            </div>
        </div>
    );
};

export default Timer;