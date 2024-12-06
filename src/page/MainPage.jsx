import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import ButtonElement from "../components/UI/ButtonElement";
import ModalElement from "../components/modal/ModalElement";
import { styled } from "@mui/material";

export const MainPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [open, setOpen] = useState(searchParams.get("modal") === "true");

    useEffect(() => {
        if (open) {
            setSearchParams({ modal: "true" });
        } else {
            setSearchParams({});
        }
    }, [open, setSearchParams]);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <StyledDiv>
            <ButtonElement onClick={handleOpen}>Открыть</ButtonElement>
            <ModalElement open={open} onClose={handleClose} />
        </StyledDiv>
    );
};

export default MainPage;

const StyledDiv = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
});
