
import axios  from 'axios'
import  Cryptocurrency  from'../models/cryptocurrency.js'
import mongoose from 'mongoose';

export const fetchCryptoData = async () => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const coins = ['bitcoin', 'matic-network', 'ethereum'];

    
    for (let i = 0; i < coins.length; i++) {
      const coinId = coins[i];

    
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`);
      
     
      const { current_price, market_cap, price_change_percentage_24h  } = response.data.market_data;


      const coinData = {
        price: current_price.usd,
        marketCap: market_cap.usd,
        change24h: price_change_percentage_24h,
      };

      
      const result = await Cryptocurrency.create(
       {  coin: coinId ,
        ...coinData, 
      }
      );
    
      console.log(`Data for ${coinId} updated successfully!`);
    }
  } catch (error) {
    await session.abortTransaction();
    console.error('Error fetching crypto data:', error);
  }finally {
    
    session.endSession();
  }
};

