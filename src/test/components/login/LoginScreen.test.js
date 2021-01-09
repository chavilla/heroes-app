import React from "react";
import { mount } from "enzyme";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { AuthContext } from "../../../components/auth/AuthContext";
import { types } from "../../../components/types/types";

describe("<LoginScreen />", () => {
  const history = {
    replace: jest.fn(),
  };

  const context = {
    dispatch: jest.fn(),
  };

  const wrapper = mount(
    <AuthContext.Provider value={context}>
      <LoginScreen history={history} />
    </AuthContext.Provider>
  );

  test("should to display the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should to call history replace", () => {
    const handleLogin = wrapper.find("button").prop("onClick");
    handleLogin();
    expect(history.replace).toHaveBeenCalledWith("/");
    expect(context.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: "Jesús",
      },
    });

    localStorage.setItem("lastPath", "/dc");

    handleLogin();

    expect(history.replace).toHaveBeenCalledWith("/dc");
  });
});
