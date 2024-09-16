import React, { createContext, useContext, useId, useState } from "react";
import { Box } from "@material-ui/core";
import ModalWindow from "./Modal";
import {
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery
} from "@mui/material";
import MainContainer from "./MainContainer";
import theme from "../lib/theme";
import AppContext from "../store/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { router } from "next/client";
import useSound from "use-sound";

export function Notify() {
  return <ToastContainer />;
}

export const FormCreate = () => {
  const isMobile = useMediaQuery("(max-width:480px)");
  const isTablet = useMediaQuery("(max-width:760px)");

  const [showNotify, setShowNotify] = useState(false);

  const [play] = useSound("/boom.mp3");

  const notify = () => toast("item sussed added");

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
    createdAt: ""
  });

  const getUsersInContext = useContext(AppContext);

  const handleChange = event => {
    const { id, value } = event.target;

    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    getUsersInContext.push(formData);
    setShowNotify(true);
    notify();
    router.push("/infoCard").then(r => r);
  };

  return (
    <>
      <MainContainer>
        <>
          <Box className="form-create">
            <Typography
              variant={isMobile ? (isTablet ? "h5" : "h4") : "h2"}
              sx={{
                backgroundColor: isMobile
                  ? theme.typography.h4
                  : isTablet
                  ? theme.typography.h3
                  : theme.typography.h2,
                margin: "10px",
                padding: "10px"
              }}
            >
              <pre>Please submit </pre>
              <pre>form the</pre>
            </Typography>
            <form action="" onSubmit={e => handleSubmit(e)}>
              <Grid
                container
                rowSpacing={{ xs: "24px", sm: "24px" }}
                columnSpacing="24px"
              >
                <Grid item xs={12} sm={10}>
                  <Grid
                    sx={{ padding: "0px 16px" }}
                    container
                    rowSpacing={{ xs: "16px", sm: "16px" }}
                    maxWidth="900px"
                    columnSpacing="24px"
                  >
                    <Grid xs={12} sm={6} md={6} item>
                      <TextField
                        id="id"
                        label="id"
                        variant="outlined"
                        required
                        onChange={e => handleChange(e)}
                      />
                    </Grid>
                    <Grid xs={12} sm={6} md={6} item>
                      <TextField
                        id="name"
                        label="name"
                        variant="outlined"
                        required
                        onChange={e => handleChange(e)}
                      />
                    </Grid>
                    <Grid xs={12} sm={6} md={6} item>
                      <TextField
                        id="price"
                        label="price"
                        variant="outlined"
                        onChange={e => handleChange(e)}
                        required
                      />
                    </Grid>
                    <Grid xs={12} sm={6} md={6} item>
                      <TextField
                        id="createdAt"
                        label="createdAt"
                        variant="outlined"
                        onChange={e => handleChange(e)}
                        required
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Button type="submit" variant="contained" onClick={play}>
                SAVE
              </Button>
            </form>
          </Box>
          {showNotify && <Notify />}
        </>
      </MainContainer>
    </>
  );
};

export default FormCreate;
