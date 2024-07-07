import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-row gap-12">
      <NavBar />
      <div>
        <Header />
      </div>
    </div>
  );
}
