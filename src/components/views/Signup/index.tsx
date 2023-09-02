"use client";
import { contextVal } from "@/global/Context";
import { useState, ChangeEvent, useContext } from "react";

type SignupFormData = {
  fullName: string;
  email: string;
  password: string;
};

export default function SignupFormComp() {
  let {signUpUser} = useContext(contextVal)

  const [formData, setFormData] = useState<SignupFormData>({
    fullName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = () => {
    const { fullName, email, password } = formData;
    const validationErrors: { [key: string]: string } = {};

    // Check for required fields
    if (!fullName) {
      validationErrors.fullName = "Full Name is required";
    }
    if (!email) {
      validationErrors.email = "Email is required";
    }
    if (!password || password.length < 6) {
      validationErrors.password = "Password is required";
    }

    // Check for valid email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      validationErrors.email = "Invalid email address";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      signUpUser(formData.email, formData.password)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded shadow-xl w-96 space-y-6">
        <h1 className="text-3xl font-semibold mb-6 text-purple-600">Sign Up</h1>
        <div className="space-y-2">
          <h2 className="font-bold">Full Name</h2>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="input w-full border rounded-md"
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs italic">{errors.fullName}</p>
          )}
        </div>
        <div className="space-y-2">
          <h3 className="font-bold">Email</h3>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            className="input w-full border rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}
        </div>
        <div className="space-y-2">
          <h4 className="font-bold">Password</h4>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
            className="input w-full border rounded-md"
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">{errors.password}</p>
          )}
        </div>
        <button
          onClick={handleSignup}
          className="bg-purple-600 text-white w-full mt-6 py-3 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
