import { Grid2, IconButton, Button as MUIButton } from '@mui/material'
import "./ButtonStyles.css"

const Button = ({ ...props }) =>  {
    const { children, sx, name } = props;
  return (
    <Grid2>
        <MUIButton variant='contained' id={name} sx={{ ...sx }}>{children}</MUIButton>
    </Grid2>
  )
}

const HeaderIconButton = ({ ...props }) => {
  const { children, sx, name } = props;
  return (
    <Grid2>
      <IconButton id={name} sx={{ ...sx }} >{children}</IconButton>
    </Grid2>
  )
}

export {
  Button,
  HeaderIconButton,
}