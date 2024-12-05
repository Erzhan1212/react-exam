import * as React from "react";
import Modal from "@mui/material/Modal";
import Portal from "@mui/material/Portal";
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../utils/constants";
import { StyleBox, StyledButton } from "../modal/ModalElement";

const ImagesModal = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [isFullScreen, setIsFullScreen] = React.useState(false); 

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsFullScreen(true); 
  };

  const handleDoubleClick = () => {
    setSelectedImage(null);
    setIsFullScreen(false); 
  };

  const handleClose = () => {
    setSelectedImage(null);
    setIsFullScreen(false);
    navigate(-1); 
  };

  return (
    <Portal>
      <Modal open={true} onClose={handleClose}>
        {isFullScreen ? (
          // Full-screen image display
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              width: "100vw",
              backgroundColor: "rgba(0,0,0,0.8)",
              border:"none"
            }}
            onDoubleClick={handleDoubleClick} 
          >
            <img
              src={selectedImage.image}
              alt={`Selected ${selectedImage.id}`}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              onError={(e) => {
                e.target.src = "/broken-image.jpg";
              }}
            />
          </div>
        ) : (
          
          <StyleBox sx={{ border: "none" }}>
            {IMAGES.map((image) => (
              <img
                key={image.id}
                src={image.image}
                alt={`Selected ${image.id}`}
                style={{
                  maxWidth: "200px",
                  maxHeight: "200px",
                  margin: "10px",
                  cursor: "pointer",
                }}
                onClick={() => handleImageClick(image)}
                onDoubleClick={handleDoubleClick}
                onError={(e) => {
                  e.target.src = "/broken-image.jpg";
                }}
              />
            ))}
            <StyledButton onClick={handleClose}>Назад</StyledButton>
          </StyleBox>
        )}
      </Modal>
    </Portal>
  );
};

export default ImagesModal;