"use client";
import { Session } from "next-auth";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { LogIn } from "lucide-react";
import Link from "next/link";

const UserButton = ({ user }: Session) => {
  return (
    <>
      <div>
        {user?.name}
        {user ? (
          <Button variant={"destructive"} onClick={() => signOut()}>
            Logout
          </Button>
        ) : (
          <Button asChild>
            <Link href={"/auth/login"}>
              <LogIn />
              Login
            </Link>
          </Button>
        )}
      </div>
    </>
  );
};

export default UserButton;
