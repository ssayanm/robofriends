import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "a",
    isPending: false
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("expect to render MainPage component without crashing", () => {
  expect(wrapper.debug()).toMatchSnapshot();
});

it("filters robots correctly", () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{ id: 2, name: "Jake", email: "jake@gmail.com" }],
    searchField: "Jake",
    isPending: false
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots([])).toEqual([
    {
      id: 2,
      name: "Jake",
      email: "jake@gmail.com"
    }
  ]);
});

it("filters robots correctly 2", () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [{ id: 2, name: "Jake", email: "jake@gmail.com" }],
    searchField: "o",
    isPending: false
  };
  const filteredRobots = [];
  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3.instance().filterRobots([])).toEqual(filteredRobots);
});
