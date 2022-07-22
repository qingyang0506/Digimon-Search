import { Digimon } from "../type";
import {Card,CardActionArea,CardContent,Typography,CardMedia} from "@mui/material"

const DigimonCard: React.FC<Digimon> = ({ img, name, level }) => {
  return (
    <Card sx={{ maxWidth: 265 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={img}
          alt={name}
        />
        <CardContent>
          <Typography  variant="body1" textAlign={'center'}>
              Name:{name} 
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign={'center'}>
                Level:{level}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DigimonCard;
