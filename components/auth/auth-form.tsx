import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ProviderLogin from "./provider-login";
import AuthFooter from "./auth-footer";

type props = {
  children: ReactNode;
  title: string;
  showProvider: boolean;
  footerLabel: string;
  footerHref: string;
};
const AuthForm = ({
  children,
  title,
  showProvider,
  footerLabel,
  footerHref,
}: props) => {
  return (
    <>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          {children} {showProvider && <ProviderLogin />}
        </CardContent>
        <CardFooter>
          <AuthFooter footerLabel={footerLabel} footerHref={footerHref} />
        </CardFooter>
      </Card>
    </>
  );
};

export default AuthForm;
