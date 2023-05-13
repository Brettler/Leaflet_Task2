/* This is the section where we manage the user's profile picture upload during app registration. Upon selection,
* the image will be displayed as a preview of how it will appear in the app. If the user does not select an image,
* a default image will be assigned to their profile. */
function RegImg({registerImage, setRegisterImage}) {

    // Assign the uploaded image as the user's profile picture.
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

    // Image preview structure.
    return (
        <>
            <div className="mb-3 d-flex">
                <label htmlFor="formFile" className="col-sm-2 col-form-label">Profile Picture</label>
                <input className="form-control" type="file" id="formFile" onChange={handleImage}/>
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