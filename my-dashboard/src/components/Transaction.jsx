import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';




import mockTransactions from '../data';

const Transactions = () => {
  return (
    <List className='transactionList'>
      {mockTransactions.map((singleTransaction, index) => (
        <ListItem key={index} className='transaction' component="div" disablePadding>
          <ListItemButton className='listItem'>
            <ListItemText primary={`Transaction ID: ${singleTransaction.txId}`} />
            <ListItemText primary={`User: ${singleTransaction.user}`} />
            <ListItemText primary={`Date: ${singleTransaction.date}`} />
            
            <ListItemText primary={`Cost: ${singleTransaction.cost}`} />
            
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default Transactions;