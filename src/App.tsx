import { useNavigate, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Events from "./components/Events.tsx";
import Blogs from "./components/Blogs.tsx";
import Contact from "./components/Contact.tsx";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="h-screen flex flex-col bg-gray-900 overflow-hidden">
      <main
        className={`flex-1 ${
          isHomePage ? "h-full overflow-hidden" : "pb-20 overflow-y-auto"
        }`}
      >
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      {/* Bottom Navigation Bar - Dark Pill Design */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-gray-900/90 backdrop-blur-md rounded-full px-6 py-3 shadow-2xl border border-gray-700/50">
          <div className="flex items-center space-x-8">
            <button
              className="flex flex-col items-center space-y-1 px-3 py-2 rounded-full transition-all duration-200 hover:bg-white/10 active:bg-white/20"
              onClick={() => navigate("/")}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-white/80 uppercase tracking-wide">
                HOME
              </span>
            </button>

            <button
              className="flex flex-col items-center space-y-1 px-3 py-2 rounded-full transition-all duration-200 hover:bg-white/10 active:bg-white/20"
              onClick={() => navigate("/about")}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-white/80 uppercase tracking-wide">
                ABOUT
              </span>
            </button>

            <button
              className="flex flex-col items-center space-y-1 px-3 py-2 rounded-full transition-all duration-200 hover:bg-white/10 active:bg-white/20"
              onClick={() => navigate("/events")}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-white/80 uppercase tracking-wide">
                EVENTS
              </span>
            </button>

            <button
              className="flex flex-col items-center space-y-1 px-3 py-2 rounded-full transition-all duration-200 hover:bg-white/10 active:bg-white/20"
              onClick={() => navigate("/blogs")}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-white/80 uppercase tracking-wide">
                BLOGS
              </span>
            </button>

            <button
              className="flex flex-col items-center space-y-1 px-3 py-2 rounded-full transition-all duration-200 hover:bg-white/10 active:bg-white/20"
              onClick={() => navigate("/contact")}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <span className="text-xs font-medium text-white/80 uppercase tracking-wide">
                CONTACT
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
