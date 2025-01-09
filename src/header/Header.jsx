import { AppBar, Container, Grid2 as Grid, IconButton, styled, Typography } from "@mui/material"
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import "./HeaderStyles.css"
import { Link } from "react-router-dom";

const HeaderContainer = styled(Container)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
})

const HeaderIconButton = styled(IconButton)({
  minWidth: 0,
  padding: "4px",
})

export default function Header() {
  return (
    <AppBar position="sticky" sx={{ justifyContent: "center", height: "4.75rem", width: "100%", boxShadow: "none" }}>
      <HeaderContainer>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Grid display="flex" sx={{ marginLeft: "2rem", alignItems: "baseline" }}> 
            <Typography sx={{ textTransform: "uppercase", fontWeight: 700 }} variant="h4">my</Typography>
            <Typography sx={{ fontWeight: 400, justifyContent: "flex-end" }} variant="h5">cookbook</Typography>
          </Grid>
        </Link>
        <Grid>
          <HeaderIconButton size="large" sx={{ marginRight: "2rem" }}>
            <ContactSupportRoundedIcon sx={{ height: "2rem", width: "2rem" }} />
          </HeaderIconButton>
          <HeaderIconButton size="large">
            <AccountCircleRoundedIcon sx={{ height: "1.9rem", width: "1.9rem" }} />
          </HeaderIconButton>
        </Grid>
      </HeaderContainer>
    </AppBar>
  )
}
