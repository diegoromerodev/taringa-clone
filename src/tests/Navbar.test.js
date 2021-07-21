import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Navbar from "../components/NavBar/Navbar";

Enzyme.configure({ adapter: new Adapter() });

describe("basic navbar render", () => {
  test("Navbar asks for sign up and sign in", () => {
    const signInWithGoogle = jest.fn();
    const signOut = jest.fn();
    const navbar = shallow(
      <Navbar signInWithGoogle={signInWithGoogle} signOut={signOut}></Navbar>,
      { displayName: "image" }
    );
    expect(navbar.text()).toContain("Posts");
  });
});
