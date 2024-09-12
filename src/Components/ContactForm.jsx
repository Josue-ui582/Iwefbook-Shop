import React from 'react';
import { Button, Form, Input } from 'antd';
const MyFormItemContext = React.createContext([]);


function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};
const ContactForm = () => {
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
      <MyFormItemGroup prefix={['user']}>
        <MyFormItemGroup prefix={['name']}>
          <div className='flex gap-4'>
            <MyFormItem name="firstName" label="First Name">
                <Input />
            </MyFormItem>
            <MyFormItem name="lastName" label="Last Name">
                <Input />
            </MyFormItem>
          </div>
          <MyFormItem name="email" label="Email">
            <Input />
          </MyFormItem>
        </MyFormItemGroup>
        <MyFormItem name="message" label="Message">
            <textarea name="" id="message" className='w-100 border border-solid rounded-lg px-2 h-40 outline-none' placeholder='Ecrivez un text ici'></textarea>
        </MyFormItem>
      </MyFormItemGroup>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};
export default ContactForm;
