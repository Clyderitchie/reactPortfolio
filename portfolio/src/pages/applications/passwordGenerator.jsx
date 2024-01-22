import { useState, useEffect } from 'react';

function Password() {




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
                                <li><a className="dropdown-item text-light" href="#">Small password</a></li>
                                <li><a className="dropdown-item text-light" href="#">Medium password</a></li>
                                <li><a className="dropdown-item text-light" href="#">Large password</a></li>
                            </ul>
                        </div>
                        <h3 className='mb-4'>Would you like any numbers in your password?</h3>
                        <div className="btn-group mb-5" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-secondary p-2">Yes</button>
                            <button type="button" className="btn btn-secondary p-2">No</button>
                        </div>
                        <h3 className='mb-4'>Would you like their to be any uppercase letters, lowercase letters, or both?</h3>
                        <div className="btn-group mb-5" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-secondary p-2">Uppercase</button>
                            <button type="button" className="btn btn-secondary p-2">Lowercase</button>
                            <button type="button" className="btn btn-secondary p-2">Both</button>
                        </div>
                        <h3 className='mb-4'>Would you like to have any special characters?</h3>
                        <div className="btn-group mb-5" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-secondary p-2">Yes</button>
                            <button type="button" className="btn btn-secondary p-2">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Password;