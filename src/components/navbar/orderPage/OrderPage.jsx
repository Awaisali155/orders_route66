import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Divider } from "@mui/material";
import myImage from "../../../images/logo.jpg";
import subs from "../../../images/subs.jpeg";
import coffe from "../../../images/subway-coffee.jpg";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import MenuItem from "@mui/material/MenuItem";

import StepLabel from "@mui/material/StepLabel";
const steps = ["Welcome", "Subs", "Coffee", "Order"];
const label = { inputProps: { "aria-label": "Switch demo" } };

const OrderPage = () => {
  const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  console.log("activeStep==>", activeStep);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];
  return (
    <Container>
      <Box
        sx={{
          minHeight: "95vh",
          width: (theme) => ({
            xs: "95%",
            sm: "70%",
          }),
          margin: "auto",
          marginTop: "25px",
          boxShadow: 3,
          borderRadius: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            height: "12vh",
            bgcolor: "#33743d",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img src={myImage} className='' alt="" />
          </Box>
        </Box>
        <Box
          sx={{
            padding: "20px",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Step {activeStep + 1}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  {isStepOptional(activeStep) && (
                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                      Skip
                    </Button>
                  )}

                  <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </Box>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            {" "}
            <Typography
              variant="body1"
              style={{
                fontSize: activeStep === 0 ? "1.25rem" : "1rem",
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                fontWeight: activeStep === 0 ? 500 : 400,
                lineHeight: 1.6,
                letterSpacing: "0.0075em",
              }}
            >
              {activeStep === 0
                ? "Please select which items you would like to create"
                : "Please click add sub to add your sub to the order. You can only have 5 subs in one order"}
            </Typography>
          </div>
          {activeStep === 0 ? (
            <>
              {" "}
              <Card
                sx={{ minWidth: 150, marginBottom: "16px", minHeight: 120 }}
              >
                <CardContent>
                  <img
                    src={subs}
                    className=""
                    alt=""
                    style={{ display: "block", margin: "auto", width: "141px" }}
                  />
                </CardContent>
              </Card>
              <Card
                sx={{ minWidth: 150, marginBottom: "16px", minHeight: 120 }}
              >
                <CardContent>
                  <img
                    src={coffe}
                    className=""
                    alt=""
                    style={{ display: "block", margin: "auto", width: "141px" }}
                  />
                </CardContent>
              </Card>
            </>
          ) : (
            <>
              {" "}
              <Container>
                <Box
                  sx={{
                    // minHeight: '95vh',
                    width: (theme) => ({
                      xs: "95%",
                      sm: "95%",
                    }),
                    margin: "auto",
                    marginTop: "25px",
                    boxShadow: 3,
                    borderRadius: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Accordion expanded={true}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Subs no: 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <TextField
                          id="standard-basic"
                          helperText="Some important text"
                          label="Name"
                          required
                          fullWidth
                          variant="standard"
                        />
                      </Typography>
                      <Box
                        component="form"
                        sx={{
                          "& .MuiTextField-root": { width: "100%" },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <div>
                          <TextField
                            id="standard-select-currency"
                            select
                            label="Breads"
                            required
                            // defaultValue="Please Select"
                            placeholder="Please Select"
                            helperText="Please select your currency"
                            variant="standard"
                            // style={{ width: "100%", top: "10px" }}
                          >
                            {currencies.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </div>
                      </Box>
                      <Box
                        component="form"
                        sx={{
                          "& .MuiTextField-root": { width: "100%" },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <div>
                          <TextField
                            id="standard-select-currency"
                            select
                            label="Size"
                            required
                            // defaultValue="Please Select"
                            placeholder="Please Select"
                            helperText="Please select your currency"
                            variant="standard"
                            // style={{ width: "100%", top: "10px" }}
                          >
                            {currencies.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </div>
                      </Box>
                      <FormGroup
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginTop: "5px",
                        }}
                      >
                        <FormControlLabel
                          control={<Switch defaultChecked />}
                          label="Toasted"
                        />
                        <FormControlLabel
                          disabled
                          control={<Switch defaultChecked />}
                          label="Grilled"
                        />
                      </FormGroup>
                      <Typography style={{ marginTop: "10px" }}>
                        Cheeses
                      </Typography>
                      <FormGroup
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginTop: "5px",
                        }}
                      >
                        <FormControlLabel
                          control={<Switch defaultChecked />}
                          label="Cheddar"
                        />
                        <FormControlLabel
                          control={<Switch defaultChecked />}
                          label="Old English"
                        />
                        <FormControlLabel
                          control={<Switch defaultChecked />}
                          label="Mozzarella"
                        />
                        <FormControlLabel
                          control={<Switch defaultChecked />}
                          label="Double Cheese"
                        />
                        <Divider />
                      </FormGroup>
                      <Box
                        component="form"
                        sx={{
                          "& .MuiTextField-root": { width: "100%" },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <div>
                          <TextField
                            id="standard-select-currency"
                            select
                            label="Breads"
                            required
                            // defaultValue="Please Select"
                            placeholder="Please Select"
                            helperText="Please select your currency"
                            variant="standard"
                            // style={{ width: "100%", top: "10px" }}
                          >
                            {currencies.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </div>
                      </Box>
                      <FormGroup
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginTop: "5px",
                        }}
                      >
                        <FormControlLabel
                          control={<Switch defaultChecked />}
                          label="Toasted"
                        />
                        <FormControlLabel
                          disabled
                          control={<Switch defaultChecked />}
                          label="Grilled"
                        />
                      </FormGroup>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Container>
            </>
          )}
        </div>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "10px",
          }}
        >
          <IconButton color="" style={{ fontSize: "15px" }} aria-label="add">
            <AddIcon />
            <span>Add Sub</span>
          </IconButton>
          <Button variant="contained" color="success">
            NEXT
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default OrderPage;
