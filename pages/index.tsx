import {
  Box,
  Button,
  Container,
  FormControl,
  Paper,
  Stack,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import type { NextPage } from "next";
import { useFormik } from "formik";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { MockSendMail } from "../test/mockSendMail";
import { IUserMailResponse } from "../types/Mail";

const Home: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [responseMessage, setResponseMessage] = useState<string>("");
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setEmail(values.email);
      new MockSendMail()
        .send({ mail: email })
        .then((res: IUserMailResponse) => {
          setResponseMessage(res.responseMessage);
        });
    },
  });
  return (
    <Container maxWidth="sm">
      <Paper
        sx={{
          padding: "10px",
          width: "100%",
          maxWidth: "350px",
          display: "block",
          margin: "0 auto",

          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          overflowY: "auto",
        }}
      >
        <Box sx={{ marginBottom: "2rem" }}>
          <Typography variant="h4" component="h1">
            Get your survey
          </Typography>
          <Typography variant="subtitle1">
            Give us your mail and you can give us stars
          </Typography>
        </Box>
        <FormControl
          component="form"
          autoComplete="off"
          sx={{ width: "100%" }}
          onSubmit={formik.handleSubmit}
        >
          <TextField
            fullWidth
            placeholder="Your email"
            size="small"
            sx={{ marginBottom: "1rem" }}
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <Button variant="outlined" type="submit">
            Get you survey
          </Button>
        </FormControl>
        <Alert severity="success" sx={{ marginTop: "10px" }}>
          {responseMessage}
        </Alert>
      </Paper>
    </Container>
  );
};

export default Home;
