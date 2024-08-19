import React from 'react';
import styled from 'styled-components';

// Styled Components
const CardContainer = styled.div`
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: left;
    transition: box-shadow 0.3s ease-in-out, width 0.3s ease-in-out, padding 0.3s ease-in-out;

    &:hover {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    /* Responsive adjustments */
    @media (max-width: 1024px) {
        width: 250px;
        padding: 18px;
    }

    @media (max-width: 768px) {
        width: 200px;
        padding: 16px;
    }

    @media (max-width: 480px) {
        width: 100%;
        padding: 14px;
    }
`;

const CardTitle = styled.h3`
    font-size: 18px;
    margin-bottom: 10px;
    color: #333;
    padding-bottom: 10px;
    border-bottom: 1px solid grey;

    /* Responsive adjustments */
    @media (max-width: 1024px) {
        font-size: 16px;
    }

    @media (max-width: 768px) {
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

const CardDescription = styled.p`
    font-size: 14px;
    color: #666;

    /* Responsive adjustments */
    @media (max-width: 1024px) {
        font-size: 13px;
    }

    @media (max-width: 768px) {
        font-size: 12px;
    }

    @media (max-width: 480px) {
        font-size: 11px;
    }
`;

const Card = ({ title, description }) => {
    return (
        <CardContainer>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardContainer>
    );
};

export default Card;
