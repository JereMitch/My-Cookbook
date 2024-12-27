import { AppBar, Grid2 as Grid, IconButton, styled, Typography } from "@mui/material"
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import "./HeaderStyles.css"

const HeaderContainer = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
})

export default function Header() {
  return (
    <AppBar position="sticky" sx={{ justifyContent: "center", height: "4.75rem" }}>
      <HeaderContainer>
        <Grid display="flex" sx={{ marginLeft: "2rem", alignItems: "baseline" }}> 
          <Typography sx={{ textTransform: "uppercase", fontWeight: 700 }} variant="h4">my</Typography>
          <Typography sx={{ fontWeight: 400, justifyContent: "flex-end" }} variant="h5">cookbook</Typography>
        </Grid>
        <Grid sx={{ marginRight: "2rem" }}>
          <IconButton>
            <ContactSupportRoundedIcon />
          </IconButton>
          <IconButton>
            <AccountCircleRoundedIcon />
          </IconButton>
        </Grid>
      </HeaderContainer>
    </AppBar>
  )
}
