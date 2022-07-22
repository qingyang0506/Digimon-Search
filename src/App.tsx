import { Box, Typography, TextField, Button,Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import axios from "axios";
import {Digimon} from "./type"
import DigimonCard from "./Component/DigimonCard";

function App() {

  const [input,setInput] = useState("");
  const [dataArray,setDataArray] = useState<Digimon[] | null | undefined>(undefined);

  const search = () => {
      if(input!==null && input !== undefined){
          axios.get(`https://digimon-api.vercel.app/api/digimon/level/${input}`).then(res=>{
               setDataArray(res.data);
               console.log(res.data);
          }).catch(err=>{
              console.log(err);
          });

          axios.get(`https://digimon-api.vercel.app/api/digimon/name/${input}`).then(res=>{
               setDataArray(res.data);
                console.log(res.data);
          }).catch(err=>{
              console.log(err);
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
          height: "80vh",
          width: "80vw",
          margin: "auto",
          // bgcolor:'pink',
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
              onChange={(e) => setInput(e.target.value)}
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

         {/* <Grid container spacing={3}
         sx={{
            mt:'2vh'
         }}
         >
             {
              dataArray && dataArray.map((item:Digimon,index:number)=>{
                  return(
                      <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                          <DigimonCard {...item}/>
                      </Grid>
                  )
              })
             }
             
         </Grid> */}
      </Box>
    </Box>
  );
}

export default App;
