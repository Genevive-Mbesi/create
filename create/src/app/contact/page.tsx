'use client';
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import cover from "@/components/Images/cover.jpg";
import React, { useState } from "react";
import Slide from "@/components/Slide";


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage("Thank you for your message! We'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setResponseMessage("Something went wrong. Please try again.");
      }
    } catch {
      setResponseMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
    <div className="min-h-screen  flex items-center justify-center p-6 relative">
      <Image
        src={cover}
        alt="Cover image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority 
        loading="eager"  
        className="absolute top-0 left-0 z-[-1] "
      />
      <Slide>
      <div className="max-w-2xl  bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Contact Form */}
          <div className="p-8 space-y-6">
            <h2 className="text-3xl font-bold text-neutral-950">Get in Touch</h2>
            <p className="text-gray-600">Fill out the form below</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-neutral-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-neutral-950 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-neutral-950 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Message</label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-neutral-400 focus:outline-none"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-neutral-950 text-white font-bold py-2 px-4 rounded-md hover:bg-neutral-400 transition duration-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
            {responseMessage && <p className="mt-4 text-gray-700">{responseMessage}</p>}
          </div>

          {/* Contact Information */}
          <div className="bg-neutral-950 text-white p-8 space-y-6">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="text-neutral-200">Feel free to reach out via:</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <a href="mailto:genmbesi@gmail.com">
                  <AiOutlineMail className="text-2xl hover:text-neutral-400" />
                </a>
                <span>Mail box</span>
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href="https://wa.me/+254740528336"
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
      </Slide>
    </div>
    
   
    </div>
  );
};

export default Contact;
