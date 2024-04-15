import React, { useContext } from "react";
import { TextField } from "@mui/material"; // Importing the TextField component from Material-UI
import { ConfigurationContext } from "../../context/config.jsx";

function AdContent() {
  const { configuration, setConfiguration } = useContext(ConfigurationContext);

  const textHandler = (e) => {
    const newText = e.target.value;
    setConfiguration((prevConfig) => ({
      ...prevConfig,
      adContent: newText
    }));
  };

  return (
    <div className="flex flex-col  sm:w-4/5 sm:h-14 w-5/6 h-13 rounded-lg">
      <TextField
        variant="outlined"
        label="Ad Content"
        className="mx-3"
        value={configuration.adContent} // Set value to display current ad content
        onChange={(e) => textHandler(e)}
        InputLabelProps={{
          shrink: true, // Ensure label shrinks when input is focused
          style: { color: "#2E3A59", fontSize: "14px", fontWeight: "bold" } // Customize label styles here
        }}
      />
    </div>
  );
}

export default AdContent;
