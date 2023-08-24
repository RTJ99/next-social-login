"use client";
import React from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

function LoginButton() {
  const { data: session } = useSession();

  if (session && session.user) {
    console.log(session.user);
    return (
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
        >
          Sign Out as {session.user.name}
        </button>
      </div>
    );
  }

  return (
    <button
      className="bg-blue-transparent border-white border-solid border-[1px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex "
      onClick={() =>
        signIn("google", { callbackUrl: "http://localhost:3000/" })
      }
    >
      <Image src="/google.svg" width={24} height={24}></Image>
      Sign In With Google
    </button>
  );
}

export default LoginButton;
