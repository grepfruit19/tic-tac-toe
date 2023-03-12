import { useState } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

/*
  In React, a component is basically an HTML element that has logic built into it.
  This means that it can handle things like state, and logic.
*/

const styles = {
  outerBox: {
    border: "none",
    height: "700px",
    width: "700px",
    backgroundColor: "rgb(191, 177, 204)",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  innerBox: {
    backgroundColor: "white",
    height: "150px",
    width: "150px",
    margin: "5px",
    padding: "0px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "darkBlue",
    border: "none",
    width: "150px",
    height: "150px",
    cursor: "pointer",
  },
};

function Button() {
  const [buttonState, setButtonState] = useState("X");

  function updateState() {
    if (buttonState === "") setButtonState("X");
    else if (buttonState === "X") setButtonState("O");
    else if (buttonState === "O") setButtonState("");
  }

  return (
    <button onClick={updateState} style={styles.button}>
      {buttonState}
    </button>
  );
}

export default function Home() {
  const [boardState, setBoardState] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  function renderBoard() {
    const output = [];
    for (let i = 0; i < 3; i++) {
      output.push(<Button />);
    }
    return output;
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={styles.outerBox}>
        {renderBoard()}
        {/* <div style={styles.row}>
          <div style={styles.innerBox}>
            <Button />
          </div>
          <div style={styles.innerBox}>
            <Button />
          </div>
          <div style={styles.innerBox}>
            <Button />
          </div>
        </div>
        <div style={styles.row}>
          <div style={styles.innerBox}>
            <Button />
          </div>
          <div style={styles.innerBox}>
            <Button />
          </div>
          <div style={styles.innerBox}>
            <Button />
          </div>
        </div>
        <div style={styles.row}>
          <div style={styles.innerBox}>
            <Button />
          </div>
          <div style={styles.innerBox}>
            <Button />
          </div>
          <div style={styles.innerBox}>
            <Button />
          </div>
        </div> */}
      </div>
    </>
  );
}
