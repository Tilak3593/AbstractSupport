import React from 'react';
import styled from 'styled-components';
import Card from './Card';

// Styled Components
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 equal-width columns */
    gap: 20px; /* Space between cards */
    padding: 20px; /* Optional: Space around the grid */

    /* Responsive adjustments */
    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr); /* 1 column for small screens */
    }
`;

const CardGrid = ({ cards }) => {
    return (
        <Grid>
            {cards.map((card) => (
                <Card key={card.id} title={card.title} description={card.description} />
            ))}
        </Grid>
    );
};

export default CardGrid;
