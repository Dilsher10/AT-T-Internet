"use client";
import { useState } from "react";

const faqItems = [
    {
        question: "How do I contact AT&T?",
        answer: "Call at (866) 602-0042 for any questions you may have regarding the AT&T Wireless service. You can also call this number if you wish to subscribe to the service.",
    },
    {
        question: "Can you get an unlimited hotspot with AT&T?",
        answer:
            "AT&T Wireless plans Unlimited Starter, Unlimited Extra and Unlimited Premium offer 3, 15 & 50 GB mobile hotspot data per line per month respectively. Even after you run out of high-speed hotspot data, you stay connected at 128 Kbps.",
    },
    {
        question: "What is AT&T Wireless Internet?",
        answer:
            "AT&T Wireless internet uses a vast 4G LTE network as well as America’s best 5G network to offer wireless data plans to consumers across the US. You can connect your smartphones or tablets to the internet, and also get other benefits. For details call at (866) 602-0042.",
    },
    {
        question: "Is AT&T wireless internet available in my area?",
        answer:
            "AT&T Wireless internet is delivered via AT&T’s extensive 4G, and 5G networks across the U.S. Considering the span of coverage, it’s likely to be available in your area. You can also check availability by calling at (866) 602-0042.",
    },
    {
        question: "Elevate Your Home Connectivity with Fiber Internet: Experience the Future with AT&T",
        answer:
            "Transform your online experience with fiber internet for home by AT&T. Delight in lightning-fast speeds, seamless streaming, and unparalleled reliability. Say goodbye to buffering and hello to a future-proof connection that brings the world to your fingertips. Upgrade to AT&T fiber internet and embrace the power of speed in the comfort of your home.",
    },
    {
        question: "Freedom Without Commitment: Enjoy AT&T's No-Contract Internet Plans",
        answer:
            "AEmbrace flexibility with AT&T’s no-contract internet plans, offering the freedom to connect without long-term commitments. Experience reliable connectivity and high-speed internet without being tied down by contracts. With AT&T, you have the power to choose and the freedom to change your plan whenever you need, without the hassle of contracts.",
    },
    {
        question: "Seamless Connectivity Everywhere: Experience WiFi Fiber Internet from AT&T",
        answer:
            "Enjoy the best of both worlds with WiFi Fiber Internet from AT&T, combining the speed and reliability of fiber optics with the convenience of wireless connectivity. Stream, game, and browse seamlessly from anywhere in your home with AT&T’s cutting-edge WiFi Fiber technology. Say goodbye to dead zones and hello to uninterrupted connectivity with AT&T’s WiFi Fiber Internet solution.",
    },
    {
        question: "Accelerate Your Online Experience: Fast Internet Solutions Tailored for Your Home by AT&T",
        answer:
            "Elevate your home’s connectivity with AT&T’s fast internet solutions, designed to deliver blazing speeds and reliable performance. Say farewell to sluggish downloads and buffering videos as you embrace the lightning-fast internet experience. With AT&T, enjoy seamless streaming, gaming, and browsing at your fingertips. Experience the difference with fast internet for your home, powered by AT&T.",
    },
    {
        question: "Explore Diverse Internet Plans & Services: Customize Your Connection with AT&T",
        answer:
            "Dive into a world of options with AT&T’s comprehensive internet plans and services, tailored to suit every need. From high-speed fiber-optic connections to reliable DSL services, AT&T offers a range of solutions to keep you connected. Discover our array of internet plans and services and find the perfect fit for your lifestyle and budget.",
    },
    {
        question: "No Surprises, Just Savings: Enjoy Straightforward Pricing with AT&T Internet",
        answer:
            "Experience transparency and convenience with AT&T’s straightforward pricing for internet services. Say goodbye to hidden fees and unexpected charges as you enjoy clear and honest pricing that helps you budget with confidence. With AT&T, what you see is what you get, ensuring a hassle-free and cost-effective internet experience for you and your family.",
    },
    {
        question: "Maximize Value with Internet Bundle Deals: Unbeatable Offers from AT&T",
        answer:
            "Unlock extraordinary savings and convenience with AT&T’s internet bundle deals. Combine high-speed internet with TV, phone, or both, and enjoy a complete entertainment and communication package at a fraction of the cost. With AT&T’s bundle deals, simplify your bills and maximize your value without compromising on quality.",
    },
    {
        question: "Discover Unbeatable Home Internet Deals: AT&T's Exclusive Offers Await!",
        answer:
            "ToggElevate your home connectivity while saving big with AT&T’s irresistible internet deals. From lightning-fast fiber to reliable DSL, find the perfect plan to match your needs without breaking the bank. Don’t miss out on these exclusive offers—upgrade your internet experience today with AT&T.le Content",
    },
    {
        question: "Race Ahead with High-Speed Internet Deals: Dive into AT&T's Premium Offers",
        answer:
            "Turbocharge your online experience while saving with AT&T’s high-speed internet deals. Whether you’re streaming, gaming, or working from home, get the speed you need at a price you’ll love. Don’t miss out on these premium offers—grab your ticket to faster internet today with AT&T.",
    },
    {
        question: "Get More Bang for Your Buck: AT&T Offers Great Value for Money",
        answer:
            "Experience unparalleled value with AT&T’s internet services, delivering exceptional performance without breaking the bank. Enjoy blazing-fast speeds, reliable connectivity, and top-notch customer service—all at a price that’s unbeatable. Say goodbye to compromise and hello to great value for money with AT&T as your internet provider.",
    },
    {
        question: "Exclusive Savings for New Customers: AT&T's Irresistible Offers Await",
        answer:
            "Jumpstart your online journey with AT&T’s exclusive new customer offers. Enjoy special discounts, bonus features, and premium perks tailored just for you. Don’t miss out on this limited-time opportunity to experience top-notch connectivity at unbeatable prices. Sign up now and unlock the best deals for your internet needs with AT&T.",
    },
    {
        question: "Call Us Today for Expert Internet Solutions",
        answer:
            "Elevate your online experience with expert internet solutions tailored to your needs. Call us today to speak with our knowledgeable team and discover the perfect internet plan for your home or business. Enjoy seamless connectivity and reliable service backed by our dedicated support team. Don’t wait—call us today to unlock the power of fast and reliable internet with AT&T.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faqSec bg-white py-20 px-4" id="FAQs">
           <div className="mx-auto max-w-screen-xl lg:px-20">
           <h2 className="text-[30px] lg:text-[36px] font-bold text-center pb-10 text-[#233d63]">
                Unlocking the Essentials: Exploring Internet Features and FAQs
            </h2>
            <div className="border-t border-gray-300">
                {faqItems.map((item, index) => (
                    <div key={index} className="border-b border-gray-300">
                        <button
                            className="w-full text-left py-4 text-lg font-semibold bg-white flex items-center"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="text-xl mr-2">{openIndex === index ? <img src='/arrow-up.png' alt="arrow" /> : <img src='/arrow-right.png' alt="arrow" />}</span>
                            {item.question}
                        </button>
                        {openIndex === index && (
                            <div className="pb-4 text-black text-[16px] pl-1">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
           </div>
        </section>
    );
}
