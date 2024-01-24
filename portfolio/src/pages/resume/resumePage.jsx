import IfIhadOne from './img/resume.jpeg'
import './resume.css'

function Resume() {
    return (
        <>
           <div className='resumeHolder'>
           <img id="resumePic" src={IfIhadOne} alt="If I had a resume it would go here" />
           </div>
        </>
    )
};

export default Resume;