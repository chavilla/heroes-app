import useForm from "../../components/hooks/useForm";
import { act, renderHook } from "@testing-library/react-hooks";

describe("useForm testing", () => {
  let initialState = {
    name: "jesus",
    email: "jacv00@hotmail.com",
  };

  let result={};

  beforeEach(() => {
    result = renderHook(() => useForm(initialState));
  });

  test("should to return the state ", () => {
    const [value, ,] = result.result.current;

    expect(typeof value).toBe("object");
    expect(value).toEqual(initialState);
  });

  test("should to change the state", () => {
    const [, handleChange] = result.result.current;

    act(() => {
      handleChange({
        target: {
          name: "name",
          value: "Juan",
        },
      });
    });

    const [value, ,] = result.result.current;
    expect(value).toEqual({ ...initialState, name: "Juan" });

  });

  test("should to reset the state", () => {
    const [,,reset] = result.result.current;

    act(()=>{
        reset();
    });

    const [value,,] = result.result.current;

    expect(value).toEqual(initialState);

  });
});
