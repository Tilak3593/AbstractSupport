import React from 'react';
import styled from 'styled-components';

// Styled components
const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    background-color: #000;
    color: #fff;
    padding: 20px;
    flex-wrap: wrap;
`;

const FooterSection = styled.div`
    margin: 10px;
`;

const FooterHeading = styled.h4`
    font-size: 16px;
    margin-bottom: 10px;
`;

const FooterList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const FooterListItem = styled.li`
    margin: 5px 0;
`;

const FooterLink = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 14px;
`;

const FooterText = styled.p`
    font-size: 12px;
    margin-top: 20px;
`;

// Footer component
const Footer = () => {
    return (
        <FooterContainer>
            <FooterSection>
                <FooterHeading>Abstract</FooterHeading>
                <FooterList>
                    <FooterListItem><FooterLink href="#">Branches</FooterLink></FooterListItem>
                </FooterList>
            </FooterSection>
            <FooterSection>
                <FooterHeading>Resources</FooterHeading>
                <FooterList>
                    <FooterListItem><FooterLink href="#">Blog</FooterLink></FooterListItem>
                    <FooterListItem><FooterLink href="#">Help Center</FooterLink></FooterListItem>
                    <FooterListItem><FooterLink href="#">Release Notes</FooterLink></FooterListItem>
                    <FooterListItem><FooterLink href="#">Status</FooterLink></FooterListItem>
                </FooterList>
            </FooterSection>
            <FooterSection>
                <FooterHeading>Community</FooterHeading>
                <FooterList>
                    <FooterListItem><FooterLink href="#">Twitter</FooterLink></FooterListItem>
                    <FooterListItem><FooterLink href="#">LinkedIn</FooterLink></FooterListItem>
                    <FooterListItem><FooterLink href="#">Facebook</FooterLink></FooterListItem>
                    <FooterListItem><FooterLink href="#">Dribbble</FooterLink></FooterListItem>
                    <FooterListItem><FooterLink href="#">Podcast</FooterLink></FooterListItem>
                </FooterList>
            </FooterSection>
            <FooterSection>
                <FooterHeading>Company</FooterHeading>
                <FooterList>
                    <FooterListItem><FooterLink href="#">About Us</FooterLink></FooterListItem>
                    <FooterListItem><FooterLink href="#">Careers</FooterLink></FooterListItem>
                    <FooterListItem><FooterLink href="#">Legal</FooterLink></FooterListItem>
                    <FooterListItem><FooterLink href="#">Contact Us</FooterLink></FooterListItem>
                </FooterList>
                <FooterText>&copy; Copyright 2022 Abstract Studio Design, Inc. All rights reserved</FooterText>
            </FooterSection>
        </FooterContainer>
    );
};

export default Footer;
