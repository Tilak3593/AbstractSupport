// services/cardService.js
import Card from '../models/db.js';
import { v4 as uuidv4 } from 'uuid';

export const createCardService = async (title, description) => {
    const existingCard = await Card.findOne({ title });
    if (existingCard) {
        throw new Error('Card with this title already exists');
    }

    const newCard = new Card({
        id: uuidv4(),
        title,
        description,
    });

    await newCard.save();
    return newCard;
};

export const getAllCardsService = async () => {
    return await Card.find();
};

export const getCardByTitleService = async (title) => {
    const card = await Card.findOne({ title });
    if (!card) {
        throw new Error('Card not found');
    }
    return card;
};
