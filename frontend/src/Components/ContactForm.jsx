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
  const handleSubmit = (values) => {
    fetch('http://localhost:5000/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: values.user.name.firstName,
        lastName: values.user.name.lastName,
        email: values.user.email,
        message: values.user.message,
      }),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erreur lors de la soumission du formulaire');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Succès:', data);
      alert('Formulaire soumis avec succès !');
    })
    .catch((error) => {
      console.error('Erreur:', error);
      alert('Échec de la soumission du formulaire');
    });
  };

  const onFinish = (values) => {
    handleSubmit(values);
  };

  return (
    <Form name="form_item_path" layout="vertical" onFinish={onFinish} className="contact_form">
      <MyFormItemGroup prefix={['user']}>
        <MyFormItemGroup prefix={['name']}>
          <div className="flex gap-4">
            <MyFormItem name="firstName" label="Nom">
              <Input />
            </MyFormItem>
            <MyFormItem name="lastName" label="Prénom">
              <Input />
            </MyFormItem>
          </div>
          <MyFormItem name="email" label="Email">
            <Input />
          </MyFormItem>
        </MyFormItemGroup>
        <MyFormItem name="message" label="Message">
          <textarea
            id="message"
            className="w-100 border border-solid rounded-lg px-2 h-40 outline-none"
            placeholder="Écrivez un texte ici"
          ></textarea>
        </MyFormItem>
      </MyFormItemGroup>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
