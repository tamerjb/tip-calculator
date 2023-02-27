import React, { useState, useEffect } from 'react';
import './Calculator.css';

const Calculator = (props) => {
  // const [amount, setAmount] = useState('');

  // const [tip, settip] = useState(10);
  const [formValues, setFormValues] = useState({
    amount: '0',
    tip: '0',
    customValue: '0',
    numberOfPepole: '1',
  });
  const [activeButton, setActiveButton] = useState();

  const handleReset = () => {
    setFormValues({
      amount: '0',
      tip: '0',
      customValue: '0',
      numberOfPepole: '1',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the input value
    // console.log(formValues.amount);
  };
  const Click = (e) => {
    setActiveButton(e);
    setFormValues({ ...formValues, tip: e });
    console.log(e);
  };
  const handleTip = () => {
    let tip = (parseInt(formValues.amount) * parseInt(formValues.tip)) / 100;
    let customTip =
      (parseInt(formValues.amount) * parseInt(formValues.customValue)) / 100;

    return formValues.customValue == 0 ? tip : customTip;
  };
  const handleTotal = () => {
    let total = parseInt(formValues.amount) + parseInt(handleTip());
    if (isNaN(total)) {
      console.log('total', total);
    }
    return total / parseInt(formValues.numberOfPepole);
  };

  return (
    <div className='calculator'>
      <form className='calculator__form' onSubmit={handleSubmit}>
        <div className='calculator__wrapper'>
          <div className='calculator__element calculator__input-container'>
            <label className='calclulator__form-label' htmlFor='money-input'>
              Bill:
            </label>
            <input
              type='number'
              step='0.01'
              min='1'
              max='10000'
              id='money-input'
              className='calculator__input'
              value={formValues.amount}
              onChange={(e) =>
                setFormValues({ ...formValues, amount: e.target.value })
              }
              placeholder='$0.00'
            />
            <span className='icon'></span>
          </div>
          <div>
            <label className='calclulator__form-label' htmlFor='custom--input'>
              Select Tip:
            </label>

            <div className='grid-container '>
              <button
                className={
                  activeButton === 5
                    ? 'grid-item grid-item_active'
                    : 'grid-item'
                }
                onClick={() => Click(5)}
                value='5'
              >
                5%
              </button>
              <button
                className={
                  activeButton === 10
                    ? 'grid-item grid-item_active'
                    : 'grid-item'
                }
                onClick={() => Click(10)}
                value='10'
              >
                10%
              </button>
              <button
                className={
                  activeButton === 15
                    ? 'grid-item grid-item_active'
                    : 'grid-item'
                }
                onClick={() => Click(15)}
              >
                15%
              </button>
              <button
                className={
                  activeButton === 25
                    ? 'grid-item grid-item_active'
                    : 'grid-item'
                }
                onClick={() => Click(25)}
              >
                25%
              </button>
              <button
                className={
                  activeButton === 50
                    ? 'grid-item grid-item_active'
                    : 'grid-item'
                }
                onClick={() => Click(50)}
              >
                50%
              </button>
              <input
                type='number'
                id='custom-input'
                className={
                  activeButton === 60 ? 'grid-item-custom' : 'grid-item-custom'
                }
                onClick={() => Click(60)}
                // value={formValues.customValue}
                onChange={(e) =>
                  setFormValues({ ...formValues, customValue: e.target.value })
                }
                placeholder='Custom'
                min='1'
                max='100'
              />
            </div>
          </div>
          <div className='calculator__element calculator__input-container calculator__input-container-ppl'>
            <label className='calclulator__form-label' htmlFor='pepole-input'>
              Number of Pepole:
            </label>
            <input
              type='number'
              min='1'
              max='100'
              id='pepole-input'
              className='calculator__input'
              value={formValues.numberOfPepole}
              onChange={(e) =>
                setFormValues({ ...formValues, numberOfPepole: e.target.value })
              }
            />
            <span className='icon'></span>
          </div>
        </div>

        <div className='calculator__wrapper style2'>
          <div className='calculator__total'>
            <div>
              <p className='calculator__total-title'>Tip Amout</p>
              <p className='calculator__total-title-span'>/Person</p>
            </div>
            <p className='calculator__total-tip'>${handleTip()}</p>
          </div>
          <div className='calculator__total'>
            <div>
              <p className='calculator__total-title'>Total</p>
              <p className='calculator__total-title-span'>/Person</p>
            </div>
            <p className='calculator__total-tip'>${handleTotal()}</p>
          </div>

          <button onClick={handleReset} className='calculator__form-button'>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
