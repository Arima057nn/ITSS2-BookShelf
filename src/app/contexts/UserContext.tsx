"use client";
import React, { createContext, useReducer, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface UserContextProps {
  user: any;
  dispatch?: React.Dispatch<any>;
}

const INITIAL_STATE: UserContextProps = {
  user: JSON.parse((localStorage as any).getItem("user")) || null,
};

export const UserContext = createContext<UserContextProps>(INITIAL_STATE);

const UserReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      return { user: action.payload };
    }
    case "LOGOUT": {
      return { user: null };
    }
    default:
      return state;
  }
};

export const UserContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
