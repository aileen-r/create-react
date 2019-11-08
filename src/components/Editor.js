import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import 'styles/Editor.css'; // Tell Webpack that Button.js uses these styles

const Editor = props => {
  const placeholderText = 'Start typing your markdown here...';
  return (
    <Form onSubmit={e => e.preventDefault}>
      <FormGroup>
        <Label for="editor" hidden>
          Simple Markdown Editor
        </Label>
        <Input
          className="editor-input"
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
