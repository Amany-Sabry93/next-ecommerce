import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-fuchsia-200 border-t  py-12">
        <div className=" max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* first column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-gray-600 text-white w-10 h-10 flex justify-center items-center rounded-xl">
                T
              </div>
              <span className="text-2xl text-gray-500  font-semibold ">TrendyBuy</span>
            </div>
            <p className="text-gray-600 leading-6">
              Your one-stop destination for the <br /> latest technology,
              fashion, and <br />
              lifestyle products. Quality guaranteed <br /> with fast shipping
              and exellant <br /> customer service.
            </p>
            {/*  */}
            <div className="space-y-3 text-gray-600">
              {/* MAP */}
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>123 Shop Street, October City, DC 12345</span>
              </div>
              {/* Telephone */}
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>(+20)0109333333</span>
              </div>
              {/* Email */}
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>support@trendybuy.com</span>
              </div>
            </div>
          </div>
          {/* second column */}
          <div className="space-y-4">
            <span className="text-2xl font-semibold text-gray-500 ">SHOP</span>
            <div className="mt-4 space-y-3">
              <p className="text-gray-600 leading-6">Electronics</p>
              <p className="text-gray-600 leading-6">Fashion</p>
              <p className="text-gray-600 leading-6">Home& Garden</p>
              <p className="text-gray-600 leading-6">Sports</p>
              <p className="text-gray-600 leading-6">Deals</p>
            </div>
          </div>
          {/* third column */}
          <div className="space-y-4">
            <span className="text-2xl font-semibold  text-gray-500 ">CUSTOMER SERVISE</span>
            <div className="mt-4 space-y-3">
              <p className="text-gray-600 leading-6">Contact Us</p>
              <p className="text-gray-600 leading-6">Help Center</p>
              <p className="text-gray-600 leading-6">Track Your Order</p>
              <p className="text-gray-600 leading-6">Returns & Exchanges</p>
              <p className="text-gray-600 leading-6">Size Guide</p>
            </div>
          </div>
          {/* forth column */}
          <div className="space-y-4">
            <span className="text-2xl font-semibold  text-gray-500 ">POLICIES</span>
            <div className="mt-4 space-y-3">
              <p className="text-gray-600 leading-6">Privacy Policy</p>
              <p className="text-gray-600 leading-6">Terms of Service</p>
              <p className="text-gray-600 leading-6">Cookie Policy</p>
              <p className="text-gray-600 leading-6">Shipping Policy</p>
              <p className="text-gray-600 leading-6">Refund Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
