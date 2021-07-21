import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext({ user: null });

const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) return setUser(null);
      const { displayName, email, uid } = user;
      firebase
        .firestore()
        .collection("users")
        .doc(uid)
        .get()
        .then((doc) => {
          if (!doc.data()) {
            setUser({
              uid,
              displayName,
              email,
              points: 0,
              posts: 0,
              followers: Math.floor(Math.random() * 9999),
              comments: 0,
              date: Date.now(),
            });
            return;
          }
          const userInfo = doc.data();
          setUser(userInfo);
        })
        .catch((error) => {
          console.log(error.message);
        });
    });
  }, []);
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
