import React from "react";
import './App.css' 
// import { Form, Input, InputNumber, Button } from 'antd';

function Contact() {

    // function validateForm() {
    //     let x = document.forms["myForm"]["Fname"]["Lname"]["Email"]["Phone"]["Mbox"].value;
    //     if (x == "") {
    //       alert("Name must be filled out");
    //       return false;
    //     }
    //   }
    return (
      <div className="contact-bg" >
        <h1>Contact</h1> 
        <div>
            <form name='myForm' onSubmit="validateform()">
                <fieldset>
                <h3>Talk to Us</h3>
                <label>First Name: <input type="text" name="Fname" placeholder="Firstname" required/></label>                 
                <label>Last Name: </label>
                <input type="text" name="Lname" placeholder="Lastname" required/>
                <br/>
                <label>Email: </label>
                <input type="text" name="Email" placeholder="Email" required/>
                <br/>
                <label>Phone: </label>
                <input type="text" name="Phone" placeholder="Phone" required /> 
                <br/>
                <label>Message Box: </label>
                <input type="text" name="MBox" placeholder="Message Box" required/>
                <br/>
                <input type="submit" value="Submit"></input>
                </fieldset>
            </form>
        </div> 
      </div>
      
    );


// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 },
// };

// /* eslint-disable no-template-curly-in-string */
// const validateMessages = {
//   required: '${label} is required!',
//   types: {
//     email: '${label} is not a valid email!',
//     number: '${label} is not a valid number!',
//   },
//   number: {
//     range: '${label} must be between ${min} and ${max}',
//   },
// };
// /* eslint-enable no-template-curly-in-string */

// const Demo = () => {
//   const onFinish = (values: any) => {
//     console.log(values);
//   };

//   return (
//     <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
//       <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
//         <Input />
//       </Form.Item>
//       <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
//         <Input />
//       </Form.Item>
//       <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
//         <InputNumber />
//       </Form.Item>
//       <Form.Item name={['user', 'website']} label="Website">
//         <Input />
//       </Form.Item>
//       <Form.Item name={['user', 'introduction']} label="Introduction">
//         <Input.TextArea />
//       </Form.Item>
//       <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

  }
  
  export default Contact;