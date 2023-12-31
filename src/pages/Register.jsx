import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import { Formik } from "formik";
import Grid from "@mui/material/Grid";
import RegisterForm, { registerSchema } from "../components/auth/RegisterForm";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

import useAuthCall from "../hooks/useAuthCalls";

const Register = () => {
  const { register } = useAuthCall();

 

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}>
  
        <Grid item xs={12} sm={10} md={6} sx={{marginTop:10}}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}>
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light">
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              first_name: "",
              last_name: "",
              email: "",
              password: "",
              password2:"",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              register(values);
              actions.resetForm();
            }}
            component={props => <RegisterForm {...props} />}>
            </Formik>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/login">Do you have an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={0} sm={7} md={6}>
          <Container>
             {/* <img src={image} alt="" />  */}
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
