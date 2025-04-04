
import React from "react";
import AccountImg from "../../assets/AccountingBook/accountBook.jpg";
import RecordImg from "../../assets/AccountingBook/recordKeep.jpg";
import FinancialImg from "../../assets/AccountingBook/finance_report.jpg";
import BudgetingImg from "../../assets/AccountingBook/analysis.jpg";
import TaxImg from "../../assets/AccountingBook/online-tax.jpg";
import FinancialAnalysisImg from "../../assets/AccountingBook/forecasting.jpg";


function AccountBook() {
  return (
    <>      {/* upper part */}
      <div
        className=""
        style={{
          marginTop: "1.5rem",
          padding: "0 2rem",
        }}
      >
        <h1
          className="text-[#0C3F40] text-center text-4xl font-bold"
          style={{ marginBottom: "5rem", paddingTop: "2rem" }}
        >
          Welcome to Kilianholding Accounting and Bookkeeping Services
        </h1>

        <div
          className="flex flex-wrap justify-between"
          style={{ gap: "2rem" }}
        >
          <div
            className="leftinfo w-full md:w-[65%]"
            style={{ marginBottom: "2rem" }}
          >
            <h2
              className="text-2xl font-normal"
              style={{ marginBottom: "2rem" }}
            >
              Kilian Holdings Ltd Consulting: Your Partner in Business Growth
            </h2>

            <p
              className="text-[15px]/[26px] text-justify"
              style={{ marginBottom: "1rem" }}
            >
              At Kilian holding, we offer comprehensive accounting and
              bookkeeping services designed to streamline financial management
              and support the growth and success of businesses. With our
              expertise and dedication to excellence, we provide tailored
              solutions to meet the unique needs of each client.
            </p>

            <p
              className="text-[15px]/[26px] text-justify"
              style={{ marginBottom: "3.7rem" }}
            >
              Accounting and bookkeeping serve as the backbone of financial
              management for businesses of all sizes. These essential functions
              involve the systematic recording, organizing, and analysis of
              financial transactions to ensure accuracy, compliance, and
              informed decision-making.
            </p>
          </div>

          <div
            className="right_img w-full md:min-w-[200px] md:max-w-[27%]"
            style={{ marginBottom: "2rem" }}
          >
            <img
              className="w-full"
              src= {AccountImg}
              alt="accountImg"
            />
          </div>
        </div>
      </div>

      {/* 2nd part */}

      <div
        className="bg-[#0C3F40] w-full text-white"
        style={{ padding: "4rem 2rem" }}
      >
        <h1
          className="text-center text-4xl font-medium"
          style={{ marginBottom: "2rem" }}
        >
          Key Aspects of Accounting and Bookkeeping
        </h1>

        <div>
          <div
            className="flex flex-wrap gap-10 justify-center"
            style={{ marginTop: "4rem" }}
          >
            <div
              className="border-white w-full md:w-[333px]"
              style={{ marginBottom: "2rem" }}
            >
              <h1 className="text-2xl text-center">Record-Keeping</h1>
              <img
                className="w-full object-cover"
                src= {RecordImg}
                style={{ marginTop: "1.8rem", height: "210px" }}
              />
              <p
                className="text-center"
                style={{ padding: "1.5rem 1rem" }}
              >
                Accountants and bookkeepers maintain detailed records of all
                financial transactions, including sales, purchases, expenses,
                and payments. This meticulous record-keeping provides a clear
                picture of a companys financial health and performance.
              </p>
            </div>

            <div
              className="border-white w-full md:w-[333px]"
              style={{ marginBottom: "2rem" }}
            >
              <h1 className="text-2xl text-center">Financial Reporting</h1>
              <img
                className="w-full object-cover"
                src= {FinancialImg}
                style={{ marginTop: "1.8rem", height: "210px" }}
              />
              <p
                className="text-center"
                style={{ padding: "1.5rem 1rem" }}
              >
                Through the preparation of financial statements such as balance
                sheets, income statements, and cash flow statements, accounting
                professionals offer valuable insights into a companys
                profitability, liquidity, and solvency. These reports help
                stakeholders assess the companys financial position and make
                strategic decisions.
              </p>
            </div>

            <div
              className="border-white w-full md:w-[333px]"
              style={{ marginBottom: "2rem" }}
            >
              <h1 className="text-2xl text-center">
                Budgeting and Forecasting
              </h1>
              <img
                className="w-full object-cover"
                src= {BudgetingImg}
                style={{ marginTop: "1.8rem", height: "210px" }}
              />
              <p
                className="text-center"
                style={{ padding: "1.5rem 1rem" }}
              >
                Accounting and bookkeeping professionals assist businesses in
                creating budgets and financial forecasts to plan and manage
                finances effectively. By analyzing historical data and
                projecting future revenues and expenses, companies can set
                realistic financial goals and allocate resources efficiently.
              </p>
            </div>
          </div>

          <div
            className="flex flex-wrap justify-center gap-10"
            style={{ margin: "1rem" }}
          >
            <div
              className="border-white w-full md:w-[333px]"
              style={{ marginBottom: "2rem" }}
            >
              <h1 className="text-2xl text-center">Tax Compliance</h1>
              <img
                className="w-full object-cover"
                src= {TaxImg}
                style={{ marginTop: "1.8rem", height: "210px" }}
              />
              <p
                className="text-center"
                style={{ padding: "1.5rem 1rem" }}
              >
                Tax preparation is a crucial aspect of accounting and
                bookkeeping services. Professionals ensure compliance with tax
                laws and regulations by accurately calculating taxes owed,
                preparing tax retums, and identifying opportunities for tax
                savings
              </p>
            </div>

            <div
              className="border-white w-full md:w-[333px]"
              style={{ marginBottom: "2rem" }}
            >
              <h1 className="text-2xl text-center">Financial Analysis</h1>
              <img
                className="w-full object-cover"
                src= {FinancialAnalysisImg}
                style={{ marginTop: "1.8rem", height: "210px" }}
              />
              <p
                className="text-center"
                style={{ padding: "1.5rem 1rem" }}
              >
                Accountants and bookkeepers analyze financial data to assess
                performance, identify trends, and evaluate the effectiveness of
                business strategies. Through financial analysis, companies can
                uncover areas for improvement, mitigate risks, and capitalize on
                opportunities for growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default  AccountBook;