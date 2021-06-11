import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = props => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (event) => {
        let selectedFile = event.target.files[0];
        //console.log(selectedFile);

        if (selectedFile && types.includes(selectedFile.type)) {
            setFile(selectedFile);
            setError("");
        }
        else {
            setFile(null);
            setError("Please select an image file (png or jpeg)");
        }
    };

    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    );
};

export default UploadForm;