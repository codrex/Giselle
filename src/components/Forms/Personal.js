import React from 'react';
import Form from './Form';
import TextField from '../TextField';
import Select from '../Select';
import { COUNTRIES } from '../../constants';
import { buildSelectOptions } from '../../utils';

function Personal() {
  return (
    <Form name="personal information">
      <TextField name="firstName" placeholder="first name" label="first name" />
      <TextField name="lastName" placeholder="last name" label="last name" />
      <TextField name="phone" placeholder="phone" label="phone" type="tel" />
      <Select
        name="country"
        placeholder="Select your country"
        options={buildSelectOptions(COUNTRIES)}
        label="country"
      />
    </Form>
  );
}

export default Personal;
