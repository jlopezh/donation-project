import React, { PropTypes } from 'react';
import Form from 'react-jsonschema-form';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Register.scss';

function validate(formData, errors) {
  console.log("formData : ", formData);
  console.log("formData : ", formData);
}

const schema = {
  "title": "A registration form",
  "type": "object",
  "required": [
    "firstName",
    "lastName"
  ],
  "properties": {
    "firstName": {
      "type": "string",
      "title": "First name"
    },
    "lastName": {
      "type": "string",
      "title": "Last name"
    },
    "age": {
      "type": "integer",
      "title": "Age"
    },
    "bio": {
      "type": "string",
      "title": "Bio"
    },
    "password": {
      "type": "string",
      "title": "Password",
      "minLength": 3
    }
  }
};

const uiSchema = {
  "age": {
    "ui:widget": "updown"
  },
  "bio": {
    "ui:widget": "textarea"
  },
  "password": {
    "ui:widget": "password",
    "ui:help": "Hint: Make it strong!"
  },
  "date": {
    "ui:widget": "alt-datetime"
  }
}

const log = (type) => console.log.bind(console, type);

function Register({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <Form schema={schema}
              uiSchema={uiSchema}
              validate={validate}
              onChange={log("changed")}
              onSubmit={log("submitted")}
              onError={log("errors")} />
      </div>
    </div>
  );
}

Register.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(Register, s);
