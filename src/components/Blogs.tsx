const Blogs = () => {
  // Real CDC internship stories sorted by graduation year (decreasing)
  const allStories = [
    {
      id: 1,
      title: "CDC Internship Experience 2022",
      author: "Aaditri Vaibhav",
      company: "Amazon",
      year: "2023",
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
        "Hi Everyone, I am Jothi Prakash, a Fourth Year Dual Degree student in the Department of Electronics And Electrical Communication Engineering, and will be specializing in Vision And Intelligent Systems in my final year.",
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
        "I am a fourth year undergraduate student (as of August 2022) from the Computer Science and Engineering department and I am interested in Machine Learning, specifically natural language programming.",
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
        "I am Snehal Reddy, a 4th year dual degree student studying computer science at IIT Kharagpur. Since my first year, I have laid my hands on a variety of things — worked on projects in vision under professors.",
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
        "Experience of cracking Microsoft through CDC, sharing insights on technical preparation and interview strategy.",
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
        "Comprehensive account of the CDC journey leading to Goldman Sachs, covering both technical and soft skills preparation.",
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
        "Personal story of navigating the CDC process and landing at Goldman Sachs, with focus on persistence and preparation.",
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
        "Detailed experience of interning at Facebook London office, including the interview process, work culture, and learnings from the internship.",
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
        "Reflection on the CDC interview process and experience with Adobe, sharing insights and learnings from the journey.",
      authorImage:
        "https://miro.medium.com/v2/resize:fill:176:176/1*8F1wGYUxVKIEsF4E8CPkyg.jpeg",
    },
  ];

  // Group stories by year
  const storiesByYear = allStories.reduce((acc, story) => {
    if (!acc[story.year]) {
      acc[story.year] = [];
    }
    acc[story.year].push(story);
    return acc;
  }, {} as { [key: string]: typeof allStories });

  // Sort years in descending order
  const sortedYears = Object.keys(storiesByYear).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto py-8 md:py-12 px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Interns for the Summer of '25
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            CDC internship experiences from IIT Kharagpur students
          </p>
        </div>

        {/* Stories grouped by year */}
        <div className="space-y-8 md:space-y-12 mb-8 md:mb-12">
          {sortedYears.map((year) => (
            <div key={year} className="space-y-4 md:space-y-6">
              {/* Year Section Header */}
              <h2 className="text-xl md:text-2xl font-semibold text-white border-b border-gray-700 pb-3">
                Interns of {year}
              </h2>

              {/* Stories for this year */}
              <div className="space-y-4 md:space-y-6">
                {storiesByYear[year].map((story) => (
                  <div
                    key={story.id}
                    className="bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all"
                  >
                    <div className="p-4 md:p-6 flex flex-col sm:flex-row gap-4 md:gap-6">
                      {/* Author Photo */}
                      <div className="flex-shrink-0 self-center sm:self-start">
                        <img
                          src={story.authorImage}
                          alt={story.author}
                          className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-gray-600 mx-auto sm:mx-0"
                          onError={(e) => {
                            e.currentTarget.src = "/default-avatar.svg";
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-2 md:space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-lg md:text-xl font-semibold text-white leading-tight mb-2">
                              {story.title}
                            </h3>

                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-400 mb-3">
                              <span className="font-medium text-gray-300">
                                {story.author}
                              </span>
                              <span className="hidden sm:inline">•</span>
                              <span>{story.company}</span>
                            </div>

                            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                              {story.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <span className="text-xs text-gray-500">
                            medium.com
                          </span>
                          <a
                            href={story.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                          >
                            Read More →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
