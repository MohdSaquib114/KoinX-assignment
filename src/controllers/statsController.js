import  Cryptocurrency from'../models/cryptocurrency'

const getStats = async (req, res) => {
  try {
    const { coin } = req.query;
    const latestData = await Cryptocurrency.findOne({ coin }).sort({ timestamp: -1 });
    
    if (!latestData) {
      return res.status(404).json({ message: 'Data not found' });
    }

    return res.json({
      price: latestData.price,
      marketCap: latestData.marketCap,
      "24hChange": latestData.change24h,
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { getStats };
