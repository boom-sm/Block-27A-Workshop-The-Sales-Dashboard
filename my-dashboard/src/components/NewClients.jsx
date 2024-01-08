import mockTransactions from '../data';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import { useState, useEffect } from 'react';


const NewClients = () => {
 
  const [clients, setClients] = useState(null);

  useEffect(() => {
    const allCLients = mockTransactions.length;
    setClients(allCLients);
  }, []);


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent className='card'>
          <PeopleIcon/>
          <Typography gutterBottom variant="h5" component="div">
            {clients !== null ? clients : 'Loading...'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            New Clients 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default NewClients;