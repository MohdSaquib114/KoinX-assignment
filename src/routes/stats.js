import  express from 'express'

const { getStats } = require('../controllers/statsController');
const router = express.Router();

router.get('/stats', getStats);

module.exports = router;
