import React from 'react';
import InputField from './InputField';
import './index.css';
import SelectorField from './SelectorField';
import ColorsSelector from './ColorCircles';
import SpecAndGroup from './SpecAndGroup';

export default function Content(props) {

    return (
        !props.isDefaultScreen
            ?
                <>
                    <div className="content-container">
                        <InputField name="ФИО" placeholder="Полное имя" type="text" changeAvatar={props.changeAvatar}/>
                        <InputField name="Email" placeholder="proverka@example.com" type="email"/>
                        <SpecAndGroup />
                        <InputField name="Рейтинг" placeholder="0" type="text" />
                        <SelectorField name="Пол" items={['Мужской', 'Женский']}/>
                        <ColorsSelector name="Любимый цвет"/>
                    </div>
                    <button className="submit">
                        <div className="submit-background">
                            <label className="submit-text">Создать</label>
                        </div>
                    </button>
                </>
            : null
    );
}