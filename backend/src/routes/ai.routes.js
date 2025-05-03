import express from 'express';
import { getResponse } from '../controller/ai.controller.js';

const router = express.Router();

router.route('/get-response').get(getResponse)

export default router;