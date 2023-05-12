
function RegImg({ registerImage, setRegisterImage}) {

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setRegisterImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <div className="mb-3 d-flex">
                <label htmlFor="formFile" className="col-sm-2 col-form-label">
                    Picture
                </label>
                <input className="form-control" type="file" id="formFile" onChange={handleImage} />
            </div>
            <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2"></div>
            </div>
            <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2">
                    <img
                        id="default-image"
                        src={registerImage}
                        alt=""
                        className="img-fluid small-image mt-1"
                    />
                </div>
            </div>
        </>
    );
}
export default RegImg;