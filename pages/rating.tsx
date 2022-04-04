import * as React from "react";
import {
  Box,
  Card,
  Container,
  FormControl,
  Paper,
  Stack,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ParsedUrlQuery } from "querystring";

type ExpectedQuery = {
  mail: string;
  rating: string;
};

type WrongQuery = {
  mail: null;
  rating: null;
}

type Props = ExpectedQuery | WrongQuery;

const isValidQuery = (query: ParsedUrlQuery): query is ExpectedQuery => {
  return (
    (query as ParsedUrlQuery).mail !== undefined &&
    (query as ParsedUrlQuery).rating !== undefined
  );
};


export const getServerSideProps: GetServerSideProps<Props> = async (context) =>  {
  const { query } = context;
  if (isValidQuery(query)) {
    return {
      props: query
    }
  } else {
    return {
      props: {
        mail: null,
        rating: null,
      }
    }
  }
}



const Rating = ({mail, rating}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  return (
    <Container maxWidth="md">
      <Card
        sx={{
          padding: "20px",
          marginTop: "20px",
        }}
      >
        {
          rating !== null
          ? (<Box>Thank for your rating! You gave us: {rating} stars.</Box>)
          : (<Alert severity="error">The old gnomes ate your answer. Please rate us again.</Alert>)
        }
      </Card>
    </Container>
  );
};

export default Rating;
