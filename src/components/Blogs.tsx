import { motion } from "framer-motion";
import { User, Briefcase, Calendar, Globe, ArrowRight } from "lucide-react";
import allStories from "../assets/internStories.json";

const Blogs = () => {
  // Grouping logic preserved
  const storiesByYear = allStories.reduce((acc, story) => {
    if (!acc[story.year]) {
      acc[story.year] = [];
    }
    acc[story.year].push(story);
    return acc;
  }, {} as { [key: string]: typeof allStories });

  const sortedYears = Object.keys(storiesByYear).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );

  return (
    <div className="min-h-screen bg-[#0a0c10] text-gray-100 selection:bg-blue-500/30 font-sans">
      {/* Background Aurora Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24 md:mb-32"
        >
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-mono mb-6">
            <BookOpen className="w-4 h-4" /> Student Chronicles
          </div> */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Interns for the Summer of '25
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            CDC internship experiences from IIT Kharagpur students, sharing
            insights and journeys to elite tech companies.
          </p>
        </motion.header>

        {/* Stories grouped by year */}
        <div className="space-y-24 md:space-y-32">
          {sortedYears.map((year) => (
            <section key={year} className="relative">
              {/* Year Floating Label */}
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100 flex items-center gap-3">
                  <Calendar className="text-blue-500 w-8 h-8" /> Interns of{" "}
                  {year}
                </h2>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
              </div>

              {/* Stories Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {storiesByYear[year].map((story) => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- HELPER COMPONENT: STORY CARD ---

const StoryCard = ({ story }: { story: any }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group bg-white/[0.02] rounded-[2rem] p-8 border border-white/5 transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)] flex flex-col md:flex-row gap-8 items-center md:items-start"
    >
      {/* Profile Image with Glow */}
      <div className="relative shrink-0">
        <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="flex-shrink-0 flex items-center justify-center">
          <img
            src={story.authorImage}
            alt={story.author}
            // className="relative w-24 h-24 md:w-28 md:h-28 rounded-[2rem] object-cover border-2 border-white/10 group-hover:border-blue-500/50 transition-all shadow-2xl"
            className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover border-2 border-gray-500"
            onError={(e) => {
              e.currentTarget.src = "/default-avatar.svg";
            }}
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 space-y-4 text-center md:text-left">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
            {story.title}
          </h3>
          {/* <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-500 font-medium"> */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-2">
            <span className="flex items-center gap-1.5 text-gray-300">
              <User className="w-4 h-4 text-blue-500" /> {story.author}
            </span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <Briefcase className="w-4 h-4 text-purple-500" /> {story.company}
            </span>
            {story.domain && (
              <span className="text-xs px-2 py-0.5 rounded bg-gray-700 text-gray-300">
                {story.domain}
              </span>
            )}
          </div>
        </div>

        <p className="text-gray-150 text-sm md:text-base leading-relaxed mb-3">
          {" "}
          "{story.description}"
        </p>

        {/* <div className="flex items-center justify-between pt-4 border-t border-white/5"> */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pt-1">
          <span className="flex items-center gap-1.5 text-xs font-mono text-gray-600">
            <Globe className="w-3 h-3" /> medium.com
          </span>
          <a
            href={story.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold text-sm transition-all"
          >
            Read Full Story
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Blogs;
