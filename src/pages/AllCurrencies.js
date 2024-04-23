import React, {useState} from 'react';
import { IoIosSearch } from "react-icons/io";
import '../styles/allCurrencies.scss';

const AllCurrencies = () => {
    const [searchInput, setSearchInput] = useState('')

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value)
    }
    return (
        <div className='container'>
            <h1 className='currency-title'>All Currencies</h1>
            <div style={{position: 'relative'}}>
                <input
                    className='input'
                    type="text"
                    placeholder="Search by name"
                    onChange={handleChange}
                    value={searchInput}
                />
                <IoIosSearch  className='input-icon'/>
            </div>
        </div>
    );
};

export default AllCurrencies;
