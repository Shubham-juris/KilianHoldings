import React from 'react';

import StockMarketImage from '../../assets/stockmarket/stock-market-img.avif';
import InvestStocks from '../../assets/stockmarket/stockMarketContainer2.jpg';
import StockMarketImage1 from '../../assets/stockmarket/stockMarketcontainer1.jpg';
export default function StockMarket() {
  return (
    <div style={{ margin: '0 auto' }} className='text-white'>
      <div
        style={{
          padding: '2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className='flex flex-col md:flex-row items-center md:items-start p-10 gap-10'
      >
        <div className='md:w-1/2 text-center md:text-left'>
          <h2
            className='text-3xl md:text-5xl font-bold'
            style={{ marginBottom: '2rem', color: '#000808' }}
          >
            Welcome to Kilian Holdings Ltd - Your Gateway to the Stock Market
          </h2>
          <p className='mt-4 text-lg text-[#000808]'>
            At Kilian Holdings Ltd, we understand that the stock market can be
            both an exciting and daunting place. Whether you are a seasoned
            investor or just starting your financial journey, we are here to
            provide you with the insights, tools, and support you need to
            navigate the complex world of stocks with confidence.
          </p>
        </div>
        <div className='md:w-1/2 flex justify-center'>
          <img
            src= {StockMarketImage}
            alt='Stock Market'
            className='w-full max-w-md h-auto  shadow-lg'
            style={{ maxHeight: '90vh', width: '100%' }}
          />
        </div>
      </div>
      <div style={{ padding: '2rem' }} className='p-6 bg-[#0C3F40] text-white'>
        <h3
          style={{ margin: '2rem auto', fontSize: '2rem' }}
          className='text-2xl font-bold text-center mb-6'
        >
          Stock Market at Kilian Holdings LTD
        </h3>
        <div className='flex flex-col md:flex-row gap-6 items-stretch'>
          <div className='md:w-1/2 flex flex-col items-center text-center md:text-left'>
            <img
              src= {StockMarketImage1}
              alt='content'
              className='w-full h-64 object-cover rounded-lg shadow-lg'
            />
            <div className='flex flex-col justify-between h-full p-4'>
              <h3
                style={{ textAlign: 'center', margin: '1rem auto' }}
                className='text-xl font-semibold mt-4'
              >
                What is the Stock Market?
              </h3>
              <p
                className='text-gray-300 mt-2'
                style={{ maxWidth: '90%', padding: '2rem' }}
              >
                The stock market is a vast network where investors buy and sell
                shares of publicly traded companies. It plays a crucial role in
                the economy by allowing companies to raise capital to grow and
                investors to earn returns on their investments. Stock prices
                fluctuate based on supply and demand, influenced by a myriad of
                factors including company performance, economic indicators, and
                market sentiment.
              </p>
            </div>
          </div>
          <div className='md:w-1/2 flex flex-col items-center text-center md:text-left'>
            <img
              src= {InvestStocks}
              alt='content'
              className='w-full h-64 object-cover rounded-lg shadow-lg'
            />
            <div className='flex flex-col justify-between h-full p-4'>
              <h3
                style={{ textAlign: 'center', margin: '1rem auto' }}
                className='text-xl font-semibold mt-4'
              >
                Why Invest in Stocks?
              </h3>
              <ul
                className='text-gray-300 mt-2 list-inside'
                style={{ maxWidth: '90%', padding: '2rem' }}
              >
                <li>
                  <span className='font-semibold'>
                    Potential for High Returns:
                  </span>
                  Historically, stocks have offered higher returns compared to
                  other asset classes over the long term.
                </li>
                <li>
                  <span className='font-semibold'>
                    Ownership and Dividends:
                  </span>
                  Owning shares means having a stake in the company, and many
                  companies pay dividends, providing regular income.
                </li>
                <li>
                  <span className='font-semibold'>Diversification:</span> Stocks
                  can be part of a diversified investment portfolio, helping to
                  spread risk.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
