import React, { useContext, useState } from "react";
import { TextField } from "@mui/material"; // Importing the TextField component from Material-UI
import { ConfigurationContext } from "../../context/config.jsx";

function AdCTA() {
  const [cta, setCta] = useState("");
  const { setConfiguration } = useContext(ConfigurationContext);

  const ctaHandler = (e) => {
    const newCta = e.target.value;
    setCta(newCta);
    setConfiguration((prevConfig) => ({
      ...prevConfig,
      cta: newCta
    }));
  }

  return (
    <>
      <div className="flex flex-col w-5/6 sm:w-4/5 h-14 rounded-lg">
        <TextField
          variant="outlined"
          label="CTA"
          className="mx-3 mb-1"
          value={cta}
          onChange={(e) => ctaHandler(e)}
          InputLabelProps={{
            shrink: true,
            style: { color: "#2E3A59", fontSize: "14px", fontWeight: "bold" }
          }}
        />
      </div>
    </>
  );
}

export default AdCTA;
