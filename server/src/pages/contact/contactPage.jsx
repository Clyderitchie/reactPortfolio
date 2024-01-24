function Contacts() {

    return (
        <>
           <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-8">
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label text-light">Email address</label>
                        <input type="email" placeholder="Email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Textarea" className="form-label text-light">Questions or comments</label>
                        <textarea className="form-control" cols="50" rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-dark text-light">Submit</button>
                    </div>
                </div>
            </div>
           </div>
        </>
    )
};

export default Contacts;