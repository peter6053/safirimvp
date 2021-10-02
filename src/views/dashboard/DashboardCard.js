import React from 'react';

const DashboardCard = ({amount, title, color, icon}) => {

    const cardStyle =  {
        backgroundColor: color.bgColor,
        color: color.col,
        width: "250px",
        height: "200px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    };

    return (
        <div style={cardStyle}>
            { icon && <img src={icon} alt="icon"/>}
            {amount &&  <h2 style={{fontSize: '2.5rem', lineHeight: '1.6'}}>${amount}</h2>}
            { title &&  <p style={{color: "black", fontSize: '1.2rem'}}>{title}</p>}
        </div>
    );
};

export default DashboardCard;