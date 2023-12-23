"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Checkbox,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Login() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <div className="bg-white flex flex-col py-8 px-12 rounded-lg items-center justify-center text-gray-700 shadow-2xl">
      <Image
        src="/assets/images/logo.png"
        width={110}
        height={110}
        alt="Picture of the author"
        className="py-6"
      />
      <p className="pt-4">Welcome Back !</p>
      <p className="text-xs text-gray-400 py-2">
        Sign in to continue to yourDigital Library
      </p>
      <div className="flex flex-col justify-start w-80">
        <p className="text-sm font-semibold my-1">Email</p>
        <TextField maxRows={4} />
        <p className="text-sm font-semibold my-1">Password</p>

        <FormControl variant="outlined">
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <div className="flex justify-between w-full items-center my-4">
        <div className="flex items-center">
          <Checkbox {...label} defaultChecked />
          <p className="text-sm">Remember me</p>
        </div>
        <p className="text-sm decoration-solid underline ">Forgot password?</p>
      </div>
      <div className="w-full bg-[#FA7C54] hover:bg-orange-600 text-sm text-white rounded-md text-center py-3 cursor-pointer">
        Login
      </div>
      <div className="flex justify-between w-full items-center my-10">
        <p className="text-sm">
          New User?{" "}
          <Link href="/register">
            <span className="decoration-solid underline">Register Here</span>
          </Link>
        </p>
        <Link href="/">
          <p className="text-sm hover:underline hover:decoration-solid">
            Use as Guest
          </p>
        </Link>
      </div>
    </div>
  );
}
