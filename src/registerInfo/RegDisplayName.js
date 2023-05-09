

function RegDisplayName() {

    return (
        <div className="row mb-3">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">
                Display Name
            </label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id="inputName" />
            </div>
        </div>
    );
}
export default RegDisplayName;