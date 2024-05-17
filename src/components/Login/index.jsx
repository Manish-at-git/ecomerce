import React from "react";
import { Images } from "@/constants";
import Image from "next/image";
import { Button } from "@nextui-org/react";

const index = () => {
  return (
    <div className="flex mb-20 w-full">
      <div className="w-1/2">
        <Image src={Images.SignUpSizeImg} width={"100%"} height={"100%"} />
      </div>
      <div className="flex justify-center items-center w-1/2">
        <LoginForm />
      </div>
    </div>
  );
};

export default index;

const InputField = ({ type, placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full bg-[#ffffff] h-10 p-0 border-b border-black flex items-center mb-4 focus:outline-none"
  />
);

// LoginButton.jsx
const LoginButton = () => (
  <Button className="px-12 py-6 bg-[#DB4444] rounded-sm text-white">
    Log in
  </Button>
);

// ForgetPasswordLink.jsx
const ForgetPasswordLink = () => (
  <a className="flex justify-center items-center rounded-sm bg-white/60 text-[#DB4444]">
    Forget Password?
  </a>
);

const LoginForm = () => {
  const formFields = [
    { type: "text", placeholder: "Email or Phone Number" },
    { type: "password", placeholder: "Password" },
  ];

  return (
    <div className="flex flex-col">
      <span className="text-4xl font-medium leading-7 tracking-wider text-left">
        Log in to Exclusive
      </span>
      <span className="mt-6 font-poppins text-base font-normal leading-6 text-left">
        Enter Your Details Below
      </span>
      <div className="mt-12">
        {formFields.map((field, index) => (
          <InputField
            key={index}
            type={field.type}
            placeholder={field.placeholder}
          />
        ))}
      </div>
      <div className="flex justify-between">
        <LoginButton />
        <ForgetPasswordLink />
      </div>
    </div>
  );
};
