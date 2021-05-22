import * as React from 'react';
import Form, { FieldsType, FormDataType } from '../index';
import Button from '../../Button';
import { useState } from 'react';
import Validator, { FormRules, FormErrorTYpe } from '../validator';

interface Props extends React.HTMLAttributes<HTMLElement> {}

const usernames = ['bob', 'jack', 'alice', 'Lucy'];
const checkUserName = (
  username: string,
  succeed: () => void,
  fail: () => void
) => {
  setTimeout(() => {
    if (usernames.indexOf(username) >= 0) {
      succeed();
    } else {
      fail();
    }
  }, 1000);
};
const FormExample1: React.FC<Props> = (props) => {
  const [formData, setFormValue] = useState<FormDataType>({
    username: 'aaa',
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
  const [errors, setErrors] = useState<FormErrorTYpe>({});
  const onSubmit = () => {
    const rules: FormRules = [
      {
        key: 'username',
        required: true,
        minLens: 4,
        maxLens: 6,
        pattern: /^[a-zA-Z]+$/,
      },
      {
        key: 'username',
        validator: {
          name: 'unique',
          validate(username: string) {
            return new Promise((resolve, reject) => {
              checkUserName(username, resolve, reject);
            });
          },
        },
      },
      {
        key: 'password',
        required: true,
      },
    ];
    Validator(formData, rules, (errors) => {
      setErrors(errors);
    });
  };
  return (
    <div style={{ marginBottom: '20px' }}>
      <Form
        value={formData}
        fields={fields}
        buttons={
          <>
            <Button type="primary" style={{ marginRight: '12px' }}>
              提交
            </Button>
            <Button>取消</Button>
          </>
        }
        onSubmit={onSubmit}
        onChange={(newValue) => {
          setFormValue(newValue);
        }}
        errors={errors}
        errorDisplayMode={'all'}
      />
    </div>
  );
};
export default FormExample1;
