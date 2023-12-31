"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { cn } from "@/lib";
import Logo from "@/components/site/logo";

const AuthVerify: React.FC = () => {
  const tAuth = useTranslations("auth");

  return (
    <div className="flex inset-0 fixed">
      <div
        className={cn(
          "w-[32.5rem] max-w-[calc(100vw-2rem)] bg-neutral-200/50 backdrop-blur px-12 py-6 rounded-md fixed left-[50%] top-[40%] translate-x-[-50%] translate-y-[-50%]",
          "flex flex-col items-center justify-center gap-4"
        )}
      >
        <Logo disabled size="large" />
        <div className="font-medium text-2xl">{tAuth("check-email")}</div>
        <div>{tAuth("sign-in-link")}</div>
      </div>

      <div className="flex flex-1 relative">
        <Image
          className="select-none"
          src="/login-bg.webp"
          alt="login-bg"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            zIndex: 5,
          }}
        />
      </div>
    </div>
  );
};

export default AuthVerify;
