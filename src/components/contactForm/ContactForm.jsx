import css from "./ContactForm.module.css";
//import { useId } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import toast from 'react-hot-toast';
import {
  TextField,
  Button,
  Typography,
  Grid,
  Container,
} from "@mui/material";
const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "min 3 letter")
    .max(50, "max 50 letter")
    .required("required field"),
  number: Yup.string()
    .min(9, "min 9 number format xxx-xx-xx")
    .max(9, "max 9 number format xxx-xx-xx")
    .required("required field"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  //const fieldId = useId();
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
    .unwrap()
    .then(()=>{toast.success('Сontact added successfully')})
    .catch(()=>{toast.error('Error adding contact')});
    actions.resetForm();
  };
  return (

<Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
      Add contact
      </Typography>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleSubmit}
        validationSchema={UserSchema} 
      >
        {({ errors, touched, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  label="Name"
                  name="name"
                  error={errors.name && touched.name}
                  helperText={<ErrorMessage name="name" />}
                  // sx={{ backgroundColor: "#f2f4f8" }}
                  className={css.textField} 
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  label="Number phone"
                  name="number"
                  error={errors.number && touched.number}
                  helperText={<ErrorMessage name="number" />}
                  // sx={{ backgroundColor: "#f2f4f8" }}
                  className={css.textField} 
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" type="submit" sx={{ backgroundColor: "#1380f4" }}>
                Add contact
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
}