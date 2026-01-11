import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Globe,
  Facebook,
  Instagram,
  MessageSquare,
  Clock,
  Send,
  GraduationCap,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0a0c10] text-gray-100 selection:bg-blue-500/30 font-sans">
      {/* Animated Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-[30%] -right-[10%] w-[30%] h-[30%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] left-[20%] w-[35%] h-[35%] bg-green-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Our Team
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            This is the team of CodeClub IIT Kharagpur. Meet the dedicated
            faculty and students who drive our mission forward.
          </p>
        </motion.header>

        {/* Professor In-charge Section */}
        <section className="mb-40">
          <SectionHeader title="Professor In-charge" color="text-blue-400" />

          <motion.div
            whileHover={{ y: -5 }}
            className="max-w-5xl mx-auto bg-white/[0.02] rounded-[2.5rem] p-8 md:p-12 border border-white/5 transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_50px_-15px_rgba(59,130,246,0.3)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-mono mb-2">
                  <GraduationCap className="w-4 h-4" /> Faculty Advisor
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Dr. Sandip Chakraborty
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I am working as an Associate Professor in the Department of
                  Computer Science and Engineering at the Indian Institute of
                  Technology (IIT) Kharagpur.
                </p>
                <div className="space-y-4">
                  <p className="text-gray-400 leading-relaxed">
                    I obtained my Bachelor of Engineering (BE) degree from
                    Jadavpur University, Kolkata in 2009 and Master of
                    Technology (M Tech) and Doctor of Philosophy (Ph.D.), both
                    from IIT Guwahati, in 2011 and 2014, respectively.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    As a system researcher, my primary research interests is in
                    the intersection of computer systems, human computer
                    interaction and machine learning.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 pt-4">
                  <Tag text="Associate Professor" color="bg-blue-600" />
                  <Tag text="CSE Department" color="bg-purple-600" />
                  <Tag text="IIT Kharagpur" color="bg-green-600" />
                </div>
              </div>
              <div className="relative group aspect-square lg:aspect-auto h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gray-900 border border-white/10 rounded-3xl flex flex-col items-center justify-center text-gray-600 transition-all duration-500 group-hover:border-blue-500/30 overflow-hidden">
                  <div className="text-8xl mb-4 group-hover:scale-110 transition-transform duration-700 opacity-40">
                    👨‍🏫
                  </div>
                  <p className="text-lg font-medium">Faculty Photo</p>
                  <p className="text-sm opacity-50 italic">To be added</p>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Governing Batch Section */}
        <section className="mb-40">
          <SectionHeader
            title="👥 Governing Batch"
            color="text-purple-400"
            desc="The core team of student leaders who manage and coordinate CodeClub activities throughout the year."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((member) => (
              <MemberCard
                key={member}
                color="purple"
                role="Position Title"
                year="To be filled"
                details="Details to be added"
              />
            ))}
          </div>
        </section>

        {/* Members Section */}
        <section className="mb-40">
          <SectionHeader
            title="Members"
            color="text-green-400"
            desc="Our dedicated team members who contribute to the vibrant CodeClub community at IIT Kharagpur."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((member) => (
              <MemberCard
                key={member}
                color="green"
                role="Year & Branch"
                compact
                details="Info to be added"
              />
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-40">
          <SectionHeader
            title="Get In Touch"
            color="text-blue-400"
            desc="Have questions or want to join our community? Reach out to us through any of these channels."
          />

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/[0.02] rounded-[2rem] p-8 md:p-10 border border-white/5 hover:border-blue-500/30 transition-all hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.2)]"
            >
              <h3 className="text-2xl font-bold text-blue-300 mb-8 flex items-center gap-3">
                <Send className="w-6 h-6" /> Send us a Message
              </h3>
              <form className="space-y-6">
                <InputField
                  label="Name"
                  placeholder="Your full name"
                  type="text"
                />
                <InputField
                  label="Email"
                  placeholder="your.email@example.com"
                  type="email"
                />
                <div>
                  <label className="block text-gray-400 mb-3 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-gray-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all resize-none placeholder:text-gray-600"
                    placeholder="Tell us about your interest in CodeClub..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Details & Office Hours */}
            <div className="space-y-8">
              <motion.div
                whileHover={{ x: 5 }}
                className="bg-white/[0.02] rounded-[2rem] p-8 border border-white/5 hover:border-purple-500/30 transition-all"
              >
                <h3 className="text-2xl font-bold text-purple-300 mb-8">
                  Contact Details
                </h3>
                <div className="space-y-6">
                  <ContactItem
                    icon={<Mail className="text-blue-400" />}
                    label="Email"
                    value="To be filled"
                  />
                  <ContactItem
                    icon={<Phone className="text-green-400" />}
                    label="Phone"
                    value="To be filled"
                  />
                  <ContactItem
                    icon={<MapPin className="text-purple-400" />}
                    label="Location"
                    value="Department of CSE, IIT Kharagpur"
                  />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="bg-white/[0.02] rounded-[2rem] p-8 border border-white/5 hover:border-green-500/30 transition-all"
              >
                <h3 className="text-2xl font-bold text-green-300 mb-8 flex items-center gap-3">
                  <Clock className="w-6 h-6" /> Office Hours
                </h3>
                <div className="space-y-4">
                  <HourItem day="Monday - Friday" time="To be filled" />
                  <HourItem day="Saturday" time="To be filled" />
                  <HourItem day="Sunday" time="Closed" isClosed />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Media & Links */}
        <section className="mb-20">
          <SectionHeader
            title="🌐 Connect With Us"
            color="text-yellow-400"
            desc="Follow us on social media and stay updated with our latest activities, events, and achievements."
          />

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-transparent rounded-[2.5rem] p-10 md:p-16 border border-white/10">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <SocialCard icon={<Globe />} label="Website" color="blue" />
                <SocialCard icon={<Facebook />} label="Facebook" color="blue" />
                <SocialCard
                  icon={<Instagram />}
                  label="Instagram"
                  color="purple"
                />
                <SocialCard
                  icon={<MessageSquare />}
                  label="WhatsApp"
                  color="green"
                />
              </div>
              <div className="mt-16 text-center max-w-3xl mx-auto">
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed italic">
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

