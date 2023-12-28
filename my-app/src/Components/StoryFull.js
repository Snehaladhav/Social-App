import React from 'react'
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

function StoryFull({ open, setOpen, img, name }) {
    const style = {
            // position: "absolute",
            // top: "50%",
            // left: "50%",
            // bottom: "20%",
            // transform: "translate(-50%, -50%)",
            // width: 400,
            // bgcolor: "background.paper",
            // border: "2px solid #000",
            // boxShadow: 24,
            // p: 4,
          };
          const handleClose = () => setOpen.setOpen(false);
  return (
   <>
   {console.log(name)}
      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <img src={img} />
      </Box>
    </Modal>
    
   </>
  )
}

export default StoryFull