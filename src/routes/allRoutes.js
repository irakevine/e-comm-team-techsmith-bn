import express from 'express';
import swaggerRoute from './swaggerRoute.js';
import userRoute from './userRoute.js';
import sampleRoute from './sampleRoute.js';
import loginRoute from './loginRoute.js';

// SETUP ROUTER
const router = express.Router();

// SETUP ROUTES
router.use('/docs', swaggerRoute);
router.use('/users', userRoute);
router.use('/sample_test', sampleRoute);
router.use('/login', loginRoute);

export default router;
