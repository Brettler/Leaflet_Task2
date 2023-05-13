/* In this section, we assign the user's display name, which is a mandatory field without any specific restrictions.  */
function RegDisplayName({ registerDisplayName, setRegisterDisplayName }) {

    return (
        <div className="row mb-3">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">Display Name</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id="inputName" value={registerDisplayName}
                       onChange={(e) => setRegisterDisplayName(e.target.value)}/>
            </div>
        </div>
    );
}
export default RegDisplayName;