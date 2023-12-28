import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { AddCircle } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p:2,
};

const data = [
  {
    id: 1,
    name: "mark",
    img: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRNUHcqOt3fW6bObzfrAcT-c0w4hL-v_XDqx-WHyMxnThyJB82edqm7YyZ0Et8_LByixFrW4Eq_EUD9neI",
  },
  {
    id: 2,
    name: "virat",
    img: "https://i.pinimg.com/originals/d8/20/95/d8209588924377a85965e305401e924d.jpg",
  },
  {
    id: 3,
    name: "sundar",
    img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202301/sundar-pichai-three_four.jpg?VersionId=R4d9FNad2pXiq_j4OTWU0DZh3ZUX2SoI",
  },
  {
    id: 5,
    name: "ms",
    img: "https://media4.newsnationtv.com/photos/2015/01/30/859_dhoni1_9739.jpg",
  },
  {
    id: 7,
    name: "jan",
    img: "https://s.yimg.com/ny/api/res/1.2/n_1USBsZ6_fmQtjW7Xlyjg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ1OA--/https://media.zenfs.com/en-US/homerun/fortune_175/00dccaed5ec36c2ff67a14c2bafeb5f1",
  },
  {
    id: 8,
    name: "sudha",
    img: "https://images.mid-day.com/images/images/2023/feb/Sabki-favourite-a_d.jpg",
  },
  {
    id: 6,
    name: "narendra",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Official_Photograph_of_Prime_Minister_Narendra_Modi_Portrait.png",
  },
];

const Story = () => {
  const [open, setOpen] = useState(false);
  const [addPhoto, setAddPhoto] = useState(null);

  const [img, setImg] = useState("");
  const handleClose = () => {
    setOpen(false);
    setImg("");
  };

  const closeAfterTimeout = () => {
    setTimeout(() => {
      handleClose();
    }, 1000);
  };

  return (
    <div
      style={{
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
        fontFamily: "Arial, Helvetica,sans-sarif",
        minHeight: "100vh",
        display: "grid",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "rgb(230,230,230)",
        placeItems: "center",
        color: "rgb(51,51,51)",
      }}
      className="body"
    >
      <div className="container2">
        <div
          style={{
            display: "grid",
            gridAutoFlow: "column",
            gridAutoColumns: "5rem",
            gridGap: "2rem",
            overFlowX: "auto",
          }}
          className="stories-container"
        >
          <div
            style={{
              display: "grid",
              gridGap: "0.5rem",
              margin: "0",
              textAlign: "center",
              position: "relative",
              cursor: "pointery",
              userSelect: "none",
              transition: "all 0.2s ease-in",
            }}
            className="content"
            onClick={() => {
              setOpen(true);
              setAddPhoto(true);
            }}
          >
            <div
              style={{
                display: "inline-block",
                width: "5rem",
                height: "5rem",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "radial-gradient(rgb(0,0,0.15)60%, transparent 0),radial-gradient(white 65%, transparent 0),linear-gradient(to top right, orange, deeppink",
              }}
              className="img-continer"
            >
              <AddIcon />
            </div>
            <div
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                fontSize: "0.9rem",
              }}
              className="text-container"
            >
              Add story
            </div>
          </div>

          {data.map((ele) => {
            return (
              <div
                style={{
                  display: "grid",
                  gridGap: "0.5rem",
                  margin: "0",
                  textAlign: "center",
                  position: "relative",
                  cursor: "pointery",
                  userSelect: "none",
                  transition: "all 0.2s ease-in",
                }}
                className="content"
                onClick={() => {
                  setOpen(true);
                  setImg(ele.img);
                  setAddPhoto(false);
                  closeAfterTimeout();
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    width: "5rem",
                    height: "5rem",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(rgb(0,0,0.15)60%, transparent 0),radial-gradient(white 65%, transparent 0),linear-gradient(to top right, orange, deeppink",
                  }}
                  className="img-continer"
                >
                  <img
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      clipPath: "circle(42%)",
                      display: "block",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      clipPath: "circle(42%)",
                    }}
                    src={ele.img}
                    alt=""
                  ></img>
                </div>
                <div
                  style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    fontSize: "0.9rem",
                  }}
                  className="text-container"
                >
                  Mark Zuckerberg
                </div>
              </div>
            );
          })}
        </div>
       
        <AddStory
          open={open}
          setOpen={setOpen}
          img={img}
          setImg={setImg}
          addPhoto={addPhoto}
          setAddPhoto={setAddPhoto}
        />
      </div>
    </div>
  );
};

export default Story;

export const AddStory = ({
  open,
  setOpen,
  img,
  setImg,
  addPhoto,
  setAddPhoto,
}) => {
  const handleClosePhoto = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClosePhoto}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      width="900px"
      height="700px"
    >
      <Box sx={style}>
        {addPhoto && (
          <Box>
            <Box>
              {img ? (
                <img
                  src={URL.createObjectURL(img)}
                  alt="Preview"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <Typography variant="h4" margin="auto" color="#ccc">
                  Choose Image
                </Typography>
              )}
            </Box>
            <input
              type="file"
              accept="image/*"
              id="img"
              onChange={(e) => setImg(e.target.files[0])}
              className="upload-button"
              style={{ display: "none" }}
            />
            <label htmlFor="img">
              <Button
                variant="outlined"
                component="span"
                startIcon={<AddCircle />}
                size="large"
                color="primary"
              >
                Select Image
              </Button>
            </label>
          </Box>
        )}
        {!addPhoto && (
          <img src={img} style={{ width: "100%", height: "100%" }} />
        )}
      </Box>
    </Modal>
  );
};
