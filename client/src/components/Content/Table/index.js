import React, { useState, useEffect } from 'react';
import DesktopTable from './DesktopTable';
import MobileTable from './MobileTable';
import './index.css';
 
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

    const rateStar = (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.95487 3.75057C9.83473 3.3668 9.50679 3.11883 9.11942 3.11883H6.62136L5.83471 0.629359C5.71379 0.246668 5.38653 0 5.00027 0C4.99904 0 4.99777 -1.11798e-08 4.99654 2.03393e-05C4.60871 0.00160768 4.28158 0.251328 4.16318 0.636217L3.39946 3.11883H0.880602C0.492256 3.11883 0.164059 3.36764 0.044505 3.75267C-0.0750685 4.1377 0.0510471 4.5397 0.365809 4.77679L2.40383 6.3119L1.61937 8.79448C1.49796 9.17869 1.62197 9.58127 1.93528 9.82006C2.09264 9.94001 2.27326 10 2.454 10C2.6331 9.99998 2.81229 9.94104 2.96887 9.82309L5.01043 8.28535L7.02773 9.82051C7.3407 10.0587 7.74601 10.0598 8.06027 9.8235C8.37452 9.58717 8.50112 9.18596 8.38284 8.80136L7.61697 6.3119L9.63767 4.77416C9.95052 4.5361 10.075 4.13432 9.95487 3.75057Z" fill="black"/>
                </svg>
    );
    const trashcan = (
        <svg style={{margin: 'auto'}} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.91184 13.16C1.95924 13.6463 2.38588 14 2.90733 14H11.0924C11.6139 14 12.0405 13.6315 12.0879 13.16L13.0044 4.19995H0.995361L1.91184 13.16ZM9.00665 6.99995C9.00665 6.74942 9.22787 6.52837 9.51229 6.52837C9.78091 6.52837 10.0179 6.73469 10.0179 6.99995V11.2C10.0179 11.4505 9.79672 11.6715 9.51229 11.6715C9.24367 11.6715 9.00665 11.4652 9.00665 11.2V6.99995ZM6.49423 6.99995C6.49423 6.74942 6.71545 6.52837 6.99988 6.52837C7.2685 6.52837 7.50552 6.73469 7.50552 6.99995V11.2C7.50552 11.4505 7.2843 11.6715 6.99988 11.6715C6.73125 11.6715 6.49423 11.4652 6.49423 11.2V6.99995ZM3.99762 6.99995C3.99762 6.74942 4.21884 6.52837 4.50326 6.52837C4.77188 6.52837 5.00891 6.73469 5.00891 6.99995V11.2C5.00891 11.4505 4.78769 11.6715 4.50326 11.6715C4.23464 11.6715 3.99762 11.4652 3.99762 11.2V6.99995Z" fill="black"/>
            <path d="M13.0045 1.4H9.00677V0.928421C9.00677 0.412632 8.56433 0 8.01129 0H6.00451C5.45147 0 5.00903 0.412632 5.00903 0.928421V1.4H0.995485C0.442438 1.4 0 1.81263 0 2.32842C0 2.84421 0.442438 3.25684 0.995485 3.25684H13.0045C13.5576 3.25684 14 2.84421 14 2.32842C14 1.81263 13.5576 1.4 13.0045 1.4Z" fill="black"/>
        </svg>
    );
    

    const deleteRequest = (_id) => {
        setData(data.filter(student => student._id !== _id));
        fetch('/api/delete/' + _id, { 
            method: 'DELETE',
        })
            .then(response => response.json())
            .catch(e => console.log(e));
    }

    return (
        window.outerWidth > 480 
            ?
                <DesktopTable
                    data={data} 
                    deleteRequest={deleteRequest} 
                    trashcan={trashcan}
                    searchText={props.searchText} 
                    sort={props.sort} 
                />
            : 
                <MobileTable
                    data={data} 
                    deleteRequest={deleteRequest} 
                    trashcan={trashcan}
                    rateStar={rateStar}
                    searchText={props.searchText} 
                    sort={props.sort} 
                />
    );
}
 
export default Table;