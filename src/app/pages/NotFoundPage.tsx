import { Link } from "react-router";
import { Home, Search } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="bg-gradient-to-br from-pink-100 to-pink-200 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-16 h-16 text-pink-600" />
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Không tìm thấy trang
          </h2>
          <p className="text-gray-600 mb-8">
            Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg"
          >
            <Home className="w-5 h-5" />
            Về trang chủ
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-full border-2 border-pink-200 hover:border-pink-300 hover:bg-pink-50 transition-all"
          >
            <Search className="w-5 h-5" />
            Tìm dịch vụ
          </Link>
        </div>
      </div>
    </div>
  );
}
