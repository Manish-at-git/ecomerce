import Image from "next/image";
import React from "react";
import { Images } from "@/constants";

const index = () => {
  return (
    <div className="md:flex md:flex-row flex-col bottom-0 w-full  md:justify-around text-white bg-[#000000] ">
      <div className="md:flex  md:justify-around mt-10 md:mt-8 md:w-full md:pb-20 gap-y-4 sm:gap-y-6">
        <div className="flex md:w-1/6 flex-col gap-4">
          <div>
            <span>Exclusive</span>
          </div>
          <div>Subscribe</div>
          <div>Get 10% off your first order</div>
          <div>
            <input
              className="h-10 px-4 border rounded-md bg-[#000000] border-black focus:border-black focus-visible:outline-black"
              type="text"
              placeholder="Coupon Code"
            />
          </div>
        </div>
        <div className="flex md:w-1/6 flex-col gap-4">
          <div>
            <span>Support</span>
          </div>
          <div>
            <span>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</span>
          </div>
          <div>
            <span>exclusive@gmail.com</span>
          </div>
          <div>
            <span>+88015-88888-9999</span>
          </div>
        </div>
        <div className="flex md:w-1/6 flex-col gap-4">
          <div>
            <span>Account</span>
          </div>
          <div>
            <span>My Account</span>
          </div>
          <div>
            <span>Login / Register</span>
          </div>
          <div>
            <span>Cart</span>
          </div>
          <div>
            <span>Wishlist</span>
          </div>
          <div>
            <span>Shop</span>
          </div>
        </div>
        <div className="flex md:w-1/6 flex-col gap-4">
          <div>Quick Link</div>
          <div>Privacy Policy</div>
          <div>Terms Of Use</div>
          <div>FAQ</div>
          <div>Contact</div>
        </div>
        <div className="flex md:w-1/6 flex-col gap-4">
          <div>Download App</div>
          <div className="text-[#FAFAFA]/70">
            Save $3 with App New User Only
          </div>
          <div className="flex w-full h-2/6 ">
            <Image src={Images.Qrcode} width={"95%"} height={"95%"} />
            <div className="flex ml-2 flex-col justify-between w-1/3">
              <Image src={Images.playstore} width={"100%"} height={"100%"} />
              <Image src={Images.appstore} />
            </div>
          </div>
          <div className="flex w-full justify-between px-4">
            <Image src={Images.FaceBook} />
            <Image src={Images.Twitter} />
            <Image src={Images.Insta} />
            <Image src={Images.LinkedIn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
