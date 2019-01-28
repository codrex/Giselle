import React from 'react';
import Form from './Form';
import TextField from '../TextField';

function Email() {
  return (
    <Form name="change email information">
      <TextField
        type="email"
        name="newEmail"
        placeholder="your new email"
        label="new email"
        inputProps={{ required: true }}
      />
      <TextField
        type="email"
        name="confirmEmail"
        placeholder="confirm email"
        label="confirm email"
        inputProps={{ required: true }}
      />
    </Form>
  );
}

export default Email;
