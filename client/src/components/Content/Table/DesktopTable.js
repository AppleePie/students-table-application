import React from 'react';

export default function DesktopTable(props) {
    const students = props.data.slice();

    return (
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
                {props.data ? <tr style={{height: '16px'}}></tr> : null}
            </thead>
            <tbody>
                {
                    students
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
                                    <button className="table-trash-circle" onClick={() => props.deleteRequest(student._id)}>
                                        {props.trashcan}
                                    </button>
                                </td>
                            </tr>
                        )
                    )
                }
                <tr><td style={{width: '0px', height: '0px'}}></td></tr>
            </tbody>
        </table>
    );
}