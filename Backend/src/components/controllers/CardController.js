// controllers/cardController.js
import { createCardService, getAllCardsService, getCardByTitleService } from '../services/cardServices.js';

export const createCard = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            res.status(400);
            throw new Error('Title and description are required');
        }
        const newCard = await createCardService(title, description);
        res.status(201).json(newCard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllCards = async (req, res) => {
    try {
        const cards = await getAllCardsService();
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getCardByTitle = async (req, res) => {
    try {
        const card = await getCardByTitleService(req.params.title);
        res.status(200).json(card);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
