import { Button, Form, Input, InputNumber } from "antd";
import style from "./Contact.module.scss";
export default function Contact() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 32 },
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };

  const onFinish = (values) => {
    console.log(values);
  };
  const formStyle = {
    width: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #d9d9d9',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    color: '#fff',
  };

  const labelStyle = {
    fontWeight: 'bold',
    colorText: "#ff9900",
    fontSize: '16px',
  };

  const inputStyle = {
    width: '100%',
  };

  const buttonStyle = {
    width: '100%',
    marginTop: '10px',
    backgroundColor: '#faad14', // Change button background color
    borderColor: '#ffffff', // Change button border color
    color: "#ff9900",
    fontSize: '16px',
    fontFamily: 'Arial, sans-serif',
  };


  return (
    <div className={style.body}>
    
      <div  className={style.form} >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={formStyle}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[{ required: true }]}
            labelStyle={labelStyle}
            validateTrigger={["onBlur", "onChange"]}
          >
            <Input style={inputStyle} />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[{ required: true }, { type: "email" }]}
            labelStyle={labelStyle}
            validateTrigger={["onBlur", "onChange"]}
          >
            <Input style={inputStyle} />
          </Form.Item>
          <Form.Item
            name={["user", "message"]}
            label="Message"
            labelStyle={labelStyle}
            rules={[{ required: true }]}
            validateTrigger={["onBlur", "onChange"]}
          >
            <Input.TextArea style={inputStyle} />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit" style={buttonStyle} >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
