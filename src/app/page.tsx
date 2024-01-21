"use client";
import Canvas3D from "../components/Canvas3D";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

export default function Home() {
  const { theme } = resolveConfig(tailwindConfig);

  return (
    <main className="m-auto min-h-screen max-w-screen-2xl overflow-hidden px-6 md:px-8 2xl:px-14">
      <h1>
        The power <span className="sm:hidden">{"\n"}</span>
        of <i className="font-eb-garamond sm:block">collective creativity.</i>
      </h1>
      <p className="mb-[1.125rem] mt-[3.125rem] max-w-[49.5rem] text-2xl font-light leading-[normal] md:mb-[2.875rem] md:mt-[9.25rem] md:text-4xl">
        People and their incredible diversity are the heart and soul of
        everything we do.
      </p>
      <Canvas3D />
      <div className="relative mb-18 mt-[-3.875rem] flex flex-col items-center pt-[3.875rem] text-center text-gray-50 md:mb-[6.625rem] md:mt-[-7.3rem] md:flex-row md:items-start md:pt-[11rem] md:text-left">
        <div className="absolute bottom-0 left-0 left-2/4 right-0 top-0 z-[-1] w-[200%] translate-x-[-50%] bg-gray-900 blur-[18.75px]" />
        <svg
          className="mt-12 md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="88"
          viewBox="0 0 2 88"
          fill="none"
        >
          <path d="M1 0L1 88" stroke={theme.colors.gray[50]} />
        </svg>
        <p className="mb-8.5 mt-6.5 font-eb-garamond text-2xl italic md:mt-28 md:text-right md:text-4xl md:leading-[1.4]">
          We delve deep into understanding who they are, what motivates them,
          what challenges they face and how complex systems and forces are
          shaping them.
        </p>
        <p className="mb-9 text-base font-light leading-[1.375rem] md:order-4 md:mb-[13.5rem] md:mt-[27.5rem] md:self-end md:text-xl">
          Our distinctive approach fosters collaboration with people from all
          walks of life to truly find the real creative answers to some of
          life’s most challenging and important questions. Anchoring ourselves
          in the principles of respect, diversity and empathy helps us get
          there.
        </p>

        <div
          className="relative mb-[6.625rem] h-[5.185rem] w-[0.5px] bg-gray-50 before:absolute before:bottom-0 before:h-[5px] before:w-px before:origin-bottom-left before:rotate-[40deg] before:rounded-t-md before:bg-gray-50 after:absolute after:bottom-0 after:h-[5px] after:w-px after:origin-bottom-right after:rotate-[-40deg] after:rounded-t-md after:bg-gray-50 md:order-3 md:mx-[4.375rem] md:mb-[7.125rem] md:h-auto md:self-stretch md:before:h-[10px] md:before:w-[2px] md:before:translate-x-[-1px] md:after:h-[10px] md:after:w-[2px]
        "
        />
      </div>
    </main>
  );
}
