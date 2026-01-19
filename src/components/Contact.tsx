import { motion } from "framer-motion";
import { User, GraduationCap } from "lucide-react";

// type TeamMember = {
//   name: string;
//   role: string;
//   linkedin: string;
//   github: string;
//   dp: string;
// };

// const res = await fetch("/assets/team.json");
// const teamData: TeamMember[] = await res.json();
import teamData from "../team.json";

const Contact = () => {
  // Filter team data into governing batch and general members
  const governingBatch = teamData.filter((member) =>
    [
      "President",
      "Tech Head",
      "Secretary",
      "Finance Head",
      "CP Head",
      "Design Head",
      "Vice President",
    ].includes(member.role),
  );

  const advisors = teamData.filter((member) =>
    ["Advisor"].includes(member.role),
  );
  const coordinators = teamData.filter((member) =>
    ["Coordinator"].includes(member.role),
  );

  // const coordi = teamData.filter((member)=>)
  const AssociateMembers = teamData.filter((member) =>
    ["Associate Member"].includes(member.role),
  );

  return (
    <div className="min-h-screen bg-[#0a0c10] text-gray-100 selection:bg-blue-500/30 font-sans">
      {/* Animated Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-[30%] -right-[10%] w-[30%] h-[30%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Our Team
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The talented individuals driving CodeClub IIT Kharagpur forward.
          </p>
        </motion.header>

        {/* Professor In-charge - compact text, airy spacing */}
        <section className="mb-32">
          <SectionHeader title="Professor In-charge" color="text-blue-400" />
          <motion.div
            whileHover={{ y: -5 }}
            className="max-w-4xl mx-auto bg-white/[0.03] rounded-[2rem] p-8 md:p-10 border border-white/5 flex flex-col md:flex-row gap-10 items-center"
          >
            <div className="w-48 h-48 flex-shrink-0 bg-gray-900 rounded-2xl border border-white/10 relative overflow-hidden group shadow-[0_15px_50px_-25px_rgba(59,130,246,0.4)]">
              <img
                src={`assets/imgs/sandip chakrobarty.jpeg`}
                alt="Dr. Sandip Chakraborty"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent" />
            </div>
            <div className="flex-1 text-center md:text-left space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[11px] font-mono tracking-wide">
                <GraduationCap className="w-3 h-3" /> Faculty Advisor
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                Dr. Sandip Chakraborty
              </h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-3xl mx-auto md:mx-0">
                I am working as an Associate Professor in the Department of
                Computer Science and Engineering at the Indian Institute of
                Technology (IIT) Kharagpur.
              </p>
              <div className="space-y-3 text-gray-400 leading-relaxed text-sm md:text-base max-w-3xl mx-auto md:mx-0">
                <p>
                  I obtained my Bachelor of Engineering (BE) degree from
                  Jadavpur University, Kolkata in 2009 and Master of Technology
                  (M Tech) and Doctor of Philosophy (Ph.D.), both from IIT
                  Guwahati, in 2011 and 2014, respectively.
                </p>
                <p>
                  As a system researcher, my primary research interests is in
                  the intersection of computer systems, human computer
                  interaction and machine learning.
                </p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                <Tag text="CSE Dept" color="bg-blue-600" />
                <Tag text="IIT Kharagpur" color="bg-purple-600" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Governing Batch Section - 5 Columns */}
        <section className="mb-32">
          <SectionHeader
            title="Governing Batch"
            color="text-purple-400"
            desc="The leadership core of CodeClub."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {governingBatch.map((member) => (
              <MemberCard
                key={member.name}
                color="purple"
                name={member.name}
                role={member.role}
                image={member.dp}
              />
            ))}
          </div>
        </section>

        <section className="mb-32">
          <SectionHeader title="Advisors" color="text-green-400" desc="" />
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {advisors.map((member) => (
              <MemberCard
                key={member.name}
                color="green"
                name={member.name}
                role={member.role}
                image={member.dp}
              />
            ))}
          </div>
        </section>

        <section className="mb-32">
          <SectionHeader title="Coordinator" color="text-green-400" desc="" />
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {coordinators.map((member) => (
              <MemberCard
                key={member.name}
                color="green"
                name={member.name}
                role={member.role}
                image={member.dp}
              />
            ))}
          </div>
        </section>

        {/* Members Section - 6 Columns */}
        <section className="mb-32">
          <SectionHeader
            title="Associate Members"
            color="text-green-400"
            desc="Our dedicated community members."
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {AssociateMembers.map((member) => (
              <MemberCard
                key={member.name}
                color="green"
                name={member.name}
                role="Associate Member"
                image={member.dp}
              />
            ))}
          </div>
        </section>

        {/* social Information */}
        <section className="mb-10">
          <SectionHeader title="Connect With Us" color="text-blue-400" />
          <div className="flex justify-center items-center gap-6">
            <a
              href="https://www.facebook.com/CodeClub.IITKGP/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-blue-600/10 border border-blue-500/30 rounded-xl flex items-center justify-center hover:border-blue-500/60 hover:bg-blue-500/20 transition-all cursor-pointer"
              >
                <svg
                  className="w-5 h-5 text-blue-400 group-hover:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </motion.div>
            </a>

            <a
              href="mailto:codeclub.iitkgp@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-12 h-12 bg-gradient-to-br from-red-600/20 to-red-600/10 border border-red-500/30 rounded-xl flex items-center justify-center hover:border-red-500/60 hover:bg-red-500/20 transition-all cursor-pointer"
              >
                <svg
                  className="w-5 h-5 text-red-400 group-hover:text-red-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                </svg>
              </motion.div>
            </a>

            <a
              href="https://www.instagram.com/codeclub.iitkgp/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-12 h-12 bg-gradient-to-br from-pink-600/20 to-purple-600/20 border border-pink-500/30 rounded-xl flex items-center justify-center hover:border-pink-500/60 hover:bg-pink-500/20 transition-all cursor-pointer"
              >
                <svg
                  className="w-5 h-5 text-pink-400 group-hover:text-pink-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.div>
            </a>

            <a
              href="https://in.linkedin.com/company/codeclub"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.1, y: -3 }}
                className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-700/20 border border-blue-400/30 rounded-xl flex items-center justify-center hover:border-blue-400/60 hover:bg-blue-500/20 transition-all cursor-pointer"
              >
                <svg
                  className="w-5 h-5 text-blue-400 group-hover:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

