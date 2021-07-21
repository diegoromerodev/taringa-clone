import React, { useState, useEffect } from "react";
import {
  SectionHeader,
  WidgetBody,
  WidgetLink,
  WidgetOptions,
  WidgetItem,
} from "../../../styles/StyleAccents";

const TopUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .get()
      .then((querySnapshot) => {
        const userRetrieval = [];
        let count = 0;
        querySnapshot.forEach((doc) => {
          if (count >= 24) return null;
          userRetrieval.push(doc.data());
          count++;
        });
        setUsers(userRetrieval);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);
  return (
    <WidgetBody className="last-widget">
      <SectionHeader>Usuarios TOPs</SectionHeader>
      <WidgetOptions>
        <WidgetLink to="#">Ayer</WidgetLink> -
        <WidgetLink to="#">Semana</WidgetLink> -
        <WidgetLink to="#">Mes</WidgetLink> -
        <WidgetLink to="#" className="selected-widget-link">
          Histórico
        </WidgetLink>
      </WidgetOptions>
      {users
        .sort((a, b) => b.points - a.points)
        .map((user, index) => {
          return (
            <WidgetItem key={"topusers" + user.uid} className="two-options">
              <p>
                <strong>{(index + 1).toString().padStart(2, "0")} </strong>
                {user.displayName}
              </p>
              <span>{user.points}</span>
            </WidgetItem>
          );
        })}
    </WidgetBody>
  );
};

export default TopUsers;
