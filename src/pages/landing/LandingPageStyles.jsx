import { Grid2, styled, Typography } from "@mui/material";

const RegistrationInfoBlock = styled(Typography)({
    width: "fit-content",
    maxWidth: "fit-content",
    height: "80%",
    wordWrap: "break-word",
    overflow: "hidden",
    overflowY: "hidden scroll",
    textAlign: "center",
    padding: "0 5rem",
    marginTop: "1rem",
})

const LandingHeroContainer = styled(Grid2)({
    width: "50%",
    height: "50rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
})

export {
    RegistrationInfoBlock,
    LandingHeroContainer
}