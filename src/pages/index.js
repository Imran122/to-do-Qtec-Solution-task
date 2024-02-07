import Banner from "@/components/HomePage/Banner";
import TaskList from "@/components/HomePage/TaskList";
import Footer from "@/components/Shared/Footer";
import ProviderContext from "@/context/ProviderContext";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ProviderContext>
      <div className="bg-[#333c50] text-white">
        <Banner />
        <TaskList />
        <Footer />
      </div>
    </ProviderContext>
  );
}
