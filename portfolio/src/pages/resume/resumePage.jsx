import IfIhadOne from './img/resume.jpeg'
// import './resume.css'

function Resume() {
    return (
        <>
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-12 mt-5 text-light d-flex justify-content-center align-items-center">
                        <img src={IfIhadOne} alt="If I had a resume it would go here" />
                    </div>
                </div>
            </div>
        </>
    )
} ;

export default Resume;