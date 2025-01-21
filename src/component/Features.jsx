import React from "react";
import Card from "./Card";
import CardTilt from "./CardTilt";
import { TiLocationArrow } from "react-icons/ti";

const Features = () => {
  return (
    <section className="bg-black pb52 ">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in an IP-rich product universe where AI-driven
            gamification and hyper-personalization lead humans & AI into a
            global play economy.
          </p>
        </div>

        <CardTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <Card
            source="videos/feature-1.mp4"
            title={
              <>
                radi<b>n</b>t
              </>
            }
            description="The game of games transforming your in-game actions across Web2 & Web3 titles into a rewarding adventure."
          />
        </CardTilt>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <CardTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <Card
              source="videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="The NFT collection merging Zentry's IP, AI, and gaming—pushing the boundaries of NFT innovation."
            />
          </CardTilt>

          <CardTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <Card
              source="videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="The player portal uniting humans & AI to play, compete, earn and showcase—gamifying social & Web3 experiences."
              containerClass=" translate-x-28"
            />
          </CardTilt>

          <CardTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <Card
              source="videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>l
                </>
              }
              description="A cross-world AI Agent - elecating your gameplay to be more fun and productive."
              containerClass="translate-x-20"
            />
          </CardTilt>

          <CardTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font">
                M<b>o</b>re com<b>m</b>ing s<b>o</b>on!
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </CardTilt>

          <CardTilt className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </CardTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
