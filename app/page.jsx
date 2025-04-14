"use client";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import FAQ from "./_components/Faqs";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>

      <nav className="bg-white border-gray-200 md:hidden lg:hidden">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo.webp" alt="Flowbite Logo" />
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 border border-gray-400 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="/" className="block py-2 px-3 text-white bg-[#0057B8] rounded-sm md:bg-transparent md:text-[#0057B8] md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
              </li>
              <li>
                <Link href="#AT&T-Fiber®-Plans" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#0057B8] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">AT&T Fiber® Plans</Link>
              </li>
              <li>
                <Link href="#AT&T-Internet-Plans" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#0057B8] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">AT&T Internet Plans</Link>
              </li>
              <li>
                <Link href="#AT&T-Fixed-Wireless-Internet" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#0057B8] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">AT&T Fixed Wireless Internet</Link>
              </li>
              <li>
                <Link href="#FAQs" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#0057B8] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">FAQs</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      

      <section className="bg-[#0057b8] hidden md:block lg:block">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-13 items-center justify-center">

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                      className="text-white font-semibold transition hover:underline underline-offset-[7px] decoration-3 font-jost"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white font-semibold transition hover:underline underline-offset-[7px] decoration-3 font-jost"
                      href="#AT&T-Fiber®-Plans"
                    >
                      AT&T Fiber® Plans
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white font-semibold transition hover:underline underline-offset-[7px] decoration-3 font-jost"
                      href="#AT&T-Internet-Plans"
                    >
                      AT&T Internet Plans
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white font-semibold transition hover:underline underline-offset-[7px] decoration-3 font-jost"
                      href="#AT&T-Fixed-Wireless-Internet"
                    >
                      AT&T Fixed Wireless Internet
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white font-semibold transition hover:underline underline-offset-[7px] decoration-3 font-jost"
                      href="#FAQs"
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>



      <section className="hero">
        <div className="p-4 md:w-[500px] lg:w-[800px] lg:p-14">
          <h3 className="text-[22px] text-[#0057B8] font-semibold font-jost">AT&T Internet Plans</h3>
          <h2 className="text-[35px] leading-10 pr-20 lg:pr-0 lg:text-[48px] font-semibold text-[#000] font-jost lg:leading-13 py-5">Get the AT&T Internet You Have Been Waiting For!
          </h2>
          <h4 className="text-[20px] lg:text-[20px] text-[#0057B8] font-jost lg:pr-24 font-semibold">
            AT&T Fiber®: Fastest AT&T internet. Straightforward pricing. Now delivering up to 5-Gig speeds*
          </h4>
          <p className="text-[#7a7a7a] pt-4">*Ltd. avail/areas. Speeds vary, not g’td. Wired speed maximum 4.7Gbps.</p>
          <p className="pt-4 pb-9 text-black">With the AT&T internet plan, there will be no increase in prices for 12 months, no yearly contract, no data caps & no latent equipment fees!</p>
          <Link href="tel:+1-866-602-0042" className="bg-[#0057B8] text-white py-3 px-7 rounded-md flex w-49 hover:bg-[#000]"><PhoneCall className="pr-2" /> (866) 602-0042</Link>
        </div>
      </section>



      <section className="bg-[#0057B8]">
        <div className="mx-auto max-w-screen-xl py-12 text-center px-4">
          <h2 className="text-[20px] lg:text-[36px] font-semibold text-white lg:w-222 text-center mx-auto">
            Sign Up Today With the AT&T Internet Plan and Get a Special Offer of a $100 Reward Card.
          </h2>
          <p className="pt-4 pb-9 text-white">After releasing the card, the verification of eligibility is mandatory. Offer valid to limited areas</p>
          <Link href="tel:+1-866-602-0042" className="text-[#0057B8] bg-white py-4 px-8 font-semibold rounded-md flex w-56 mx-auto hover:bg-[#0057B8] hover:shadow-2xl hover:text-white"><PhoneCall className="pr-2" /> (866) 602-0042</Link>
        </div>
      </section>



      <section className="pricingSec bg-white" id="AT&T-Fiber®-Plans">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-screen-lg text-center">
            <h2 className="text-[25px] lg:text-[36px] text-[#0057B8] leading-[46px] font-bold">AT&T Fiber® Plans</h2>
            <p className="text-[16px] leading-[24px] text-black lg:px-32 py-6">If you're not sure which AT&T Fiber Optic Internet plan would be best for your family’s needs, look at the table below for some suggestions on Fiber Optic speed tiers based on the sort of online activities and frequency of use. There’s something in store for everyone!</p>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-0 sm:items-stretch md:grid-cols-3 md:gap-8">
            <div className="card">
              <div className="p-6 sm:px-8 text-center">
                <h2 className="text-2xl font-bold text-black font-nunito">
                  AT&T FIBER
                </h2>
                <p className="mt-2 text-gray-700 font-nunito text-[20px]">300Mbps</p>
                <p className="mt-2 sm:mt-4 text-[#233d63] font-lato">
                  <sup className="text-2xl">$</sup>
                  <strong className="text-3xl font-bold sm:text-5xl"> 55.00 </strong>
                  <span className="text-2xl font-medium text-gray-400">/a</span>
                </p>
              </div>
              <div className="p-6 sm:px-8 text-center">
                <p className="text-lg font-medium text-gray-500 sm:text-xl font-lato">month, plus taxes</p>
                <ul className="mt-2 space-y-2 sm:mt-4 font-lato mb-5">
                  <li className="text-center text-[#565656]">
                    <span className="text-gray-700"> Fast online speeds for the whole family </span>
                  </li>
                  <li className="text-center text-[#565656]">
                    <span className="text-gray-700"> Stream HD videos, game online, and share large files </span>
                  </li>
                  <li className="text-center text-[#565656]">
                    <span className="text-gray-700"> Connect 10 devices </span>
                  </li>
                </ul>
                <Link href="tel:+1-866-602-0042" className="text-[#233d63] bg-white py-3 px-5 rounded-full flex w-45 shadow mx-auto"><PhoneCall className="pr-2" /> (866) 602-0042</Link>
              </div>
            </div>
            <div className="card">
              <div className="p-6 sm:px-8 text-center">
                <h2 className="text-2xl font-bold text-black font-nunito">
                  AT&T FIBER
                </h2>
                <p className="mt-2 text-gray-700 font-nunito text-[20px]">500Mbps</p>
                <p className="mt-2 sm:mt-4 text-[#233d63] font-lato">
                  <sup className="text-2xl">$</sup>
                  <strong className="text-3xl font-bold sm:text-5xl"> 65.00 </strong>
                  <span className="text-2xl font-medium text-gray-400">/a</span>
                </p>
              </div>
              <div className="p-6 sm:px-8 text-center">
                <p className="text-lg font-medium text-gray-500 sm:text-xl font-lato">month, plus taxes</p>
                <ul className="mt-2 space-y-2 sm:mt-4 font-lato mb-5">
                  <li className="text-center text-[#565656]">
                    <span className="text-gray-700"> Fast speed and bandwidth for multiple users </span>
                  </li>
                  <li className="text-center text-[#565656]">
                    <span className="text-gray-700"> Binge, stream, and share large files </span>
                  </li>
                  <li className="text-center text-[#565656]">
                    <span className="text-gray-700"> Connect 11 devices </span>
                  </li>
                </ul>
                <Link href="tel:+1-866-602-0042" className="text-[#233d63] bg-white py-3 px-5 rounded-full flex w-45 shadow mx-auto"><PhoneCall className="pr-2" /> (866) 602-0042</Link>
              </div>
            </div>
            <div className="card">
              <div className="p-6 sm:px-8 text-center">
                <h2 className="text-2xl font-bold text-black font-nunito">
                  AT&T FIBER
                </h2>
                <p className="mt-2 text-gray-700 font-nunito text-[20px]">Up to 1 GIG speed</p>
                <p className="mt-2 sm:mt-4 text-[#233d63] font-lato">
                  <sup className="text-2xl">$</sup>
                  <strong className="text-3xl font-bold sm:text-5xl"> 80.00 </strong>
                  <span className="text-2xl font-medium text-gray-400">/a</span>
                </p>
              </div>
              <div className="p-6 sm:px-8 text-center">
                <p className="text-lg font-medium text-gray-500 sm:text-xl font-lato">month, plus taxes</p>
                <ul className="mt-2 space-y-2 sm:mt-4 font-lato mb-5">
                  <li className="text-center text-[#565656]">
                    <span className="text-gray-700"> Fastest speed for smart homes </span>
                  </li>
                  <li className="text-center text-[#565656]">
                    <span className="text-gray-700"> Great for serious online gamers, and home office power users </span>
                  </li>
                  <li className="text-center text-[#565656]">
                    <span className="text-gray-700"> Connect 12 devices </span>
                  </li>
                </ul>
                <Link href="tel:+1-866-602-0042" className="text-[#233d63] bg-white py-3 px-5 rounded-full flex w-45 shadow mx-auto"><PhoneCall className="pr-2" /> (866) 602-0042</Link>
              </div>
            </div>
            <div className="card">
              <div className="p-6 sm:px-8 text-center">
                <h2 className="text-2xl font-bold text-black font-nunito">
                  AT&T FIBER
                </h2>
                <p className="mt-2 text-gray-700 font-nunito text-[20px]">2 GIG speed</p>
                <p className="mt-2 sm:mt-4 text-[#233d63] font-lato">
                  <sup className="text-2xl">$</sup>
                  <strong className="text-3xl font-bold sm:text-5xl"> 145.00 </strong>
                  <span className="text-2xl font-medium text-gray-400">/a</span>
                </p>
              </div>
              <div className="p-6 sm:px-8 text-center">
                <p className="text-lg font-medium text-gray-500 sm:text-xl font-lato">month, plus taxes</p>
                <ul className="mt-2 space-y-2 sm:mt-4 font-lato mb-5">
                  <li className="text-center text-[#565656]">
                    <span className="text-gray-700"> High-speed internet that’s ready for remote work </span>
                  </li>
                  <li className="text-center text-[#565656]">
                    <span className="text-gray-700"> Speed and dependability for connected devices </span>
                  </li>
                  <li className="text-center text-[#565656]">
                    <span className="text-gray-700"> Connect 12+ devices </span>
                  </li>
                </ul>
                <Link href="tel:+1-866-602-0042" className="text-[#233d63] bg-white py-3 px-5 rounded-full flex w-45 shadow mx-auto"><PhoneCall className="pr-2" /> (866) 602-0042</Link>
              </div>
            </div>
            <div className="card">
              <div className="p-6 sm:px-8 text-center">
                <h2 className="text-2xl font-bold text-black font-nunito">
                  AT&T FIBER
                </h2>
                <p className="mt-2 text-gray-700 font-nunito text-[20px]">5 GIG speed</p>
                <p className="mt-2 sm:mt-4 text-[#233d63] font-lato">
                  <sup className="text-2xl">$</sup>
                  <strong className="text-3xl font-bold sm:text-5xl"> 245.00 </strong>
                  <span className="text-2xl font-medium text-gray-400">/a</span>
                </p>
              </div>
              <div className="p-6 sm:px-8 text-center">
                <p className="text-lg font-medium text-gray-500 sm:text-xl font-lato">month, plus taxes</p>
                <ul className="mt-2 space-y-2 sm:mt-4 font-lato mb-5">
                  <li className="text-center text-[#565656]">
                    <span className="text-gray-700"> Maximum speed to build content, go live, and influence faster than ever </span>
                  </li>
                  <li className="text-center text-[#565656]">
                    <span className="text-gray-700"> Get the ultimate edge for elite gaming </span>
                  </li>
                  <li className="text-center text-[#565656]">
                    <span className="text-gray-700"> Connect 12+ devices </span>
                  </li>
                </ul>
                <Link href="tel:+1-866-602-0042" className="text-[#233d63] bg-white py-3 px-5 rounded-full flex w-45 shadow mx-auto"><PhoneCall className="pr-2" /> (866) 602-0042</Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="internetPlans bg-white" id="AT&T-Internet-Plans">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-screen-lg text-center">
            <h2 className="text-[25px] lg:text-[36px] text-[#0057B8] leading-[46px] font-bold">AT&T Internet Plans</h2>
            <p className="text-[20px] lg:text-[32px] pb-5 lg:leading-11 text-black lg:px-32 pt-3 font-light lg:pb-0">
              Get the best speed at the best price on the best network available!
            </p>
            <p className="text-black font-bold pb-10">No price hike after 12 months | No annual contract | No data cap | No equipment fees</p>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-0 sm:items-stretch md:grid-cols-3 md:gap-0">
            <div className="card md:p-0 lg:p-10">
              <div className="p-6 sm:px-8 text-center">
                <h2 className="text-2xl font-bold font-nunito">
                  INTERNET 100
                </h2>
                <p className="speed mt-2 font-nunito text-[20px]">100Mbps</p>
                <p className="mt-2 sm:mt-4 font-lato">
                  <sup className="sign text-2xl">$</sup>
                  <strong className="price text-3xl font-bold sm:text-5xl"> 55.00 </strong>
                  <span className="pText text-1xl font-medium">mo. for 12 mos., plus taxes</span>
                </p>
              </div>
              <div className="p-6 sm:px-8 text-center">
                <ul className="mt-2 space-y-2 sm:mt-4 font-lato mb-10">
                  <li className="text-center">
                    <span> Connect Up to 10 devices </span>
                  </li>
                  <li className="text-center">
                    <span> Streaming videos in HD </span>
                  </li>
                  <li className="text-center">
                    <span> online gaming </span>
                  </li>
                  <li className="text-center">
                    <span> large file sharing </span>
                  </li>
                </ul>
                <Link href="tel:+1-866-602-0042" className="text-[#233d63] bg-white py-3 px-5 rounded-full flex w-49 shadow mx-auto font-bold"><PhoneCall className="pr-2" /> (866) 602-0042</Link>
              </div>
            </div>
            <div className="card md:p-0 lg:p-10">
              <div className="p-6 sm:px-8 text-center">
                <h2 className="text-2xl font-bold font-nunito">
                  INTERNET 50
                </h2>
                <p className="speed mt-2 font-nunito text-[20px]">50Mbps</p>
                <p className="mt-2 sm:mt-4 font-lato">
                  <sup className="sign text-2xl">$</sup>
                  <strong className="price text-3xl font-bold sm:text-5xl"> 55.00 </strong>
                  <span className="pText text-1xl font-medium">mo. for 12 mos., plus taxes</span>
                </p>
              </div>
              <div className="p-6 sm:px-8 text-center">
                <ul className="mt-2 space-y-2 sm:mt-4 font-lato mb-10">
                  <li className="text-center">
                    <span> Connect 5 to 10 devices </span>
                  </li>
                  <li className="text-center">
                    <span> Streaming on multiple devices </span>
                  </li>
                  <li className="text-center">
                    <span> online gaming </span>
                  </li>
                  <li className="text-center">
                    <span> sharing videos and photos </span>
                  </li>
                </ul>
                <Link href="tel:+1-866-602-0042" className="text-[#233d63] bg-white py-3 px-5 rounded-full flex w-49 shadow mx-auto font-bold"><PhoneCall className="pr-2" /> (866) 602-0042</Link>
              </div>
            </div>
            <div className="card md:p-0 lg:p-10">
              <div className="p-6 sm:px-8 text-center">
                <h2 className="text-2xl font-bold font-nunito">
                  INTERNET 25
                </h2>
                <p className="speed mt-2 font-nunito text-[20px]">25Mbps</p>
                <p className="mt-2 sm:mt-4 font-lato">
                  <sup className="sign text-2xl">$</sup>
                  <strong className="price text-3xl font-bold sm:text-5xl"> 55.00 </strong>
                  <span className="pText text-1xl font-medium">mo. for 12 mos., plus taxes</span>
                </p>
              </div>
              <div className="p-6 sm:px-8 text-center">
                <ul className="mt-2 space-y-2 sm:mt-4 font-lato mb-10">
                  <li className="text-center">
                    <span> Connect 3 to 4 devices </span>
                  </li>
                  <li className="text-center">
                    <span> Streaming on multiple devices </span>
                  </li>
                  <li className="text-center">
                    <span> online gaming </span>
                  </li>
                  <li className="text-center">
                    <span> sharing videos and photos </span>
                  </li>
                </ul>
                <Link href="tel:+1-866-602-0042" className="text-[#233d63] bg-white py-3 px-5 rounded-full flex w-49 shadow mx-auto font-bold"><PhoneCall className="pr-2" /> (866) 602-0042</Link>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="bg-[#0057B8] py-12 px-4">
        <h2 className="text-[22px] lg:text-[36px] font-semibold text-white text-center pb-12">
          Looking for low cost or rural internet service?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto max-w-screen-xl lg:w-195">
          <div className="bg-white pt-4 pb-2 px-2 rounded-lg">
            <h3 className="text-[#233d63] text-[20px] font-bold">Access from AT&T</h3>
            <p className="py-5 text-black text-[16px]">Get low-cost AT&T Internet service for qualifying households in our 21-state service area.</p>
            <Link href="tel:+1-866-602-0042" className="bg-[#0057B8] text-white py-3 px-5 rounded-md flex w-45 hover:bg-black"><PhoneCall className="pr-2" /> (866) 602-0042</Link>
          </div>
          <div className="bg-white pt-4 pb-2 px-2 rounded-lg">
            <h3 className="text-[#233d63] text-[20px] font-bold">Fixed wireless internet</h3>
            <p className="py-5 text-black text-[16px]">Internet for rural households and businesses who can’t get traditional wireline internet service.</p>
            <Link href="tel:+1-866-602-0042" className="bg-[#0057B8] text-white py-3 px-5 rounded-md flex w-45 hover:bg-black"><PhoneCall className="pr-2" /> (866) 602-0042</Link>
          </div>
        </div>
      </section>





      <section className="fixedSec bg-white px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16" id="AT&T-Fixed-Wireless-Internet">
        <div className="mx-auto max-w-screen-xl">
          <div className="mx-auto max-w-screen-lg text-center">
            <h2 className="text-[22px] lg:text-[36px] text-[#0057B8] leading-[46px] font-bold">AT&T Fixed Wireless Internet</h2>
            <p className="text-[16px] leading-[24px] text-black lg:px-32 py-6">Getting started with AT&T Wireless plans is not complicated―select the number of phone lines your family needs. Pick the best Unlimited Your Way plan for the kids, your partner, and yourself. Make any combo and start saving today!</p>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-0 sm:items-stretch md:grid-cols-2 md:gap-8 pb-16">
            <div className="card">
              <div className="sm:px-8 text-center">
                <h2 className="text-2xl font-bold text-black font-nunito">
                  STANDALONE
                </h2>
                <p className="mt-2 text-gray-700 font-nunito text-[20px]">10Mbps</p>
                <p className="mt-2 sm:mt-4 text-[#233d63] font-lato">
                  <sup className="text-2xl">$</sup>
                  <strong className="text-3xl font-bold sm:text-5xl"> 69.99 </strong>
                  <span className="text-2xl font-medium text-gray-400">a month, plus taxes</span>
                </p>
              </div>
              <div className="sm:px-8 text-center">
                <ul className="mt-2 space-y-2 sm:mt-4 font-lato mb-10">
                  <li className="text-center text-[#565656]">
                    <span className="text-gray-700"> Connect 2 to 3 devices </span>
                  </li>
                  <li className="text-center text-[#565656]">
                    <span className="text-gray-700 text-[15px]"> Select rural households & businesses who can’t get traditional internet service. </span>
                  </li>
                </ul>
                <Link href="tel:+1-866-602-0042" className="text-[#233d63] bg-white py-3 px-5 rounded-full flex w-45 shadow mx-auto"><PhoneCall className="pr-2" /> (866) 602-0042</Link>
              </div>
            </div>
            <div className="card">
              <div className="sm:px-8 text-center">
                <h2 className="text-2xl font-bold text-black font-nunito">
                  BUNDLED AT&T WIRELESS SERVICE
                </h2>
                <p className="mt-2 text-gray-700 font-nunito text-[20px]">10Mbps</p>
                <p className="mt-2 sm:mt-4 text-[#233d63] font-lato">
                  <sup className="text-2xl">$</sup>
                  <strong className="text-3xl font-bold sm:text-5xl"> 59.99 </strong>
                  <span className="text-2xl font-medium text-gray-400">a month, plus taxes</span>
                </p>
              </div>
              <div className="sm:px-8 text-center">
                <ul className="mt-2 space-y-2 sm:mt-4 font-lato mb-10">
                  <li className="text-center text-[#565656]">
                    <span className="text-gray-700"> Connect 2 to 3 devices </span>
                  </li>
                  <li className="text-center text-[#565656]">
                    <span className="text-gray-700 text-[15px]"> Select rural households & businesses who can’t get traditional internet service. </span>
                  </li>
                </ul>
                <Link href="tel:+1-866-602-0042" className="text-[#233d63] bg-white py-3 px-5 rounded-full flex w-45 shadow mx-auto"><PhoneCall className="pr-2" /> (866) 602-0042</Link>
              </div>
            </div>
          </div>
        </div>
        <Link href="tel:+1-866-602-0042" className="bg-[#0057B8] text-white py-4 px-5 rounded-md flex mx-auto w-45 hover:bg-black"><PhoneCall className="pr-2" /> (866) 602-0042</Link>
      </section>




      <section className="bg-[#0057B8] py-12 px-4">
        <h2 className="text-[25px] lg:text-[36px] font-semibold text-white text-center font-lato pb-2">
          What do upload and download speeds really mean?
        </h2>
        <p className="text-white text-center pb-20">Learning the difference between upload and download speeds can help you pick a home internet plan. Let’s start with the basics.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mx-auto max-w-screen-xl">
          <div className="bg-white pt-4 pb-2 px-2 rounded-lg">
            <h3 className="text-[#233d63] text-[20px] font-bold">What are Mbps?</h3>
            <p className="py-5 text-black text-[16px]">
              Mbps stand for Megabits per second. Broadband speeds are measured in Mbps. The higher the number of Mbps, the faster your online activity should be. Bandwidth is the maximum rate at which you can download and upload data from the internet to your computer—for activities like streaming, emailing attachments, or basic web surfing.
            </p>
          </div>
          <div className="bg-white pt-4 pb-2 px-2 rounded-lg">
            <h3 className="text-[#233d63] text-[20px] font-bold">Do what you love—faster</h3>
            <p className="py-5 text-black text-[16px]">
              Some things take very few Mbps, like sending emails without attachments. Other activities, like video conferencing or streaming live events, need many more Mbps to provide you with the quality you want and need.
            </p>
          </div>
          <div className="bg-white pt-4 pb-2 px-2 rounded-lg">
            <h3 className="text-[#233d63] text-[20px] font-bold">Do what you love—faster</h3>
            <p className="py-5 text-black text-[16px]">
              Some things take very few Mbps, like sending emails without attachments. Other activities, like video conferencing or streaming live events, need many more Mbps to provide you with the quality you want and need.
            </p>
          </div>
        </div>
      </section>





      <section className="bg-[#f3f3f3] px-4">
        <h2 className="text-center text-[27px] lg:text-[36px] text-[#233d63] font-bold lg:w-240 mx-auto py-10">Here are the states where AT&T Internet service is available</h2>
        <img src="/map.jpg" alt="map" />
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 mx-auto max-w-screen-xl md:p-14 lg:p-14">
          <ul className="pb-5">
            <li className="text-[18px] text-black pb-2">Alabama</li>
            <li className="text-[18px] text-black pb-2">Arkansas</li>
            <li className="text-[18px] text-black pb-2">California</li>
            <li className="text-[18px] text-black pb-2">Florida</li>
            <li className="text-[18px] text-black pb-2">Georgia</li>
            <li className="text-[18px] text-black pb-2">Illinois</li>
          </ul>
          <ul className="pb-5">
            <li className="text-[18px] text-black pb-2">Indiana</li>
            <li className="text-[18px] text-black pb-2">Kansas</li>
            <li className="text-[18px] text-black pb-2">Kentucky</li>
            <li className="text-[18px] text-black pb-2">Louisiana</li>
            <li className="text-[18px] text-black pb-2">Michigan</li>
            <li className="text-[18px] text-black pb-2">Mississippi</li>
          </ul>
          <ul className="pb-5">
            <li className="text-[18px] text-black pb-2">Missouri</li>
            <li className="text-[18px] text-black pb-2">Nevada</li>
            <li className="text-[18px] text-black pb-2">North Carolina</li>
            <li className="text-[18px] text-black pb-2">Ohio</li>
            <li className="text-[18px] text-black pb-2">Oklahoma</li>
            <li className="text-[18px] text-black pb-2">South Carolina</li>
          </ul>
          <ul className="pb-5">
            <li className="text-[18px] text-black pb-2">Tennessee</li>
            <li className="text-[18px] text-black pb-2">Texas</li>
            <li className="text-[18px] text-black pb-2">Wisconsin</li>
          </ul>
        </div>
      </section>


      <FAQ />


      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-20 pb-10">
          <h2 className="text-[#273171] text-[20px] font-bold font-lato">Useful Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-8">
            <ul>
              <li className="pb-4 font-lato text-[#111]"><Link href={"tel:+1-866-602-0042"}>(866) 602-0042</Link></li>
              <li className="pb-4 font-lato text-[#111]"><Link href="#AT&T-Fiber®-Plans">AT&T Fiber® Plans</Link></li>
              <li className="pb-4 font-lato text-[#111]"><Link href="#AT&T-Internet-Plans">AT&T Internet Plans</Link></li>
            </ul>
            <ul>
              <li className="pb-4 font-lato text-[#111]"><Link href="#AT&T-Fixed-Wireless-Internet">AT&T Fixed Wireless Internet</Link></li>
              <li className="pb-4 font-lato text-[#111]"><Link href="#FAQs">FAQs</Link></li>
            </ul>
          </div>
        </div>
        <div className="bg-black py-4">
          <p className="text-white text-center">©2025 <Link href={"/"}>www.newinternetproviders.com.</Link> All rights reserved.</p>
        </div>
      </footer>

    </>
  );
}
