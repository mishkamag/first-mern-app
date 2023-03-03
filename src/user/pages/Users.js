import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Lebron Jmaes",
      image:
        "https://cdn.nba.com/teams/uploads/sites/1610612747/2022/08/2223_lal_mktg_bronextension_1600x900-1.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
