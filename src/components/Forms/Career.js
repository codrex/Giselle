import React from 'react';
import Form from './Form';
import TextField from '../TextField';

function Career() {
  return (
    <Form name="career information">
      <TextField name="role" placeholder="your job role" label="job role" />
      <TextField name="organisation" placeholder="your organisation" label="organisation" />
    </Form>
  );
}

export default Career;
