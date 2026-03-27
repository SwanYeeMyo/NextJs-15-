"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const CustomButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="border rounded-sm  disabled:border-red-600   border-white p-2 block mt-2"
      disabled={pending}
    >
      Add New
    </button>
  );
};

export default CustomButton;
