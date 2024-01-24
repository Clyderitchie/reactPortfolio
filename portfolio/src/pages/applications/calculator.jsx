import { useState, useEffect } from "react";
import './calculator.css';

function Calculator() {
    const [displayValue, setDisplayValue] = useState('0');
    const [firstOperand, setFirstOperand] = useState(null);
    const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
    const [operator, setOperator] = useState(null);

    const inputDigit = (digit) => {
        if (waitingForSecondOperand === true) {
            setDisplayValue(digit);
            setWaitingForSecondOperand(false);
        } else {
            setDisplayValue(displayValue === '0' ? digit : displayValue + digit);
        }
    }

    const inputDecimal = (dot) => {
        if (!displayValue.includes(dot)) {
            setDisplayValue(prevDisplayValue => prevDisplayValue + dot);
        }
    };

    const handleOperator = (nextOperator) => {
        const inputValue = parseFloat(displayValue);

        const performCalculation = {
            '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
            '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
            '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
            '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
            '=': (firstOperand, secondOperand) => secondOperand
        };

        if (operator && waitingForSecondOperand) {
            setOperator(nextOperator);
            return;
        }

        if (firstOperand == null) {
            setFirstOperand(inputValue);
        } else if (operator) {
            const currentValue = firstOperand || 0;
            const result = performCalculation[operator](currentValue, inputValue);

            setDisplayValue(String(result));
            setFirstOperand(result);
        }

        setWaitingForSecondOperand(true);
        setOperator(nextOperator);
    };

    const resetCalculator = () => {
        setCalculator({
            ...calculator,
            displayValue: '0',
            firstOperand: null,
            waitingForSecondOperand: false,
            operator: null
        });
    };

    const updateDisplay = () => {
        return (
            <input type="text" className="calculator-screen z-depth-1" value={displayValue} readOnly />
        );
    };

    updateDisplay();

    const useHandleButtonClick = () => {
        const handleButtonClick = (event) => {
            const { target } = event;
            if (!target.matches('button')) {
                return;
            }

            if (target.classlist.contains('operator')) {
                handleOperator(target.value);
                updateDisplay();
                return;
            }

            if (target.classlist.contains('decimal')) {
                inputDecimal(target.value);
                updateDisplay();
                return;
            }

            if (target.classlist.contains('all-clear')) {
                resetCalculator();
                updateDisplay();
                return;
            }

            inputDigit(target.value);
            updateDisplay();
        };

        return handleButtonClick;
    };

    const handleButtonClick = useHandleButtonClick();

    useEffect(() => {
        updateDisplay();
    }, []);

    return (
        <>
            <div className="container mt-5">
                <div id="calc-container" className="row d-flex flex-column justify-content-center">
                    <div className="col-3">
                        <div id="input-space" className="calculator card">
                            <input type="text" className="calculator-screen z-depth-1" value={displayValue} readOnly />
                        </div>
                    </div>
                    <div className="col-6 w-100">
                        <div className="calculator-keys">
                            <button type="button" className="operator btn btn-info oppKeys" value="+" onClick={handleButtonClick}>+</button>
                            <button type="button" className="operator btn btn-info oppKeys" value="-" onClick={handleButtonClick}>-</button>
                            <button type="button" className="operator btn btn-info oppKeys" value="*" onClick={handleButtonClick}>&times;</button>
                            <button type="button" className="operator btn btn-info oppKeys" value="/" onClick={handleButtonClick}>&divide;</button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="calculator-keys">
                            <button type="button" value="7" className="btn btn-light wave-effect numericKeys" onClick={handleButtonClick}>7</button>
                            <button type="button" value="8" className="btn btn-light wave-effect numericKeys" onClick={handleButtonClick}>8</button>
                            <button type="button" value="9" className="btn btn-light wave-effect numericKeys" onClick={handleButtonClick}>9</button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="calculator-keys">
                            <button type="button" value="4" className="btn btn-light wave-effect numericKeys" onClick={handleButtonClick}>4</button>
                            <button type="button" value="5" className="btn btn-light wave-effect numericKeys" onClick={handleButtonClick}>5</button>
                            <button type="button" value="6" className="btn btn-light wave-effect numericKeys" onClick={handleButtonClick}>6</button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="calculator-keys">
                            <button type="button" value="1" className="btn btn-light wave-effect numericKeys" onClick={handleButtonClick}>1</button>
                            <button type="button" value="2" className="btn btn-light wave-effect numericKeys" onClick={handleButtonClick}>2</button>
                            <button type="button" value="3" className="btn btn-light wave-effect numericKeys" onClick={handleButtonClick}>3</button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="calculator-keys">
                            <button type="button" value="0" className="btn btn-light waves-effect numericKeys" onClick={handleButtonClick}>0</button>
                            <button type="button" className="decimal function btn btn-secondary numericKeys" value="." onClick={handleButtonClick}>.</button>
                            <button type="button" className="all-clear function btn btn-danger numericKeys" value="all-clear" onClick={handleButtonClick}>AC</button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="calculator-keys">
                        <button type="button" className="equal-sign operator btn btn-default text-dark bg-light equalKey" value="=" onClick={handleButtonClick}>=</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Calculator;