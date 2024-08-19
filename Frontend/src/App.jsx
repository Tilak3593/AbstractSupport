import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { components } from './helpcenter';
import Navbar from './helpcenter/Navbar';
import Footer from './helpcenter/Footer';

const HelpCenter = styled.div`
    font-family: Arial, sans-serif;
    color: #333;
    text-align: center;
    padding: 20px;
    background-color: #f9f9f9;
`;

const Header = styled.header`
    background-color: #e5e8f0;
    padding: 50px 20px;
    margin-bottom: 20px;
`;

const Title = styled.h1`
    font-size: 36px;
    margin-bottom: 20px;
    color: #333;
`;

const Main = styled.main`
    padding: 20px;
`;

const App = () => {
    const [cards, setCards] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get('http://localhost:5000/cards/getAllCards');
                const data = Array.isArray(response.data) ? response.data : [];
                console.log(data);
                setCards(data);
            } catch (error) {
                console.error('Error fetching cards:', error);
            }
        };

        fetchCards();
    }, []);

    const filteredCards = Array.isArray(cards)
        ? cards.filter(card =>
            card.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : [];

    return (
        <>

        <Navbar/>
        <HelpCenter>
        
            <Header>
                <Title>How can we help?</Title>
                <components.SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </Header>
            <Main>
                <components.CardGrid cards={filteredCards} />
            </Main>
        </HelpCenter>
        <Footer></Footer>
        </>
    );
};

export default App;
