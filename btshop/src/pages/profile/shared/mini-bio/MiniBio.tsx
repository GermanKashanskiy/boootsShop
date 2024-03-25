import { Avatar, Paper } from "@mui/material";
import React, { useState } from "react";
import { GetAuthorizedAccount } from "../../../../routes/AuthAccount";

const MiniBio = () => {
  const [account] = useState(GetAuthorizedAccount());
  return (
    <Paper elevation={3} sx={{ height: "50vh", borderRadius: "40px" }} className="d-flex dir-column items-center justify-space-around">
      <Avatar sx={{ width: "10vw", height: "10vw" }}>{account?.fName[0].toLocaleUpperCase()}{account?.lName[0].toLocaleLowerCase()}</Avatar>

      <div className="mt-2 font-archivo font-900">
        <div>{account?.fName}</div>
        <div>{account?.lName}</div>
        <div>{account?.email}</div>
        <div>{account?.phone}</div>
      </div>
    </Paper >
  );
}

export default MiniBio;