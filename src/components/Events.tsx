import { useState } from "react";

const Events = () => {
  const [activeSection, setActiveSection] = useState("codenites");

  const sections = [
    { id: "codenites", title: "CodeNites", icon: "🏆" },
    { id: "cpworkshop", title: "CP Workshop", icon: "🧠" },
    { id: "cultural", title: "Cultural Events", icon: "🎭" },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Header */}
      <div className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex justify-center space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  activeSection === section.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                <span className="text-xl">{section.icon}</span>
                <span className="font-medium">{section.title}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            CodeClub Events
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our exciting lineup of competitive programming contests,
            educational workshops, and cultural celebrations that bring together
            the entire CSE community
          </p>
        </div>

        {/* CodeNites Section */}
        <section id="codenites" className="mb-32 scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 text-blue-400">
              🏆 console.log("CodeNites")
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              CodeNites are bi-monthly Competitive Programming contests
              conducted by CodeClub. Where coding meets competition! Every other
              month, CodeNites brings you a thrilling showdown of programming
              prowess.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Challenge yourself with real-world problems, unleash your
              algorithmic creativity, and rise above the competition. More than
              just a contest, CodeNites connect a community of fellow passionate
              programmers of KGP. Ready to unleash your inner coder and claim
              victory?
            </p>
          </div>

          <div className="space-y-12 mb-16">
            {/* Bimonthly CodeNites */}
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-300 mb-4">
                      Bimonthly CodeNites
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Where coding meets competition! Every other month, CodeNites
                  brings you a thrilling showdown of programming prowess.
                  Challenge yourself with real-world problems, unleash your
                  algorithmic creativity, and rise above the competition.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  More than just a contest, CodeNites connect a community of
                  fellow passionate programmers of KGP. Ready to unleash your
                  inner coder and claim victory?
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Real-world programming challenges</li>
                  <li>• Algorithmic creativity showcase</li>
                  <li>• Community building among coders</li>
                  <li>• Bi-monthly competitive showdown</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-lg">Photo will be added here</p>
                </div>
              </div>
            </div>

            {/* Freshers' CodeNite */}
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-green-300 mb-4">
                      Freshers' CodeNite
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Where coding starts, and legends rise. Freshers, step into the
                  arena! CodeNite awaits! Freshers' CodeNite is your chance to
                  dive headfirst into the exciting world of competitive
                  programming.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Level up your skills, tackle stimulating challenges, and prove
                  your coding mettle. No prior experience? No worries! Freshers'
                  CodeNite is designed just for you.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Learn from experts, network with fellow freshers, and build
                  your coding confidence and of course win bragging rights :p
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Beginner-friendly challenges</li>
                  <li>• Expert mentorship available</li>
                  <li>• Networking with fellow freshers</li>
                  <li>• Confidence building exercises</li>
                  <li>• Win bragging rights!</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-lg">Photo will be added here</p>
                </div>
              </div>
            </div>

            {/* Bitwise CodeNite */}
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-2xl">🌙</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-purple-300 mb-4">
                      Bitwise CodeNite
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The code never sleeps!! A legendary overnight coding marathon
                  for the bravest coders. Push your limits and code through the
                  night in a thrilling competition.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Experience the camaraderie and collaboration of the coding
                  community. Emerge victorious and claim the ultimate coding
                  crown!
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Overnight coding marathon</li>
                  <li>• Ultimate coding challenge</li>
                  <li>• Community collaboration</li>
                  <li>• Legendary coder status</li>
                  <li>• Ultimate coding crown</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-lg">Photo will be added here</p>
                </div>
              </div>
            </div>
          </div>

          {/* CodeNites Leaderboard Section */}
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-10 border border-gray-700 mb-8">
            <h3 className="text-3xl font-semibold text-center mb-8 text-blue-300">
              🏆 CodeNites Champions
            </h3>
            <p className="text-center text-gray-300 mb-8 text-lg">
              Celebrating our top performers across all CodeNites competitions
            </p>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-600">
              <p className="text-center text-gray-400 text-lg">
                🚀 Leaderboard updates after each CodeNites event
              </p>
              <p className="text-center text-gray-500 mt-2">
                Join the next CodeNites to see your name here!
              </p>
            </div>
          </div>
        </section>

        {/* CP Workshop Section */}
        <section id="cpworkshop" className="mb-32 scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 text-purple-400">
              🧠 Competitive Programming Workshop
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Join the CP workshop by Grimoire of Code and CodeClub, tailored
              for Div 3 and Div 2 students, for a comprehensive learning
              experience in competitive programming.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Elevate your skills and conquer coding challenges! Master
              essential algorithms, data structures, and problem-solving
              techniques that will transform you into a competitive programming
              champion.
            </p>
          </div>

          <div className="space-y-12 mb-16">
            {/* STL & Number Theory */}
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-2xl">🔢</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-300 mb-4">
                      STL & Number Theory
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Competitive programming relies on STL's dynamic data
                  structures. Master the Standard Template Library with vectors,
                  sets, maps, and priority queues for efficient data
                  manipulation.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Greedy algorithms make optimal local choices swiftly. Binary
                  search efficiently locates elements, while number theory
                  maneuvers integers for concise solutions, amplifying
                  problem-solving versatility.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• STL containers and algorithms</li>
                  <li>• Greedy algorithm strategies</li>
                  <li>• Binary search techniques</li>
                  <li>• Number theory fundamentals</li>
                  <li>• Modular arithmetic</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-lg">Photo will be added here</p>
                </div>
              </div>
            </div>

            {/* Dynamic Programming */}
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-green-300 mb-4">
                      Dynamic Programming
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Dynamic Programming in competitive programming optimally
                  solves problems by breaking them into smaller subproblems.
                  Learn to identify overlapping subproblems and optimal
                  substructure.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  It efficiently stores and reuses intermediate results,
                  enhancing performance and enabling elegant solutions to
                  complex computational challenges. Master memoization and
                  tabulation techniques.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Problem decomposition strategies</li>
                  <li>• Memoization techniques</li>
                  <li>• Tabulation methods</li>
                  <li>• State transition optimization</li>
                  <li>• Classic DP patterns</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-lg">Photo will be added here</p>
                </div>
              </div>
            </div>

            {/* Graph Theory */}
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-2xl">🕸️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-purple-300 mb-4">
                      Graph Theory
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Graph theory in competitive programming models relationships
                  between entities using nodes and edges. Master fundamental
                  graph representations and traversal algorithms.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Algorithms like DFS and BFS traverse graphs, while Dijkstra's
                  and Floyd-Warshall's tackle shortest paths. Graph theory
                  enriches problem-solving, enabling efficient navigation and
                  analysis of interconnected data structures.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Graph representation techniques</li>
                  <li>• DFS and BFS traversals</li>
                  <li>• Shortest path algorithms</li>
                  <li>• Minimum spanning trees</li>
                  <li>• Advanced graph algorithms</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-lg">Photo will be added here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Workshop Benefits */}
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-10 border border-gray-700 mb-8">
            <h3 className="text-3xl font-semibold text-center mb-8 text-purple-300">
              🎯 Workshop Highlights
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-600">
                <h4 className="text-xl font-semibold text-blue-300 mb-4">
                  For Div 3 Students
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Perfect starting point for competitive programming journey.
                  Learn fundamental concepts, basic algorithms, and
                  problem-solving strategies.
                </p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-600">
                <h4 className="text-xl font-semibold text-green-300 mb-4">
                  For Div 2 Students
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Advanced techniques and complex algorithms. Master challenging
                  topics and prepare for higher-level competitive programming
                  contests.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Events Section */}
        <section id="cultural" className="mb-32 scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 text-green-400">
              🎭 Cultural Events: Building Connections Beyond Code
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              CodeClub believes in fostering a vibrant and inclusive community
              within the Department of Computer Science and Engineering. While
              we are passionate about coding, we also recognize the importance
              of fostering connections and celebrating our diverse talents and
              interests.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              That's why we organize three exciting cultural events throughout
              the year! These cultural events are more than just celebrations;
              they are vital threads in the fabric of our departmental
              community.
            </p>
          </div>

          <div className="space-y-12 mb-16">
            {/* Fresher's Nite */}
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-yellow-500 transition-all">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-2xl">🎭</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-yellow-300 mb-4">
                      Fresher's Nite
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  This event marks the grand welcome of our newest cohort of CSE
                  students, kicking off their exciting journey at IIT Kharagpur.
                  Imagine a night filled with vibrant performances, dazzling
                  lights, and infectious energy.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Freshers showcase their hidden talents through song, dance,
                  musical ensembles, captivating instrumentals, and even magic
                  shows. Group dances pulsate with rhythm and laughter, while
                  dramas and skits bring humor and heartwarming stories to life.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  The night is sprinkled with fun-filled activities, including
                  funny Q&A sessions and stand-up comedy acts by the freshers
                  themselves. Laughter fills the air as everyone bonds over
                  shared experiences, creating lasting memories.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Song and dance performances</li>
                  <li>• Musical ensembles & instrumentals</li>
                  <li>• Magic shows and skits</li>
                  <li>• Q&A sessions and comedy</li>
                  <li>• Community bonding activities</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-lg">Photo will be added here</p>
                </div>
              </div>
            </div>

            {/* CSE Sports Day */}
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-orange-500 transition-all">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-2xl">🏃</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-orange-300 mb-4">
                      CSE Sports Day
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  This day is a testament to the diverse athletic prowess and
                  the spirit of sportsmanship that runs deep within our CSE
                  community. Witness students from different years and
                  disciplines engage in friendly rivalry across various sporting
                  events.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Whether it's the adrenaline rush on the basketball court, the
                  strategic finesse on the chessboard, or the sheer
                  determination on the track, the day is filled with excitement
                  and cheering. But it's not just about winning; it's about the
                  joy of participation.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  And to make it even more special, professors and staff join
                  us, adding another layer of connection and creating a truly
                  inclusive atmosphere. The day culminates with a ceremony where
                  prizes and medals are awarded to the winners.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Basketball tournaments</li>
                  <li>• Chess competitions</li>
                  <li>• Track and field events</li>
                  <li>• Professor & staff participation</li>
                  <li>• Awards ceremony</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-lg">Photo will be added here</p>
                </div>
              </div>
            </div>

            {/* Farewell Party */}
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-red-500 transition-all">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-2xl">👨‍🎓</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-red-300 mb-4">
                      Farewell Party
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  As our seniors prepare to bid farewell to their time at IIT
                  Kharagpur, we hold a memorable Farewell Party to celebrate
                  their achievements and contributions to the department. This
                  is a time to reflect on shared memories, build lasting bonds,
                  and express gratitude.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  The event takes on a heartwarming ambiance, filled with
                  heartfelt speeches from our professors and seniors themselves.
                  As they share stories, experiences, and words of wisdom, a
                  sense of nostalgia and pride washes over the room.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  The evening concludes with a delicious dinner, providing the
                  perfect opportunity for informal conversations, laughter, and
                  reminiscing about the years gone by. It's a bittersweet
                  occasion, but one that leaves everyone feeling grateful.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Heartfelt speeches & stories</li>
                  <li>• Sharing experiences & wisdom</li>
                  <li>• Nostalgic memory sharing</li>
                  <li>• Dinner and conversations</li>
                  <li>• Gratitude & celebration</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-6xl mb-4">📸</div>
                  <p className="text-lg">Photo will be added here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Community Impact */}
          <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-2xl p-10 border border-gray-700 mb-8">
            <h3 className="text-3xl font-semibold text-center mb-8 text-green-300">
              🌟 Building Our Community
            </h3>
            <p className="text-center text-gray-300 mb-8 text-lg leading-relaxed max-w-4xl mx-auto">
              These cultural events provide opportunities for students to
              connect with each other beyond academics, discover hidden talents,
              and create memories that will last a lifetime. We believe that by
              fostering a strong sense of community and belonging, we can
              empower our students to thrive not only as coders but also as
              well-rounded individuals.
            </p>
            <div className="text-center">
              <p className="text-gray-400 text-lg">
                So, whether you're a coding enthusiast, a sports fanatic, or
                simply looking for a fun way to connect with fellow CSE
                students, join us at our next cultural event!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
