import React from "react";
import { useAuth } from "./AuthContext";
import { AuthenticatedRoutes, UnauthenticatedRoutes } from "./Routes";
export const API = "http://206.189.91.54";

export default function App() {
  const { loggedIn } = useAuth();

  return loggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
}
