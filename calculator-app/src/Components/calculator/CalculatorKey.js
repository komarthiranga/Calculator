import classes from './Calculatorkey.module.css';
const CalculatorKey = (props) => {

    const clickHandler = () => {
        props.keyClick(props.value, props.operator)
    }

    return(
        <div className={`${classes[props.className]}`} onClick={clickHandler}>{props.value}</div>
    );
}

export default CalculatorKey;