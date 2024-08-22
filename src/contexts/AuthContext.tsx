"use client";
import { useKeycloak } from "@react-keycloak/web";

import {
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

const userLocalStorageKey = "@tjro-notify:user";
const userWithoutPermissionLocalStorageKey =
  "@tjro-notify:user-without-permission";

interface AuthContextProps {
  children: ReactElement;
}

export interface KeycloakProfile {
  cpf?: string;
  name?: string;
  email?: string;
  firstName?: string;
  matricula?: string;
}

interface AuthContextData {
  isAuthenticated: boolean;
  signIn(): void;
  signOut(): void;
  user: KeycloakProfile | undefined;
  token: string;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider({ children }: AuthContextProps) {
  const { keycloak } = useKeycloak();
  const [user, setUser] = useState<KeycloakProfile | undefined>();
  const [token, setToken] = useState("");

  const signOut = useCallback(async () => {
    localStorage.removeItem(userLocalStorageKey);
    localStorage.setItem(
      userWithoutPermissionLocalStorageKey,
      JSON.stringify(
        "Desculpe, mas você não possui permissão para acessar o sistema"
      )
    );
    setToken("");
    await keycloak.logout();
  }, [keycloak]);

  const alertWithoutPermission = useCallback(async (alert: string) => {
    toast.error(alert.replaceAll(`"`, ""), {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      style: {
        borderRadius: 16,
      },
    });
    localStorage.removeItem(userWithoutPermissionLocalStorageKey);
  }, []);

  useEffect(() => {
    async function loadUser() {
      if (keycloak.authenticated) {
        if (keycloak?.token) {
          setToken(keycloak.token);
        }
        if (keycloak?.tokenParsed) {
          setUser({
            cpf: keycloak?.tokenParsed["cpf"],
            name: keycloak?.tokenParsed["given_name"],
            firstName: keycloak?.tokenParsed["given_name"].split(" ")[0],
            email: keycloak?.tokenParsed["email"],
            matricula: keycloak?.tokenParsed["prefered_username"],
          });
        }
      } else {
        const alert = localStorage.getItem(
          userWithoutPermissionLocalStorageKey
        );
        if (alert) alertWithoutPermission(alert);
      }
    }
    loadUser();
  }, [
    keycloak,
    keycloak.authenticated,
    signOut,
    alertWithoutPermission,
    keycloak.token,
  ]);

  const signIn = useCallback(() => {
    keycloak?.login();
  }, [keycloak]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!keycloak.authenticated,
        signIn,
        signOut,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
