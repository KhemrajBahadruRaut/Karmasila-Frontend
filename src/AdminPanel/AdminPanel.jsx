import { useState } from "react";

// this is parts section
import AddPartForm from "./cms/parts/AddPartForm";
import Details from "./cms/parts/Details";

// this is blog section
import {
  FaChevronDown,
  FaChevronUp,
  FaCogs,
  FaBoxes,
  FaTachometerAlt,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import AdminBlogUpload from "./cms/BlogControls/AdminBlogUpload";
import { LiaBlogSolid } from "react-icons/lia";
import Dashboard from "./Dashbard";
import { LuContact, LuFileText, LuMessageCircle } from "react-icons/lu";
import NewsletterList from "./newsletter/NewsletterList";
import ContactMessages from "./contacts/ContactMessages";
import { BsNewspaper } from "react-icons/bs";
import CrusherCatalogAdmin from "./cms/crusherCatalog/CrusherCatalogAdmin";
import AdminConsultRequests from "./consult/AdminConsultRequests";
import AdminQuoteRequests from "./quote/AdminQuoteRequests";
import { GrCatalog } from "react-icons/gr";

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [expandedSections, setExpandedSections] = useState({
    cms: false,
    parts: false,
    blogs: false,
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    // Close sidebar on mobile when a section is selected
    if (window.innerWidth < 1024) {
      closeSidebar();
    }
  };

  return (
    <div className="flex h-screen font-sans bg-gray-50">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-72 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-6 overflow-y-auto shadow-xl flex flex-col
        transform transition-transform duration-300 ease-in-out lg:transform-none
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Close button for mobile */}
        <button
          onClick={closeSidebar}
          className="lg:hidden absolute top-4 right-4 p-2 rounded-md hover:bg-gray-700 transition-colors"
        >
          <FaTimes className="text-xl" />
        </button>

        {/* Logo/Branding */}
        <div className="mb-10 px-2">
          <h1 className="text-2xl font-bold tracking-tight flex items-center">
            <RiDashboardFill className="text-yellow-500 mr-3 text-3xl" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-500">
              Admin
            </span>
          </h1>
          <p className="text-xs text-gray-300 mt-1">Management Console</p>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 space-y-2">
          {/* Dashboard */}
          <button
            onClick={() => handleSectionClick("dashboard")}
            className={`flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200
              ${
                activeSection === "dashboard"
                  ? "bg-gray-700 text-yellow-400 font-medium shadow-md"
                  : "hover:bg-gray-700 hover:text-yellow-400"
              }
            `}
          >
            <FaTachometerAlt className="mr-3 text-lg" />
            <span>Dashboard</span>
          </button>

          {/* newsletter */}
          <button
            onClick={() => handleSectionClick("newsletter")}
            className={`flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200
              ${
                activeSection === "newsletter"
                  ? "bg-gray-700 text-yellow-400 font-medium shadow-md"
                  : "hover:bg-gray-700 hover:text-yellow-400"
              }
            `}
          >
            <BsNewspaper className="mr-3 text-lg" />
            <span>Newsletter Data</span>
          </button>
          {/* contacts */}
          <button
            onClick={() => handleSectionClick("contacts")}
            className={`flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200
              ${
                activeSection === "contacts"
                  ? "bg-gray-700 text-yellow-400 font-medium shadow-md"
                  : "hover:bg-gray-700 hover:text-yellow-400"
              }
            `}
          >
            <LuContact className="mr-3 text-lg" />
            <span>Contacts Data</span>
          </button>

          {/* consult */}
          <button
            onClick={() => handleSectionClick("consult")}
            className={`flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200
              ${
                activeSection === "consult"
                  ? "bg-gray-700 text-yellow-400 font-medium shadow-md"
                  : "hover:bg-gray-700 hover:text-yellow-400"
              }
            `}
          >
            <LuMessageCircle className="mr-3 text-lg" />
            <span>Consult Data</span>
          </button>

          {/* quote */}
          <button
            onClick={() => handleSectionClick("quote")}
            className={`flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200
              ${
                activeSection === "quote"
                  ? "bg-gray-700 text-yellow-400 font-medium shadow-md"
                  : "hover:bg-gray-700 hover:text-yellow-400"
              }
            `}
          >
            <LuFileText className="mr-3 text-lg" />
            <span>Quote Data</span>
          </button>

          {/* CMS Section */}
          <div className="space-y-1">
            <button
              onClick={() => toggleSection("cms")}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all duration-200
                ${
                  expandedSections.cms || activeSection.startsWith("cms")
                    ? "bg-gray-700 text-yellow-400 font-medium shadow-md"
                  : "hover:bg-gray-700 hover:text-yellow-400"
                }
              `}
            >
              <div className="flex items-center ">
                <FaCogs className="mr-3 text-lg" />
                <span>CMS</span>
              </div>
              <span>
                {expandedSections.cms ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>

            {expandedSections.cms && (
              <div className="pl-8 space-y-1 mt-1 mb-2">
                {/* Parts Subsection */}
                <div className="space-y-1">
                  <button
                    onClick={() => toggleSection("parts")}
                    className={`flex items-center justify-between w-full px-4 py-2 rounded-lg transition-all duration-200
                      ${
                        expandedSections.parts ||
                        activeSection.startsWith("parts")
                          ? "bg-gray-700 text-yellow-300 font-medium shadow-md"
                  : "hover:bg-gray-700 hover:text-yellow-200"
                      }
                    `}
                  >
                    <div className="flex items-center">
                      <FaBoxes className="mr-3" />
                      <span className="text-[13px]">Parts Management</span>
                    </div>
                    <span>
                      {expandedSections.parts ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>
                  </button>

                  {expandedSections.parts && (
                    <div className="pl-8 space-y-1 mt-1">
                      {/* Add New Part button */}
                      <button
                        onClick={() => handleSectionClick("parts/add")}
                        className={`block w-full text-left px-4 py-1 rounded-lg transition-all duration-200
        ${
          activeSection === "parts/add"
            ? "bg-gray-700 text-yellow-200 font-medium shadow-md"
                  : "hover:bg-gray-700 hover:text-yellow-200"
        }
      `}
                      >
                        <span className="text-[11px]">Add New Part</span>
                      </button>

                      {/* ➕ Add Product Details button */}
                      <button
                        onClick={() => handleSectionClick("parts/details")}
                        className={`block w-full text-left px-4 py-1 rounded-lg transition-all duration-200
        ${
          activeSection === "parts/details"
           ? "bg-gray-700 text-yellow-200 font-medium shadow-md"
                  : "hover:bg-gray-700 hover:text-yellow-200"
        }
      `}
                      >
                        <span className="text-[11px]">Add Product Details</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* blogs */}
                <div className="space-y-1">
                  <button
                    onClick={() => toggleSection("blogs")}
                    className={`flex items-center justify-between w-full px-4 py-2 rounded-lg transition-all duration-200
                      ${
                        expandedSections.parts ||
                        activeSection.startsWith("blogs")
                          ? "bg-gray-700 text-yellow-300 font-medium shadow-md"
                  : "hover:bg-gray-700 hover:text-yellow-200"
                      }
                    `}
                  >
                    <div className="flex items-center">
                      <LiaBlogSolid className="mr-3" />
                      <span className="text-[13px]">Blogs</span>
                    </div>
                    <span>
                      {expandedSections.blogs ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>
                  </button>

                  {expandedSections.blogs && (
                    <div className="pl-8 space-y-1 mt-1">
                      {/* Add New blog Part button */}
                      <button
                        onClick={() => handleSectionClick("blogs/add")}
                        className={`block w-full text-left px-4 py-1 rounded-lg transition-all duration-200
        ${
          activeSection === "blogs/add"
            ? "bg-gray-700 text-yellow-300 font-medium shadow-md"
                  : "hover:bg-gray-700 hover:text-yellow-200"
        }
      `}
                      >
                        <span className="text-[11px]">Add New Blogs</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Product Catalog */}
                <div className="space-y-1">
                  <button
                    onClick={() => toggleSection("catalogs")}
                    className={`flex items-center justify-between w-full px-4 py-2 rounded-lg transition-all duration-200
                      ${
                        expandedSections.parts ||
                        activeSection.startsWith("catalogs")
                          ? "bg-gray-700 text-yellow-300 font-medium shadow-md"
                  : "hover:bg-gray-700 hover:text-yellow-200"
                      }
                    `}
                  >
                    <div className="flex items-center">
                      <GrCatalog className="mr-3" />
                      <span className="text-[13px]">Catalogs</span>
                    </div>
                    <span>
                      {expandedSections.catalogs ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>
                  </button>

                  {expandedSections.catalogs && (
                    <div className="pl-8 space-y-1 mt-1">
                      {/* Add New Part button */}
                      <button
                        onClick={() => handleSectionClick("catalogs/add")}
                        className={`block w-full text-left px-4 py-1 rounded-lg transition-all duration-200
        ${
          activeSection === "catalogs/add"
           ? "bg-gray-700 text-yellow-300 font-medium shadow-md"
                  : "hover:bg-gray-700 hover:text-yellow-200"
        }
      `}
                      >
                        <span className="text-[11px]">Add catalogs</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Bottom Settings/Logout */}
        <div className="mt-auto pt-4 border-t border-gray-700 space-y-2">
          <button
            onClick={() => {
              localStorage.removeItem("isAdminLoggedIn");
              window.location.href = "/adminlogin";
            }}
            className="flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200 hover:bg-red-900 hover:text-red-200"
          >
            <FaSignOutAlt className="mr-3 text-lg" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-auto lg:ml-0">
        {/* Top Navigation */}
        <div className="bg-white shadow-sm">
          <div className="flex justify-between items-center px-4 lg:px-8 py-4">
            {/* Hamburger Menu Button */}
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors mr-4"
              >
                <FaBars className="text-xl text-gray-600" />
              </button>
              <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 capitalize">
                {activeSection.replace("/", " ")}
              </h2>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-gray-700 font-medium text-sm lg:text-base">
                  Welcome! Admin
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-4 lg:p-8">
          {activeSection === "parts/add" ? (
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 lg:p-6">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Add New Part
                </h3>
                <p className="text-gray-500">
                  Fill out the form to add a new part to inventory
                </p>
              </div>
              <AddPartForm />
            </div>
          ) : activeSection === "parts/details" ? (
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 lg:p-6">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Add Product Details
                </h3>
                <p className="text-gray-500">
                  Upload pictures and descriptions for the selected part.
                </p>
              </div>
              <Details />
            </div>
          ) : activeSection === "blogs/add" ? (
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 lg:p-6">
              <AdminBlogUpload />
            </div>
          ) : activeSection === "dashboard" ? (
            <div className="space-y-6">
              <Dashboard />
            </div>
          ) : activeSection === "consult" ? (
            <div className="space-y-6">
              <AdminConsultRequests />
            </div>
          ) : activeSection === "newsletter" ? (
            <div className="space-y-6">
              <NewsletterList />
            </div>
          ) : activeSection === "contacts" ? (
            <div className="space-y-6">
              <ContactMessages />
            </div>
          ) : activeSection === "quote" ? (
            <div className="space-y-6">
              <AdminQuoteRequests />
            </div>
          ) :  activeSection === "catalogs/add" ? (
            <div className="space-y-6">
              <CrusherCatalogAdmin />
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 lg:p-6">
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {activeSection === "dashboard"
                    ? "Welcome to Admin Dashboard"
                    : `${activeSection.replace("/", " ")} Management`}
                </h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  {activeSection === "dashboard"
                    ? "Select a section from the sidebar to manage your content"
                    : "This section is under development. Coming soon!"}
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;