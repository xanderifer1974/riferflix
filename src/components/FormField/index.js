import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`


`;

function FormField({ label, type, name, value, onChange }) {
 const fieldId = `id_${name}` 
 const tag = type === 'textarea' ? 'textarea': 'input';

  return (
    <div>
      <label
      htmlFor={fieldId}>
        {label}: 
        <Input
          as={tag}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  )
};

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
}

FormField.prototype	= {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value:PropTypes.string,
  onChange: PropTypes.func,
}

export default FormField;