import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
//import css from "./LoginForm.module.css";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Container,
} from "@mui/material";

  export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    actions.resetForm();
  };

  return (

<Container maxWidth="sm" sx={{ mt: 4 }}>
<Typography variant="h4" gutterBottom>
  Login
</Typography>
<Formik
  initialValues={{
    email: "",
    password: "",
  }}
  onSubmit={handleSubmit}
>
  {({ errors, touched, handleSubmit }) => (
    <Form onSubmit={handleSubmit}>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <Field
            as={TextField}
            fullWidth
            label="Email"
            name="email"
            error={errors.email && touched.email}
            helperText={<ErrorMessage name="email" />}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            as={TextField}
            fullWidth
            label="Password"
            name="password"
            type="password"
            error={errors.password && touched.password}
            helperText={<ErrorMessage name="password" />}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit" sx={{ backgroundColor: "#007bff" }}>
          Log In
          </Button>
        </Grid>
      </Grid>
    </Form>
  )}
</Formik>
</Container>
);
};
