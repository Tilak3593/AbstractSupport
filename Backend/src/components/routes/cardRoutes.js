import express from 'express';
import { createCard, getAllCards, getCardByTitle } from '../controllers/CardController.js';

const router = express.Router();

// Route to create a new card
router.post('/createCard', createCard);

// Route to get all cards
router.get('/getAllCards', getAllCards);

// Route to get a specific card by title
router.get('/getcardsByTitle/:title', getCardByTitle);

export default router;
