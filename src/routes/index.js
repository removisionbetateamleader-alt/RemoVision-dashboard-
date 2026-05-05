import express from 'express';

const router = express.Router();

// API Routes placeholder
// Route structure:
// /api/auth - Authentication routes
// /api/spotify - Spotify integration routes
// /api/payments - Payment processing routes
// /api/dashboard - Dashboard data routes

router.get('/', (req, res) => {
  res.json({
    message: 'RemoVision Dashboard API',
    version: '0.1.0',
    status: 'Base dashboard initialized'
  });
});

export default router;
