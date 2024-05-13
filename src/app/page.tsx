"use client";

import MBrowseByCategory from "@/components/BrowseByCategory";
import MButton from "@/components/Buttons/MButton";
import MCard from "@/components/Card/MCard";
import MInput from "@/components/Input/MInput";
import { Images } from "@/constants";

export default function Home() {
  const data = {
    title: "HAVIT HV-G92 Gamepad",
    offerPrice: 120,
    price: 160,
    rating: 5,
    ratingCount: 88,
    image: Images.productImage,
    discount: "-40",
  };

  const browseByCategory = [
    {
      title: "Phones",
      image: Images.cellPhone,
      click: () => {},
    },
    {
      title: "Computers",
      image: Images.computer,
      click: () => {},
    },
    {
      title: "SmartWatch",
      image: Images.watch,
      click: () => {},
    },
    {
      title: "Camera",
      image: Images.camera,
      click: () => {},
    },
    {
      title: "HeadPhones",
      image: Images.headPhone,
      click: () => {},
    },
    {
      title: "Gaming",
      image: Images.gaming,
      click: () => {},
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MButton title="View All Products" click={() => {}} />
      <MInput placeholder="input" change={() => {}} />
      <MCard className="" data={data} />
      <MBrowseByCategory
        className=""
        title="Browse By Category"
        subTitle="Categories"
        data={browseByCategory}
      />
    </main>
  );
}
