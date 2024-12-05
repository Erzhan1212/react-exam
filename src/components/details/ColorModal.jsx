import * as React from "react";
import Modal from "@mui/material/Modal";
import Portal from "@mui/material/Portal";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../utils/constants";
import { StyleBox, StyledButton } from "../modal/ModalElement";

const ColorsModal = () => {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = React.useState(null);
  const [isFullScreen, setIsFullScreen] = React.useState(false);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsFullScreen(true);
  };

  const handleDoubleClick = () => {
    setSelectedColor(null);
    setIsFullScreen(false);
  };

  const handleClose = () => {
    setSelectedColor(null);
    setIsFullScreen(false);
    navigate(-1);
  };

  return (
    <Portal>
      <Modal open={true} onClose={handleClose}>
        {isFullScreen ? (
          
          <Box
            sx={{
              backgroundColor: selectedColor,
              height: "100vh",
              width: "100vw",
            }}
            onDoubleClick={handleDoubleClick} 
          />
        ) : (
          // Color palette display
          <StyleBox>
            {COLORS.map((color) => (
              <Box
                key={color}
                sx={{
                  backgroundColor: color,
                  height: "100px",
                  width: "100px",
                  margin: "10px",
                  cursor: "pointer",
                }}
                onClick={() => handleColorClick(color)}
                
              />
            ))}
            <StyledButton onClick={handleClose}>Назад</StyledButton>
          </StyleBox>
        )}
      </Modal>
    </Portal>
  );
};

export default ColorsModal;
