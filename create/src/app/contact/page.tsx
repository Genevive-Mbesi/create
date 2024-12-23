import React from "react";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import cover from "@/components/Images/cover.jpg";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b  flex items-center justify-center p-6">
      <Image
        src={cover}
        alt="Cover image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
        className="z-[-1]"
      />
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Contact Form */}
          <div className="p-6 space-y-6">
            <h2 className="text-3xl font-bold text-neutral-950">
              Get in Touch
            </h2>
            <p className="text-gray-600">Fill out the form below</p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-neutral-950 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-950 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-neutral-950 text-white font-bold py-2 px-4 rounded-md hover:bg-neutral-400 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-neutral-950 text-white p-6 space-y-6">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="text-neutral-200">
              Feel free to reach out via any of the methods below:
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <a href="mailto:genmbesi@gmail.com">
                  <AiOutlineMail className="text-2xl hover:text-neutral-400" />
                </a>
                <span>Mail box</span>
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href="https://wa.me/+254770209753"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineWhatsApp className="text-2xl hover:text-neutral-400" />
                </a>
                <span>Contact</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-2xl" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-xl font-bold">Business Hours</h4>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 10:00 AM - 12:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
