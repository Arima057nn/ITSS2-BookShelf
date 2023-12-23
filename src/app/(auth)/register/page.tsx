"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Register() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [showCfPassword, setShowCfPassword] = React.useState(false);
  const handleClickShowCfPassword = () => setShowCfPassword((show) => !show);

  const handleMouseDownCfPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <div className="bg-white flex flex-col py-6 px-12 rounded-lg items-center justify-center text-gray-700 shadow-2xl">
      <Image
        src="/assets/images/logo.png"
        width={110}
        height={110}
        alt="Picture of the author"
        className="py-4"
      />
      <p className="py-4">Registration</p>

      <div className="flex flex-col justify-start w-80">
        <p className="text-sm font-semibold my-1">Username</p>
        <TextField maxRows={4} />
        <p className="text-sm font-semibold my-1">College Email ID</p>
        <TextField maxRows={4} />
        <p className="text-sm font-semibold my-1">Password</p>
        <FormControl variant="outlined">
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
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
        <p className="text-sm font-semibold my-1">Confirm Password</p>
        <FormControl variant="outlined">
          <OutlinedInput
            type={showCfPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowCfPassword}
                  onMouseDown={handleMouseDownCfPassword}
                  edge="end"
                >
                  {showCfPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <div className="w-full bg-[#FA7C54] hover:bg-orange-600 text-sm text-white rounded-md text-center py-3 mt-6 cursor-pointer">
        Register
      </div>
      <div className="flex justify-between w-full items-center my-4">
        <p className="text-sm">
          Already a User?{" "}
          <Link href="/login">
            <span className="decoration-solid underline">Login now</span>
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
