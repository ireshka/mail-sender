import { Box, Button, Container, FormControl, Paper, Stack, TextField, Typography } from '@mui/material'
import type { NextPage } from 'next'

const Home: NextPage = () => {
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
        <Box sx={{marginBottom: '2rem'}}>
          <Typography variant="h4" component="h1">Get your survey</Typography>
          <Typography variant="subtitle1">Give us your mail and you can give us stars</Typography>
        </Box>
        <FormControl component="form" autoComplete="off" sx={{ width: "100%" }}>
          <TextField
            fullWidth
            placeholder="Your email"
            size="small"
            sx={{ marginBottom: "1rem" }}
          />
          <Button variant="outlined">Get you survey</Button>
        </FormControl>
      </Paper>
    </Container>
  );
}

export default Home
