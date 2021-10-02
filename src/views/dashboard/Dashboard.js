import React from 'react';
import classes from './Dashboard.module.css';
import DashboardCard from "./DashboardCard";
import DashboardChart from "./DashboardChart";


const Dashboard = () => {
    const data = [
        {
            amount: "1500",
            title: "Amount saved",
            color: {bgColor: "#DCEEF5", col: "#0692C4"}
        },
        {
            amount: "5000",
            title: "Budget",
            color: {bgColor: "#D8FAD2", col: "#1FC406"}
        },
        {
            amount: "800",
            title: "Attainable emergency fund",
            color: {bgColor: "#F7E4E4", col: "#C4060C"}
        },

        // {
        //     icon: "/home/whalewalker/Whalewalker/Portfolio/Safiri-frontend/safiri/src/assets/redit-card.png",
        //     title: "Make payment from your flutterwave card",
        //     color: {bgColor: "#D8FAD2", col: "#1FC406"}
        // }

    ]
    return (
        <div>
               <h2>Dashboard</h2>
               <div className={classes["card-data"]}>
                   {data.map((value, key) =>
                       <DashboardCard
                           key={key}
                           icon={value.icon}
                           title={value.title}
                           amount={value.amount}
                           color={value.color}
                       />
                   )}
               </div>
                   <h3>Quick links</h3>
                    <DashboardChart/>
        </div>
    );
};

export default Dashboard;