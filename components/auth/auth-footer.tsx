import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
type props = {
  footerLabel: string;
  footerHref: string;
};
const AuthFooter = ({ footerLabel, footerHref }: props) => {
  return (
    <Button asChild variant={"link"}>
      <Link href={footerHref}>{footerLabel}</Link>
    </Button>
  );
};

export default AuthFooter;
