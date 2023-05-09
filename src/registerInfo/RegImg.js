

function RegImg() {

    return (
        <>
            <div className="mb-3 d-flex">
                <label htmlFor="formFile" className="col-sm-2 col-form-label">
                    Picture
                </label>
                <input className="form-control" type="file" id="formFile" />
            </div>
            <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2"></div>
            </div>
            <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2">
                    <img
                        src="fall.JPG"
                        alt="Lemon Lime Buddies"
                        className="img-fluid small-image mt-1"
                    />
                </div>
            </div>
        </>
    );
}
export default RegImg;