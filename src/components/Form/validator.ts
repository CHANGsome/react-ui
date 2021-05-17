import { FormDataType, FormErrorType } from './index';

interface FormRuleType {
  key: string;
  required?: boolean;
  minLens?: number;
  maxLens?: number;
  pattern?: RegExp;
}
export type FormRules = Array<FormRuleType>;

const isEmpty = (value: any) => {
  return value === undefined || value === null || value === '';
};
const noErrors = (errors: any) => {
  return Object.keys(errors).length === 0;
};
const Validator = (formData: FormDataType, rules: FormRules): FormErrorType => {
  let errors: FormErrorType = {};
  const addError = (key: string, message: string) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(message);
  };
  rules.map((rule) => {
    const value = formData[rule.key];
    if (rule.required && isEmpty(value)) {
      addError(rule.key, '必填');
    }
    if (rule.minLens && !isEmpty(value) && value.length < rule.minLens) {
      addError(rule.key, '太短了');
    }
    if (rule.maxLens && !isEmpty(value) && value.length > rule.maxLens) {
      addError(rule.key, '太长了');
    }
    if (rule.pattern && !rule.pattern.test(value)) {
      addError(rule.key, '格式不正确');
    }
    return null;
  });
  return errors;
};
export default Validator;
export { noErrors };
