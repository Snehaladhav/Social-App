import React from 'react'

import { Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  // height: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const data = [
  {
    id: 1,
    name: "mark",
    img: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRNUHcqOt3fW6bObzfrAcT-c0w4hL-v_XDqx-WHyMxnThyJB82edqm7YyZ0Et8_LByixFrW4Eq_EUD9neI",
    video: "https://www.google.com/search?q=natures+videos&sca_esv=574726742&sxsrf=AM9HkKkY_X2Vs2tA8pABVAHiLLB3ltywxQ%3A1697696458433&ei=ysowZY37GaWVseMPk6GrkAc&oq=natures+videos&gs_lp=Egxnd3Mtd2l6LXNlcnAiDm5hdHVyZXMgdmlkZW9zKgIIADIKEAAYgAQYFBiHAjIIEAAYBxgeGAoyDRAAGAcYHhgPGPEEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGApIjTpQ4QJYxStwAXgBkAEAmAHeAaABgBWqAQUwLjkuNbgBAcgBAPgBAcICChAAGEcY1gQYsAPCAgYQABgHGB7CAg8QABgIGAcYHhgPGPEEGArCAgsQABiKBRixAxiRAsICDhAuGIoFGMcBGK8BGJECwgIKEAAYDRiABBixA8ICBxAAGA0YgATCAgkQABgNGIAEGAriAwQYACBBiAYBkAYI&sclient=gws-wiz-serp#",
  },
  {
    id: 2,
    name: "virat",
    img: "https://i.pinimg.com/originals/d8/20/95/d8209588924377a85965e305401e924d.jpg",
    video: "https://www.google.com/search?q=natures+videos&sca_esv=574726742&sxsrf=AM9HkKkY_X2Vs2tA8pABVAHiLLB3ltywxQ%3A1697696458433&ei=ysowZY37GaWVseMPk6GrkAc&oq=natures+videos&gs_lp=Egxnd3Mtd2l6LXNlcnAiDm5hdHVyZXMgdmlkZW9zKgIIADIKEAAYgAQYFBiHAjIIEAAYBxgeGAoyDRAAGAcYHhgPGPEEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGApIjTpQ4QJYxStwAXgBkAEAmAHeAaABgBWqAQUwLjkuNbgBAcgBAPgBAcICChAAGEcY1gQYsAPCAgYQABgHGB7CAg8QABgIGAcYHhgPGPEEGArCAgsQABiKBRixAxiRAsICDhAuGIoFGMcBGK8BGJECwgIKEAAYDRiABBixA8ICBxAAGA0YgATCAgkQABgNGIAEGAriAwQYACBBiAYBkAYI&sclient=gws-wiz-serp#",
  },
  {
    id: 3,
    name: "sundar",
    img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202301/sundar-pichai-three_four.jpg?VersionId=R4d9FNad2pXiq_j4OTWU0DZh3ZUX2SoI",
    video: "https://www.google.com/search?q=natures+videos&sca_esv=574726742&sxsrf=AM9HkKkY_X2Vs2tA8pABVAHiLLB3ltywxQ%3A1697696458433&ei=ysowZY37GaWVseMPk6GrkAc&oq=natures+videos&gs_lp=Egxnd3Mtd2l6LXNlcnAiDm5hdHVyZXMgdmlkZW9zKgIIADIKEAAYgAQYFBiHAjIIEAAYBxgeGAoyDRAAGAcYHhgPGPEEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGApIjTpQ4QJYxStwAXgBkAEAmAHeAaABgBWqAQUwLjkuNbgBAcgBAPgBAcICChAAGEcY1gQYsAPCAgYQABgHGB7CAg8QABgIGAcYHhgPGPEEGArCAgsQABiKBRixAxiRAsICDhAuGIoFGMcBGK8BGJECwgIKEAAYDRiABBixA8ICBxAAGA0YgATCAgkQABgNGIAEGAriAwQYACBBiAYBkAYI&sclient=gws-wiz-serp#",
  },
  {
    id: 5,
    name: "ms",
    img: "https://media4.newsnationtv.com/photos/2015/01/30/859_dhoni1_9739.jpg",
    video: "https://www.google.com/search?q=natures+videos&sca_esv=574726742&sxsrf=AM9HkKkY_X2Vs2tA8pABVAHiLLB3ltywxQ%3A1697696458433&ei=ysowZY37GaWVseMPk6GrkAc&oq=natures+videos&gs_lp=Egxnd3Mtd2l6LXNlcnAiDm5hdHVyZXMgdmlkZW9zKgIIADIKEAAYgAQYFBiHAjIIEAAYBxgeGAoyDRAAGAcYHhgPGPEEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGApIjTpQ4QJYxStwAXgBkAEAmAHeAaABgBWqAQUwLjkuNbgBAcgBAPgBAcICChAAGEcY1gQYsAPCAgYQABgHGB7CAg8QABgIGAcYHhgPGPEEGArCAgsQABiKBRixAxiRAsICDhAuGIoFGMcBGK8BGJECwgIKEAAYDRiABBixA8ICBxAAGA0YgATCAgkQABgNGIAEGAriAwQYACBBiAYBkAYI&sclient=gws-wiz-serp#",
  },
  {
    id: 7,
    name: "jan",
    img: "https://s.yimg.com/ny/api/res/1.2/n_1USBsZ6_fmQtjW7Xlyjg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ1OA--/https://media.zenfs.com/en-US/homerun/fortune_175/00dccaed5ec36c2ff67a14c2bafeb5f1",
    video: "https://www.google.com/search?q=natures+videos&sca_esv=574726742&sxsrf=AM9HkKkY_X2Vs2tA8pABVAHiLLB3ltywxQ%3A1697696458433&ei=ysowZY37GaWVseMPk6GrkAc&oq=natures+videos&gs_lp=Egxnd3Mtd2l6LXNlcnAiDm5hdHVyZXMgdmlkZW9zKgIIADIKEAAYgAQYFBiHAjIIEAAYBxgeGAoyDRAAGAcYHhgPGPEEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGApIjTpQ4QJYxStwAXgBkAEAmAHeAaABgBWqAQUwLjkuNbgBAcgBAPgBAcICChAAGEcY1gQYsAPCAgYQABgHGB7CAg8QABgIGAcYHhgPGPEEGArCAgsQABiKBRixAxiRAsICDhAuGIoFGMcBGK8BGJECwgIKEAAYDRiABBixA8ICBxAAGA0YgATCAgkQABgNGIAEGAriAwQYACBBiAYBkAYI&sclient=gws-wiz-serp#",
  },
  {
    id: 8,
    name: "sudha",
    img: "https://images.mid-day.com/images/images/2023/feb/Sabki-favourite-a_d.jpg",
    video: "https://www.google.com/search?q=natures+videos&sca_esv=574726742&sxsrf=AM9HkKkY_X2Vs2tA8pABVAHiLLB3ltywxQ%3A1697696458433&ei=ysowZY37GaWVseMPk6GrkAc&oq=natures+videos&gs_lp=Egxnd3Mtd2l6LXNlcnAiDm5hdHVyZXMgdmlkZW9zKgIIADIKEAAYgAQYFBiHAjIIEAAYBxgeGAoyDRAAGAcYHhgPGPEEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGApIjTpQ4QJYxStwAXgBkAEAmAHeAaABgBWqAQUwLjkuNbgBAcgBAPgBAcICChAAGEcY1gQYsAPCAgYQABgHGB7CAg8QABgIGAcYHhgPGPEEGArCAgsQABiKBRixAxiRAsICDhAuGIoFGMcBGK8BGJECwgIKEAAYDRiABBixA8ICBxAAGA0YgATCAgkQABgNGIAEGAriAwQYACBBiAYBkAYI&sclient=gws-wiz-serp#",
  },
  {
    id: 6,
    name: "narendra",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Official_Photograph_of_Prime_Minister_Narendra_Modi_Portrait.png",
    video: "https://www.google.com/search?q=natures+videos&sca_esv=574726742&sxsrf=AM9HkKkY_X2Vs2tA8pABVAHiLLB3ltywxQ%3A1697696458433&ei=ysowZY37GaWVseMPk6GrkAc&oq=natures+videos&gs_lp=Egxnd3Mtd2l6LXNlcnAiDm5hdHVyZXMgdmlkZW9zKgIIADIKEAAYgAQYFBiHAjIIEAAYBxgeGAoyDRAAGAcYHhgPGPEEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGAoyBxAAGIAEGApIjTpQ4QJYxStwAXgBkAEAmAHeAaABgBWqAQUwLjkuNbgBAcgBAPgBAcICChAAGEcY1gQYsAPCAgYQABgHGB7CAg8QABgIGAcYHhgPGPEEGArCAgsQABiKBRixAxiRAsICDhAuGIoFGMcBGK8BGJECwgIKEAAYDRiABBixA8ICBxAAGA0YgATCAgkQABgNGIAEGAriAwQYACBBiAYBkAYI&sclient=gws-wiz-serp#",
  },
];

const StoryAdded = () => {
  const [open, setOpen] = useState(false);
  const [vdo, setVdo] = useState("");
  const handleClose = () => { setOpen(false);
  setVdo("");
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
      <div
        style={{
          overscrollBehaviorX: "contain",
          border: "1px solid rgb(204,204,204)",
          padding: "2rem",
          width: "90%",
          width: "300px",
          overflow: "auto",
        }}
        className="container2"
      >
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
                  setVdo(ele.video);
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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          width="900px"
          height="700px"
        >
          <Box sx={style}>
            <vdo src={vdo} style={{ width: "100%", height: "100%" }} />
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default StoryAdded;
