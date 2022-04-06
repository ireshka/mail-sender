import * as React from "react";
import { Box, Container, Paper, Typography, Alert, Grid } from "@mui/material";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import { styled } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { ExpectedQuery, WrongQuery } from "../types/Rating";
import { endpoints } from "../data/endpoints";

type Props = ExpectedQuery | WrongQuery;

const isValidQuery = (query: ParsedUrlQuery): query is ExpectedQuery => {
  return query.mail !== undefined && query.rating !== undefined;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { query } = context;
  if (isValidQuery(query)) {
    return {
      props: query,
    };
  } else {
    return {
      props: {
        mail: undefined,
        rating: undefined,
      },
    };
  }
};

const Thanks = ({
  mail,
  rating,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const WrapperBox = styled(Box)`
    padding: 16px;
  `;
  const surveyLink = `/survey?mail=${mail}`;

  return (
    <Container maxWidth="md">
      <Paper
        sx={{
          padding: "0",
          marginTop: "20px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#1976d2",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        >
          <WrapperBox>
            <Typography
              variant="h2"
              component="h1"
              color="common.white"
              align="center"
            >
              El Trio Intern Project
            </Typography>
          </WrapperBox>
        </Box>

        <WrapperBox>
          <Grid container spacing={2} sx={{ pt: 4, pb: 4 }}>
            <Grid item xs={12} sm={6}>
              <Image
                src="/complete.png"
                alt=""
                width={704}
                height={844}
                layout="responsive"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {rating !== null ? (
                <Box>
                  <Typography variant="h5" sx={{ pb: 5 }}>
                    Thank for your rating!
                  </Typography>
                  <Typography variant="h6">
                    You gave us: <strong>{rating}</strong> stars.
                  </Typography>
                </Box>
              ) : (
                <Alert severity="error">
                  The old gnomes ate your answer. Please rate us again.
                </Alert>
              )}
              <Grid item xs={12} sx={{ marginTop: "24px" }}>
                <Link href={surveyLink}>
                  <a>Longer Survey, please?</a>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </WrapperBox>
      </Paper>
    </Container>
  );
};

export default Thanks;
