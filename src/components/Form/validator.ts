/**
 * TODO：
 * 1。 支持子表单
 * 2. 支持更多的type / 自定义的input
 * 3. 支持手机端
 */
import { FormDataType } from './index';

interface FormRuleType {
  key: string;
  required?: boolean;
  minLens?: number;
  maxLens?: number;
  pattern?: RegExp;
  validator?: {
    name: string;
    validate: (value: string) => Promise<void>;
  };
}
export type FormRules = Array<FormRuleType>;

export interface ValidatorErrorType {
  [K: string]: Array<OneError>;
}
export interface FormErrorTYpe {
  [K: string]: Array<string>;
}

const isEmpty = (value: any) => {
  return value === undefined || value === null || value === '';
};
const noErrors = (errors: any) => {
  return Object.keys(errors).length === 0;
};
interface OneError {
  message: string;
  promise?: Promise<any>;
}
const Validator = (
  formData: FormDataType,
  rules: FormRules,
  callback: (errors: FormErrorTYpe) => void
): ValidatorErrorType => {
  let errors: {
    [K: string]: Array<OneError>;
  } = {};
  const addError = (key: string, error: OneError) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(error);
  };
  rules.map((rule) => {
    const value = formData[rule.key];
    if (rule.validator) {
      const promise = rule.validator.validate(value);
      if (rule.validator.name === 'unique') {
        addError(rule.key, { message: '用户名已经存在', promise });
      }
    }
    if (rule.required && isEmpty(value)) {
      addError(rule.key, { message: '必填' });
    }
    if (rule.minLens && !isEmpty(value) && value.length < rule.minLens) {
      addError(rule.key, { message: '太短了' });
    }
    if (rule.maxLens && !isEmpty(value) && value.length > rule.maxLens) {
      addError(rule.key, { message: '太长了' });
    }
    if (rule.pattern && !rule.pattern.test(value)) {
      addError(rule.key, { message: '格式不正确' });
    }
    return null;
  });
  const promiseList = Object.values(errors)
    .flat()
    .filter((item) => item.promise)
    .map((item) => item.promise);

  Promise.all(promiseList).finally(() => {
    const newErrors: FormErrorTYpe = {};
    Object.keys(errors).map((key) => {
      newErrors[key] = errors[key].map((item) => item.message);
      return null;
    });
    callback(newErrors);
  });
  return errors;
};
export default Validator;
export { noErrors };
