import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { makeErrorProps } from 'react-mui-validation';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { format } from 'date-fns';

import { DataProps } from '../App';
import AddressModel from './AddressModel';

export default function AddressForm(props: DataProps<AddressModel>) {
  const {data, setData, errorState} = props;  
  const [value, setValue] = React.useState<string | null>(null);

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
        Buyer information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={data.firestName}
            onChange={onChange}
            {...makeErrorProps(errorState, 'firstName')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={data.lastName}
            onChange={onChange}
            {...makeErrorProps(errorState, 'lastName')}
          />
        </Grid>
        
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
                label="reservation Date and Time"
                value={value}
                onChange={(newValue, keyboardInputValue) => {
                  let result = keyboardInputValue;
                  if (newValue && newValue.toString() !== 'Invalid Date') {
                    result = format(new Date(newValue), 'yyyy-MM-dd HH:mm');
                  }
                  setData({ ...data, dtm: result ?? '' });
                  // 화면에 갱신 문제로 이렇게 처리 해야함... :(
                  setValue(newValue);
                }}
                inputFormat="yyyy-MM-dd HH:mm"
                disableOpenPicker={false}
                ampm={false}
                mask="____-__-__ __:__"
                renderInput={dProps => (
                  <TextField
                    {...dProps}
                    required
                    variant="standard"
                    sx={{ width: '100%' }}
                    {...makeErrorProps(errorState, 'dtm')}
                  />
                )}
              />
            </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            variant="standard"
            value={data.email}
            onChange={onChange}
            {...makeErrorProps(errorState, 'email')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email2"
            name="email2"
            label="Check email"
            fullWidth
            autoComplete="check email"
            variant="standard"
            value={data.email2}
            onChange={onChange}
            {...makeErrorProps(errorState, 'email2')}
          />
       </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="orderCnt"
            name="orderCnt"
            label="Order count"
            type="number"
            fullWidth
            autoComplete="Order count"
            variant="standard"
            value={data.orderCnt}
            onChange={onChange}
            {...makeErrorProps(errorState, 'orderCnt')}

          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={data.address1}
            onChange={onChange}
            {...makeErrorProps(errorState, 'address1')}

          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value={data.address2}
            onChange={onChange}
            
            {...makeErrorProps(errorState, 'address2')}

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={data.city}
            onChange={onChange}
            
            {...makeErrorProps(errorState, 'city')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            value={data.state}
            onChange={onChange}
            
            {...makeErrorProps(errorState, 'state')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={data.zip}
            onChange={onChange}
            
            {...makeErrorProps(errorState, 'zip')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            value={data.country}
            onChange={onChange}
            
            {...makeErrorProps(errorState, 'country')}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}