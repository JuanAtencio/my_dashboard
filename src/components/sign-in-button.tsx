"use client";

import { login } from "@/lib/actions/auth";
import { Button } from "@/components/ui/button";

export const SignInButton = () => {
  return (
    <Button onClick={() => login()} variant="default">
      Iniciar sesión con GitHub
    </Button>
  );
};
