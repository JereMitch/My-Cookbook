import { Divider, Grid2 as Grid, Typography } from "@mui/material";
import { RegistrationInfoBlock, RegistrationInfoBlockContainer } from "./LandingPageStyles";
import Textfield from "../../components/textfields/Textfield";
import { Link } from "react-router-dom";
import { Button, GoogleButton } from "../../components/buttons/Button";

export default function RegistrationSection() {
  return (
    <Grid container >
            <Grid sx={{ height: "13rem", paddingTop: "2rem", backgroundColor: "lightGray" }}>
              <RegistrationInfoBlockContainer>
                <Grid>
                  <Typography variant="h4" sx={{ textAlign: "center" }}>Welcome!</Typography>
                  <RegistrationInfoBlock>Eiusmod eu aute pariatur ullamco dolor incididunt. Consectetur occaecat eu cillum non deserunt enim commodo voluptate reprehenderit elit laboris. Aliqua proident enim pariatur amet commodo ipsum nisi. Nulla ad aute reprehenderit esse sit. Consequat sint proident reprehenderit fugiat est aliqua nulla. Tempor laboris irure ipsum esse excepteur irure. Velit aute sunt officia amet laborum Lorem proident aliquip.</RegistrationInfoBlock>
                </Grid>
                <Grid sx={{ display: "flex", flexDirection: "column", marginTop: "0.5rem", width: "100%", alignItems: "flex-start" }}>
                  <Grid>
                    <Textfield label="example@email.com" name="registerTextField" width="20rem" />
                    <Link to="/dashboard">
                      <Button sx={{ marginTop: "0.5rem", width: "20rem" }}>Sign Up</Button>
                    </Link>
                  </Grid>
                  <Divider sx={{ marginTop: "0.5rem", width: "20rem"}} flexItem>Or Sign Up With</Divider>
                  <Grid>
                    <Link to="/dashboard">
                      <GoogleButton sx={{ width: "20rem", border: "1px solid rgba(0, 0, 0, 0.25)", backgroundColor: "#FFF", marginTop: "0.5rem" }} />
                    </Link>
                  </Grid>
                </Grid>
              </RegistrationInfoBlockContainer>
            </Grid>
        </Grid>
  )
}
