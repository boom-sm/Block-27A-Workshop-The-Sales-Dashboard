import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const Revenue = () => {


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent className='revenue'>
          <Typography variant="body2" color="text.secondary">
            Revenue Generated 
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            $55,000
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Revenue;