import { Outlet, Link, useLocation } from "react-router";
import { Heart, Calendar, Menu, X } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Trang chủ", path: "/" },
    { label: "Dịch vụ", path: "/services" },
    { label: "Đơn hàng của tôi", path: "/my-bookings" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-pink-400 to-pink-600 p-2 rounded-xl">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">
                XINH.DAY
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-colors ${
                    location.pathname === item.path
                      ? "text-pink-600 font-medium"
                      : "text-gray-700 hover:text-pink-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/my-bookings"
                className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all"
              >
                <Calendar className="w-4 h-4" />
                Đặt lịch
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-pink-50"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-pink-100">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`transition-colors ${
                      location.pathname === item.path
                        ? "text-pink-600 font-medium"
                        : "text-gray-700 hover:text-pink-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-pink-50 to-pink-100 border-t border-pink-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-br from-pink-400 to-pink-600 p-2 rounded-xl">
                  <Heart className="w-5 h-5 text-white fill-white" />
                </div>
                <span className="text-xl font-semibold bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">
                  XINH.DAY
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Nền tảng kết nối dịch vụ làm đẹp trọn gói. Tìm kiếm, so sánh và đặt dịch vụ một cách nhanh chóng, minh bạch.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Dịch vụ</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/services/dress" className="text-gray-600 hover:text-pink-600 transition-colors">
                    Thuê váy
                  </Link>
                </li>
                <li>
                  <Link to="/services/makeup" className="text-gray-600 hover:text-pink-600 transition-colors">
                    Makeup & Tóc
                  </Link>
                </li>
                <li>
                  <Link to="/services/photographer" className="text-gray-600 hover:text-pink-600 transition-colors">
                    Photographer
                  </Link>
                </li>
                <li>
                  <Link to="/services/accessories" className="text-gray-600 hover:text-pink-600 transition-colors">
                    Phụ kiện
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Liên hệ</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Email: contact@xinh.day</li>
                <li>Phone: 0123 456 789</li>
                <li>Giờ làm việc: 8:00 - 22:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-pink-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2026 XINH.DAY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
