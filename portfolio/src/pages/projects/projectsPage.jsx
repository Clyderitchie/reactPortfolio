import Haze from './haze';
import HazeImage from './img/haze.jpeg'
import './project.css'

function Projects() {
    return (
        <>
            <div className="container mt-5">
                <div className="row d-flex justify-content-between flex-wrap">
                    <div className="col-6">
                        <div className="card mb-3 bg-dark">
                            <img src={HazeImage} className="card-img-top" alt="Screenshot of Haze" />
                            <div className="card-body">
                                <a className="text-decoration-none" href="https://haze-community-a1679c79f3fa.herokuapp.com/" target="_blank">
                                <h5 className="text-light text-center">Haze</h5>
                                <p className="text-light text-center">A clone of the popular gaming site Steam.</p>
                                <p className="text-light text-center">A Full Stack application that was built using <br />the CRUD method, with MySql, express, and express handlebars.</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card mb-3 bg-dark">
                            <img src="https://placehold.co/600x400" className="card-img-top" alt="Screenshot of Haze" />
                            <div className="card-body">
                                <h5 className="text-light text-center">Dexperience</h5>
                                <p className="text-light text-center">Welcome to new version of the Pokedex.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
};


export default Projects;