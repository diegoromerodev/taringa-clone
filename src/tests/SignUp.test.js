import React from "react";
import Enzyme, { shallow } from "enzyme";
import SignUp from "../components/User/SignUp";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("basic sign up render", () => {
  test("SignUp asks for more information", () => {
    const signUpComp = shallow(<SignUp />);
    expect(signUpComp.find("h1").text()).toContain("Añadir información");
  });
});
