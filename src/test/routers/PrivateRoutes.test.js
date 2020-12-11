import React from "react";
import PrivateRoute from "../../components/routers/PrivateRoutes";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";

describe("<PrivateRoutes />", () => {

  const res = {
    location: {
      pathname: "/marvel",
    },
  };

  //simulate a function
  Storage.prototype.setItem=jest.fn();

  test("should display the component if the user is authenticated", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          {...res}
          isAuth={true}
          component={() => <span>Hola</span>}
        />
        );
      </MemoryRouter>
    );

    expect(wrapper.find('span').exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenLastCalledWith('lastPath', '/marvel');

  });

  test('shouldnt display the component', () => {
       const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          {...res}
          isAuth={false}
          component={() => <span>Hola</span>}
        />
      </MemoryRouter>
    );

    expect(wrapper.find('span').exists()).toBe(false);

  });
  

});
