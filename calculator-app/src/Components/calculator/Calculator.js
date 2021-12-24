import classes from "./Calculator.module.css";
import { Fragment } from "react";
import CalculatorKey from "./CalculatorKey";
import CalculatorDisplay from "./CalculatorDisplay";
import React , { useState } from 'react';
const calKeys = [
  [
    { value: "C", className: "cal-row__item" , operator: 0},
    { value: "+/_", className: "cal-row__item", operator: 1 },
    { value: "%", className: "cal-row__item",  operator: 2},
    { value: "/", className: "cal-row__item", operator: 3 },
  ],

  [
    { value: "7", className: "cal-row__item" },
    { value: "8", className: "cal-row__item" },
    { value: "9", className: "cal-row__item" },
    { value: "X", className: "cal-row__item", operator: 4 },
  ],

  [
    { value: "4", className: "cal-row__item" },
    { value: "5", className: "cal-row__item" },
    { value: "6", className: "cal-row__item" },
    { value: "-", className: "cal-row__item", operator: 5 },
  ],

  [
    { value: "1", className: "cal-row__item" },
    { value: "2", className: "cal-row__item" },
    { value: "3", className: "cal-row__item" },
    { value: "+", className: "cal-row__item", operator: 6 },
  ],

  [
    { value: "0", className: "cal-row__item__zero-item" },
    { value: ".", className: "cal-row__item" , operator: 7},
    { value: "=", className: "cal-row__item", operator: 8 },
  ],
];
const Calculator = () => {
  const [calculatedValue, setCalculatedValue] = useState('0');
  const [calculatorInput, setCalculatorInput] = useState();
  const [isOperatorClicked, setIsOperatorClicked] = useState(false);

  const rowItemClickHandler = (keyValue, operator) => {
    if(!isNaN(+keyValue) && calculatedValue.length < 12) {
      let finalNumber;
       if(isOperatorClicked) {
        finalNumber =  keyValue;
        setIsOperatorClicked(false);
       } else {
        finalNumber = calculatedValue + keyValue;
       }
      if(calculatedValue.length === 1 && calculatedValue === '0') {
          finalNumber = keyValue;
      }
      setCalculatedValue(finalNumber);
    } else {
        switch(operator) {
          case 6: 
             setIsOperatorClicked(true);
             setCalculatorInput(+calculatedValue);
             break;
          case 8:
            setIsOperatorClicked(true);
            const value = calculatorInput + (+calculatedValue);
            setCalculatedValue(`${value}`);
            break;
          default:
            break;   
        }
    }
  }

  return (
    <Fragment>
      <div>
        <div className={`${classes["cal-row"]} ${classes["cal-row__header"]}`}>
          <CalculatorDisplay value={calculatedValue}/>
        </div>

        {calKeys.map((keyItems, index) => (
          <div className={classes["cal-row"]} key={index}>
            {keyItems.map((key, index) => (
              <CalculatorKey value={key.value} operator={key.operator} className={key.className} keyClick={rowItemClickHandler} key={index}/>
            ))}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Calculator;
