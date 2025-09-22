import React from "react";

const ContactMap = () => {
  return (
    <div className="w-full min-h-[100vh] md:min-h-[130vh] bg-gradient-to-b from-[#e0e7ff] via-[#fef3c7] to-[#fb7185] flex items-center justify-center p-4 md:p-10">
      <div className="w-full max-w-full h-auto md:h-[80vh] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 bg-transparent rounded-2xl overflow-hidden">
        {/* Left Side - Map */}
        <div className="h-[50vh] md:h-[80vh]">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.227936234482!2d77.3411!3d11.006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8ef32a3b59c21%3A0x9df2cf4a7e94e6bb!2sKangeyam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1694521539234!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Right Side - Contact Form */}
        <div className="p-4 md:p-8 flex flex-col justify-center h-auto md:h-[80vh]">
          {/* <h2 className="text-2xl font-bold mb-6 text-primary-navy">Contact Us</h2> */}
          <form className="space-y-4 md:space-y-6">
            <div>
              {/* <label className="block text-gray-600 mb-1">Name</label> */}
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-primary rounded-full px-4 py-4 focus:ring-1 focus:ring-primary focus:outline-none placeholder:text-primary/60"
              />
            </div>

            <div>
              {/* <label className="block text-gray-600 mb-1">Email</label> */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-primary rounded-full px-4 py-4 focus:ring-1 focus:ring-primary focus:outline-none placeholder:text-primary/60"
              />
            </div>

            <div>
              {/* <label className="block text-gray-600 mb-1">Message</label> */}
              <textarea
                rows="6"
                placeholder="Write your message"
                className="w-full border border-primary rounded-2xl px-4 py-4 focus:ring-1 focus:ring-primary focus:outline-none placeholder:text-primary/60"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-1/3 lg:w-1/4 bg-transparent border border-primary text-primary py-2 px-4 rounded-full hover:bg-primary-navy transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
