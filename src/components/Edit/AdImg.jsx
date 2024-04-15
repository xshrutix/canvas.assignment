import React, { useContext, useState } from 'react';
import { Button, Typography, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImport } from '@fortawesome/free-solid-svg-icons';
import { ConfigurationContext } from '../../context/config.jsx';

function AdImg() {
  const { setConfiguration } = useContext(ConfigurationContext);
  const [imgname, setImgName] = useState();

  const imageHandler = (e) => {
    const filename = e.target.files[0]?.name;
    setImgName(filename);
    const imgurl = URL.createObjectURL(e.target.files[0]);
    setConfiguration((prevConfig) => ({
      ...prevConfig,
      image: imgurl,
    }));
  };

  return (
    <Grid sx={{ width: '84%' }} spacing={1} container alignItems="center" className="border-2 border-slate-300 rounded-lg">
      <Grid item xs={12} sm={6}>
        <Typography variant="body1" className="text-slate-500">
          Change the ad creative image.
        </Typography>
      </Grid>
      <Grid item>
        <input type="file" id="image-input" hidden onChange={(e) => imageHandler(e)} />
        <label htmlFor="image-input">
          <Button component="span" color="primary">
            <FontAwesomeIcon icon={faFileImport} className=" cursor-pointer" />
          </Button>
        </label>
      </Grid>
      <Grid item>
        <label htmlFor="image-input" className="text-blue-700 font-semibold cursor-pointer underline underline-offset-1">
          Select file
        </label>
      </Grid>
      <Grid item xs={12} sm={5}>
        <Typography variant="body2" className="text-slate-500 truncate">
          {imgname}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default AdImg;
