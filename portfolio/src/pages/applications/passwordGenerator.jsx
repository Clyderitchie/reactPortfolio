import { useState, useEffect } from 'react';

function Password() {
    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState(8);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [isUppercase, setUpperCase] = useState(false);
    const [lowerCase, setLowerCase] = useState(false);
    const [includeSpecialCharacters, setIncludeSpecialCharacters] = useState(false);

    const generateLength = (length) => {
        setPasswordLength(length);
    };

    const handleIncludeNumbers = (value) => {
        setIncludeNumbers(value);
    };

    const handleUppercase = (value) => {
        setUpperCase(value)
    };

    const handleLowercase = (value) => {
        setLowerCase(value);
    };

    const handleIncludeSpecialCharacters = (value) => {
        setIncludeSpecialCharacters(value);
    };

    const generatePassword = () => {

        let newPassword = '';
        const specialCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>?';

        while (newPassword.length < passwordLength) {
            const randomChar = String.fromCharCode(Math.floor(Math.random() * 93) + 33);

            if (includeNumbers && !isNaN(randomChar)) {
                newPassword += randomChar;
            } else if (isUppercase && randomChar.match(/[A-Z]/)) {
                newPassword += randomChar;
            } else if (isUppercase && randomChar.match(/[a-z]/)) {
                newPassword += randomChar;
            } else if (includeSpecialCharacters && specialCharacters.includes(randomChar)) {
                newPassword += randomChar;
            }
        }

        setPassword(newPassword);
        alert(`Your new password is: ${newPassword}`);
    };

    return (
        <>
            <div className="container mt-5 text-light">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-10 d-flex justify-content-center align-items-center">
                        <h1>Password Generator</h1>
                    </div>
                    <div className="col-10 d-flex justify-content-center align-items-center mt-4">
                        <h2>This application was created in order to help someone with generating a random password. It will allow the user to
                            choose from different options in order to a customize the password to how they like it.
                        </h2>
                    </div>
                    <div className="col-10 mt-5">
                        <h3 className='mb-4'>Please choose the length of your password.</h3>
                        <div className="btn-group mb-5">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Password Length
                            </button>
                            <ul className="dropdown-menu bg-dark">
                                <li><a className="dropdown-item text-light" href="#" onClick={() => generateLength(8)}>Small password</a></li>
                                <li><a className="dropdown-item text-light" href="#" onClick={() => generateLength(12)}>Medium password</a></li>
                                <li><a className="dropdown-item text-light" href="#" onClick={() => generateLength(16)}>Large password</a></li>
                            </ul>
                        </div>
                        <h3 className='mb-4'>Would you like any numbers in your password?</h3>
                        <div className="btn-group mb-5" role="group" aria-label="Basic example">
                            <button type="button" className={`btn btn-secondary p-2 ${includeNumbers ? 'active' : ''} `} onClick={() => handleIncludeNumbers(true)}>
                                Yes
                            </button>
                            <button type="button" className={`btn btn-secondary p-2 ${!includeNumbers ? 'active' : ''} `} onClick={() => handleIncludeNumbers(false)}>
                                No
                            </button>
                        </div>
                        <h3 className='mb-4'>Would you like their to be any uppercase letters, lowercase letters, or both?</h3>
                        <div className="btn-group mb-5" role="group" aria-label="Basic example">
                            <button type="button" className={`btn btn-secondary p-2 ${handleUppercase ? 'active' : ''}`} onClick={() => handleUppercase(!isUppercase)}>
                                Uppercase
                            </button>
                            <button type="button" className={`btn btn-secondary p-2 ${handleLowercase ? 'active' : ''}`} onClick={() => handleLowercase(!lowerCase)}>
                                Lowercase
                            </button>
                            <button type="button" className={`btn btn-secondary p-2 ${handleLowercase ? 'active' : ''}`} onClick={() => handleLowercase(!lowerCase)}>
                                Both
                            </button>
                        </div>
                        <h3 className='mb-4'>Would you like to have any special characters?</h3>
                        <div className="btn-group mb-5" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-secondary p-2" onClick={() => handleIncludeSpecialCharacters(true)}>
                                Yes
                            </button>
                            <button type="button" className="btn btn-secondary p-2" onClick={() => handleIncludeSpecialCharacters(false)}>
                                No
                            </button>
                        </div>
                        <h3 className='mb-4'>Generate your new password!</h3>
                        <div className="btn-group mb-5" role="group" aria-label="Basic example">
                            <div id="liveAlertPlaceholder"></div>
                            <button type="button" className="btn btn-secondary p-2" id="liveAlertBtn" onClick={generatePassword}>Generate password</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Password;