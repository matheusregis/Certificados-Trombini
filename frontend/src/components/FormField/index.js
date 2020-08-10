import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label, FormFieldWrapper, TextLabel } from './styles';

function FormField({
  label, type, name, value, onChange
}) {
  const fieldId = `id_${name}`;


  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        <Input
          id={fieldId}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
        <TextLabel>
          {label}
        </TextLabel>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default FormField;
