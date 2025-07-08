import React, { useState } from "react";
import { Github, Linkedin, Mail, Send, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_mp6nkmg",
        "template_dotrvxd",
        templateParams,
        "vGUv0_suVb4QIqzpi"
      )
      .then(() => {
        setSuccessMessage("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Hide message after 5 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      });
      
    emailjs
      .send(
        "service_mp6nkmg",
        "template_4dmi23v",
        templateParams,
        "vGUv0_suVb4QIqzpi"
      )
      .then(() => {
        console.log("Admin notified!");
      })
      .catch((error) => {
        console.error("Admin Email Error:", error);
      });
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden"
    >
      {/* Background Glow Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-screen blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
            and create something amazing together.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Contact Info */}
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                Get In Touch
              </h3>
              <p className="text-gray-400 text-base sm:text-lg">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology and
                development.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <a
                    href="mailto:muhammadumerahmed95@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Umer%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect."
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base"
                  >
                    muhammadumerahmed95@gmail.com
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">GitHub</h4>
                  <a
                    href="https://github.com/xorkho"
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-400 hover:text-purple-300 text-sm sm:text-base"
                  >
                    github.com/xorkho
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/muhammad-umer-ahmed-65440225a"
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 text-sm sm:text-base"
                  >
                    linkedin.com/in/muhammadumerahmed
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-8">
              <h4 className="text-white font-medium mb-4">Follow Me</h4>
              <div className="flex justify-center lg:justify-start gap-4">
                {[
                  {
                    icon: Github,
                    link: "https://github.com/xorkho",
                  },
                  {
                    icon: Linkedin,
                    link: "https://www.linkedin.com/in/muhammad-umer-ahmed-65440225a",
                  },
                  {
                    icon: Mail,
                    link: "mailto:muhammadumerahmed95@gmail.com",
                  },
                ].map(({ icon: Icon, link }, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transform hover:scale-110 transition-all border border-slate-700 hover:border-blue-500"
                  >
                    <Icon className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-700">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 flex items-center gap-2 justify-center lg:justify-start">
              <MessageCircle className="w-6 h-6 text-blue-400" />
              Send Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 text-sm mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 text-sm mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="youremail@gmail.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-300 text-sm mb-2"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Project Discussion"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-sm mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-slate-700 text-center">
          <p className="text-gray-400 text-base sm:text-lg">
            Available for freelance projects and full-time opportunities
          </p>
          <div className="mt-4 flex justify-center items-center gap-2">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-400 font-medium">Available Now</span>
          </div>
        </div>
      </div>
    </section>
  );
}
