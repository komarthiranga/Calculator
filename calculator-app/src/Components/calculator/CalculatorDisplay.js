import classes from './CalculatorDisplay.module.css';

const CalculatorDisplay = (props) => {

    return (
        <p className={classes["cal-row__header-text"]}>{props.value}</p>
    );
}

export default CalculatorDisplay;