// --- COMPACT HELPER COMPONENTS ---

const MemberCard = ({ color, name, role, image }: any) => {
  const themes: any = {
    purple: "hover:border-purple-500/50 group-hover:text-purple-400",
    green: "hover:border-green-500/50 group-hover:text-green-400",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`group relative bg-white/[0.03] rounded-2xl border border-white/5 transition-all duration-300 overflow-hidden ${
        themes[color].split(" group-hover")[0]
      }`}
    >
      {/* Square Image Container */}
      <div className="aspect-square w-full bg-[#111418] relative overflow-hidden flex items-center justify-center">
        {image ? (
          <img
            src={`assets/imgs/${image}`}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <User className="w-1/3 h-1/3 text-gray-800 group-hover:scale-110 transition-transform duration-500" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="p-3 text-center">
        <h4 className="text-sm font-bold text-white truncate px-1">{name}</h4>
        <p
          className={`text-[10px] font-medium tracking-wide uppercase opacity-60 mt-0.5 ${
            themes[color].split("hover:")[1]
          }`}
        >
          {role}
        </p>
      </div>
    </motion.div>
  );
};

const SectionHeader = ({ title, color, desc }: any) => (
  <div className="text-center mb-12">
    <h2
      className={`text-2xl md:text-4xl font-bold mb-2 tracking-tight ${color}`}
    >
      {title}
    </h2>
    {desc && <p className="text-sm text-gray-500 font-medium">{desc}</p>}
  </div>
);

const Tag = ({ text, color }: any) => (
  <span
    className={`${color} text-white px-3 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider`}
  >
    {text}
  </span>
);

export default Contact;
