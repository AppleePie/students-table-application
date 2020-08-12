import React, { useState, useEffect } from 'react';
import './Table.css';
 
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
    const rateStar = (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.95487 3.75057C9.83473 3.3668 9.50679 3.11883 9.11942 3.11883H6.62136L5.83471 0.629359C5.71379 0.246668 5.38653 0 5.00027 0C4.99904 0 4.99777 -1.11798e-08 4.99654 2.03393e-05C4.60871 0.00160768 4.28158 0.251328 4.16318 0.636217L3.39946 3.11883H0.880602C0.492256 3.11883 0.164059 3.36764 0.044505 3.75267C-0.0750685 4.1377 0.0510471 4.5397 0.365809 4.77679L2.40383 6.3119L1.61937 8.79448C1.49796 9.17869 1.62197 9.58127 1.93528 9.82006C2.09264 9.94001 2.27326 10 2.454 10C2.6331 9.99998 2.81229 9.94104 2.96887 9.82309L5.01043 8.28535L7.02773 9.82051C7.3407 10.0587 7.74601 10.0598 8.06027 9.8235C8.37452 9.58717 8.50112 9.18596 8.38284 8.80136L7.61697 6.3119L9.63767 4.77416C9.95052 4.5361 10.075 4.13432 9.95487 3.75057Z" fill="black"/>
                </svg>
    )
    

    const deleteRequest = (_id) => {
        setData(data.filter(student => student._id !== _id));
        fetch('/api/delete/' + _id, { 
            method: 'DELETE',
        })
            .then(response => response.json())
            .catch(e => console.log(e));
    }

    const getAge = (age) => {
        if ([11, 12, 13, 14].includes(+age[age.length - 1])) {
            return age + ' лет';
        }
        switch(+age[age.length - 1]) {
            case 1:
                return age + ' год';
            case 2:
            case 3:
            case 4:
                return age + ' года';
            default:
                return age + ' лет';
        }
    }

    return (
        window.outerWidth > 480 
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
                                .map(student => (
                                    <tr key={student._id}>
                                        <td>
                                            <div className="avatar" style={{backgroundImage: `url('${student.avatar}')`}}/>
                                        </td>
                                        <td>{student.name}</td>
                                        <td>{student.speciality}</td>
                                        <td>{student.group}</td>
                                        <td>{student.age}</td>
                                        <td>{student.rating}</td>
                                        <td>
                                        {
                                            student.color.endsWith('.png') 
                                                ?
                                                    <img className="table-color-circle" src={student.color} alt="Радуга"></img>
                                                :
                                                    <div className="table-color-circle" style={{background: student.color}}/>
                                        }
                                        </td>
                                        <td>
                                            <button className="table-trash-circle" onClick={() => deleteRequest(student._id)}>
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
            : 
                data
                    .filter(student => student.name.toLowerCase().indexOf(props.searchText.trim().toLowerCase()) !== -1)
                    .sort(props.sort)
                    .map(student => (
                            <div key={student._id} className="mobile-table">
                                <div className="mobile-table-header">
                                <div className="avatar" style={{backgroundImage: `url('${student.avatar}')`}}/>
                                    <div className="main-cell">
                                        <span>{student.name}</span>
                                        <div className="color-rating-cell">
                                        {
                                                student.color.endsWith('.png') 
                                                    ?
                                                        <img className="mobile-color-circle" src={student.color} alt="Радуга"></img>
                                                    :
                                                        <div className="mobile-color-circle" style={{background: student.color}}/>
                                        }
                                            {rateStar}
                                            <span>{student.rating}</span>
                                        </div>
                                    </div>
                                    <div className="trash-cell">
                                        <button
                                            className="table-trash-circle" 
                                            style={{margin: '0 auto'}}
                                            onClick={() => deleteRequest(student._id)}
                                        >
                                            <img src="/IMG/trashcan.svg" style={{margin: 'auto'}} alt="Удалить"/>
                                        </button>
                                    </div>
                                </div>
                                <hr style={{opacity: '0.3'}}/>
                                <div className="mobile-table-body">
                                    <ul>
                                        {
                                            [getAge(student.age), student.speciality, student.group].map((item, index) => (
                                                    <li key={index}>
                                                        <span>{item}</span>
                                                    </li>
                                                )
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    )
    );
}
 
export default Table;