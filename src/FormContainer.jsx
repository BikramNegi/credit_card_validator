import { useState } from 'react';

const FormContainer = () => {
  const config = [
    {
      name: 'number_input',
      value: '',
      isError: true,
      labelName: 'Card Number',
      type: 'number',
      maxLength: '16',
      error_msg: 'Card Number is not valid',
      validate: function (value) {
        if (value.length == 16) {
          return true;
        }
        return false;
      },
    },
    {
      name: 'name_input',
      value: '',
      isError: true,
      labelName: 'Card Holder Name',
      type: 'text',
      maxLength: '15',
      error_msg: 'Card Name is not valid',
      validate: function (value) {
        const characterRegex = /^[a-zA-Z]*$/;
        if (
          characterRegex.test(value) &&
          value.length <= 15 &&
          value.length >= 4
        ) {
          return true;
        }
        return false;
      },
    },
    {
      name: 'month_input',
      value: '',
      isError: true,
      labelName: 'Card Month',
      type: 'number',
      maxLength: '2',
      error_msg: 'Card Month is not valid',
      validate: function (value) {
        if (value.length == 2) {
          return true;
        }
        return false;
      },
    },
    {
      name: 'year_input',
      value: '',
      isError: true,
      labelName: 'Card Year',
      type: 'number',
      maxLength: '4',
      error_msg: 'Card Year is not valid',
      validate: function (value) {
        if (value.length == 4) {
          return true;
        }
        return false;
      },
    },
    {
      name: 'cvv_input',
      value: '',
      isError: true,
      labelName: 'Card CVV',
      type: 'number',
      maxLength: '3',
      error_msg: 'Card CVV is not valid',
      validate: function (value) {
        if (value.length == 3) {
          return true;
        }
        return false;
      },
    },
  ];

  const [formData, setFormData] = useState(config);

  const handleChange = (e, index) => {
    let value = e.target.value;
    if (value.length <= formData[index].maxLength) {
      let newformData = [...formData];
      newformData[index].value = e.target.value;
      newformData[index].isError = formData[index].validate(e.target.value)
        ? false
        : true;
      setFormData(newformData);
    } else return;
  };

  return (
    <form>
      {formData.map((eachFormItem, index) => (
        <div className="form_group" key={index}>
          <label htmlFor={eachFormItem.name}>{eachFormItem.labelName}</label>
          <input
            type={eachFormItem.type}
            id={eachFormItem.name}
            value={eachFormItem.value}
            onChange={(e) => handleChange(e, index)}
          />
          {eachFormItem.isError && (
            <span className="error_msg">{eachFormItem.error_msg}</span>
          )}
        </div>
      ))}
    </form>
  );
};

export default FormContainer;
