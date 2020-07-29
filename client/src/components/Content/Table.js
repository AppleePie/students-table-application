import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
 
 
class Table extends Component {
    state = {
        data: [{}]
    };

    componentWillMount() {
        fetch('/api/get')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({data: result});
            })
            .catch(e => console.log(e));

    };

    render() {
        return (
        <table className="table" style={{ cursor: "pointer", marginTop: "4%" }}>
            <thead>
                <tr>
                    <th>ФИО</th>
                    <th>Специальность</th>
                    <th>Группа</th>
                    <th>Возраст</th>
                    <th>Рейтинг</th>
                </tr>
            </thead>
            <tbody>
                {this.state.data.map(item => (
                    <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.speciality}</td>
                        <td>{item.group}</td>
                        <td>{item.age}</td>
                        <td>{item.rating}</td>
                        <td>{item.color}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
  }
}
 
export default Table;