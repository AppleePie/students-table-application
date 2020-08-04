import React, {useState, useEffect} from 'react';
 
function Table(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/get')
            .then(response => response.json())
            .then(result => {
                setData(result);
            })
            .catch(e => console.error(e));
    }, []);

    const deleteRequest = (_id) => {
        setData(data.filter(student => student._id !== _id));
        fetch('/api/delete/' + _id, { 
            method: 'DELETE',
        })
            .then(response => response.json())
            .catch(e => console.log(e));
    }

    return (
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th style={{width: '200px'}}>ФИО</th>
                        <th style={{width: '200px'}}>Специальность</th>
                        <th>Группа</th>
                        <th>Возраст</th>
                        <th>Рейтинг</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.filter(student => student.name.search(props.searchText) !== -1).sort(props.sort).map(item => (
                        <tr key={item._id}>
                            <td><img className="table-trash-circle" style={{height: '40px', width: '40px'}} src={item.avatar} alt='Аватар'/></td>
                            <td>{item.name}</td>
                            <td>{item.speciality}</td>
                            <td>{item.group}</td>
                            <td>{item.age}</td>
                            <td>{item.rating}</td>
                            <td>
                                <div className="table-color-circle" style={{background: item.color}}/>
                                <button className="table-trash-circle" onClick={() => deleteRequest(item._id)}>
                                    <img src="/IMG/trashcan.svg" style={{margin: 'auto'}} alt="Удалить"/>
                                </button>
                            </td>
                        </tr>
                    ))}
                    <tr><td style={{width: '0px', height: '0px'}}></td></tr>
                </tbody>
            </table>
    );
}
 
export default Table;