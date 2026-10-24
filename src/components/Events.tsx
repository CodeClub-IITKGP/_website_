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
        <div className="max-w-6xl mx-auto px-4 py-3">
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

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Header */}
        <header className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-blue-400">
            CodeClub Events
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Competitive programming contests, educational workshops, and
            cultural celebrations that bring together the CSE community.
          </p>
        </header>

        {/* --- SECTION 1: CODENITES --- */}
        <section id="codenites" className="mb-28 scroll-mt-24">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-blue-400">
              CodeNites
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                CodeNites are bi-monthly Competitive Programming contests
                conducted by CodeClub. Where coding meets competition! Every
                other month, CodeNites brings you a thrilling showdown of
                programming prowess.
              </p>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Challenge yourself with real-world problems, unleash your
                algorithmic creativity, and rise above the competition. More
                than just a contest, CodeNites connect a community of fellow
                passionate programmers of KGP. Ready to unleash your inner coder
                and claim victory?
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <EventCard
              title="Bimonthly CodeNites"
              image="/_website_/assets/events_img/bimonthly_codenite.jpeg"
              glowColor="hover:shadow-[0_0_30px_-12px_rgba(59,130,246,0.35)]"
              borderColor="hover:border-blue-500/40"
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
              image="/_website_/assets/events_img/freshers_codenite.jpeg"
              glowColor="hover:shadow-[0_0_30px_-12px_rgba(34,197,94,0.35)]"
              borderColor="hover:border-green-500/40"
              icon={<Star className="text-blue-400" />}
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
              image="/_website_/assets/events_img/bitwise.jpeg"
              glowColor="hover:shadow-[0_0_30px_-12px_rgba(168,85,247,0.35)]"
              borderColor="hover:border-purple-500/40"
              icon={<Moon className="text-blue-400" />}
              content="The code never sleeps!! A legendary overnight coding marathon for the bravest coders. Push your limits and code through the night in a thrilling competition. Experience the camaraderie and collaboration of the coding community. Emerge victorious and claim the ultimate coding crown!"
              features={[
                "Overnight coding marathon",
                "Ultimate coding challenge",
                "Community collaboration",
                "Legendary coder status",
              ]}
            />
          </div>
        </section>

        {/* --- SECTION 2: CP WORKSHOP --- */}
        <section id="cpworkshop" className="mb-28 scroll-mt-24">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-purple-400">
              Competitive Programming Workshop
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed">
              Join the CP workshop by Grimoire of Code and CodeClub, tailored
              for Div 3 and Div 2 students, for a comprehensive learning
              experience in competitive programming.
            </p>
            <p className="text-sm md:text-base text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Elevate your skills and conquer coding challenges! Master
              essential algorithms, data structures, and problem-solving
              techniques that will transform you into a competitive programming
              champion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 16 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col bg-white/[0.02] rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_-12px_rgba(59,130,246,0.35)] hover:border-blue-500/40"
            >
              <div className="w-full aspect-video border-b border-white/10 overflow-hidden relative group">
                <img
                  src="/_website_/assets/events_img/div_3.jpeg"
                  alt="CP Workshop for Div 3 Students"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold text-blue-300 mb-3">
                    For Div 3 Students
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    Perfect starting point for competitive programming journey.
                    Learn fundamental concepts, basic algorithms, and
                    problem-solving strategies.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 16 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col bg-white/[0.02] rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_-12px_rgba(34,197,94,0.35)] hover:border-green-500/40"
            >
              <div className="w-full aspect-video border-b border-white/10 overflow-hidden relative group">
                <img
                  src="/_website_/assets/events_img/div_2.jpeg"
                  alt="CP Workshop for Div 2 Students"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold text-green-300 mb-3">
                    For Div 2 Students
                  </h4>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    Advanced techniques and complex algorithms. Master challenging
                    topics and prepare for higher-level competitive programming
                    contests.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- SECTION 3: CULTURAL EVENTS --- */}
        <section id="cultural" className="mb-28 scroll-mt-24">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-green-400">
              Cultural Events
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                CodeClub believes in fostering a vibrant and inclusive community
                within the Department of Computer Science and Engineering. While
                we are passionate about coding, we also recognize the importance
                of fostering connections and celebrating our diverse talents and
                interests.
              </p>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                That's why we organize three exciting cultural events throughout
                the year! These cultural events are more than just celebrations;
                they are vital threads in the fabric of our departmental
                community.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <EventCard
              title="Fresher's Nite"
              image="/_website_/assets/events_img/freshers_nite1.jpeg"
              glowColor="hover:shadow-[0_0_30px_-12px_rgba(234,179,8,0.35)]"
              borderColor="hover:border-yellow-500/40"
              icon={<Music className="text-green-400" />}
              content="This event marks the grand welcome of our newest cohort of CSE students, kicking off their exciting journey at IIT Kharagpur. Imagine a night filled with vibrant performances, dazzling lights, and infectious energy. Freshers showcase their hidden talents through song, dance, musical ensembles, captivating instrumentals, and even magic shows. The night is sprinkled with fun-filled activities, including funny quiz sessions and stand-up comedy acts."
              features={[
                "Song and dance performances",
                "Musical ensembles & instrumentals",
                "Magic shows and skits",
                "Quiz sessions and comedy",
                "Community bonding activities",
              ]}
            />
            <EventCard
              title="CSE Sports Day"
              reversed
              image="/_website_/assets/events_img/sports_day.jpeg"
              glowColor="hover:shadow-[0_0_30px_-12px_rgba(249,115,22,0.35)]"
              borderColor="hover:border-orange-500/40"
              icon={<Dumbbell className="text-green-400" />}
              content="This day is a testament to the diverse athletic prowess and the spirit of sportsmanship that runs deep within our CSE community. Witness students from different years and disciplines engage in friendly rivalry across various sporting events. Whether it's the adrenaline rush on the Tata Steel Ground, or sheer determination on the track, the day is filled with excitement. Professors and students join us, adding another layer of connection."
              features={[
                "Cricket tournament",
                "Track and field events",
                "Professor & students participation",
                "Awards ceremony",
              ]}
            />
            <EventCard
              title="Farewell Party"
              image="/_website_/assets/events_img/farewell.jpeg"
              glowColor="hover:shadow-[0_0_30px_-12px_rgba(239,68,68,0.35)]"
              borderColor="hover:border-red-500/40"
              icon={<GraduationCap className="text-green-400" />}
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
  image,
  reversed,
  glowColor,
  borderColor,
}: any) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 16 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className={`flex flex-col ${
      reversed ? "lg:flex-row-reverse" : "lg:flex-row"
    } gap-8 items-center bg-white/[0.02] p-6 md:p-10 rounded-2xl border border-white/5 transition-all duration-300 ${glowColor} ${borderColor}`}
  >
    <div className="flex-1 space-y-5">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-white/5 rounded-xl border border-white/10">
          {icon}
        </div>
        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
      </div>
      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
        {content}
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2.5 gap-x-6 border-t border-white/5 pt-5">
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
    <div className="flex-1 w-full aspect-video border border-white/10 rounded-xl overflow-hidden relative group">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  </motion.div>
);

export default Events;
