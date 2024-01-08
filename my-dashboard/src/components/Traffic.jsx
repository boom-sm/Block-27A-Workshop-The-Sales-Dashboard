import mockTransactions from '../data';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TrafficIcon from '@mui/icons-material/Traffic';
import { useState, useEffect } from 'react';


const Traffic = () => {
 
  const [clients, setClients] = useState(null);

  useEffect(() => {
    const allCLients = mockTransactions.length;
    setClients(allCLients);
  }, []);


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent className='card'>
          <TrafficIcon/>
          <Typography gutterBottom variant="h5" component="div">
            {clients !== null ? clients : 'Loading...'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Traffic recieved
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Traffic;