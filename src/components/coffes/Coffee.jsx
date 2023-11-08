import React from 'react'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import MenuItem from "@mui/material/MenuItem";
const Coffee = () => {
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
    <>
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
                            placeholder="Please Select"
                            helperText="Please select your currency"
                            variant="standard"
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
                            label="Meats"
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
                            label="Meats"
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
                    </AccordionDetails>
                  </Accordion>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconButton
                    color=""
                    style={{ fontSize: "15px" }}
                    aria-label="add"
                  >
                    <AddIcon />
                    <span>Add Sub</span>
                  </IconButton>
                </Box>
              </Container>
    </>
  )
}

export default Coffee