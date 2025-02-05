import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap'
import { CiSearch } from "react-icons/ci";
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState('')

    const searchHandler = () => {
        navigate(`/?q=${query}`)
    }
    return (
        <>
            <InputGroup className="mb-3 mt-3">
                <Form.Control
                    aria-describedby="basic-addon2"
                    className={`${styles.search} border-0 bg-white text-dark `}
                    onChange={(e) => setQuery(e.target.value)}
                    
                
                />
                <InputGroup.Text id="basic-addon2" className={`${styles.search_button} border-0 bg-white text-dark `}>
                    <Button onClick={searchHandler} disabled={!query} className='p-0 m-0 bg-transparent border-0'><CiSearch color='#7e7e7e' size={25} /></Button>
                </InputGroup.Text>
            </InputGroup>

        </>
    )
}

export default SearchBox