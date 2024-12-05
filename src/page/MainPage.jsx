import React, { useState } from "react";

import ButtonElement from "../components/UI/ButtonElement";
import ModalElement from "../components/modal/ModalElement";
import { styled } from "@mui/material";


export const MainPage = () => {
    const [open, setOpen] = useState(() => {
        const storedOpen = localStorage.getItem("modalOpen"); 
        return storedOpen === "true";
      });
    
      const handleClose = () => {
        setOpen(false);
        localStorage.setItem("modalOpen", "false");
      };
    
      const handleOpen = () => {
        setOpen(true);
        localStorage.setItem("modalOpen", "true");
      };
    
      return (
        <StyledDiv>
          <ButtonElement onClick={handleOpen}>Открыть</ButtonElement>
          <ModalElement open={open} onClose={handleClose} /> 
        </StyledDiv>
      );
};

export default MainPage;

const StyledDiv=styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    
})