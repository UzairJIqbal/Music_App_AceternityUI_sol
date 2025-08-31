"use client";
import React, { useState } from "react";
import { Meteors } from "@/components/ui/meteors";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";

import { motion } from "motion/react";

const ContactImageArray = [
  "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=800&q=80",
  "/Drumming.jpg",
  "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
];
const Page = () => {
  const [input, setinput] = useState("");
  return (
  
      <div>
          <div className="relative w-screen max-w-full h-screen">
            <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
            <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
              <h1 className="relative flex flex-grow justify-center items-center text-center z-50 mb-4 text-xl font-bold text-white">
                Lets Go to Contact Page Together ! ☎️
              </h1>
              <div className="py-40  flex items-center justify-center">
                <Modal>
                  <ModalTrigger className="bg-black dark:bg-black dark:text-white text-white flex justify-center group/modal-btn rounded-2xl border">
                    <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500 text-w">
                      Contact Us Here !
                    </span>
                    <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                      📞
                    </div>
                  </ModalTrigger>

                  <ModalBody>
                    <ModalContent>
                      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                        This is Our Main Page
                        <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                          Contact
                        </span>{" "}
                        now! ✈️
                      </h4>
                      <div className="flex justify-center items-center">
                        {ContactImageArray.map((image, idx) => (
                          <motion.div
                            key={"images" + idx}
                            style={{
                              rotate: Math.random() * 20 - 10,
                            }}
                            whileHover={{
                              scale: 1.1,
                              rotate: 0,
                              zIndex: 100,
                            }}
                            whileTap={{
                              scale: 1.1,
                              rotate: 0,
                              zIndex: 100,
                            }}
                            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                          >
                            <img
                              src={image}
                              alt="bali images"
                              width="500"
                              height="500"
                              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                            />
                          </motion.div>
                        ))}
                      </div>
                      <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                        <div className="flex  items-center justify-center" />
                        <input
                          type="text"
                          placeholder="Enter Your Name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                          value={input}
                          onChange={(e) => setinput(e.target.value)}
                        />

                        <input
                          type="email"
                          placeholder="Enter Your Email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                          value={input}
                          onChange={(e) => setinput(e.target.value)}
                        />

                        <input
                          type="password"
                          placeholder="Enter Your Password"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                          value={input}
                          onChange={(e) => setinput(e.target.value)}
                        />
                      </div>
                    </ModalContent>
                    <ModalFooter className="gap-2">
                      <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28 mb-3">
                        Cancel
                      </button>
                      <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28 mb-3">
                        Submit Now
                      </button>
                    </ModalFooter>
                  </ModalBody>
                </Modal>
              </div>

              {/* Meaty part - Meteor effect */}
              <Meteors number={500} />
            </div>
          </div>
        </div>
  );
};

export default Page;