// --- HELPER COMPONENTS ---

const SectionHeader = ({ title, color, desc }: any) => (
  <div className="text-center mb-20">
    <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${color}`}>{title}</h2>
    {desc && (
      <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
        {desc}
      </p>
    )}
  </div>
);

const Tag = ({ text, color }: any) => (
  <span
    className={`${color} text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg shadow-black/20`}
  >
    {text}
  </span>
);

const MemberCard = ({ color, role, year, details, compact }: any) => {
  const colorMap: any = {
    purple:
      "hover:border-purple-500/40 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)] bg-purple-600",
    green:
      "hover:border-green-500/40 hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.3)] bg-green-600",
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`bg-white/[0.02] rounded-[2rem] ${
        compact ? "p-6" : "p-8"
      } border border-white/5 transition-all duration-300 ${
        colorMap[color].split(" bg")[0]
      }`}
    >
      <div className="text-center mb-6">
        <div
          className={`w-20 h-20 ${
            colorMap[color].split("hover:")[1].split(" ")[1]
          } rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner`}
        >
          <User className="w-10 h-10 text-white/80" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Member Name</h3>
        <p className="text-gray-500 text-sm font-medium">{role}</p>
      </div>
      <div className="space-y-4 pt-4 border-t border-white/5 text-center">
        {year && <p className="text-gray-400 text-sm italic">Year: {year}</p>}
        <div className="bg-gray-900/50 rounded-2xl p-4 border border-white/5">
          <p className="text-gray-500 text-xs tracking-wide uppercase">
            {details}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const InputField = ({ label, placeholder, type }: any) => (
  <div>
    <label className="block text-gray-400 mb-3 text-sm font-medium">
      {label}
    </label>
    <input
      type={type}
      className="w-full bg-gray-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-600"
      placeholder={`${placeholder}`}
    />
  </div>
);

const ContactItem = ({ icon, label, value }: any) => (
  <div className="flex items-center gap-5 group">
    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-white/10 border border-white/5">
      {icon}
    </div>
    <div>
      <p className="text-sm font-mono text-gray-500 uppercase tracking-wider">
        {label}
      </p>
      <p className="text-gray-300 font-medium">{value}</p>
    </div>
  </div>
);

const HourItem = ({ day, time, isClosed }: any) => (
  <div className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
    <span className="text-gray-300 font-medium">{day}</span>
    <span
      className={
        isClosed
          ? "text-red-400 text-sm font-bold uppercase"
          : "text-gray-500 font-mono text-sm"
      }
    >
      {time}
    </span>
  </div>
);

const SocialCard = ({ icon, label, color }: any) => {
  const glow =
    color === "blue"
      ? "hover:border-blue-500/40 hover:shadow-blue-500/20"
      : color === "purple"
      ? "hover:border-purple-500/40 hover:shadow-purple-500/20"
      : "hover:border-green-500/40 hover:shadow-green-500/20";
  const bg =
    color === "blue"
      ? "bg-blue-600"
      : color === "purple"
      ? "bg-purple-600"
      : "bg-green-600";

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`bg-gray-900 border border-white/10 rounded-2xl p-6 text-center transition-all duration-300 shadow-xl ${glow}`}
    >
      <div
        className={`w-14 h-14 ${bg} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
      >
        {icon}
      </div>
      <h3 className="font-bold text-gray-200 text-sm">{label}</h3>
      <p className="text-[10px] text-gray-600 mt-2 font-mono uppercase">
        To be filled
      </p>
    </motion.div>
  );
};

export default Contact;
