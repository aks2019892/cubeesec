import { Mail, Phone, MapPin, Linkedin, Github, LucideInstagram } from 'lucide-react';

export default function ContactUs() {
  const mailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=info@cubeesec.com&su=Contact%20from%20Website&body=Hello%20Cubeesec%2C%0AI'd%20like%20to%20get%20in%20touch...`;

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form className="space-y-6 bg-gray-800 p-6 rounded-xl shadow-lg">
          <div>
            <label className="block text-sm mb-1">Your Name</label>
            <input type="text" placeholder="Enter your name"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-cyan-400" />
          </div>
          <div>
            <label className="block text-sm mb-1">Your Email</label>
            <input type="email" placeholder="you@example.com"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-cyan-400" />
          </div>
          <div>
            <label className="block text-sm mb-1">Subject</label>
            <input type="text" placeholder="Regarding..."
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-cyan-400" />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea rows={4} placeholder="Your message"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-cyan-400"></textarea>
          </div>
          <a href={mailLink} target="_blank" rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded transition">
            Send via Gmail
          </a>
        </form>

        {/* Contact Details */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg space-y-6">
          <div className="flex items-start space-x-4">
            <MapPin className="w-5 h-5 mt-1 text-cyan-400" />
            <div>
              <h4 className="font-semibold">Address</h4>
              <p>Cubeesec HQ, Tech Park, Chennai, India</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Phone className="w-5 h-5 mt-1 text-cyan-400" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Mail className="w-5 h-5 mt-1 text-cyan-400" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p>info@cubeesec.com</p>
            </div>
          </div>

          <div className="flex space-x-4 pt-4">
            <a href="https://www.instagram.com/cubeesec/" target="_blank" rel="noreferrer">
              <LucideInstagram className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition" />
            </a>
            <a href="https://github.com/cubeesec" target="_blank" rel="noreferrer">
              <Github className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition" />
            </a>
            <a href="https://www.linkedin.com/company/cubeesec-securities/" target="_blank" rel="noreferrer">
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
