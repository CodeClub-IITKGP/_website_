import { useNavigate, Routes, Route, useLocation } from "react-router-dom";
import { Home as HomeIcon, Calendar, PenTool, Mail } from "lucide-react";
import Home from "./components/Home.tsx";
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
          isHomePage
            ? "h-full overflow-hidden"
            : "pb-16 md:pb-20 overflow-y-auto"
        }`}
      >
        <Routes>
          <Route path="/events" element={<Events />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      {/* Bottom Navigation Bar - Dark Pill Design */}
      <nav className="fixed bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-gray-900/90 backdrop-blur-md rounded-full px-3 md:px-6 py-2 md:py-3 shadow-2xl border border-gray-700/50">
          <div className="flex items-center space-x-4 md:space-x-8">
            <button
              className="flex flex-col items-center space-y-1 px-2 md:px-3 py-2 rounded-full transition-all duration-200 hover:bg-white/10 active:bg-white/20"
              onClick={() => navigate("/")}
            >
              <div className="w-4 md:w-5 h-4 md:h-5 flex items-center justify-center">
                <HomeIcon className="w-3 md:w-4 h-3 md:h-4 text-white" />
              </div>
              <span className="text-xs font-medium text-white/80 uppercase tracking-wide block">
                HOME
              </span>
            </button>

            <button
              className="flex flex-col items-center space-y-1 px-2 md:px-3 py-2 rounded-full transition-all duration-200 hover:bg-white/10 active:bg-white/20"
              onClick={() => navigate("/events")}
            >
              <div className="w-4 md:w-5 h-4 md:h-5 flex items-center justify-center">
                <Calendar className="w-3 md:w-4 h-3 md:h-4 text-white" />
              </div>
              <span className="text-xs font-medium text-white/80 uppercase tracking-wide block">
                EVENTS
              </span>
            </button>

            <button
              className="flex flex-col items-center space-y-1 px-2 md:px-3 py-2 rounded-full transition-all duration-200 hover:bg-white/10 active:bg-white/20"
              onClick={() => navigate("/blogs")}
            >
              <div className="w-4 md:w-5 h-4 md:h-5 flex items-center justify-center">
                <PenTool className="w-3 md:w-4 h-3 md:h-4 text-white" />
              </div>
              <span className="text-xs font-medium text-white/80 uppercase tracking-wide block">
                BLOGS
              </span>
            </button>

            <button
              className="flex flex-col items-center space-y-1 px-2 md:px-3 py-2 rounded-full transition-all duration-200 hover:bg-white/10 active:bg-white/20"
              onClick={() => navigate("/contact")}
            >
              <div className="w-4 md:w-5 h-4 md:h-5 flex items-center justify-center">
                <Mail className="w-3 md:w-4 h-3 md:h-4 text-white" />
              </div>
              <span className="text-xs font-medium text-white/80 uppercase tracking-wide block">
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
