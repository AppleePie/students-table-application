import React, { useState } from 'react';

export default function ChangeAvatarButton(props) {
    const [file, setFile] = useState('');
    const [isFileExist, setIsFileExist] = useState(false);

    const handleChange = (event) => {
        event.preventDefault();

        let reader = new FileReader();
        let file = event.target.files[0];

    
        reader.onloadend = () => {
            setFile(reader.result);
        };
        
        if (file) {
            setIsFileExist(true);
            reader.readAsDataURL(file);
            props.handleChange('avatar', file);
        }

    }

    return (
        <div className="avatar-container">
            {
                isFileExist
                    ?
                        <img src={file} className="avatar-circle" style={{background: 'none'}} alt="Avatar"/>
                    :
                        <div className="avatar-circle">
                            <span>ФИ</span>
                        </div>
            }
            <div className="avatar-text">
                <label htmlFor="inputFile" className="avatar-change-button">Сменить аватар</label>
                <input name="filedata" id="inputFile" className="inputfile" type="file" onChange={handleChange}/>
                <label className="avatar-size">500х500</label>
            </div>
        </div>
    );
}