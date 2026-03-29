import AuthForm from "@/components/auth/auth-form";
import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-12">
        <AuthForm
          title="Login"
          footerLabel="Don't have an account ? "
          footerHref="/auth/register"
          showProvider={true}
        >
          <h2>Login Form</h2>
        </AuthForm>
      </div>
    </>
  );
};

export default Login;
