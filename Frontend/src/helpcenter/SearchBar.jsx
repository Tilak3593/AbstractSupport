import React from 'react';
import styled from 'styled-components';

// Styled Components
const SearchBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
`;

const Input = styled.input`
    width: 50%;
    padding: 12px 20px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 25px 0 0 25px;
    outline: none;
`;

const Button = styled.button`
    padding: 12px 20px;
    font-size: 16px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 0 25px 25px 0;
    cursor: pointer;

    &:hover {
        background-color: #555;
    }
`;

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <SearchBarContainer>
            <Input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit">→</Button>
        </SearchBarContainer>
    );
};

export default SearchBar;
