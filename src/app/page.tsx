import { HomeNavbar } from "@/components/home-navbar/Navbar";
import { classNames } from "@/utils/classNames";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ThemeSelect } from "../components/ThemeSelect";

export default function Home() {

  return (
    <main
      className={classNames(
        "h-full flex flex-col items-center gap-24",
        "md:gap-64"
      )}
    >
      <HomeNavbar />

      {/* Hero */}
      <div
        className={classNames(
          "flex flex-col items-center gap-14 px-4",
          "md:gap-10"
        )}
      >
        {/* Welcome Text */}
        <div
          className={classNames("flex flex-col items-center gap-6", "md:gap-4")}
        >
          <h1
            className={classNames(
              "self-center text-center text-base-800 text-3xl font-bold",
              "md:text-6xl"
            )}
          >
            Welcome to
            <span className="text-primary-main"> FLUX</span> Design Systems
          </h1>
          {/* Description */}
          <div
            className={classNames(
              "flex flex-col items-center gap-2 self-center text-slate-600 text-center text-sm font-medium",
              "md:gap-1 md:text-xl"
            )}
          >
            <p>
              A design systems based on Tailwind CSS and You can use it for free
              ✨.
            </p>
            <p>This website is only for a preview of the components in it.</p>
          </div>
        </div>
        <Link
          title="Get Started"
          href="/components"
          className={classNames(
            "flex py-2 px-4 justify-center items-center gap-3 rounded-lg bg-primary-main text-white text-lg font-medium shadow-md transition-all",
            "hover:bg-primary-hover focus:bg-primary-pressed focus:ring-4 focus:ring-primary-focused focus:shadow-none focus:outline-none"
          )}
        >
          Get Started
          <span className="w-8 h-8">
            <ArrowLongRightIcon />
          </span>
        </Link>
      </div>
    </main>
  );
}
