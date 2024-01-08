import mockTransactions from '../data';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import { useState, useEffect } from 'react';


const Sales = () => {
 
  const [sales, setSales] = useState(null);

  const allCost = mockTransactions.map(transitions => parseFloat(transitions.cost));

  const totalCost = allCost.reduce((acc, currentVal) => acc + currentVal, 0);

   const roundedTotalCost = parseFloat(totalCost.toFixed(2)); 

  useEffect(() => {
    setSales(roundedTotalCost)
  }, [roundedTotalCost])

    console.log(sales);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent className='card'>
          <PointOfSaleIcon/>
          <Typography gutterBottom variant="h5" component="div">
            {sales}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sales obtained 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Sales;