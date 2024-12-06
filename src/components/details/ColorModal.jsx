import * as React from "react";
import Modal from "@mui/material/Modal";
import Portal from "@mui/material/Portal";
import { Box } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { COLORS } from "../../utils/constants";
import { StyleBox, StyledButton } from "../modal/ModalElement";

const ColorsModal = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedColorFromUrl = searchParams.get("color");
  const [selectedColor, setSelectedColor] = React.useState(
    selectedColorFromUrl || null
  );
  const [isFullScreen, setIsFullScreen] = React.useState(
    !!selectedColorFromUrl
  );

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsFullScreen(true);
    setSearchParams({ color });
  };

  const handleDoubleClick = () => {
    setSelectedColor(null);
    setIsFullScreen(false);
    setSearchParams({});
  };

  const handleClose = () => {
    setSelectedColor(null);
    setIsFullScreen(false);
    setSearchParams({});
    navigate("/menu");
  };

  return (
    <Portal>
      <Modal open={true} onClose={handleClose}>
        {isFullScreen ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",

              backgroundColor: selectedColor,
              height: "100vh",
              width: "100vw",
            }}
          >
            <StyledButton
              sx={{
                margin: "10px 20px 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={handleDoubleClick}
            >
              Назад
            </StyledButton>
          </Box>
        ) : (
          <StyleBox>
            {COLORS.map((color) => (
              <Box
                key={color}
                sx={{
                  backgroundColor: color,
                  height: "30px",
                  width: "30px",
                  margin: "10px",
                  cursor: "pointer",
                  display: "flex",
                  flexWrap: "wrap",
                }}
                onClick={() => handleColorClick(color)}
              />
            ))}
            <StyledButton onClick={() => handleClose()}>Назад</StyledButton>
          </StyleBox>
        )}
      </Modal>
    </Portal>
  );
};

export default ColorsModal;
