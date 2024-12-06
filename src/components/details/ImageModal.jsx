import * as React from "react";
import Modal from "@mui/material/Modal";
import Portal from "@mui/material/Portal";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IMAGES } from "../../utils/constants";
import { StyleBox, StyledButton } from "../modal/ModalElement";

const ImagesModal = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedImageId = searchParams.get("imageId");
  const selectedImage = IMAGES.find(image => image.id === selectedImageId);
  const [isFullScreen, setIsFullScreen] = React.useState(!!selectedImage);

  const handleImageClick = (image) => {
    setSearchParams({ imageId: image.id });
    setIsFullScreen(true);
  };

  const handleDoubleClick = () => {
    setSearchParams({});
    setIsFullScreen(false);
  };

  const handleClose = () => {
    setSearchParams({});
    setIsFullScreen(false);
    navigate("/menu");
  };

  return (
    <Portal>
      <Modal open={true} onClose={handleClose}>
        {isFullScreen && selectedImage ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "column",
              gap: "10vh",
              height: "100vh",
              width: "100vw",
              backgroundColor: "rgba(0,0,0,0.8)",
              border: "none",
            }}
          >
            <img
              src={selectedImage.image}
              alt={`Selected ${selectedImage.id}`}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              onError={(e) => {
                e.target.src = "/broken-image.jpg";
              }}
            />
            <StyledButton
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.01)",
                color: "rgb(79, 67, 67)",
              }}
              onClick={handleDoubleClick}
            >
              Назад
            </StyledButton>
          </div>
        ) : (
          <StyleBox sx={{ border: "none" }}>
            {IMAGES.map((image) => (
              <img
                key={image.id}
                src={image.image}
                alt={`Image ${image.id}`}
                style={{
                  maxWidth: "80px",
                  maxHeight: "80px",
                  margin: "1px",
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
