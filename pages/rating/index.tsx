import { Box, Container, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SendRating } from "../../api/sendRating";
import { IRatingResponse, IRatingSuccessfullResponse } from "../../types/Rate";
import Image from "next/image";
import checkImage from "./../../public/check1.png";

const isSuccessfullResponse = (
  data: IRatingResponse
): data is IRatingSuccessfullResponse => {
  return (data as IRatingSuccessfullResponse).responseMessage !== undefined;
};

const Rate = () => {
  const router = useRouter();
  const { mail, rating } = router.query;
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (typeof mail === "string" && typeof rating === "string") {
      new SendRating()
        .rate({ mail: mail, rating: rating })
        .then((res: IRatingResponse) => {
          isSuccessfullResponse(res)
            ? setResponseMessage(res.responseMessage)
            : setErrorMessage(res.errorMessage);
        });
    }
  }, [mail, rating]);

  return { isSuccessfullResponse } ? (
    <Container maxWidth="sm">
      <Paper
        sx={{
          padding: "10px",
          width: "100%",
          maxWidth: "400px",
          height: "60%",
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
          <Image
            src={checkImage}
            alt="Picture of the author"
            width={400}
            height={400}
          />
          <Typography
            variant="h4"
            component="h1"
            textAlign="center"
            marginTop="50px"
          >
            Thanks for your answer!
          </Typography>
        </Box>
      </Paper>
    </Container>
  ) : null;
};

export default Rate;
