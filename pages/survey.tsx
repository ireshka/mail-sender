import * as React from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  FormControl,
  FormLabel,
  Radio,
  RadioProps,
  RadioGroup,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { styled } from "@mui/system";

const CustomRadioIcon = styled(Button)(({ theme }) => ({
  color: "white",
  ".Mui-focusVisible &": {
    outline: `2px auto ${theme.palette.primary.dark}`,
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.primary.dark,
    outline: `2px auto ${theme.palette.primary.dark}`,
    outlineOffset: 3,
  },
  "input:disabled ~ &": {
    background: theme.palette.grey[900],
  },
}));

const CustomRadioIconChecked = styled(CustomRadioIcon)({
  backgroundColor: "navy",
  "input:hover ~ &": {
    backgroundColor: "navy",
  },
});

interface CustomRadioProps extends RadioProps {
  text: string;
}

const CustomRadio = (props: CustomRadioProps) => {
  const { text, ...other } = props;
  return (
    <Radio
      sx={{
        "&:hover": {
          bgcolor: "transparent",
        },
        "&:first-of-type": {
          paddingLeft: 0,
        },
        "&:last-of-type": {
          paddingRight: 0,
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<CustomRadioIconChecked>{text}</CustomRadioIconChecked>}
      icon={
        <CustomRadioIcon variant="contained" disableElevation>
          {text}
        </CustomRadioIcon>
      }
      {...other}
    />
  );
};

export const CustomFormLabel = styled(FormLabel)(({ theme }) => ({
  fontSize: "20px",
  color: theme.palette.common.black,
}));

const QuestionWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));


const WrapperBox = styled(Box)`
  padding: 16px;
`;

type FormValues = Record<string, string>;

const Survey = () => {
  const { handleSubmit, control, reset, formState } = useForm({
    defaultValues: {
      question1: "",
    },
    mode: "onChange",
  });
  const onSubmit = (data: FormValues) => console.log(data);

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
          <FormControl component="form" onSubmit={handleSubmit(onSubmit)}>
            <QuestionWrapper>
              <CustomFormLabel id="question-1">
                Jak bardzo nie lubię customowego stylowania w Material UI?
              </CustomFormLabel>
              <Controller
                name="question1"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <RadioGroup
                    aria-labelledby="question-1"
                    name="radioButtonGroup"
                    onChange={field.onChange}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      padding: 0,
                    }}
                  >
                    <CustomRadio
                      text="1"
                      value="1"
                      name="question1"
                      inputProps={{ "aria-label": "1" }}
                    />
                    <CustomRadio
                      text="2"
                      value="2"
                      name="question1"
                      inputProps={{ "aria-label": "2" }}
                    />
                    <CustomRadio
                      text="3"
                      value="3"
                      name="question1"
                      inputProps={{ "aria-label": "3" }}
                    />
                    <CustomRadio
                      text="4"
                      value="4"
                      name="question1"
                      inputProps={{ "aria-label": "4" }}
                    />
                    <CustomRadio
                      text="5"
                      value="5"
                      name="question1"
                      inputProps={{ "aria-label": "5" }}
                    />
                  </RadioGroup>
                )}
              />
            </QuestionWrapper>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </FormControl>
        </WrapperBox>
      </Paper>
    </Container>
  );
};

export default Survey;
