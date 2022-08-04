import React from "react";

const ProfilePage = () => {
  const styles = {
    mainContainerStyle: {
      height: "80vh",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "1rem",
    },
    infoContainerStyle: {
      height: "100%",
      width: "50%",
      display: "flex",
      flexDirection: "column",
    },
    transactionContainerStyle: {
      height: "100%",
      width: "50%",
      border: ".1rem solid black",
      marginLeft: ".8rem",
    },
    petriDishContainerStyle: {
      height: "60%",
      width: "100%",
      border: ".1rem solid black",
      marginTop: ".5rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    personalInfoContainerStyle: {
      height: "40%",
      width: "100%",
      border: ".1rem solid black",
    },
    sectionTitleStyle: {
      textAlign: "center",
      textDecoration: "underline",
    },
    peronalItemContainerStyle: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "25%",
    },
    personalInfoItemsStyle: {
      fontSize: "1.2rem",
      margin: "1.5rem",
      textDecoration: "underline",
      textUnderlineOffset: ".1rem",
    },
    updateButtonStyle: {
      margin: "1rem",
    },
    amoebaeContainerStyle: {
      display: "flex",
      flexWrap: "wrap",
      height: "70%",
      marginTop: "1rem",
      fontSize: "2.5rem",
    },
    tableStyles: {
      height: "90%",
      width: "100%",
      marginTop: "1rem",
    },
    tableRowStyle: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "1rem",
    },
    tableHeaderStyle: {
      fontSize: "1.3rem",
      textDecoration: "underline",
      textUnderlineOffset: ".1rem",
    },
    redeemStyle: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <div style={styles.mainContainerStyle}>
      <div style={styles.infoContainerStyle}>
        <div style={styles.personalInfoContainerStyle}>
          <h1 style={styles.sectionTitleStyle}>Personal Information</h1>
          <div style={styles.peronalItemContainerStyle}>
            <p style={styles.personalInfoItemsStyle}>UserName:</p>
            <button style={styles.updateButtonStyle}>update</button>
          </div>
          <div style={styles.peronalItemContainerStyle}>
            <p style={styles.personalInfoItemsStyle}>Email:</p>
            <button style={styles.updateButtonStyle}>update</button>
          </div>
          <div style={styles.peronalItemContainerStyle}>
            <p style={styles.personalInfoItemsStyle}>Password:</p>
            <button style={styles.updateButtonStyle}>update</button>
          </div>
        </div>
        <div style={styles.petriDishContainerStyle}>
          <h1 style={styles.sectionTitleStyle}>Petri Dish</h1>
          <div style={styles.amoebaeContainerStyle}>
            &#x1F9A0;&#x1F9A0;&#x1F9A0;&#x1F9A0;
            &#x1F9A0;&#x1F9A0;&#x1F9A0;&#x1F9A0;
            &#x1F9A0;&#x1F9A0;&#x1F9A0;&#x1F9A0;
            &#x1F9A0;&#x1F9A0;&#x1F9A0;&#x1F9A0;
            &#x1F9A0;&#x1F9A0;&#x1F9A0;&#x1F9A0;
            &#x1F9A0;&#x1F9A0;&#x1F9A0;&#x1F9A0;
            &#x1F9A0;&#x1F9A0;&#x1F9A0;&#x1F9A0;
            &#x1F9A0;&#x1F9A0;&#x1F9A0;&#x1F9A0;
          </div>
          <div style={styles.redeemStyle}>
            <button>redeem</button>
            <p>*redeem 100 amoebae for a free plushie</p>
          </div>
        </div>
      </div>
      <div style={styles.transactionContainerStyle}>
        <h1 style={styles.sectionTitleStyle}>Transaction History</h1>
        <table style={styles.tableStyles}>
          <tr style={styles.tableRowStyle}>
            <th style={styles.tableHeaderStyle}>Project</th>
            <th  style={styles.tableHeaderStyle}>Amount</th>
            <th  style={styles.tableHeaderStyle}>Date</th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ProfilePage;
