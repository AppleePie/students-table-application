import React from 'react';
import sort from './sortDirection.svg';

class SortSelector extends React.Component {
    state = {
        type: 'Имя'
    }

    render() {
        const sortTypes = [
            'Имя',
            'Фамилия',
            'Группа',
            'Возраст',
            'Специальность',
            'Рейтинг'
        ];

        return (
            <div className="sort-selector">
                <div className="sort-direction">
                    <button>
                        <img src={sort} alt="sort.svg"/>
                    </button>
                </div>
                <select>
                    {
                        sortTypes.map((type, index) => {
                            return <option key={index} className="sort-type">{type}</option>;
                        })
                    }
                </select>
            </div>
            
        );
    }
}

export default SortSelector;