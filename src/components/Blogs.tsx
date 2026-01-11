import { motion } from "framer-motion";
import {
  BookOpen,
  ExternalLink,
  User,
  Briefcase,
  Calendar,
  ChevronRight,
  Globe,
  ArrowRight,
} from "lucide-react";

const Blogs = () => {
  // Real CDC internship stories preserved from original source
  const allStories = [
    {
      id: 1,
      title: "CDC Internship Experience 2022",
      author: "Aaditri Vaibhav",
      company: "Amazon",
      year: "2023",
      domain: "xyz",
      url: "https://medium.com/@aaditrivaibhav/cdc-internship-experience-2022-2ad95c88fbe6",
      description:
        "I am Aaditri Vaibhav, a 3rd-year undergraduate studying metallurgical and materials engineering at IIT Kharagpur. I will be interning at Amazon in the summer of 2023.",
      authorImage:
        "https://miro.medium.com/v2/da:true/resize:fill:200:200/0*VAe3T69tVmDRyXkz",
    },
    {
      id: 2,
      title: "Coding My Way to Cloud Nine: A Rubrik Adventure",
      author: "Kushaz Sehgal",
      company: "Rubrik",
      year: "2024",
      domain: "Software",
      url: "https://medium.com/@kushaz.sehgal/coding-my-way-to-cloud-nine-a-rubrik-adventure-f75318f6626a",
      description:
        "Hi guys! I am Kushaz Sehgal, a fourth-year dual degree student pursuing Computer Science and Engineering at IIT Kharagpur. I just finished my CDC Internship process, and I will be interning at Rubrik, Palo Alto in the summer of 2024.",
      authorImage:
        "https://miro.medium.com/v2/resize:fill:200:200/1*dRSXmZp-XHIHgCIULCLAWw.jpeg",
    },
    {
      id: 3,
      title: "The Low CP CDC Story",
      author: "Yatindra Indoria",
      company: "APT Portfolio",
      year: "2024",
      url: "https://medium.com/@yatindraindoria75/the-low-cp-cdc-story-64da9aae3d85",
      description:
        "Yatindra here, I am a 4th year from the Department of Computer Science and Engineering, enrolled in the Dual Degree course. I secured a Software Engineering Internship offer from APT Portfolio.",
      authorImage:
        "https://miro.medium.com/v2/resize:fill:200:200/1*n9s6oe4ZGQ_bMVQ0H4En6w.jpeg",
    },
    {
      id: 4,
      title: "CDC Internship Experience",
      author: "Swarnima Saxena",
      company: "Goldman Sachs",
      year: "2023",
      url: "https://medium.com/@swarnimasaxena819/cdc-internship-experience-806192fa34fc",
      description:
        "Experience of securing an internship at Goldman Sachs through CDC, including technical preparation and interview rounds.",
      authorImage: "/default-avatar.svg",
    },
    {
      id: 5,
      title: "CDC Internship — DE Shaw",
      author: "Jothi Prakash",
      company: "D.E. Shaw",
      year: "2023",
      url: "https://medium.com/@suryan535/cdc-internship-de-shaw-9597bae7eb56",
      description:
        "Hi Everyone, I am Jothi Prakash, a Fourth Year Dual Degree student in the Department of Electronics And Electrical Communication Engineering.",
      authorImage:
        "https://miro.medium.com/v2/da:true/resize:fill:200:200/0*wW6Rk1lhiY6H9p9-",
    },
    {
      id: 6,
      title: "CDC — A Step Along the Journey",
      author: "Monal Prasad",
      company: "Microsoft",
      year: "2023",
      url: "https://medium.com/@mentaltraffic/cdc-a-step-along-the-journey-36ce4275cc71",
      description:
        "I am a fourth year undergraduate student (as of August 2022) from the Computer Science and Engineering department and I am interested in Machine Learning.",
      authorImage: "https://avatars.githubusercontent.com/u/58178738?v=4",
    },
    {
      id: 7,
      title: "An Overwhelming Episode",
      author: "Utsav Mehta",
      company: "Salesforce",
      year: "2023",
      url: "https://medium.com/@utsav.mehta/an-overwhelming-episode-8ce0b8736987",
      description:
        "Candid account of the emotional rollercoaster during CDC and eventual success with Salesforce internship.",
      authorImage:
        "https://miro.medium.com/v2/resize:fill:200:200/1*g1kO9wzvC_3oR-XlDyJYrg.jpeg",
    },
    {
      id: 8,
      title: "CDC Chronicles",
      author: "Aryan Singh",
      company: "Glean",
      year: "2023",
      url: "https://medium.com/@ary1733/cdc-chronicles-65231255bb12",
      description:
        "Experience of securing internship at Glean, a rising startup in the enterprise search space.",
      authorImage:
        "https://miro.medium.com/v2/da:true/resize:fill:200:200/0*71Fzz_ce-eWFlmCF",
    },
    {
      id: 9,
      title: "And Finally I Could Chill My Way Through College Now",
      author: "Ashish Rekhani",
      company: "Nutanix",
      year: "2023",
      url: "https://medium.com/@arekhani5/and-finally-i-could-chill-my-way-through-college-now-5cfc95bbd6f3",
      description:
        "A lighthearted take on securing Nutanix internship and the relief that follows successful CDC completion.",
      authorImage: "/default-avatar.svg",
    },
    {
      id: 10,
      title: "CDC Chronicles",
      author: "Snehal Reddy Koukuntla",
      company: "Microsoft",
      year: "2022",
      url: "https://snehalreddykoukuntla.medium.com/cdc-chronicles-16a16990c849",
      description:
        "I am Snehal Reddy, a 4th year dual degree student studying computer science at IIT Kharagpur.",
      authorImage:
        "https://miro.medium.com/v2/resize:fill:200:200/1*JqgECbvwdm7IJF7yugp0dg.jpeg",
    },
    {
      id: 11,
      title: "D-Day: The Internship Chronicles",
      author: "Vinit Raj",
      company: "D.E. Shaw",
      year: "2021",
      url: "https://medium.com/@vinitraj412/d-day-the-internship-chronicles-c80d3be64a23",
      description:
        "Detailed account of the D.E. Shaw interview process and the journey leading up to the final selection.",
      authorImage:
        "https://miro.medium.com/v2/resize:fill:200:200/1*HZlY-hugE8YifvMT24QCBQ.jpeg",
    },
    {
      id: 12,
      title: "CDC Chapter",
      author: "Sahil Jindal",
      company: "Microsoft",
      year: "2021",
      url: "https://sahil132jindal.medium.com/cdc-chapter-a934c9452782",
      description:
        "Experience of cracking Microsoft through CDC, sharing insights on technical preparation.",
      authorImage:
        "https://miro.medium.com/v2/resize:fill:200:200/1*t2aT3iWNGu4h2RaTA2WZMQ.jpeg",
    },
    {
      id: 13,
      title: "CDC Chronicles: The Internship Saga",
      author: "Avi Sankritya",
      company: "Goldman Sachs",
      year: "2020",
      url: "https://avisankritya.medium.com/cdc-chronicles-the-internship-saga-f2ec7b6f80d2",
      description:
        "Comprehensive account of the CDC journey leading to Goldman Sachs.",
      authorImage:
        "https://miro.medium.com/v2/da:true/resize:fill:200:200/0*9AjyqZ__zbbE1LKA",
    },
    {
      id: 14,
      title: "The CDC Chapter",
      author: "Somay Chopra",
      company: "Goldman Sachs",
      year: "2020",
      url: "https://somaychopra.medium.com/the-cdc-chapter-de1cfece3a3d",
      description:
        "Personal story of navigating the CDC process and landing at Goldman Sachs.",
      authorImage:
        "https://miro.medium.com/v2/resize:fill:200:200/1*5N_eq5EEtV0N4zSRxraORQ.jpeg",
    },
    {
      id: 15,
      title: "My Internship Experience with Facebook London",
      author: "Sree Theerdha",
      company: "Meta",
      year: "2019",
      url: "https://medium.com/@sreetheerdha9/my-internship-experience-with-facebook-london-fee27467ca08",
      description:
        "Detailed experience of interning at Facebook London office, including the interview process and culture.",
      authorImage:
        "https://miro.medium.com/v2/resize:fill:176:176/1*rowITPYx-IvzuKdEHAKQIw@2x.jpeg",
    },
    {
      id: 16,
      title: "A Post CDC Interview",
      author: "Siba Panigrahi",
      company: "Adobe",
      year: "2019",
      url: "https://sibasmarak.medium.com/a-post-cdc-interview-665c83f01e78",
      description:
        "Reflection on the CDC interview process and experience with Adobe.",
      authorImage:
        "https://miro.medium.com/v2/resize:fill:176:176/1*8F1wGYUxVKIEsF4E8CPkyg.jpeg",
    },
  ];

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-mono mb-6">
            <BookOpen className="w-4 h-4" /> Student Chronicles
          </div>
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
        <img
          src={story.authorImage}
          alt={story.author}
          className="relative w-24 h-24 md:w-28 md:h-28 rounded-[2rem] object-cover border-2 border-white/10 group-hover:border-blue-500/50 transition-all shadow-2xl"
          onError={(e) => {
            e.currentTarget.src = "/default-avatar.svg";
          }}
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 space-y-4 text-center md:text-left">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
            {story.title}
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-500 font-medium">
            <span className="flex items-center gap-1.5 text-gray-300">
              <User className="w-4 h-4 text-blue-500" /> {story.author}
            </span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <Briefcase className="w-4 h-4 text-purple-500" /> {story.company}
            </span>
          </div>
        </div>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-3 italic">
          "{story.description}"
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-white/5">
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
