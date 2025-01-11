import React from "react";
import { useUser } from "./UserContext";

function Header() {
  const { user } = useUser();

  return (
    <>
      <header>
        <div>
          <h1>NC News</h1>
        </div>
        {user ? (
          <div className="avatar-container">
            <img src={user.avatar_url} alt={user.username} className="avatar" />
            <p className="user-name">{user.name}</p>
          </div>
        ) : (
          <p>Loading user...</p>
        )}
      </header>
    </>
  );
}

export default Header;
