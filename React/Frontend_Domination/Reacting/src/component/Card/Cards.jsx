import React, { useState } from "react";
import Card from "./Card";
function Cards({ users, handleRemove, id }) {
  return (
    <>
      <div className="flex justify-center items-center gap-5 flex-wrap h-96 max-h-96 ">
        {users.map((item, index) => {
          return <Card user={item} handleRemove={handleRemove} id={index} key={index} />;
        })}
      </div>
    </>
  );
}

export default Cards;
