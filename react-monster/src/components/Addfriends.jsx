import React, { useState } from "react";

const Addfriends = () => {
  const [friends, setFriends] = useState(["Ali", "Gulam"]);

  const addFriend = () => setFriends([...friends, "Waqas"]);
  const removeFriend = () => setFriends(friends.filter((f) => f !== "Gulam"));
  return (
    <div>
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}
      ;<button onClick={addFriend}>Add new Friend</button>
      <button onClick={removeFriend}>Remove new Friend</button>
    </div>
  );
};

export default Addfriends;
