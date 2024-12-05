import { Button, styled } from "@mui/material";
import React from "react";

const ButtonElement = ({ type, children, ...props }) => {
  return (
    <>
     
      <StyledButton type="type" variant="contained" {...props}>
        {children}
      </StyledButton>
    </>
  );
};

export default ButtonElement;


const StyledButton = styled(Button)({
  height:"35px",
  width: "200px",
  fontSize:"20px",
  fontWeight:"600",
  backgroundColor:"#1cb0f4",
  border:"none"
});
