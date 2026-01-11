import { motion } from "framer-motion";
import {
  Rocket,
  Users,
  Terminal,
  Heart,
  Lightbulb,
  ChevronRight,
  Laptop,
  Trophy,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0a0c10] text-gray-100 selection:bg-blue-500/30 font-sans">
      {/* Animated Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-[30%] -right-[10%] w-[30%] h-[30%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] left-[20%] w-[35%] h-[35%] bg-green-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24 md:mb-32"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              About CodeClub
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Empowering students at IIT Kharagpur with coding skills and
            fostering a vibrant programming community.
          </p>
        </motion.header>

        {/* Mission Section */}
        <section className="mb-32">
          <SectionHeader
            title="Our Mission"
            color="text-blue-400"
            icon={<Rocket className="w-8 h-8" />}
          />

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/[0.02] rounded-[2.5rem] p-8 md:p-12 border border-white/5 transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_50px_-15px_rgba(59,130,246,0.3)]"
          >
            <div className="space-y-8 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                CodeClub at IIT Kharagpur is dedicated to creating an inclusive
                environment where students can learn, practice, and excel in
                programming. We believe in hands-on learning, collaborative
                problem-solving, and building real-world projects that make a
                difference.
              </p>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <p className="text-base md:text-lg text-gray-400 leading-relaxed italic">
                Here is where the entire department interacts casually. We
                organize various creative programming contests, workshops, and
                social events like faculty-staff-student cricket matches,
                freshers' welcome, farewell parties for final years, etc to pep
                the otherwise busy lives of the students and faculty.
              </p>
            </div>
          </motion.div>
        </section>

        {/* What We Do Section */}
        <section className="mb-32">
          <SectionHeader
            title="What We Do"
            color="text-purple-400"
            icon={<Terminal className="w-8 h-8" />}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <FeatureCard
              title="Workshops & Bootcamps"
              icon={<Laptop className="text-blue-400" />}
              color="blue"
              desc="Regular coding workshops covering various technologies, from web development to machine learning."
            />
            <FeatureCard
              title="Competitive Programming"
              icon={<Trophy className="text-purple-400" />}
              color="purple"
              desc="Training sessions and contests to help students excel in competitive programming platforms."
            />
            <FeatureCard
              title="Project Collaborations"
              icon={<Lightbulb className="text-green-400" />}
              color="green"
              desc="Facilitating team formations and mentoring for innovative projects and hackathons."
            />
            <FeatureCard
              title="Community Building"
              icon={<Users className="text-yellow-400" />}
              color="yellow"
              desc="Creating connections between students, alumni, and industry professionals."
            />
          </div>
        </section>

        {/* Join Us Section */}
        <motion.section
          whileHover={{ y: -10 }}
          className="text-center bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-transparent rounded-[3rem] p-10 md:p-20 border border-white/10 relative overflow-hidden transition-all duration-500 hover:border-indigo-500/40 hover:shadow-[0_0_60px_-15px_rgba(99,102,241,0.3)]"
        >
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-2xl mb-8 border border-white/10">
              <Heart className="w-10 h-10 text-red-400 animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Join Our Community
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Whether you're a beginner or an experienced programmer, there's a
              place for you in CodeClub.
            </p>
            <button className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-105 active:scale-95">
              Get Involved
              <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          {/* Subtle Decorative Circle */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full" />
        </motion.section>
      </div>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const SectionHeader = ({ title, color, icon }: any) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="flex flex-col items-center mb-16 text-center"
  >
    <div
      className={`p-4 rounded-2xl bg-white/5 mb-6 border border-white/10 ${color}`}
    >
      {icon}
    </div>
    <h2 className={`text-4xl md:text-5xl font-bold ${color}`}>{title}</h2>
  </motion.div>
);

const FeatureCard = ({ title, icon, desc, color }: any) => {
  const glows: any = {
    blue: "hover:border-blue-500/40 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]",
    purple:
      "hover:border-purple-500/40 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)]",
    green:
      "hover:border-green-500/40 hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.3)]",
    yellow:
      "hover:border-yellow-500/40 hover:shadow-[0_0_30px_-10px_rgba(234,179,8,0.3)]",
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`bg-white/[0.02] rounded-[2rem] p-8 border border-white/5 transition-all duration-300 ${glows[color]}`}
    >
      <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-2xl border border-white/10">
        {icon}
      </div>
      <h3 className={`text-2xl font-bold mb-4 tracking-tight text-gray-100`}>
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed text-base">{desc}</p>
    </motion.div>
  );
};

export default About;
