import { TextField as MUITextfield } from "@mui/material"

export default function Textfield({ ...props }) {
    const { children, label, name, type, sx, width } = props;
  return (
    <MUITextfield 
        label={label} 
        id={name}
        type={type}
        sx={{ width: width ? width : "18.75rem", backgroundColor: "white", ...sx }}
        size="small"
        variant="outlined"
        >
            {children}
        </MUITextfield>
  )
}
