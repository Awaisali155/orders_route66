import React , {useState}from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Hidden from "@mui/material/Hidden";
import { useMediaQuery } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import myImage from "../../images/logo.jpg";
import subsImg from "../../images/subs.jpeg";
import coffe from "../../images/subway-coffee.jpg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import { styled } from '@mui/system'; // Use 'styled' instead of 'makeStyles'
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import StepLabel from "@mui/material/StepLabel";
import Sub from "../subs/Sub";

import Coffee from "../coffes/Coffee";
const steps = ["Welcome", "Subs", "Coffee", "Order"];
const CustomCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  minWidth: 150,
  marginBottom: '16px',
  minHeight: 120,
  cursor: 'pointer',
  '&:hover': {
    '& $overlay': {
      opacity: 0.3,
    },
  },
}));

const Overlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '#000',
  opacity: 0,
  zIndex: 1,
  transition: 'opacity 0.3s',
}));

const Checkmark = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
}));

const OrderPage = () => {
  const theme = useTheme();
  const [subs, setSubs] = useState([{}]); // Initialize subs as an array with one empty sub
  
  const isMobile = useMediaQuery("(max-width: 867px)"); // You can adjust the breakpoint as needed

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [isSubs, setIsSubs] = useState(false);
  const [isCoffee, setIsCoffee] = useState(false);
  const addSub = () => {
    setSubs([...subs, {}]); // Add a new empty sub to the subs array
  };
  const handleSubs = () => {
    setIsSubs(!isSubs);
  };
  const handleCoffee = () => {
    setIsCoffee(!isCoffee);
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
            width: isMobile ? "91%" : "97%",

            padding: "7px",
            marginTop: "5px",
            marginLeft: "5px",
          }}
        >
          <Box
            sx={{ display: "flex", justifyContent: "center", height: "12vh" }}
          >
            <img src={myImage} className="" alt="" />
          </Box>
        </Box>
        <Box
          sx={{
            padding: "20px",
          }}
        >
          <Hidden mdDown>
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
            </Box>
          </Hidden>
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
      <CustomCard onClick={handleSubs}>
      <CardContent>
        <img
          src={subsImg}
          alt=""
          style={{ display: 'block', margin: 'auto', width: '141px', opacity: `${isSubs? 0.7: ""}` }}
          />
        {isSubs && <Checkmark><CheckCircleIcon style={{ fontSize: 60, color: 'green' }} /></Checkmark>}
        {isSubs && <Overlay />}
      </CardContent>
    </CustomCard>
    <CustomCard onClick={handleCoffee}>
      <CardContent>
        <img
          src={coffe}
          alt=""
          style={{ display: 'block', margin: 'auto', width: '141px', opacity: `${isCoffee? 0.7: ""}` }}
          />
        {isCoffee && <Checkmark><CheckCircleIcon style={{ fontSize: 60, color: 'green' }} /></Checkmark>}
        {isCoffee && <Overlay />}
      </CardContent>
    </CustomCard>
            </>
          ) : activeStep === 1 ? (
            <><Sub subs={subs} addSub={addSub}/></>
            
          ) : activeStep === 2 ? (
            <>
            <Coffee/>
            
            </>
          ) : (
            <>Create</>
          )}
        </div>
        <Hidden mdUp>
          <MobileStepper
            variant="dots"
            steps={4}
            position="static"
            activeStep={activeStep}
            sx={{ maxWidth: 400, flexGrow: 1 }}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === 5}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Hidden>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "15px",
            marginTop: "15px",
            gap:"10px"
          }}
        >
          {activeStep!==0 &&
          <Button onClick={handleBack} variant="contained" color="success">
            Back
          </Button>
          }
          <Button disabled={!isCoffee && !isSubs ? true: false} onClick={handleNext} variant="contained" color="success">
            NEXT
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default OrderPage;
