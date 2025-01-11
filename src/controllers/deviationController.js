
import Cryptocurrency  from'../models/cryptocurrency.js'
import { std } from 'mathjs'

export const getDeviation = async (req, res) => {
  try {
    const { coin } =  req.body;
    const records = await Cryptocurrency.find({ coin })
      .sort({ timestamp: -1 })
      .limit(100);

    if (records.length === 0) {
      return res.status(404).json({ message: 'No data found' });
    }

    const prices = records.map(record => record.price);
    const deviation = std(prices);

    return res.json({ deviation });
  } catch (error) {
    console.error('Error calculating deviation:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


