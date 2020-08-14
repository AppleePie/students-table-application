import React from 'react';

export default function MobileTable(props) {
    const students = props.data.slice();
    const getAge = (age) => {
        const lastDigit = age % 10;
        const twoLastDigits = age % 100;
        if (twoLastDigits > 10 && twoLastDigits < 20) {
            return age + ' лет'; 
        }

        if (lastDigit > 1 && lastDigit < 5) {
            return age + ' года';
        }

        if (lastDigit === 1) { 
            return age + ' год';
        }
        
        return age + ' лет';
    }

    const getNameAndLastname = (name) => {
        const newName = name.split(' ');
        return newName[0] + ' ' + newName[1];
    }

    return (
        students
            .filter(student => student.name.toLowerCase().indexOf(props.searchText.trim().toLowerCase()) !== -1)
            .sort(props.sort)
            .map(student => (
                    <div key={student._id} className="mobile-table">
                        <div className="mobile-table-header">
                        <div className="avatar" style={{backgroundImage: `url('${student.avatar}')`}}/>
                            <div className="main-cell">
                                <span>{getNameAndLastname(student.name)}</span>
                                <div className="color-rating-cell">
                                {
                                        student.color === 'rainbow'
                                            ?
                                                <img className="mobile-color-circle" src={'/IMG/rainbow.png'} alt="Радуга"></img>
                                            :
                                                <div className="mobile-color-circle" style={{background: student.color}}/>
                                }
                                    {props.rateStar}
                                    <span>{student.rating}</span>
                                </div>
                            </div>
                            <div className="trash-cell">
                                <button
                                    className="table-trash-circle" 
                                    style={{margin: '0 auto'}}
                                    onClick={() => props.deleteRequest(student._id)}
                                >
                                    {props.trashcan}
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