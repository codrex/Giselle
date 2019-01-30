import React from 'react';
import Form from './Form';
import TextField from '../TextField';

function Career() {
  return (
    <Form name="career information">
      <TextField name="role" placeholder="job role" label="job role" />
      <TextField name="organisation" placeholder="organisation" label="organisation" />
    </Form>
  );
}

export default Career;
