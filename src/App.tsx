import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import { Digimon, Props } from "./type";
import DigimonCard from "./Component/DigimonCard";
import HelpIcon from "@mui/icons-material/Help";
import HelpModel from "./Component/HelpModel";

function App() {
  const [input, setInput] = useState("");
  const [dataArray, setDataArray] = useState<Digimon[] | null | undefined>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const data: Props = {
    open,
    handleClose,
  };

  useEffect(()=>{
     console.clear();
  })

  const search = () => {
    setLoading(true);
    setDataArray(null);
    if (input !== null && input !== undefined) {
      axios
        .get(`https://digimon-api.vercel.app/api/digimon/level/${input}`)
        .then((res) => {
          setDataArray(res.data);
        })
        .catch((err) => {
        });

      axios
        .get(`https://digimon-api.vercel.app/api/digimon/name/${input}`)
        .then((res) => {
          setDataArray(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: {xs:"4vh",sm:"12vh"},
          right: {xs:"2vw",sm:"15vw"},
        }}
      >
        <Tooltip title="help">
          <IconButton onClick={() => setOpen(true)}>
            <HelpIcon sx={{ fontSize: "40px" }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Box
        sx={{
          height: "80vh",
          width: "80vw",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ mt: "5vh" }}>
          <Typography
            variant="h4"
            fontWeight={800}
            textAlign="center"
            fontSize={"30px"}
          >
            Digimon Search
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              mt: "3vh",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Enter a Digimon name or level"
              variant="outlined"
              placeholder="Search..."
              size="medium"
              onChange={(e) => setInput(e.target.value.trim())}
            />

            <Button
              startIcon={
                <SearchIcon
                  sx={{ color: "blue", fontSize: "18px", mr: "-4px" }}
                />
              }
              sx={{ ml: "1vw" }}
              onClick={search}
            >
              Search
            </Button>
          </Box>
        </Box>

        {loading ? (
          <Box sx={{ display: "flex", mt: "20vh" }}>
            <CircularProgress />
          </Box>
        ) : dataArray === null || dataArray === undefined ? (
          <Box sx={{ mt: "20vh" }}>
            <Typography variant="h3" color={"pink"}>
              No Result
            </Typography>
          </Box>
        ) : (
          <Grid
            container
            spacing={3}
            sx={{
              mt: "2vh",
            }}
          >
            {dataArray &&
              dataArray.map((item: Digimon, index: number) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <DigimonCard {...item} />
                  </Grid>
                );
              })}
          </Grid>
        )}
      </Box>
      {open ? <HelpModel {...data} /> : null}
    </Box>
  );
}

export default App;
