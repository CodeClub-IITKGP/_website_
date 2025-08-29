const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About CodeClub
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Empowering students at IIT Kharagpur with coding skills and
            fostering a vibrant programming community
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">
            Our Mission
          </h2>
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              CodeClub at IIT Kharagpur is dedicated to creating an inclusive
              environment where students can learn, practice, and excel in
              programming. We believe in hands-on learning, collaborative
              problem-solving, and building real-world projects that make a
              difference.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Here is where the entire department interacts casually. We
              organize various creative programming contests, workshops, and
              social events like faculty-staff-student cricket matches,
              freshers' welcome, farewell parties for final years, etc to pep
              the otherwise busy lives of the students and faculty.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-purple-400">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-blue-300">
                🚀 Workshops & Bootcamps
              </h3>
              <p className="text-gray-300">
                Regular coding workshops covering various technologies, from web
                development to machine learning
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-purple-300">
                🏆 Competitive Programming
              </h3>
              <p className="text-gray-300">
                Training sessions and contests to help students excel in
                competitive programming platforms
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-green-300">
                💡 Project Collaborations
              </h3>
              <p className="text-gray-300">
                Facilitating team formations and mentoring for innovative
                projects and hackathons
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-500 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-yellow-300">
                🤝 Community Building
              </h3>
              <p className="text-gray-300">
                Creating connections between students, alumni, and industry
                professionals
              </p>
            </div>
          </div>
        </div>

        {/* Join Us */}
        <div className="text-center bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-8 border border-gray-700">
          <h2 className="text-3xl font-semibold mb-4">Join Our Community</h2>
          <p className="text-lg text-gray-300 mb-6">
            Whether you're a beginner or an experienced programmer, there's a
            place for you in CodeClub
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
            Get Involved
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
