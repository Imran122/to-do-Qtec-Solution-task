import Image from "next/image";
import baqnnerimg from "../../assets/banner3.jpg";
import sideimg from "../../assets/side1.png";
export default function Banner() {
  return (
    <section class="pb-[114px]">
      <div class="container lg:px-20 relative">
        <div class="grid items-center gap-6 md:grid-cols-2 ">
          <div class="flex justify-center md:order-2">
            <Image class="max-md:w-full" src={baqnnerimg} alt="frame" />
          </div>
          <div className="relative z-0">
            <h1 class="mb-1.5 text-[56px] font-bold leading-none text-[#F5BF42] lg:text-[73px]">
              To Do Task
            </h1>
            <p class="text-lg my-2 opacity-60">
              Trusted by 30 million people and teams. Todoist is the world's
              favorite task manager and to-do list app. Finally become focused,
              organized and calm
            </p>
            <Image
              className="absolute left-0 top-0 -z-10"
              src={sideimg}
              alt="sideimg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
