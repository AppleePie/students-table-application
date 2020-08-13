import React, { useState, useEffect } from 'react';
import './Avatar.css';

export default function ChangeAvatarButton(props) {
    const [file, setFile] = useState('');
    const [isFileExist, setIsFileExist] = useState(false);
    const [isBad, setIsBad] = useState(false);

    useEffect(() => {
        if (!props.isValid) {
            setIsBad(true);
        }
    }, [props])

    const handleChange = (event) => {
        event.preventDefault();

        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = () => {
            setFile(reader.result);
        };
        
        if (file.type.startsWith('image')) {
            setIsFileExist(true);
            reader.readAsDataURL(file);
            props.setAvatar('avatar', file);
        } else {
            alert('Для аватара разрешены только изображения')
        }

    }

    return (
        <div className="avatar-container">
            {
                isFileExist
                    ?
                        <img src={file} className="avatar-circle" style={{background: 'none'}} alt="Avatar"/>
                    :
                        <div className="avatar-circle" style={{border: isBad ? '1px solid red' : '1px sold white'}}>
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