"use client";
import { useRouter } from "next/navigation";
import { ComponentType, ReactNode, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const withAdminAuth = (WrappedComponent: ComponentType<any>) => {
  const Wrapper = (props: any) => {
    const router = useRouter();
    const { user } = useContext(UserContext);

    if (!user) {
      router.push("/login");
      return null;
    } else if (user && user.role !== "ADMIN") {
      router.back();
      return null;
    }
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAdminAuth;
