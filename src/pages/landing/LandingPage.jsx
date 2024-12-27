// import { useState } from "react"
import { Grid2 as Grid, Typography } from "@mui/material"
import Footer from "../../footer/Footer"
import Header from "../../header/Header"
import { LandingHeroContainer, RegistrationInfoBlock } from "./LandingPageStyles.jsx"
import Textfield from "../../components/textfields/Textfield.jsx"
import { Button } from "../../components/buttons/Button.jsx"

export default function LandingPage() {
  return (
    <>
      <Header />
        <Grid container sx={{ minHeight: "75vh"}}>
          <LandingHeroContainer>
            <Grid sx={{ height: "22.5%", marginTop: "9rem" }}>
              <Typography variant="h4" sx={{ textAlign: "center" }}>Welcome!</Typography>
              <RegistrationInfoBlock>Eiusmod eu aute pariatur ullamco dolor incididunt. Consectetur occaecat eu cillum non deserunt enim commodo voluptate reprehenderit elit laboris. Aliqua proident enim pariatur amet commodo ipsum nisi. Nulla ad aute reprehenderit esse sit. Consequat sint proident reprehenderit fugiat est aliqua nulla. Tempor laboris irure ipsum esse excepteur irure. Velit aute sunt officia amet laborum Lorem proident aliquip.</RegistrationInfoBlock>
            </Grid>
            <Grid>
              <Textfield label="example@email.com" name="registerTextField" />
              <Button sx={{ marginTop: "0.5rem" }}>Register</Button>
            </Grid>
          </LandingHeroContainer>
          <LandingHeroContainer>

          </LandingHeroContainer>
        </Grid>
      <Footer />
    </>
  )
}
