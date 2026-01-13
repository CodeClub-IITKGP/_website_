import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Brain,
  Theater,
  Repeat,
  Star,
  Moon,
  ChevronRight,
  GraduationCap,
  Dumbbell,
  Music,
} from "lucide-react";

const Events = () => {
  const [activeSection, setActiveSection] = useState("codenites");

  const sections = [
    {
      id: "codenites",
      title: "CodeNites",
      icon: <Trophy className="w-4 h-4" />,
    },
    {
      id: "cpworkshop",
      title: "CP Workshop",
      icon: <Brain className="w-4 h-4" />,
    },
    {
      id: "cultural",
      title: "Cultural Events",
      icon: <Theater className="w-4 h-4" />,
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0c10] text-gray-100 selection:bg-blue-500/30">
      {/* Navbar with Auto-Highlighting Buttons */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0c10]/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-center items-center gap-2 md:gap-4 overflow-x-auto no-scrollbar">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative flex items-center space-x-2 px-4 py-2 -mx-3 rounded-full transition-all duration-300 whitespace-nowrap ${
                  activeSection === section.id
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -inset-0 bg-blue-600 rounded-full -z-10"
                  />
                )}
                <span className="shrink-0">{section.icon}</span>
                <span className="font-medium text-xs md:text-sm">
                  {section.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Main Header */}
        <header className="text-center mb-32">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            CodeClub Events
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our exciting lineup of competitive programming contests,
            educational workshops, and cultural celebrations that bring together
            the entire CSE community.
          </p>
        </header>

        {/* --- SECTION 1: CODENITES --- */}
        <section id="codenites" className="mb-40 scroll-mt-28">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-blue-400">
              🏆 console.log("CodeNites")
            </h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                CodeNites are bi-monthly Competitive Programming contests
                conducted by CodeClub. Where coding meets competition! Every
                other month, CodeNites brings you a thrilling showdown of
                programming prowess.
              </p>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                Challenge yourself with real-world problems, unleash your
                algorithmic creativity, and rise above the competition. More
                than just a contest, CodeNites connect a community of fellow
                passionate programmers of KGP. Ready to unleash your inner coder
                and claim victory?
              </p>
            </div>
          </div>

          <div className="space-y-16">
            <EventCard
              title="Bimonthly CodeNites"
              glowColor="hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.4)]"
              borderColor="hover:border-blue-500/50"
              icon={<Repeat className="text-blue-400" />}
              content="Where coding meets competition! Every other month, CodeNites brings you a thrilling showdown of programming prowess. Challenge yourself with real-world problems, unleash your algorithmic creativity, and rise above the competition. More than just a contest, CodeNites connect a community of fellow passionate programmers of KGP."
              features={[
                "Real-world programming challenges",
                "Algorithmic creativity showcase",
                "Community building among coders",
                "Bi-monthly competitive showdown",
              ]}
            />
            <EventCard
              title="Freshers' CodeNite"
              reversed
              glowColor="hover:shadow-[0_0_40px_-10px_rgba(34,197,94,0.4)]"
              borderColor="hover:border-green-500/50"
              icon={<Star className="text-green-400" />}
              content="Where coding starts, and legends rise. Freshers, step into the arena! CodeNite awaits! Freshers' CodeNite is your chance to dive headfirst into the exciting world of competitive programming. Level up your skills, tackle stimulating challenges, and prove your coding mettle. No prior experience? No worries!"
              features={[
                "Beginner-friendly challenges",
                "Expert mentorship available",
                "Networking with fellow freshers",
                "Confidence building exercises",
                "Win bragging rights!",
              ]}
            />
            <EventCard
              title="Bitwise CodeNite"
              glowColor="hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.4)]"
              borderColor="hover:border-purple-500/50"
              icon={<Moon className="text-purple-400" />}
              content="The code never sleeps!! A legendary overnight coding marathon for the bravest coders. Push your limits and code through the night in a thrilling competition. Experience the camaraderie and collaboration of the coding community. Emerge victorious and claim the ultimate coding crown!"
              features={[
                "Overnight coding marathon",
                "Ultimate coding challenge",
                "Community collaboration",
                "Legendary coder status",
                "Ultimate coding crown",
              ]}
            />
          </div>
        </section>

        {/* --- SECTION 2: CP WORKSHOP --- */}
        <section id="cpworkshop" className="mb-40 scroll-mt-28">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-purple-400">
              🧠 Competitive Programming Workshop
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
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

          <div className="mt-12 p-10 rounded-3xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-white/10">
            <h3 className="text-2xl font-semibold text-center mb-8 text-purple-300">
              🎯 Workshop Highlights
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-black/30 rounded-2xl border border-white/5">
                <h4 className="text-xl font-bold text-blue-300 mb-3">
                  For Div 3 Students
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Perfect starting point for competitive programming journey.
                  Learn fundamental concepts, basic algorithms, and
                  problem-solving strategies.
                </p>
              </div>
              <div className="p-6 bg-black/30 rounded-2xl border border-white/5">
                <h4 className="text-xl font-bold text-green-300 mb-3">
                  For Div 2 Students
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Advanced techniques and complex algorithms. Master challenging
                  topics and prepare for higher-level competitive programming
                  contests.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: CULTURAL EVENTS --- */}
        <section id="cultural" className="mb-40 scroll-mt-28">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-green-400">
              🎭 Cultural Events
            </h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                CodeClub believes in fostering a vibrant and inclusive community
                within the Department of Computer Science and Engineering. While
                we are passionate about coding, we also recognize the importance
                of fostering connections and celebrating our diverse talents and
                interests.
              </p>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                That's why we organize three exciting cultural events throughout
                the year! These cultural events are more than just celebrations;
                they are vital threads in the fabric of our departmental
                community.
              </p>
            </div>
          </div>

          <div className="space-y-16">
            <EventCard
              title="Fresher's Nite"
              glowColor="hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.4)]"
              borderColor="hover:border-yellow-500/50"
              icon={<Music className="text-yellow-400" />}
              content="This event marks the grand welcome of our newest cohort of CSE students, kicking off their exciting journey at IIT Kharagpur. Imagine a night filled with vibrant performances, dazzling lights, and infectious energy. Freshers showcase their hidden talents through song, dance, musical ensembles, captivating instrumentals, and even magic shows. The night is sprinkled with fun-filled activities, including funny Q&A sessions and stand-up comedy acts."
              features={[
                "Song and dance performances",
                "Musical ensembles & instrumentals",
                "Magic shows and skits",
                "Q&A sessions and comedy",
                "Community bonding activities",
              ]}
            />
            <EventCard
              title="CSE Sports Day"
              reversed
              glowColor="hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.4)]"
              borderColor="hover:border-orange-500/50"
              icon={<Dumbbell className="text-orange-400" />}
              content="This day is a testament to the diverse athletic prowess and the spirit of sportsmanship that runs deep within our CSE community. Witness students from different years and disciplines engage in friendly rivalry across various sporting events. Whether it's the adrenaline rush on the basketball court, strategic finesse on the chessboard, or sheer determination on the track, the day is filled with excitement. Professors and staff join us, adding another layer of connection."
              features={[
                "Basketball tournaments",
                "Chess competitions",
                "Track and field events",
                "Professor & staff participation",
                "Awards ceremony",
              ]}
            />
            <EventCard
              title="Farewell Party"
              glowColor="hover:shadow-[0_0_40px_-10px_rgba(239,68,68,0.4)]"
              borderColor="hover:border-red-500/50"
              icon={<GraduationCap className="text-red-400" />}
              content="As our seniors prepare to bid farewell to their time at IIT Kharagpur, we hold a memorable Farewell Party to celebrate their achievements and contributions to the department. This is a time to reflect on shared memories, build lasting bonds, and express gratitude. The event takes on a heartwarming ambiance, filled with heartfelt speeches from our professors and seniors themselves. The evening concludes with a delicious dinner, providing the perfect opportunity for informal conversations and laughter."
              features={[
                "Heartfelt speeches & stories",
                "Sharing experiences & wisdom",
                "Nostalgic memory sharing",
                "Dinner and conversations",
                "Gratitude & celebration",
              ]}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const EventCard = ({
  title,
  content,
  icon,
  features,
  reversed,
  glowColor,
  borderColor,
}: any) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 20 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className={`flex flex-col ${
      reversed ? "lg:flex-row-reverse" : "lg:flex-row"
    } gap-10 items-center bg-white/[0.02] p-8 md:p-12 rounded-[2rem] border border-white/5 transition-all duration-300 ${glowColor} ${borderColor}`}
  >
    <div className="flex-1 space-y-6">
      <div className="flex items-center gap-4">
        <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
          {icon}
        </div>
        <h3 className="text-3xl font-bold tracking-tight">{title}</h3>
      </div>
      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
        {content}
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 border-t border-white/5 pt-6">
        {features.map((f: string) => (
          <li
            key={f}
            className="text-xs md:text-sm text-gray-500 flex items-center gap-2"
          >
            <ChevronRight className="w-3 h-3 text-blue-500 shrink-0" /> {f}
          </li>
        ))}
      </ul>
    </div>
    <div className="flex-1 w-full aspect-video bg-gray-900 border border-white/10 rounded-2xl flex flex-col items-center justify-center text-gray-600 relative overflow-hidden group">
      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-700 opacity-40">
        📸
      </div>
      <span className="text-xs font-mono uppercase tracking-widest opacity-30">
        Image: {title}
      </span>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  </motion.div>
);

export default Events;
