"use client";
import React, { useState } from "react";
import GitHubIcon from "../../../public/github-icon.svg";
import LinkedInIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Form validation
    if (!formData.email || !formData.subject || !formData.message) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if the response is ok before trying to parse JSON
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Server response:", response.status, errorText);
        throw new Error(
          `Server responded with ${response.status}: ${errorText.substring(
            0,
            100
          )}...`
        );
      }

      const data = await response.json();

      if (data.success) {
        setEmailSubmitted(true);
        setFormData({ email: "", subject: "", message: "" });
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setError(`Failed to send email: ${error.message}`);
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-8 md:my-8 py-12 gap-4"
    >
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#A3BFFA] mb-4 max-w-md">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out!
        </p>

        {/* Email display with icon - removed underline */}
        <a
          href="mailto:kavindualwis.work@gmail.com"
          className="flex items-center gap-2 mb-6 text-[#03DAC5] hover:text-[#42A5F5] transition-colors"
        >
          <EnvelopeIcon className="h-5 w-5" />
          <span>kavindualwis.work@gmail.com</span>
        </a>

        <div className="socials flex flex-row gap-2">
          <Link href={"https://github.com/kavindualwis"}>
            <Image src={GitHubIcon} alt="Github icon" width={32} height={32} />
          </Link>
          <Link href={"https://www.linkedin.com/in/kavindualwis/"}>
            <Image
              src={LinkedInIcon}
              alt="LinkedIn icon"
              width={32}
              height={32}
            />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <div className="bg-green-100 p-4 rounded-2xl text-green-800 text-center">
            <p className="text-xl font-bold">Email sent successfully!</p>
            <p>Thank you for your message. I'll get back to you soon!</p>
            <button
              onClick={() => setEmailSubmitted(false)}
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded-2xl hover:bg-green-600 transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-100 p-2 rounded-2xl text-red-800">
                {error}
              </div>
            )}
            <label
              htmlFor="email"
              className="text-white block text-sm font-medium"
            >
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="p-2.5 bg-[#1A365D] border border-[#42A5F5] placeholder-[#A3BFFA] text-gray-100 text-sm rounded-2xl block w-full"
              placeholder="john@example.com"
            />

            <label
              htmlFor="subject"
              className="text-white block text-sm font-medium"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              className="p-2.5 bg-[#1A365D] border border-[#42A5F5] placeholder-[#A3BFFA] text-gray-100 text-sm rounded-2xl block w-full"
              placeholder="Just saying hi"
            />

            <label
              htmlFor="message"
              className="text-white block text-sm font-medium"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="mb-4 p-2.5 bg-[#1A365D] border border-[#42A5F5] placeholder-[#A3BFFA] text-gray-100 text-sm rounded-2xl block w-full"
              placeholder="Let's talk about..."
            />

            <button
              type="submit"
              disabled={isLoading}
              className={`${
                isLoading
                  ? "bg-[#42A5F5]/60"
                  : "bg-[#03DAC5] hover:bg-[#42A5F5]"
              } text-white py-2 px-4 rounded-2xl transition-colors flex justify-center items-center`}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
