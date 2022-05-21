import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { DataProps } from '../App';
import { PaymentModel } from './PaymentModel';
import { makeErrorProps } from 'react-mui-validation';

export default function PaymentForm(props: DataProps<PaymentModel>) {
  const {data, setData, errorState} = props;
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    if (type === 'number' && parseInt(value) < 0) {
      setData({
        ...data,
        [name]: 0,
      });
      return;
    }
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            name="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={data.cardName}
            onChange={onChange}
            {...makeErrorProps(errorState, 'cardName')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            name="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={data.cardNumber}
            onChange={onChange}
            {...makeErrorProps(errorState, 'cardNumber')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            name="expDate"

            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            value={data.expDate}
            onChange={onChange}
            {...makeErrorProps(errorState, 'expDate')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            name="cvv"
            label="CVV"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={data.cvv}
            onChange={onChange}
            {...makeErrorProps(errorState, 'cvv')}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}