import express from 'express';
import { codeReview } from '../controller/ai.controller.js';

const router = express.Router();

router.route('/code-review').post(codeReview)

export default router;