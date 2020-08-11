import React, { useState, useEffect } from 'react';
 
function Table(props) {
    useEffect(() => {
        fetch('/api/get')
            .then(response => response.json())
            .then(result => {
                setData(result);
            })
            .catch(e => console.error(e));
    }, []);

    const [data, setData] = useState([]);

    const deleteRequest = (_id) => {
        setData(data.filter(student => student._id !== _id));
        fetch('/api/delete/' + _id, { 
            method: 'DELETE',
        })
            .then(response => response.json())
            .catch(e => console.log(e));
    }


    return (
        window.outerWidth > 1024 
            ?
                <table>
                    <thead>
                        <tr>
                            <th width="4%"></th>
                            <th width="30%">ФИО</th>
                            <th width="28%">Специальность</th>
                            <th width="12%">Группа</th>
                            <th width="12%">Возраст</th>
                            <th width="12%">Рейтинг</th>
                            <th width="3%"></th>
                            <th width="3%"></th>
                        </tr>
                        <tr style={{height: '16px'}}></tr>
                    </thead>
                    <tbody>
                        {
                            data
                                .filter(student => student.name.toLowerCase().indexOf(props.searchText.trim().toLowerCase()) !== -1)
                                .sort(props.sort)
                                .map(item => (
                                    <tr key={item._id}>
                                        <td>
                                            <div className="avatar-border">
                                                <img className="table-avatar-circle" src={item.avatar} alt='Аватар'/>
                                            </div>
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.speciality}</td>
                                        <td>{item.group}</td>
                                        <td>{item.age}</td>
                                        <td>{item.rating}</td>
                                        <td>
                                        {
                                            item.color.endsWith('.png') 
                                                ?
                                                    <img className="table-color-circle" src={item.color} alt="Радуга"></img>
                                                :
                                                    <div className="table-color-circle" style={{background: item.color}}/>}
                                        </td>
                                        <td>
                                            <button className="table-trash-circle" onClick={() => deleteRequest(item._id)}>
                                                <img src="/IMG/trashcan.svg" style={{margin: 'auto'}} alt="Удалить"/>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            )
                        }
                        <tr><td style={{width: '0px', height: '0px'}}></td></tr>
                    </tbody>
                </table>
            : null
    );
}
 
export default Table;