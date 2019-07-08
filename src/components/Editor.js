import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const Editor = props => {
  const placeholderText = 'Start typing your markdown here...';
  return (
    <Form onSubmit={e => e.preventDefault}>
      <FormGroup>
        <Label for="editor">Text Area</Label>
        <Input
          type="textarea"
          name="text"
          id="editor"
          placeholder={placeholderText}
          value={props.markdown}
          onChange={props.onInputChange}
        />
      </FormGroup>
    </Form>
  );
};

export default Editor;
