import { Phone, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="px-4 py-2.5">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="">
            <img src="/logo.webp" />
          </div>
          <div className="flex justify-end items-center mr-7">
            <h1 className="text-[30px] text-black mr-20 font-bold">Call For AT&T Internet</h1>
            <Link href="tel:(888) 243-7145" className="bg-[#0057B8] text-white py-3 px-7 rounded-md flex"><PhoneCall className="pr-2" /> (888) 243-7145</Link>
          </div>
        </div>
      </section>


      <section className="bg-[#0057b8]">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-13 items-center justify-center">

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      AT&T Fiber Plans
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      AT&T Internet Plans
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      AT&T Fixed Wireless Internet
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      FAQs
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>



      <section className="hero">
        <div className="w-[800px] p-14">
          <h3 className="text-[22px] text-[#0057B8] font-semibold font-jost">AT&T Internet Plans</h3>
          <h2 className="text-[48px] font-semibold text-black font-jost leading-13 py-5">It’s the AT&T internet you’ve always wanted!</h2>
          <h4 className="text-[20px] text-[#0057B8] font-jost pr-24 font-semibold">AT&T Fiber®: Fastest AT&T internet. Straightforward pricing.
            Now delivering up to 5-Gig speeds*</h4>
          <p className="text-[#7a7a7a] pt-4">*Ltd. avail/areas. Speeds vary, not g’td. Wired speed maximum 4.7Gbps.</p>
          <p className="pt-4 pb-9">No price increase at 12 months, no annual contract, no data caps & no equipment fees!</p>
          <Link href="tel:(888) 243-7145" className="bg-[#0057B8] text-white py-3 px-7 rounded-md flex w-48"><PhoneCall className="pr-2" /> (888) 243-7145</Link>
        </div>
      </section>



      <section className="bg-[#0057B8]">
        <div className="mx-auto max-w-screen-xl py-12 text-center">
          <h2 className="text-[36px] font-semibold text-white">
            Special Offer! Get an extra $100 reward
          </h2>
          <h2 className="text-[36px] font-semibold text-white">
            card when you get AT&T Fiber Internet
          </h2>
          <p className="pt-4 pb-9 text-white">After reward card redemption; proof of eligibility required. Limited availability/areas.</p>
          <Link href="tel:(888) 243-7145" className="text-[#0057B8] bg-white py-4 px-10 font-semibold rounded-md flex w-57 mx-auto"><PhoneCall className="pr-2" /> (888) 243-7145</Link>
        </div>
      </section>



      <section className="pricingSec">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-screen-lg text-center">
            <h2 className="text-[36px] text-[#0057B8] leading-[46px] font-bold">AT&T Fiber® plans</h2>
            <p className="text-[16px] leading-[24px] text-black px-32 py-6">If you're not sure which AT&T Fiber Optic Internet plan would be best for your family’s needs, look at the table below for some suggestions on Fiber Optic speed tiers based on the sort of online activities and frequency of use. There’s something in store for everyone!</p>
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
                <Link href="tel:(888) 243-7145" className="text-[#233d63] bg-white py-3 px-7 rounded-full flex w-48 shadow mx-auto"><PhoneCall className="pr-2" /> (888) 243-7145</Link>
              </div>
            </div>

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
                <Link href="tel:(888) 243-7145" className="text-[#233d63] bg-white py-3 px-7 rounded-full flex w-48 shadow mx-auto"><PhoneCall className="pr-2" /> (888) 243-7145</Link>
              </div>
            </div>
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
                <Link href="tel:(888) 243-7145" className="text-[#233d63] bg-white py-3 px-7 rounded-full flex w-48 shadow mx-auto"><PhoneCall className="pr-2" /> (888) 243-7145</Link>
              </div>
            </div>
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
                <Link href="tel:(888) 243-7145" className="text-[#233d63] bg-white py-3 px-7 rounded-full flex w-48 shadow mx-auto"><PhoneCall className="pr-2" /> (888) 243-7145</Link>
              </div>
            </div>
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
                <Link href="tel:(888) 243-7145" className="text-[#233d63] bg-white py-3 px-7 rounded-full flex w-48 shadow mx-auto"><PhoneCall className="pr-2" /> (888) 243-7145</Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="internetPlans">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-screen-lg text-center">
            <h2 className="text-[36px] text-[#0057B8] leading-[46px] font-bold">AT&T internet plans</h2>
            <p className="text-[32px] leading-11 text-black px-32 pt-3 font-light">
              Get the best speed at the best price on the best network available!
            </p>
            <p className="text-black font-bold pb-10">No price hike after 12 months | No annual contract | No data cap | No equipment fees</p>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-0 sm:items-stretch md:grid-cols-3 md:gap-8">
            <div className="card">
              <div className="p-6 sm:px-8 text-center">
                <h2 className="text-2xl font-bold font-nunito">
                  INTERNET 100
                </h2>
                <p className="speed mt-2 font-nunito text-[20px]">100Mbps</p>
                <p className="mt-2 sm:mt-4 font-lato">
                  <sup className="sign text-2xl">$</sup>
                  <strong className="price text-3xl font-bold sm:text-5xl"> 55.00 </strong>
                  <span className="pText text-1xl font-medium">mo. for 12 mos., plus</span>
                </p>
              </div>
              <div className="p-6 sm:px-8 text-center">
                <p className="cText text-lg font-medium sm:text-xl font-lato">taxes</p>
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
                <Link href="tel:(888) 243-7145" className="text-[#233d63] bg-white py-3 px-7 rounded-full flex w-51 shadow mx-auto font-bold"><PhoneCall className="pr-2" /> (888) 243-7145</Link>
              </div>
            </div>
            <div className="card">
              <div className="p-6 sm:px-8 text-center">
                <h2 className="text-2xl font-bold font-nunito">
                  INTERNET 100
                </h2>
                <p className="speed mt-2 font-nunito text-[20px]">100Mbps</p>
                <p className="mt-2 sm:mt-4 font-lato">
                  <sup className="sign text-2xl">$</sup>
                  <strong className="price text-3xl font-bold sm:text-5xl"> 55.00 </strong>
                  <span className="pText text-1xl font-medium">mo. for 12 mos., plus</span>
                </p>
              </div>
              <div className="p-6 sm:px-8 text-center">
                <p className="cText text-lg font-medium sm:text-xl font-lato">taxes</p>
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
                <Link href="tel:(888) 243-7145" className="text-[#233d63] bg-white py-3 px-7 rounded-full flex w-51 shadow mx-auto font-bold"><PhoneCall className="pr-2" /> (888) 243-7145</Link>
              </div>
            </div>
            <div className="card">
              <div className="p-6 sm:px-8 text-center">
                <h2 className="text-2xl font-bold font-nunito">
                  INTERNET 100
                </h2>
                <p className="speed mt-2 font-nunito text-[20px]">100Mbps</p>
                <p className="mt-2 sm:mt-4 font-lato">
                  <sup className="sign text-2xl">$</sup>
                  <strong className="price text-3xl font-bold sm:text-5xl"> 55.00 </strong>
                  <span className="pText text-1xl font-medium">mo. for 12 mos., plus</span>
                </p>
              </div>
              <div className="p-6 sm:px-8 text-center">
                <p className="cText text-lg font-medium sm:text-xl font-lato">taxes</p>
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
                <Link href="tel:(888) 243-7145" className="text-[#233d63] bg-white py-3 px-7 rounded-full flex w-51 shadow mx-auto font-bold"><PhoneCall className="pr-2" /> (888) 243-7145</Link>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="bg-[#0057B8] py-12">
        <h2 className="text-[36px] font-semibold text-white text-center pb-12">
          Looking for low cost or rural internet service?
        </h2>
        <div className="grid grid-cols-2 gap-8 mx-auto max-w-screen-xl w-195">
          <div className="bg-white pt-4 pb-2 px-2 rounded-lg">
            <h3 className="text-[#233d63] text-[20px] font-bold">Access from AT&T</h3>
            <p className="py-5 text-black text-[16px]">Get low-cost AT&T Internet service for qualifying households in our 21-state service area.</p>
            <Link href="tel:(888) 243-7145" className="bg-[#0057B8] text-white py-3 px-5 rounded-md flex w-44"><PhoneCall className="pr-2" /> (888) 243-7145</Link>
          </div>
          <div className="bg-white pt-4 pb-2 px-2 rounded-lg">
            <h3 className="text-[#233d63] text-[20px] font-bold">Access from AT&T</h3>
            <p className="py-5 text-black text-[16px]">Get low-cost AT&T Internet service for qualifying households in our 21-state service area.</p>
            <Link href="tel:(888) 243-7145" className="bg-[#0057B8] text-white py-3 px-5 rounded-md flex w-44"><PhoneCall className="pr-2" /> (888) 243-7145</Link>
          </div>
        </div>
      </section>








      <section className="pricingSec">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-screen-lg text-center">
            <h2 className="text-[36px] text-[#0057B8] leading-[46px] font-bold">AT&T Fixed Wireless Internet</h2>
            <p className="text-[16px] leading-[24px] text-black px-32 py-6">Getting started with AT&T Wireless plans is not complicated―select the number of phone lines your family needs. Pick the best Unlimited Your Way plan for the kids, your partner, and yourself. Make any combo and start saving today!</p>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-0 sm:items-stretch md:grid-cols-2 md:gap-8">
            <div className="card">
              <div className="p-6 sm:px-8 text-center">
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
              <div className="p-6 sm:px-8 text-center">
                <ul className="mt-2 space-y-2 sm:mt-4 font-lato mb-5">
                  <li className="text-center text-[#565656]">
                    <span className="text-gray-700"> Connect 2 to 3 devices </span>
                  </li>
                  <li className="text-center text-[#565656]">
                    <span className="text-gray-700 text-[15px]"> Select rural households & businesses who can’t get traditional internet service. </span>
                  </li>
                </ul>
                <Link href="tel:(888) 243-7145" className="text-[#233d63] bg-white py-3 px-7 rounded-full flex w-48 shadow mx-auto"><PhoneCall className="pr-2" /> (888) 243-7145</Link>
              </div>
            </div>
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
                <Link href="tel:(888) 243-7145" className="text-[#233d63] bg-white py-3 px-7 rounded-full flex w-48 shadow mx-auto"><PhoneCall className="pr-2" /> (888) 243-7145</Link>
              </div>
            </div>
          </div>
        </div>
      </section>




    </>
  );
}
