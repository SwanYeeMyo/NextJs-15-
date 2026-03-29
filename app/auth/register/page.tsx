import AuthForm from "@/components/auth/auth-form";
import React from "react";

const Register = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-12">
        <AuthForm
          title="Register"
          footerLabel="Already have an account ?"
          footerHref="/auth/login"
          showProvider={true}
        >
          <h2>Register Form</h2>
        </AuthForm>
      </div>
    </>
  );
};

export default Register;
