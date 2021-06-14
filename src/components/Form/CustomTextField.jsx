import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function FormInput({ name, label, required, type }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={TextField}
        name={name}
        control={control}
        label={label}
        fullWidth
        required={required}
        error={isError}
        color="secondary"
        type={type}
        variant="filled"
        style={{margin: 10, fontWeight: 'bold', overflow: 'none'}}
      />
    </Grid>
  );
}

export default FormInput;
