import Image from "next/image";
import baqnnerimg from "../../assets/banner3.jpg";
export default function Banner() {
  return (
    <section class="pb-[114px]">
      <div class="container lg:px-20 ">
        <div class="grid items-center gap-6 md:grid-cols-2">
          <div class="flex justify-center md:order-2">
            <Image class="max-md:w-full" src={baqnnerimg} alt="frame" />
          </div>
          <div>
            <h1 class="mb-1.5 text-[56px] font-bold leading-none text-[#F5BF42] lg:text-[73px]">
              Tasker
            </h1>
            <p class="text-lg my-2 opacity-60">
              Effortlessly Organize, Prioritize, and Conquer Tasks with Tasker -
              Your Personal Productivity Ally for Seamless Goal Achievement and
              Stress-Free Task Management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
