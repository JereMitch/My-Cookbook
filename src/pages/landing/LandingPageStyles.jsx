import { Grid2, styled, Tab, Typography } from "@mui/material";

const RegistrationInfoBlockContainer = styled(Grid2)({
    display: "flex",
    flexDirection: "row"
})

const RegistrationInfoBlock = styled(Typography)({
    wordWrap: "break-word",
    overflow: "hidden",
    overflowY: "hidden scroll",
    textAlign: "left",
    padding: "0 5rem",
    marginTop: "1rem",
})

const StyledTab = styled(Tab)(({ theme, color = "primary" }) => ({
    "&:hover": {
        color: theme.palette[color].main,
    }
}))

const StyledSectionContainer = styled(Grid2)({
    display: "flex",
    minWidth: "75vw",
    minHeight: "45vh",
})

const StyledSection = styled(Grid2)(({ width }) => ({
    display: "inherit",
    width: width? width : "40%",
    flexDirection: "column",
    padding: "1.5rem 3rem",
}))

export {
    RegistrationInfoBlock,
    RegistrationInfoBlockContainer,
    StyledTab,
    StyledSectionContainer,
    StyledSection,
}