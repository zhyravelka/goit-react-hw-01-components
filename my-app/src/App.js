import React from "react";

import Profile from "./Profile/Profile.jsx";
import user from "./Profile/user.json";

import Statistics from "./Statistics/Statistics";
import statisticalData from "./Statistics/statistical-data.json";

import FriendList from "./FriendList/FriendList";
import friends from "./FriendList/friends.json";

import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transactions.json";

const App = () => {
  return (
    <>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
