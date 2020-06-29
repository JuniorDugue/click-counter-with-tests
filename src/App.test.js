import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter";

import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });
