import React, { useState } from 'react';
import './Calculator.css';

const Calculator = (props) => {
  // const [amount, setAmount] = useState('');

  // const [tip, settip] = useState(10);
  const [formValues, setFormValues] = useState({
    amount: '10',
    tip: '',
    customValue: '',
    numberOfPepole: '1',
  });
  const [clicked, setClicked] = useState(false);

  const handleReset = () => {
    setFormValues({
      amount: '',
      tip: '',
      customValue: '',
      numberOfPepole: '1',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the input value
    console.log(formValues.amount);
  };
  const click = (e) => {
    setFormValues({ ...formValues, tip: props.tip });
    handleClick();
    console.log(formValues);
  };
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className='calculator'>
      <form className='calculator__form' onSubmit={handleSubmit}>
        <div className='calculator__wrapper'>
          <div className='calculator__element calculator__input-container'>
            <label htmlFor='money-input'>Enter amount:</label>
            <input
              type='number'
              step='0.01'
              min='1'
              id='money-input'
              className='calculator__input'
              value={formValues.amount}
              onChange={(e) =>
                setFormValues({ ...formValues, amount: e.target.value })
              }
              placeholder='$0.00'
            />
          </div>
          <label htmlFor='custom--input'>Select Tip:</label>

          <div className='grid-container '>
            <button
              className={clicked ? 'grid-item grid-item_active' : 'grid-item'}
              onClick={click}
            >
              5%
            </button>
            <button
              className={clicked ? 'grid-item grid-item_active' : 'grid-item'}
              onClick={click}
            >
              10%
            </button>
            <button
              className={clicked ? 'grid-item grid-item_active' : 'grid-item'}
              onClick={click}
            >
              15%
            </button>
            <button
              className={clicked ? 'grid-item grid-item_active' : 'grid-item'}
              onClick={click}
            >
              25%
            </button>
            <button
              className={clicked ? 'grid-item grid-item_active' : 'grid-item'}
              onClick={click}
            >
              50%
            </button>
            <input
              type='number'
              id='custom-input'
              className='grid-item-custom'
              value={formValues.customValue}
              onChange={(e) =>
                setFormValues({ ...formValues, customValue: e.target.value })
              }
              placeholder='Custom'
            />
          </div>
          <div className='calculator__element calculator__input-container'>
            <label htmlFor='pepole-input'>Number of Pepole:</label>
            <input
              type='number'
              min='1'
              id='pepole-input'
              className='calculator__input'
              value={formValues.numberOfPepole}
              onChange={(e) =>
                setFormValues({ ...formValues, numberOfPepole: e.target.value })
              }
              placeholder='$0.00'
            />
          </div>
        </div>

        <div className='calculator__wrapper'>
          <div className='calculator__total'>
            <p>
              Tip Amout
              <span>/Person</span>
            </p>

            <p>${formValues.amount}</p>
          </div>
          <div className='calculator__total'>
            <p>
              Total
              <span>/Person</span>
            </p>

            <p>${formValues.amount}</p>
          </div>

          <button onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
