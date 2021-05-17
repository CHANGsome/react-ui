import Input from 'components/Input';
import * as React from 'react';
import { ReactFragment } from 'react';
import scopedClassMaker from '../../utils/scopedClassMaker';
import './index.scss';

export interface FieldsType {
  name: string;
  label: string;
  input: { type: string };
}
export interface FormDataType {
  [K: string]: any;
}
export interface FormErrorType {
  [K: string]: string[];
}
interface Props extends React.HTMLAttributes<HTMLElement> {
  value: FormDataType;
  fields: Array<FieldsType>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormDataType) => void;
  errors: FormErrorType;
}
const sc = scopedClassMaker('react-ui');
const Form: React.FC<Props> = (props) => {
  const { value: formData, errors } = props;
  const onInputChange = (name: string, value: string) => {
    props.onChange({ ...formData, [name]: value });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit(e);
      }}
    >
      <table className={sc('form-table')}>
        {props.fields.map((field, index) => (
          <tr key={index} className={sc('form-tr')}>
            <td className={sc('form-td')}>{field.label}</td>
            <td className={sc('form-td')}>
              {' '}
              <Input
                type={field.input.type}
                value={formData[field.name]}
                onChange={(e) => onInputChange(field.name, e.target.value)}
              />
              <div>{errors[field.name]}</div>
            </td>
          </tr>
        ))}
      </table>

      <div>{props.buttons}</div>
    </form>
  );
};
export default Form;
