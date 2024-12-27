import { TextField as MUITextfield } from "@mui/material"

export default function Textfield({ ...props }) {
    const { children, label, name, type } = props;
  return (
    <MUITextfield 
        label={label} 
        id={name}
        type={type}
        >
            {children}
        </MUITextfield>
  )
}
