# Crypto Data API

A server-side application that fetches cryptocurrency data and provides APIs to retrieve that data. The system fetches the current price, market cap, and 24-hour price change for three cryptocurrencies (Bitcoin, Matic, and Ethereum) every 2 hours and stores them in a MongoDB database. It provides two main APIs: one to fetch the latest data and another to calculate the standard deviation of the prices.

## Features

- Background job that fetches cryptocurrency data every 2 hours from the [CoinGecko API](https://www.coingecko.com).
- `/stats` API to get the latest data for a specified cryptocurrency.
- `/deviation` API to get the standard deviation of the price for the last 100 records of a cryptocurrency.
- Supports Bitcoin, Matic, and Ethereum.

## Task Breakdown

### Task 1: Background Job to Fetch Cryptocurrency Data
- A background job is implemented that fetches data for the following cryptocurrencies:
  - Bitcoin (`bitcoin`)
  - Matic (`matic-network`)
  - Ethereum (`ethereum`)
- The job fetches the following data every 2 hours:
  - Current price in USD
  - Market cap in USD
  - 24-hour price change percentage
- This data is stored in MongoDB.

### Task 2: `/stats` API
- The `/stats` endpoint returns the latest data about the requested cryptocurrency.
- Query Parameters:
    ```json
    {
      "coin": "bitcoin" // Can be one of 'bitcoin', 'matic-network', or 'ethereum'
    }
    ```
- Sample Response:
    ```json
    {
      "price": 40000,
      "marketCap": 800000000,
      "24hChange": 3.4
    }
    ```

### Task 3: `/deviation` API
- The `/deviation` endpoint returns the standard deviation of the price for the last 100 records stored in the database for a specific cryptocurrency.
- Query Parameters:
    ```json
    {
      "coin": "bitcoin" // Can be one of 'bitcoin', 'matic-network', or 'ethereum'
    }
    ```
- Sample Response:
    ```json
    {
      "deviation": 4082.48
    }
    ```

## Setup and Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (locally or MongoDB Atlas)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/crypto-data-api.git
   cd crypto-data-api

2. Install dependencies:

    ```bash
    npm install 
3. Create a .env file in the root directory of the project and add the following:

```bash

    MON000GODB_URI=your-mongodb-uri
    PORT=3000