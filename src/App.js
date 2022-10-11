import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import data from "./response.json";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./UserProfile";
import UserProfile from "./UserProfile";
function App() {
  const [serverData, setServerData] = useState(data);
  const [selectedUser, setSelectedUser] = useState(0);
  // useEffect(() => {
  //   axios
  //     .get("https://sonus.gg/Data/RankUsers?ID=699754090674257921", {
  //       method: "get",
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Methods": "GET",
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const AppHome = () => {
    const navigate = useNavigate();

    const handleNavigateToUser = (index) => {
      setSelectedUser(index);
      navigate("/UserProfile");
    };

    return (
      <div>
        <div className="app__header">
          <img
            src={serverData.GuildIcon}
            alt="Guild Icon"
            className="app__headerIcon"
          />
          <p className="app__headerName">{serverData.GuildName}</p>
        </div>
        <div className="app__body">
          <div className="app__bodyVoiceUsersList">
            {serverData?.VoiceRanks.map((voiceUser, index) => (
              <div
                onClick={() => handleNavigateToUser(index)}
                className="app__bodyVoiceUser"
              >
                <div className="app__bodyVoiceUserRank">
                  <p>{voiceUser.Rank}</p>
                </div>
                <p
                  className="app__bodyVoiceUserName"
                  style={{ color: voiceUser.RoleColor }}
                >
                  {voiceUser.UserName}#{voiceUser.UserDiscriminator}
                </p>

                <p className="app__bodyVoiceUserTotalTime"></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppHome />} />
          <Route
            path="/UserProfile"
            element={<UserProfile user={serverData.VoiceRanks[selectedUser]} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
