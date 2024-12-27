import React, { useEffect, useState } from "react";
import Card from "./Card";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {user ? <Card user={user} /> : <p>Loading...</p>}
    </div>
  );
};

export default App;
