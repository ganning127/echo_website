import React from 'react'
import { NavBar } from "@/components/NavBar";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import Image from "next/image";
import {SubmitPlacematsCTA} from "@/components/Sections/PicnicPlacemats/SubmitPlacematsCTA";
import { PlacematBlogCallout } from "@/components/Sections/PicnicPlacemats/PlacematBlogCallout";

export const metadata: Metadata = {
  title: 'Echo and Friends Picnic Placemat - Hawai‘i Foodbank K4K',
  description:
    'Download the Echo and Friends picnic placemat to keep kids engaged while supporting Hawai‘i Foodbank’s Kids4Kids program.',
}


export default function Page() {
  return (
        <div className="bg-[#DBECF1] min-h-screen">
          <NavBar />
    
          <Suspense fallback={<div>Loading...</div>}>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5/6 mx-auto pt-10">
            <div className="col-span-3 lg:col-span-2 lg:pb-12 lg:pt-24 mx-auto lg:pr-24">
              <div className="text-[#013161] text-center sm:text-left font-heading mb-4"
              style={{
                fontSize: "clamp(1.4rem, 3vw, 1rem)",
              }}
              >
                <p>LAST UPDATED: 06/12/2026</p>
              </div>
              <h1 className="text-5xl mb-5">Echo and Friends Picnic Placemat</h1>
              <p className=" mx-auto text-md md:text-2xl mb-10">
                {" "}
                Early Cardiovascular Health Outreach (ECHO) is proud to partner with Hawaiʻi Foodbank's Kaukau 4 Keiki summer meal box program to bring heart health education directly to children and families across the island. In order to achieve this goal, ECHO is providing a series of interactive and comprehensive placemats, geared toward making mealtimes not only filling, but also fun!
              </p>
            </div>
            <div className="col-span-3 lg:col-span-1 pb-12 lg:pt-24 pt-10 mx-auto text-center content-center">
         <Image
                   className=""
                   src="/placemat/Explorations with ECHO & Friends - Food Bank Activity Sheet - CIRCULATION.png"
                   alt="Circulation Placemat"
                   width="700"
                   height="500"
                 />
                 
        <a href="/placemat/Explorations with ECHO & Friends - Food Bank Activity Sheet - CIRCULATION.pdf" target="_blank" rel="noopener noreferrer">
        <button
          className="bg-[#013161] font-heading text-white px-12 py-3 rounded-xl shadow-md shrink-0 hover:opacity-90 transition-opacity mt-6"
          style={{
            fontSize: "1.5rem",
            color: "rgba(255,255,255,0.88)",
          }}
        >
            Print Placemat
        </button>
        </a>
            </div>
            </section>
            <SubmitPlacematsCTA />
            <PlacematBlogCallout />
          </Suspense>
    
          <Footer />
        </div>
  )
}

