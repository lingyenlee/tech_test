import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

//configure enzyme with adaptor
Enzyme.configure({ adapter: new Adapter() });

// make enzyme functions available in all test files without importing
global.React = React
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
