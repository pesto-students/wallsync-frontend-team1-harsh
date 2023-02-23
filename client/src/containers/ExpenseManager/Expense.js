import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Panel from "../../components/panel/Panel";
import Nav from "../../components/nav/Nav";
import "./expensemanager.css";
import Button from "../../components/button/Button";
import pic1 from "../../assets/group.png";
import Table from "./components/Table";
import Avatar from "../../components/avatar/Avatar";
import axios from "axios";
import ExpenseChart from "./components/Chart";
const Expense = () => {
  const [content, setContent] = useState([]);
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    const getGroup = () => {
      axios
        .get("http://localhost:8000/api/63f361935a6870f14f57389d/getSummary")
        .then((data) => {
          console.log(data.data);
          setContent(data.data.expensesArray);
          setChartData(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getGroup();
  }, []);
  //table data
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "Description", headerName: "Description", width: 200 },
    { field: "Amount", headerName: "Amount", width: 200, sortable: true },
    {
      field: "Date",
      headerName: "Date",
      type: "number",
      width: 200,
      sortable: true,
    },
  ];
  const rows = [];
  {
    content.map((item, i) => {
      rows.push({
        id: i + 1,
        Description: item.description,
        Amount: item.amount,
        Date: item.date.substr(0, 10),
      });
    });
  }
  //doughnut data
  const data = {
    datasets: [
      {
        // label: "My First Dataset",
        data: [chartData.income, chartData.savings, chartData.total],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
    labels: ["Income", "Savings", "Total"],
  };
  return (
    <div>
      <Header className="landingButtons" children={<Avatar />} />
      <div className="ExpenseBody">
        <div className="navigation">
          <Nav />
        </div>
        <div className="mainDashBoard">
          <div className="board">
            <div className="topButtons">
              <Button buttonName="weekly" />
              <Button buttonName="summary" />
            </div>
            <div className="mainChart">
              <div className="spendingsTable">
                <Table rowData={rows} columnData={columns} />
              </div>
              <div className="spendingsDoughnut">
                {/* <img src={pic1} alt="" /> */}
                <ExpenseChart pieData={data} />
              </div>
            </div>
            <div className="middleLayer">
              <input type="text" placeholder="add exp" />
              <Button buttonName="limit" />

              <Button buttonName="income" />
            </div>
            <div className="LowerCharts">
              <div className="spendings">
                <p>February spendings: {chartData.total}</p>
              </div>
              <div className="BigChart">
				
			  </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Expense;
