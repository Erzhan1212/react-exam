import * as React from "react";
import Modal from "@mui/material/Modal";
import Portal from "@mui/material/Portal";
import { MenuItem } from "@mui/material";
import { StyleBox, StyledButton } from "./ModalElement";
import { useNavigate } from "react-router-dom";

const MenuModal = () => {
  const navigate = useNavigate();

  return (
    <Portal>
      <Modal
        open={true}
        onClose={() => navigate(-1)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyleBox sx={{border:"none"}}>
          <MenuItem
            onClick={() => navigate("/menu/colors")}
            sx={{ color: "#13b1fb" }}
          >
            Background
          </MenuItem>
          <MenuItem
            onClick={() => navigate("/menu/images")}
            sx={{ color: "#13b1fb" }}
          >
            Image
          </MenuItem>
          <StyledButton onClick={() => navigate(-1)}>Закрыть</StyledButton>
        </StyleBox>
      </Modal>
    </Portal>
  );
};

export default MenuModal;
