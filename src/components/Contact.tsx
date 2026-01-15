import { motion } from "framer-motion";
import {
  User,
  Mail,
  MapPin,
  Globe,
  Facebook,
  Instagram,
  MessageSquare,
  Send,
  GraduationCap,
} from "lucide-react";
import teamData from "../assets/team.json";

const Contact = () => {
  // Filter team data into governing batch and general members
  const governingBatch = teamData.filter((member) =>
    ["President", "Tech Lead", "Treasurer", "Head", "CP Head"].includes(
      member.role
    )
  );

  const generalMembers = teamData.filter(
    (member) =>
      !["President", "Tech Lead", "Treasurer", "Head", "CP Head"].includes(
        member.role
      )
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
                src={`/src/assets/imgs/sandip chakrobarty.jpeg`}
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

        {/* Members Section - 6 Columns */}
        <section className="mb-32">
          <SectionHeader
            title="General Members"
            color="text-green-400"
            desc="Our dedicated community members."
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {generalMembers.map((member) => (
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

        {/* Contact Information */}
        <section className="mb-32">
          <SectionHeader title="Get In Touch" color="text-blue-400" />
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Form */}
            <div className="bg-white/[0.02] rounded-[2rem] p-8 border border-white/5">
              <h3 className="text-xl font-bold text-blue-300 mb-6 flex items-center gap-2">
                <Send className="w-5 h-5" /> Send a Message
              </h3>
              <div className="space-y-4">
                <InputField label="Name" placeholder="Full Name" type="text" />
                <InputField
                  label="Email"
                  placeholder="Email Address"
                  type="email"
                />
                <textarea
                  rows={4}
                  className="w-full bg-gray-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none placeholder:text-gray-700"
                  placeholder="Message..."
                ></textarea>
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-bold transition-all text-sm">
                  Submit
                </button>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div className="bg-white/[0.02] rounded-[2rem] p-8 border border-white/5">
                <h3 className="text-xl font-bold text-purple-300 mb-6">
                  Contact info
                </h3>
                <div className="space-y-4">
                  <ContactItem
                    icon={<Mail size={18} className="text-blue-400" />}
                    label="Email"
                    value="codeclub.iitkgp@gmail.com"
                  />
                  <ContactItem
                    icon={<MapPin size={18} className="text-purple-400" />}
                    label="Location"
                    value="CSE Dept, IIT KGP"
                  />
                </div>
              </div>
              <div className="bg-white/[0.02] rounded-[2rem] p-8 border border-white/5">
                <h3 className="text-xl font-bold text-green-300 mb-4">
                  Socials
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  <SocialIcon icon={<Globe size={20} />} />
                  <SocialIcon icon={<Facebook size={20} />} />
                  <SocialIcon icon={<Instagram size={20} />} />
                  <SocialIcon icon={<MessageSquare size={20} />} />
                </div>
              </div>
            </div>
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
            src={`/src/assets/imgs/${image}`}
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
      className={`text-3xl md:text-4xl font-bold mb-2 tracking-tight ${color}`}
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

const InputField = ({ label, placeholder, type }: any) => (
  <div>
    <label className="block text-gray-500 mb-1 text-[10px] font-bold uppercase tracking-widest">
      {label}
    </label>
    <input
      type={type}
      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-blue-500/50 outline-none placeholder:text-gray-700"
      placeholder={placeholder}
    />
  </div>
);

const ContactItem = ({ icon, label, value }: any) => (
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/5">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest leading-none mb-1">
        {label}
      </p>
      <p className="text-sm text-gray-300 font-medium">{value}</p>
    </div>
  </div>
);

const SocialIcon = ({ icon }: any) => (
  <div className="aspect-square bg-white/[0.03] border border-white/10 rounded-xl flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-500/5 transition-all cursor-pointer text-gray-400 hover:text-blue-400">
    {icon}
  </div>
);

export default Contact;
