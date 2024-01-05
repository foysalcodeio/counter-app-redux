import React from 'react';
import Timer from '../Components/Timer/Timer';


const CounterPage = () => {
    return (
    <div className='container mt-5'>
        <div className='row d-flex justify-content-center'>
            <div className='col-md-6'>
                <Timer />
            </div>
        </div>
     </div>
    );
};
export default CounterPage;