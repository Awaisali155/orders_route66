import React from 'react'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/system/Unstable_Grid";
import { Divider } from "@mui/material";
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
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";

const Sub = ({subs,addSub}) => {
    const Item = styled(Box)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
      }));
     
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
     {subs.map(()=>{
        return<>
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
                      <FormGroup
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginTop: "5px",
                        }}
                      >
                        <FormControlLabel
                          control={<Switch defaultChecked />}
                          label="Double Meat
                          "
                        />
                        <FormControlLabel
                          disabled
                          control={<Switch defaultChecked />}
                          label="Extra Meat"
                        />
                      </FormGroup>
                      <Divider />
                      <Box>
                        <Typography>Salads</Typography>
                        <Grid
                          container
                          spacing={2}
                          justifyContent="space-between"
                          alignItems="flex-start"
                        >
                          <Grid xs={4}>
                            <Item>
                              {" "}
                              <FormGroup
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  marginTop: "5px",
                                }}
                              >
                                <FormControlLabel
                                  control={<Switch defaultChecked />}
                                  label="Double Meat
                          "
                                />
                              </FormGroup>
                            </Item>
                          </Grid>
                          <Grid xs={3}>
                            <Item>
                              <img src="" alt="img" />
                            </Item>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          spacing={2}
                          justifyContent="space-between"
                          alignItems="flex-start"
                        >
                          <Grid xs={4}>
                            <Item>
                              {" "}
                              <FormGroup
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  marginTop: "5px",
                                }}
                              >
                                <FormControlLabel
                                  control={<Switch defaultChecked />}
                                  label="Double Meat
                          "
                                />
                              </FormGroup>
                            </Item>
                          </Grid>
                          <Grid xs={3}>
                            <Item>
                              <img src="" alt="img" />
                            </Item>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          spacing={2}
                          justifyContent="space-between"
                          alignItems="flex-start"
                        >
                          <Grid xs={4}>
                            <Item>
                              {" "}
                              <FormGroup
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  marginTop: "5px",
                                }}
                              >
                                <FormControlLabel
                                  control={<Switch defaultChecked />}
                                  label="Double Meat
                          "
                                />
                              </FormGroup>
                            </Item>
                          </Grid>
                          <Grid xs={3}>
                            <Item>
                              <img src="" alt="img" />
                            </Item>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          spacing={2}
                          justifyContent="space-between"
                          alignItems="flex-start"
                        >
                          <Grid xs={4}>
                            <Item>
                              {" "}
                              <FormGroup
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  marginTop: "5px",
                                }}
                              >
                                <FormControlLabel
                                  control={<Switch defaultChecked />}
                                  label="Double Meat
                          "
                                />
                              </FormGroup>
                            </Item>
                          </Grid>
                          <Grid xs={3}>
                            <Item>
                              <img src="" alt="img" />
                            </Item>
                          </Grid>
                        </Grid>

                        <Grid
                          container
                          spacing={2}
                          justifyContent="space-between"
                          alignItems="flex-start"
                        >
                          <Grid xs={4}>
                            <Item>
                              {" "}
                              <FormGroup
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  marginTop: "5px",
                                }}
                              >
                                <FormControlLabel
                                  control={<Switch defaultChecked />}
                                  label="Double Meat
                          "
                                />
                              </FormGroup>
                            </Item>
                          </Grid>
                          <Grid xs={3}>
                            <Item>
                              <img src="" alt="img" />
                            </Item>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          spacing={2}
                          justifyContent="space-between"
                          alignItems="flex-start"
                        >
                          <Grid xs={4}>
                            <Item>
                              {" "}
                              <FormGroup
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  marginTop: "5px",
                                }}
                              >
                                <FormControlLabel
                                  control={<Switch defaultChecked />}
                                  label="Double Meat
                          "
                                />
                              </FormGroup>
                            </Item>
                          </Grid>
                          <Grid xs={3}>
                            <Item>
                              <img src="" alt="img" />
                            </Item>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          spacing={2}
                          justifyContent="space-between"
                          alignItems="flex-start"
                        >
                          <Grid xs={4}>
                            <Item>
                              {" "}
                              <FormGroup
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  marginTop: "5px",
                                }}
                              >
                                <FormControlLabel
                                  control={<Switch defaultChecked />}
                                  label="Double Meat
                          "
                                />
                              </FormGroup>
                            </Item>
                          </Grid>
                          <Grid xs={3}>
                            <Item>
                              <img src="" alt="img" />
                            </Item>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          spacing={2}
                          justifyContent="space-between"
                          alignItems="flex-start"
                        >
                          <Grid xs={4}>
                            <Item>
                              {" "}
                              <FormGroup
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  marginTop: "5px",
                                }}
                              >
                                <FormControlLabel
                                  control={<Switch defaultChecked />}
                                  label="Double Meat
                          "
                                />
                              </FormGroup>
                            </Item>
                          </Grid>
                          <Grid xs={3}>
                            <Item>
                              <img src="" alt="img" />
                            </Item>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          spacing={2}
                          justifyContent="space-between"
                          alignItems="flex-start"
                        >
                          <Grid xs={4}>
                            <Item>
                              {" "}
                              <FormGroup
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  marginTop: "5px",
                                }}
                              >
                                <FormControlLabel
                                  control={<Switch defaultChecked />}
                                  label="Double Meat
                          "
                                />
                              </FormGroup>
                            </Item>
                          </Grid>
                          <Grid xs={3}>
                            <Item>
                              <img src="" alt="img" />
                            </Item>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          spacing={2}
                          justifyContent="space-between"
                          alignItems="flex-start"
                        >
                          <Grid xs={4}>
                            <Item>
                              {" "}
                              <FormGroup
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  marginTop: "5px",
                                }}
                              >
                                <FormControlLabel
                                  control={<Switch defaultChecked />}
                                  label="Double Meat
                          "
                                />
                              </FormGroup>
                            </Item>
                          </Grid>
                          <Grid xs={3}>
                            <Item>
                              <img src="" alt="img" />
                            </Item>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          spacing={2}
                          justifyContent="space-between"
                          alignItems="flex-start"
                        >
                          <Grid xs={4}>
                            <Item>
                              {" "}
                              <FormGroup
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  marginTop: "5px",
                                }}
                              >
                                <FormControlLabel
                                  control={<Switch defaultChecked />}
                                  label="Double Meat
                          "
                                />
                              </FormGroup>
                            </Item>
                          </Grid>
                          <Grid xs={3}>
                            <Item>
                              <img src="" alt="img" />
                            </Item>
                          </Grid>
                        </Grid>
                        <Typography>Sauces</Typography>
                        <Box>
                          <FormGroup
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              marginTop: "5px",
                            }}
                          >
                            <FormControlLabel
                              control={<Switch defaultChecked />}
                              label="Double Meat
                          "
                            />
                          </FormGroup>
                          <FormGroup
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              marginTop: "5px",
                            }}
                          >
                            <FormControlLabel
                              control={<Switch defaultChecked />}
                              label="Double Meat
                          "
                            />
                          </FormGroup>
                          <FormGroup
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              marginTop: "5px",
                            }}
                          >
                            <FormControlLabel
                              control={<Switch defaultChecked />}
                              label="Double Meat
                          "
                            />
                          </FormGroup>
                          <FormGroup
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              marginTop: "5px",
                            }}
                          >
                            <FormControlLabel
                              control={<Switch defaultChecked />}
                              label="Double Meat
                          "
                            />
                          </FormGroup>
                          <FormGroup
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              marginTop: "5px",
                            }}
                          >
                            <FormControlLabel
                              control={<Switch defaultChecked />}
                              label="Double Meat
                          "
                            />
                          </FormGroup>
                          <FormGroup
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              marginTop: "5px",
                            }}
                          >
                            <FormControlLabel
                              control={<Switch defaultChecked />}
                              label="Double Meat
                          "
                            />
                          </FormGroup>
                          <FormGroup
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              marginTop: "5px",
                            }}
                          >
                            <FormControlLabel
                              control={<Switch defaultChecked />}
                              label="Double Meat
                          "
                            />
                          </FormGroup>
                          <FormGroup
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              marginTop: "5px",
                            }}
                          >
                            <FormControlLabel
                              control={<Switch defaultChecked />}
                              label="Double Meat
                          "
                            />
                          </FormGroup>
                          <FormGroup
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              marginTop: "5px",
                            }}
                          >
                            <FormControlLabel
                              control={<Switch defaultChecked />}
                              label="Double Meat
                          "
                            />
                          </FormGroup>
                          <FormGroup
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              marginTop: "5px",
                            }}
                          >
                            <FormControlLabel
                              control={<Switch defaultChecked />}
                              label="Double Meat
                          "
                            />
                          </FormGroup>
                          <FormGroup
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              marginTop: "5px",
                            }}
                          >
                            <FormControlLabel
                              control={<Switch defaultChecked />}
                              label="Double Meat
                          "
                            />
                          </FormGroup>
                          <FormGroup
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              marginTop: "5px",
                            }}
                          >
                            <FormControlLabel
                              control={<Switch defaultChecked />}
                              label="Double Meat
                          "
                            />
                          </FormGroup>
                        </Box>
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
                    onClick={addSub}
                  >
                    <AddIcon />
                    <span >Add Sub</span>
                  </IconButton>
                </Box>
              </Container>
        </>     })}             
            </>
  )
}

export default Sub