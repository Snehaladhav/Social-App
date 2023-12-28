import React from "react";

const Card = () => {
  fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ author: "aman" }),
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
  return (
    <div>
      <div className="conatiner">
        <div>
          <card>
            <h1>Oragne Transport</h1>
          </card>
        </div>
      </div>
    </div>
  );
};

export default Card;
