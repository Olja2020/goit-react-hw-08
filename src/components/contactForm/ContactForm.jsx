//import css from "./ContactForm.module.css";
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
//     <Formik
//       initialValues={{ name: "", number: "" }}
//       onSubmit={handleSubmit}
//       validationSchema={UserSchema}
//     >
//       <Form className={css.containerForm}>
//         <div>
//           <label htmlFor={`${fieldId}-username`} className={css.labelForm}>
//             Name
//           </label>
//           <Field
//             type="text"
//             name="name"
//             id={`${fieldId}-username`}
//             className={css.inputForm}
//           />
//           <ErrorMessage name="name" component="span" className={css.error} />
//         </div>
//         <div>
//           <label htmlFor={`${fieldId}-number`} className={css.labelForm}>
//             Number
//           </label>
//           <Field
//             type="text"
//             name="number"
//             id={`${fieldId}-number`}
//             className={css.inputForm}
//           />
//           <ErrorMessage name="number" component="span" className={css.error} />
//         </div>
//         <button className={css.btnForm} type="submit">
//           Add contact
//         </button>
//       </Form>
//     </Formik>
//   );
// }


      <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
      Add contact
      </Typography>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleSubmit}
        validationSchema={UserSchema} // Припустимо, що UserSchema - це ваша схема валідації
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
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" type="submit" sx={{ backgroundColor: "#007bff" }}>
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
