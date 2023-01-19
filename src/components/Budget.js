import React, {/*useContext, */ useState} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    //const { budget } = useContext(AppContext);

    const [budget, setBudget] = useState('');

    //const alert = budget > 20000 ? 'alert-danger' : 'alert-success'

    return (
        <div className='alert alert-secondary'>
            {/*<span>Budget: £{budget}</span>*/}
            <span>Budget: £
                <input required='required'
                       type='number'
                       id='budget'
                       value={budget}
                       max={20000}
                       style={{ marginLeft: '0rem' , size: 10}}
                       onChange={(event) => setBudget(event.target.value)}>
                </input>
            </span>
        </div>
    );
};

export default Budget;