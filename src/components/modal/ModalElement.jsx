import * as React from "react";
import Modal from "@mui/material/Modal";
import Portal from "@mui/material/Portal";
import { Box, MenuItem, styled } from "@mui/material";
import ButtonElement from "../UI/ButtonElement";
import { useNavigate } from "react-router-dom";

const ModalElement = ({ open, onClose }) => {
  const navigate = useNavigate();
  return (
    <Portal>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyleBox>
          <MenuItem sx={{ color: "#13b1fb" }} onClick={() => navigate("/menu")}>
            Меню
          </MenuItem>
          <MenuItem sx={{ color: "#13b1fb" }} onClick={onClose}>
            Архив
          </MenuItem>
          <MenuItem sx={{ color: "#13b1fb" }} onClick={onClose}>
            Удалить
          </MenuItem>
          <StyledButton onClick={onClose}>Закрыть</StyledButton>
        </StyleBox>
      </Modal>
    </Portal>
  );
};

export default ModalElement;

export const StyleBox = styled(Box)({
  position: "absolute",
  top: "0",
  right: "1px",
  padding: "20px",
  backgroundColor: "whitesmoke",

  width: "400px",
  height: "100vh",
  bgcolor: "background.paper",

  borderRadius: "8px",
  boxShadow: 24,
  overflowY: "auto",
});
export const StyledButton = styled(ButtonElement)({
  fontWeight: "300",
  fontSize: "16px",
  width: "90px",
  height: "30px",
  color: "#13b1fb",
  backgroundColor: "#f8f7f7",
  boxShadow: "none",
  paddingRight: "0.2px",
});
