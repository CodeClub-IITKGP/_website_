const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Our Team
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            This is the team of CodeClub IIT Kharagpur. Meet the dedicated
            faculty and students who drive our mission forward.
          </p>
        </div>

        {/* Professor In-charge Section */}
        <section className="mb-16 md:mb-32">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-blue-400">
              Professor In-charge
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-800 rounded-2xl p-6 md:p-10 border border-gray-700 hover:border-blue-500 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-4 md:mb-6">
                    Dr. Sandip Chakraborty
                  </h3>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    I am working as an Associate Professor in the Department of
                    Computer Science and Engineering at the Indian Institute of
                    Technology (IIT) Kharagpur.
                  </p>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    I obtained my Bachelor of Engineering (BE) degree from
                    Jadavpur University, Kolkata in 2009 and Master of
                    Technology (M Tech) and Doctor of Philosophy (Ph.D.), both
                    from IIT Guwahati, in 2011 and 2014, respectively.
                  </p>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    As a system researcher, my primary research interests is in
                    the intersection of computer systems, human computer
                    interaction and machine learning.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-4 md:mt-6">
                    <span className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-sm">
                      Associate Professor
                    </span>
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm">
                      CSE Department
                    </span>
                    <span className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm">
                      IIT Kharagpur
                    </span>
                  </div>
                </div>
                <div className="bg-gray-700 rounded-2xl p-8 border border-gray-600 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-8xl mb-4">👨‍🏫</div>
                    <p className="text-lg">Faculty Photo</p>
                    <p className="text-sm text-gray-600">To be added</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Governing Batch Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 text-purple-400">
              👥 Governing Batch
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The core team of student leaders who manage and coordinate
              CodeClub activities throughout the year.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Placeholder for Governing Batch Members */}
            {[1, 2, 3, 4, 5, 6].map((member) => (
              <div
                key={member}
                className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">👤</span>
                  </div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-2">
                    Member Name
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">Position Title</p>
                </div>
                <div className="space-y-3 text-center">
                  <p className="text-gray-400 text-sm">Year: To be filled</p>
                  <p className="text-gray-400 text-sm">Role: To be filled</p>
                  <div className="bg-gray-700 rounded-xl p-4 border border-gray-600">
                    <p className="text-gray-500 text-sm">Details to be added</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Members Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 text-green-400">Members</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our dedicated team members who contribute to the vibrant CodeClub
              community at IIT Kharagpur.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Placeholder for Members */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((member) => (
              <div
                key={member}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl">👤</span>
                  </div>
                  <h3 className="text-lg font-semibold text-green-300 mb-2">
                    Member Name
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">Year & Branch</p>
                  <div className="bg-gray-700 rounded-lg p-3 border border-gray-600">
                    <p className="text-gray-500 text-xs">Info to be added</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 text-blue-400">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Have questions or want to join our community? Reach out to us
              through any of these channels.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-gray-800 rounded-2xl p-10 border border-gray-700">
              <h3 className="text-2xl font-semibold text-blue-300 mb-8">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-3 text-lg">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-3 text-lg">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-3 text-lg">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your interest in CodeClub..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-medium transition-colors text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold text-purple-300 mb-6">
                  Contact Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-xl">📧</span>
                    </div>
                    <div>
                      <p className="text-gray-300">Email</p>
                      <p className="text-gray-500">To be filled</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-xl">📱</span>
                    </div>
                    <div>
                      <p className="text-gray-300">Phone</p>
                      <p className="text-gray-500">To be filled</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <p className="text-gray-300">Location</p>
                      <p className="text-gray-500">
                        Department of CSE, IIT Kharagpur
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold text-green-300 mb-6">
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-gray-500">To be filled</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-gray-500">To be filled</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media & Links */}
        <section className="mb-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 text-yellow-400">
              🌐 Connect With Us
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Follow us on social media and stay updated with our latest
              activities, events, and achievements.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-12 border border-gray-700">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Social Media Links */}
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-600 text-center hover:border-blue-500 transition-all">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔗</span>
                  </div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">
                    Website
                  </h3>
                  <p className="text-gray-500 text-sm">Official Website Link</p>
                  <p className="text-gray-600 text-xs mt-2">To be filled</p>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-600 text-center hover:border-blue-500 transition-all">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📘</span>
                  </div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">
                    Facebook
                  </h3>
                  <p className="text-gray-500 text-sm">Facebook Page</p>
                  <p className="text-gray-600 text-xs mt-2">To be filled</p>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-600 text-center hover:border-purple-500 transition-all">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📸</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">
                    Instagram
                  </h3>
                  <p className="text-gray-500 text-sm">Instagram Handle</p>
                  <p className="text-gray-600 text-xs mt-2">To be filled</p>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-600 text-center hover:border-green-500 transition-all">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="text-lg font-semibold text-green-300 mb-2">
                    WhatsApp
                  </h3>
                  <p className="text-gray-500 text-sm">WhatsApp Group</p>
                  <p className="text-gray-600 text-xs mt-2">To be filled</p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-400 text-lg leading-relaxed">
                  Join our community and be part of the exciting journey in
                  competitive programming, workshops, and cultural events at IIT
                  Kharagpur!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
