import Image from "next/image";
import LoginButton from "./components/LoginButton";

export default function Home() {
  return (
    <main className="flex bg-[#222] min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-center font-bold text-3xl mb-5">Hey, There</h1>
        <LoginButton />
      </div>
    </main>
  );
}
