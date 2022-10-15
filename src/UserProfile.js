import React from "react";
import "./UserProfile.css";
import { useParams } from "react-router-dom";
import ComputerIcon from "@mui/icons-material/Computer";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import VideocamIcon from "@mui/icons-material/Videocam";
function UserProfile({ user }) {
  console.log(user);
  return (
    <div className="userProfile">
      <div className="userProfile__header">
        <img src={user.AvatarUrl} alt="User Avatar" />

        <div
          style={{
            color: user.RoleColor,
          }}
        >
          <div className="userProfile__headerBigName">
            {user.NickName
              ? user.NickName
              : user.UserName + "#" + user.UserDiscriminator}
          </div>
          <div className="userProfile__headerSmallName">
            {user.NickName
              ? user.UserName + "#" + user.UserDiscriminator
              : null}
          </div>
        </div>
      </div>

      <div className="userProfile__body">
        <div className="userProfile__bodyItemContainer">
          <ComputerIcon />
          <p className="userProfile__bodyItemContainerHeader">Total Time</p>
          <p>
            <em>{user.TotalTime.Days}</em> Days <em>{user.TotalTime.Hours}</em>{" "}
            Hours <em>{user.TotalTime.Minutes}</em> Minutes{" "}
            <em>{user.TotalTime.Seconds}</em> Seconds
          </p>
        </div>

        <div className="userProfile__bodyItemContainer">
          <HeadsetMicIcon />
          <p className="userProfile__bodyItemContainerHeader">Active Time</p>
          <p>
            <em>{user.ActiveTime.Days}</em> Days{" "}
            <em>{user.ActiveTime.Hours}</em> Hours{" "}
            <em>{user.ActiveTime.Minutes}</em> Minutes{" "}
            <em>{user.ActiveTime.Seconds}</em> Seconds
          </p>
        </div>

        <div className="userProfile__bodyItemContainer">
          <ConnectedTvIcon />
          <p className="userProfile__bodyItemContainerHeader">Strean Time</p>
          <p>
            <em>{user.StreamTime.Days}</em> Days{" "}
            <em>{user.StreamTime.Hours}</em> Hours{" "}
            <em>{user.StreamTime.Minutes}</em> Minutes{" "}
            <em>{user.StreamTime.Seconds}</em> Seconds
          </p>
        </div>

        <div className="userProfile__bodyItemContainer">
          <VideocamIcon />
          <p className="userProfile__bodyItemContainerHeader">WebCam Time</p>
          <p>
            <em>{user.WebCamTime.Days}</em> Days{" "}
            <em>{user.WebCamTime.Hours}</em> Hours{" "}
            <em>{user.WebCamTime.Minutes}</em> Minutes{" "}
            <em>{user.WebCamTime.Seconds}</em> Seconds
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
