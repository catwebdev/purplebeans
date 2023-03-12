import React from "react";
import Image from "next/image";
import { GoChevronRight } from "react-icons/go";

import { GiJellyBeans } from "react-icons/gi";

import { CTA } from "@/components";

import presale from "../public/ecosystem/presale.png";
import swap from "../public/ecosystem/swap.png";
import staking from "../public/ecosystem/staking.png";
import airdrop from "../public/ecosystem/airdrop.png";
import usdc from "../public/ecosystem/usdc.png";
import nft from "../public/ecosystem/nft.png";

const Ecosystem = () => {
  return (
    <section
      id="ecosystem"
      className="flex flex-col items-center justify-center px-4 py-8 pb-32 sm:px-12 sm:py-16"
    >
      <div>
        <h2 className="font-semibold md:text-[60px] text-[24px] md:mb-[40px] mb-[20px]">
          Ecosystem
        </h2>
      </div>
      <div className="cards-wrapper">
        <div className="card rounded-[70px] bg-white drop-shadow-md shadow-inner">
          <figure>
            <Image
              src={usdc}
              alt={""}
              width={230}
              height={0}
              className="h-auto"
            />
          </figure>
          <div className="p-8 card__body md:pb-4">
            <div className="card__text">
              <span className="flex gap-2 card__title">
                <span className="flex gap-2 font-medium">
                  <GoChevronRight />
                  USDC dApp
                </span>{" "}
                <GiJellyBeans className="text-[#fe349d]" />
              </span>
              <span className="card__content">
                <p>
                  This tab will be linked with the present live staking dApp.
                </p>
              </span>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 mt-4 justify-items-center">
              <CTA name="Open dApp" href="https://purplebeans.finance/usdc/" />
            </div>
          </div>
        </div>{" "}
        <div className="card rounded-[70px] bg-white drop-shadow-md shadow-inner">
          <figure>
            <Image
              src={swap}
              alt={""}
              width={230}
              height={0}
              className="h-auto"
            />
          </figure>
          <div className="p-8 card__body md:pb-4">
            <div className="card__text">
              <span className="flex gap-2 card__title">
                <span className="flex gap-2 font-medium">
                  <GoChevronRight />
                  Swap
                </span>{" "}
                <GiJellyBeans className="text-[#fe349d]" />
              </span>
              <span className="card__content">
                <p>
                  This page will enable users to swap $PBNS with other
                  cryptocurrencies.
                </p>
              </span>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 mt-4 justify-items-center">
              <CTA
                name="Open dApp"
                href="https://exchange.purplebeans.finance/#/swap"
              />
            </div>
          </div>
        </div>
        <div className="card rounded-[70px] bg-white drop-shadow-md shadow-inner">
          <figure>
            <Image
              src={presale}
              alt={""}
              width={230}
              height={0}
              className="h-auto"
            />
          </figure>
          <div className="p-8 card__body md:pb-4">
            <div className="card__text">
              <span className="flex gap-2 card__title">
                <span className="flex gap-2 font-medium">
                  <GoChevronRight />
                  Presale
                </span>
                <GiJellyBeans className="text-[#fe349d]" />
              </span>
              <span className="card__content">
                <p>
                  The Presale tab will allow early investors to purchase $PBNS
                  at a discounted rate. The Presale will be 50% of the total
                  supply.
                </p>
              </span>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 mt-4 justify-items-center">
              <CTA name="Coming Soon" href="" disabled={true} />
            </div>
          </div>
        </div>
        <div className="card rounded-[70px] bg-white drop-shadow-md shadow-inner">
          <figure>
            <Image
              src={airdrop}
              alt={""}
              width={230}
              height={0}
              className="h-auto"
            />
          </figure>
          <div className="p-8 card__body md:pb-4">
            <div className="card__text">
              <span className="flex gap-2 card__title">
                <span className="flex gap-2 font-medium">
                  <GoChevronRight />
                  Airdrop
                </span>{" "}
                <GiJellyBeans className="text-[#fe349d]" />
              </span>
              <span className="card__content">
                <p>
                  The Airdrop tab will be available for users to participate in
                  promotional campaigns and receive free $PBNS.
                </p>
              </span>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 mt-4 justify-items-center">
              <CTA name="Coming Soon" href="" disabled={true} />
            </div>
          </div>
        </div>
        <div className="card rounded-[70px] bg-white drop-shadow-md shadow-inner">
          <figure>
            <Image
              src={staking}
              alt={""}
              width={230}
              height={0}
              className="h-auto"
            />
          </figure>
          <div className="p-8 card__body md:pb-4">
            <div className="card__text">
              <span className="flex gap-2 card__title">
                <span className="flex gap-2 font-medium">
                  <GoChevronRight />
                  Token Staking dApp
                </span>{" "}
                <GiJellyBeans className="text-[#fe349d]" />
              </span>
              <span className="card__content">
                <p>
                  This tab will enable users to stake $PBNS and earn rewards for
                  holding the token.
                </p>
              </span>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 mt-4 justify-items-center">
              <CTA name="Coming Soon" href="" disabled={true} />
            </div>
          </div>
        </div>
        <div className="card rounded-[70px] bg-white drop-shadow-md shadow-inner">
          <figure>
            <Image
              src={nft}
              alt={""}
              width={230}
              height={0}
              className="h-auto"
            />
          </figure>
          <div className="p-8 card__body md:pb-4">
            <div className="card__text">
              <span className="flex gap-2 card__title">
                <span className="flex gap-2 font-medium">
                  <GoChevronRight />
                  NFTs
                </span>{" "}
                <GiJellyBeans className="text-[#fe349d]" />
              </span>
              <span className="card__content">
                <p>
                  The NFT tab will allow users to browse and purchase unique
                  digital assets created by the Purplebeans.
                </p>
              </span>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 mt-4 justify-items-center">
              <CTA name="Coming Soon" href="" disabled={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
