import "./Login.css";
import "./Register.css";
import React from "react";
import { Formik, Form, Field} from "formik";

const Login = () =>{
    return (
        <div>
            <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form>
            <label>Email:</label>
            <Field name="email" type="email" />
            <br /> <br />
            <label>Password:</label>
            <Field name="password" type="password" />
            <br /> <br />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
        </div> 
    );  
}
export default Login;