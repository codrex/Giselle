import React from 'react';
import Form from './Form';
import TextField from '../TextField';

function Password() {
  return (
    <Form name="password information">
      <TextField
        type="password"
        name="current password"
        placeholder="current password"
        label="current password"
      />
      <TextField
        type="password"
        name="new password"
        placeholder="new password"
        label="new password"
      />
    </Form>
  );
}

export default Password;
