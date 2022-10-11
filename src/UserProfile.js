import React from "react";
import "./UserProfile.css";
import { useParams } from "react-router-dom";

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
              : user.UserName + "#" + user.UserDescriminator}
          </div>
          <div className="userProfile__headerSmallName">
            {user.NickName
              ? user.UserName + "#" + user.UserDiscriminator
              : null}
          </div>
        </div>
      </div>

      <div className="userProfile__body">BODY</div>
    </div>
  );
}

export default UserProfile;
