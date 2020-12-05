import React, { useReducer, useEffect } from "react";
import {AuthContext } from "./components/auth/AuthContext";
import { authReducer } from "./components/auth/authReducer";
import { AppRouter } from "./components/routers/AppRouter";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

export const HeroesApp = () => {

  // obtiene el state actual del usuario
  const [user, dispatch] = useReducer(authReducer, {}, init);

  // Cada vez que cambia de estado el usuario 
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user])

  // Establece el context por encima de mis rutas
  return (
    <AuthContext.Provider
      value={{
        user,
        dispatch,
      }}
    >
      <AppRouter />
    </AuthContext.Provider>
  );
};
