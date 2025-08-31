"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

const Page = () => {
    const images = [
        "/A.jpg",
        "/B.jpg",
        "/C.jpg",
        "/D.jpg",
        "/E.jpg",
        "/F.jpg",
        "/G.jpg",
        "/H.jpg",
        "/I.jpg",
        "/J.jpg",
        "/K.jpg",
        "/L.jpg",
        "/M.jpg",
        "/N.jpg",
        "/O.jpg",
        "/P.jpg",
        "/Q.jpg",
        "/R.jpg",
        "/S.jpg",
        "/T.jpg",
        "/U.jpg",
        "/V.jpg",
        "/W.jpg",
        "/X.jpg",
        "/Yjpg",
        "/Z.jpg",
        "/A1.jpg",
        "/B1.jpg",
        "/C1.jpg",
    ];
    return (
        <div>
            <div>
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-4xl font-semibold text-black dark:text-white">
                                Want to Know <br />
                                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                    ABOUT US
                                </span>
                            </h1>
                        </>
                    }
                >
                    <ThreeDMarquee
                        images={images}
                        className="ring-neutral-700/10 rounded-3xl mx-auto my-10 max-w-7xl ring-1"
                    />
                </ContainerScroll>

            </div>
        </div>
    );
};

export default Page;
