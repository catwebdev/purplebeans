import Image from "next/image";
import React from "react";
import tokenomics from "../public/tokenomics.webp";

import binance from "../public/partners/binance.webp";
import bscscan from "../public/partners/bscscan.webp";
import dextools from "../public/partners/dextools.webp";
import pancakeswap from "../public/partners/pancakeswap.webp";
import polygon from "../public/partners/polygon.webp";
import usdc from "../public/partners/usdc.webp";

import Marquee from "react-fast-marquee";

const Tokenomics = () => {
  return (
    <section id="tokenomics overflow-hidden">
      <div className="flex flex-col items-center content-center pb-32 overflow-hidden">
        <Marquee speed={20} className="h-[160px] md:h-[220px] overflow-hidden">
          <Image
            src={polygon}
            alt={""}
            width={300}
            height={0}
            className="h-auto mx-14 grayscale"
          />
          <Image
            src={usdc}
            alt={""}
            width={300}
            height={0}
            className="h-auto mx-14 grayscale"
          />
          <Image
            src={binance}
            alt={""}
            width={300}
            height={0}
            className="h-auto mx-14 grayscale"
          />
          <Image
            src={bscscan}
            alt={""}
            width={300}
            height={0}
            className="h-auto mx-14 grayscale"
          />
          <Image
            src={dextools}
            alt={""}
            width={300}
            height={0}
            className="h-auto mx-14 grayscale"
          />
          <Image
            src={pancakeswap}
            alt={""}
            width={300}
            height={0}
            className="h-auto mx-14 grayscale"
          />
        </Marquee>
      </div>
      <div className="relative">
        <img className="w-full absolute bottom-0 z-[-1]" src="/circles.svg" />
        <div className="flex items-center content-center flex-col md:pb-[120px] pb-[50px]">
          <h2 className="font-semibold md:text-[60px] text-[24px] md:mb-[40px] mb-[20px]">
            Tokenomics
          </h2>
          <div className="flex flex-col items-center content-center md:flex-row">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <Image
                  className="w-[344px] hidden md:block mr-[50px]"
                  src={tokenomics}
                  alt={""}
                />
                <img
                  className="w-[296px] md:hidden mb-[20px]"
                  src="/tokenomics-mobile.webp"
                />
                <p className="my-8">
                  <span className="font-semibold">*</span> Burn remaining tokens
                  in Presale
                </p>
              </div>
            </div>
            <img className="md:w-[343px] w-[284px]" src="/chart.webp" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
