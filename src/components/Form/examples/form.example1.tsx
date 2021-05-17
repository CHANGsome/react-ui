import * as React from 'react';
import Form, { FieldsType, FormDataType, FormErrorType } from '../index';
import Button from '../../Button';
import { useState } from 'react';
import Validator, { FormRules } from '../validator';

interface Props extends React.HTMLAttributes<HTMLElement> {}
const FormExample1: React.FC<Props> = (props) => {
  const [formData, setFormValue] = useState<FormDataType>({
    username: 'zhangsan',
    password: '123456',
  });
  const [fields] = useState<Array<FieldsType>>([
    {
      name: 'username',
      label: '用户名',
      input: { type: 'text' },
    },
    {
      name: 'password',
      label: '密码',
      input: { type: 'password' },
    },
  ]);
  const [errors, setErrors] = useState<FormErrorType>({});
  const onSubmit = () => {
    const rules: FormRules = [
      {
        key: 'username',
        required: true,
        minLens: 3,
        maxLens: 6,
        pattern: /^[a-zA-Z]+$/,
      },
      {
        key: 'password',
        required: true,
      },
    ];
    const errors = Validator(formData, rules);
    setErrors(errors);
  };
  return (
    <div style={{ marginBottom: '20px' }}>
      <Form
        value={formData}
        fields={fields}
        buttons={
          <>
            <Button>提交</Button>
            <Button>取消</Button>
          </>
        }
        onSubmit={onSubmit}
        onChange={(newValue) => {
          setFormValue(newValue);
        }}
        errors={errors}
      />
    </div>
  );
};
export default FormExample1;
