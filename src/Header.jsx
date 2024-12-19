import React from "react";
import { useUser } from "./UserContext";

function Header() {
  const { user } = useUser();

  return (
    <>
      <header>
        <h1>NC News</h1>
        {user ? (
          <div>
            <img src={user.avatar_url} alt={user.username} className="avatar" />
            <p>{user.name}</p>
          </div>
        ) : (
          <p>Loading user...</p>
        )}
      </header>
    </>
  );
}

export default Header;
