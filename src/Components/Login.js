import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

export default function BasicCard() {
  return (
<Card>
    
       <div className="card">
       <CardContent>
          <div>
          <img src="images/logo.png" alt="PearERP"></img>
          </div>
          <div className="dotted">
        <Button size="small">Don't have an account? Sing up here!</Button>
            <br />
          </div>
          <div className="dotted">
          <Button size="small">Want to log in by another role!Click here</Button>
          </div>
          <form>
          <TextField className="textfield" id="standard-basic" label="Email" variant="standard" />
            <br />
            <br />
            <TextField className="textfield" id="standard-basic" label="Password" variant="standard" />     
          </form>
          <button class="button">Login</button>
        </CardContent>
       </div>
      </Card>
  );
}
