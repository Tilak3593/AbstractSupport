import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import axios from 'axios';

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
    padding: 10px 20px;
    border-bottom: 1px solid #E0E0E0;
`;

const NavbarBrand = styled.div`
    display: flex;
    align-items: center;
`;

const NavbarLogo = styled.img`
    height: 24px;
    margin-right: 10px;
`;

const NavbarButton = styled.button`
    background-color: #333;
    color: #fff;
    border: 1px solid #fff;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 4px;
`;

const ModalContent = styled.div`
    width: 50%; 
    max-width: 600px; 
    background: rgba(255, 255, 255, 0.9); 
    border-radius: 8px;
    height:230px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: auto; 
`;

const ModalInput = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const ModalButton = styled.button`
    background-color: #333;
    color: #fff;
    border: 1px solid #fff;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 4px;
    margin: 5px;
`;

const Navbar = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({ id: '', title: '', description: '' });

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        try {
            await axios.post('http://localhost:5000/cards/createCard', formData); 
            alert('Data submitted successfully!');
            closeModal();
        } catch (error) {
            alert('Failed to submit data');
        }
    };

    return (
        <NavbarContainer>
            <NavbarBrand>
                {/* <NavbarLogo src="/path-to-your-logo.png" alt="Abstract Logo" /> */}
                <span>Abstract | Help Center</span>
            </NavbarBrand>
            <NavbarButton onClick={openModal}>Submit a request</NavbarButton>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                    },
                    content: {
                        padding: '0',
                        border: 'none',
                        background: 'transparent', 
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                }}
            >
                <ModalContent>
                    <h2>Send Your Response</h2>
                    <ModalInput
                        type="text"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        placeholder="ID"
                    />
                    <ModalInput
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Title"
                    />
                    <ModalInput
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Description"
                    />
                    <div>
                        <ModalButton onClick={handleSubmit}>Submit</ModalButton>
                        <ModalButton onClick={closeModal}>Close</ModalButton>
                    </div>
                </ModalContent>
            </Modal>
        </NavbarContainer>
    );
};

export default Navbar;
