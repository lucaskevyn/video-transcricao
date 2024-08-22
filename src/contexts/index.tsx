"use client";

import { ReactElement, useEffect, useState } from "react";
import { AuthContextProvider } from "./AuthContext";

import KeycloakProvider from "./KeycloakProvider";
import { ThemeProvider } from "@/components/theme-provider";
import Loading from "@/components/Loading";

interface MainContextProps {
  children: ReactElement;
}

export default function MainContext({ children }: MainContextProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <Loading />;
  return (
    <KeycloakProvider>
      <AuthContextProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </AuthContextProvider>
    </KeycloakProvider>
  );
}
