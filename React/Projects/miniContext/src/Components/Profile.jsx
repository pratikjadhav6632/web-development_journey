import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";


function Profile() {
 
const {user,password}=useContext(UserContext);

if(!user) return <div>
    please login
</div>
  return <div>
    <br />
    Welcome {user.username} <br/>

   
 
        Your password is : {user.password}

  </div>
}

export default Profile;
