import Image from "next/image";
import LoginButton from "./components/LoginButton";

export default function Home() {
  return (
    <main className="flex bg-[#222] min-h-screen flex-col items-center justify-between p-24">
      <div>
        <LoginButton />
      </div>
    </main>
  );
}
