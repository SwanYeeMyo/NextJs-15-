"use client";
import React from "react";
import { Button } from "../ui/button";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

const ProviderLogin = () => {
  return (
    <div className="w-full flex flex-col gap-2 mt-5">
      <Button
        variant={"outline"}
        onClick={() =>
          signIn("google", {
            redirect: true,
            redirectTo: "/",
          })
        }
      >
        <p className="gap-2 flex items-center">
          Login
          <FaGoogle />
        </p>
      </Button>
      <Button
        variant={"outline"}
        onClick={() =>
          signIn("github", {
            redirect: true,
            redirectTo: "/",
          })
        }
      >
        <p className="gap-2 flex items-center">
          github
          <FaGithub />
        </p>
      </Button>
    </div>
  );
};

export default ProviderLogin;
