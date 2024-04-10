import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profilecontent = () => {
  const navigate = useNavigate()
  const [profileData, setProfileData] = useState("");
  useEffect(() => {
    (async () => {
      try {
        // const response = await axios.get(`http://localhost:8090/api/getprofile/${id}`, {
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // });

        if(response.data.message === "token does not exist or has expired") {
          navigate('/login')
        }
  
        setProfileData(response.data);
        console.log(profileData)
      } catch (err) {
        console.error(err);
      }


    })();
  }, []);
  console.log(profileData)

  return (
    <div>
      <div>
        <div className="banner_tops">
          <div className="profile_picture"></div>
          <div className="profile_body">
            <p className="pr_header">who am i?</p>
            <p className="bio">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
              eius dignissimos aperiam aut. Voluptates perferendis fugiat sint
              animi, atque iure magni veniam dignissimos porro amet maxime quia
              architecto, nihil fugit.
            </p>
          </div>

          <div className="name_email">
            <div>
              <p className="pr_header">username</p>
              <p className="bio">@okaforchidubem7</p>
            </div>

            <div className="">
              <p className="pr_header">email</p>
              <p className="bio">okaforchidubem7@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilecontent;
