import Input from 'components/Input';
import * as React from 'react';
import { ReactFragment } from 'react';
import scopedClassMaker from '../../utils/scopedClassMaker';
import './index.scss';
import { FormErrorTYpe } from './validator';

export interface FieldsType {
  name: string;
  label: string;
  input: { type: string };
}
export interface FormDataType {
  [K: string]: any;
}

interface Props extends React.HTMLAttributes<HTMLElement> {
  value: FormDataType;
  fields: Array<FieldsType>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormDataType) => void;
  errors: FormErrorTYpe;
  errorDisplayMode?: 'first' | 'all';
}
const sc = scopedClassMaker('react-ui-form');
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
      <table className={sc('table')}>
        <tbody>
          {props.fields.map((field, index) => (
            <tr key={index} className={sc('tr')}>
              <td className={sc('td')}>{field.label}</td>
              <td className={sc('td')}>
                <Input
                  type={field.input.type}
                  value={formData[field.name]}
                  onChange={(e) => onInputChange(field.name, e.target.value)}
                />
                <div className={sc('error')}>
                  {errors[field.name] ? (
                    props.errorDisplayMode === 'first' ? (
                      errors[field.name][0]
                    ) : (
                      errors[field.name].join('，')
                    )
                  ) : (
                    <span>&nbsp;</span>
                  )}
                </div>
              </td>
            </tr>
          ))}
          <tr>
            <td className={sc('td')} />
            <td className={sc('td')}>{props.buttons}</td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};
Form.defaultProps = {
  errorDisplayMode: 'first',
};
export default Form;
