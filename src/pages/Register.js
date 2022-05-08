import "./Register.css";
import React from "react";
import { Formik, Form, Field} from "formik";
import img from "../images/isromain.jpg";

const Register = () => {
  return (
    <div>
        <img src={img} id="img1"/>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmpassword: "",
          gender: "",
          about: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form>
            <label className="name">Name:</label>
            <Field name="name" type="text" />
            <br /> <br />
            <label>Email:</label>
            <Field name="email" type="email" />
            <br /> <br />
            <label>Phone:</label>
            <Field name="phone" type="number" />
            <br /> <br />
            <label>Password:</label>
            <Field name="password" type="password" />
            <br /> <br />
            <label>Confirm Password:</label>
            <Field name="confirmpassword" type="password" />
            <br /> <br />
            <label>Gender:</label>
            <br />
            <label className="buttonclr"> Male</label>
            <Field name="gender" value="male" type="radio" />
            <label className="buttonclr">Female </label>
            <Field name="gender" value="female" type="radio"  />
            <br /> <br />
            <label className="About">About:</label>
            <br /> <br />
            <Field name="about" as="textarea" placeholder="Short Description about yourself" />
            <br /> <br />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;