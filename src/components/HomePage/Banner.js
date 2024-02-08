import Image from "next/image";
import baqnnerimg from "../../assets/banner3.jpg";
import sideimg from "../../assets/side1.png";
export default function Banner() {
  return (
    <section className="pb-[114px]">
      <div className="container lg:px-20 relative">
        <div className="grid items-center gap-6 md:grid-cols-2 ">
          <div className="flex justify-center md:order-2">
            <Image className="max-md:w-full" src={baqnnerimg} alt="frame" />
          </div>
          <div className="relative ">
            <div className="absolute">
              <h1 className="mb-1.5 text-[56px] font-bold leading-none text-[#F5BF42] lg:text-[73px]">
                To Do Task
              </h1>
              <p className="text-lg my-2 font-semibold text-[#4ac099]">
                Trusted by 30 million people and teams. Todoist is the worlds
                favorite task manager and to-do list app. Finally become
                focused, organized and calm
              </p>
            </div>
            <Image className="opacity-20" src={sideimg} alt="sideimg" />
          </div>
        </div>
      </div>
    </section>
  );
}
