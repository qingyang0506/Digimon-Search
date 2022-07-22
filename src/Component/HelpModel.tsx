import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import {Props} from "../type"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height:300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const HelpModel:React.FC<Props>= ({open,handleClose})=>{
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Hints and Help
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 , mb:2}}>
               User can enter the digimon'name or level for searching. If you enter the name, 
               there will only one digimon card to show. if you enter the level,there will list
               all the digimon cards that have the same level. 
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h2" >
              Example
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 1 }}>
               Name:Koromon,Palmon,Birdramon,Gabumon
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 1 }}>
               Level:Mega,Rookie,In Training,Champion
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default HelpModel;