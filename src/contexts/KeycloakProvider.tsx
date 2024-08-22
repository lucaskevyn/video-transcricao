"use client";

import { ReactKeycloakProvider } from "@react-keycloak/web";
import { ReactElement } from "react";
import Keycloak from "keycloak-js";
import {
  KEYCLOAK_CLIENT_ID,
  KEYCLOAK_REALM,
  KEYCLOAK_URL,
} from "@/constants/keycloak_constants";
import { AuthContextProvider } from "./AuthContext";

interface KeycloakProviderProps {
  children: ReactElement;
}

export default function KeycloakProvider({ children }: KeycloakProviderProps) {
  return (
    <ReactKeycloakProvider
      authClient={
        new Keycloak({
          url: KEYCLOAK_URL,
          realm: KEYCLOAK_REALM!,
          clientId: KEYCLOAK_CLIENT_ID!,
        })
      }
      initOptions={{ checkLoginIframe: false }}
    >
      {children}
    </ReactKeycloakProvider>
  );
}
