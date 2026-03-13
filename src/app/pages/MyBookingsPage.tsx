import { useState } from "react";
import { Link } from "react-router";
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle,
  XCircle,
  AlertCircle,
  Eye,
  MessageCircle,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

type BookingStatus = "pending" | "confirmed" | "completed" | "cancelled";

interface Booking {
  id: string;
  serviceId: string;
  serviceName: string;
  provider: string;
  image: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  price: string;
  status: BookingStatus;
  bookingDate: string;
  location: string;
}

const mockBookings: Booking[] = [
  {
    id: "BK001",
    serviceId: "graduation",
    serviceName: "Combo Tốt nghiệp",
    provider: "XINH.DAY Package",
    image: "https://images.unsplash.com/photo-1660485345088-c398363c1f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzI3OTQ2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    startDate: "2026-03-15",
    endDate: "2026-03-15",
    startTime: "08:00",
    endTime: "18:00",
    price: "1,500,000",
    status: "confirmed",
    bookingDate: "2026-03-01",
    location: "TP. Hồ Chí Minh",
  },
  {
    id: "BK002",
    serviceId: "1",
    serviceName: "Váy dạ hội màu hồng",
    provider: "Xinh Boutique",
    image: "https://images.unsplash.com/photo-1768767112566-dc12dbe40aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwZXZlbmluZyUyMGdvd24lMjBkcmVzc3xlbnwxfHx8fDE3NzI4OTk5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    startDate: "2026-03-20",
    endDate: "2026-03-22",
    startTime: "10:00",
    endTime: "22:00",
    price: "600,000",
    status: "pending",
    bookingDate: "2026-03-05",
    location: "Quận 1, TP.HCM",
  },
  {
    id: "BK003",
    serviceId: "birthday",
    serviceName: "Combo Sinh nhật",
    provider: "XINH.DAY Package",
    image: "https://images.unsplash.com/photo-1650584997985-e713a869ee77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzcyODg4OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    startDate: "2026-02-10",
    endDate: "2026-02-10",
    startTime: "14:00",
    endTime: "20:00",
    price: "1,200,000",
    status: "completed",
    bookingDate: "2026-01-25",
    location: "TP. Hồ Chí Minh",
  },
];

const statusConfig: Record<BookingStatus, { label: string; color: string; icon: any; bg: string }> = {
  pending: {
    label: "Chờ xác nhận",
    color: "text-yellow-600",
    icon: AlertCircle,
    bg: "bg-yellow-50",
  },
  confirmed: {
    label: "Đã xác nhận",
    color: "text-green-600",
    icon: CheckCircle,
    bg: "bg-green-50",
  },
  completed: {
    label: "Hoàn thành",
    color: "text-blue-600",
    icon: CheckCircle,
    bg: "bg-blue-50",
  },
  cancelled: {
    label: "Đã hủy",
    color: "text-red-600",
    icon: XCircle,
    bg: "bg-red-50",
  },
};

export function MyBookingsPage() {
  const [selectedStatus, setSelectedStatus] = useState<BookingStatus | "all">("all");

  const filteredBookings = mockBookings.filter(
    (booking) => selectedStatus === "all" || booking.status === selectedStatus
  );

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-pink-100 to-white border-b border-pink-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">
            Đơn hàng của tôi
          </h1>
          <p className="text-xl text-gray-600">Quản lý và theo dõi các đơn đặt dịch vụ</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedStatus("all")}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedStatus === "all"
                  ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-md"
                  : "bg-white text-gray-700 border border-pink-200 hover:border-pink-300"
              }`}
            >
              Tất cả ({mockBookings.length})
            </button>
            {Object.entries(statusConfig).map(([status, config]) => {
              const count = mockBookings.filter((b) => b.status === status).length;
              return (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status as BookingStatus)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    selectedStatus === status
                      ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-md"
                      : "bg-white text-gray-700 border border-pink-200 hover:border-pink-300"
                  }`}
                >
                  {config.label} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Bookings List */}
        {filteredBookings.length > 0 ? (
          <div className="space-y-6">
            {filteredBookings.map((booking) => {
              const statusInfo = statusConfig[booking.status];
              const StatusIcon = statusInfo.icon;

              return (
                <div
                  key={booking.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md border border-pink-100 hover:shadow-lg transition-all"
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
                    {/* Image & Basic Info */}
                    <div className="md:col-span-1">
                      <div className="relative rounded-xl overflow-hidden mb-3">
                        <ImageWithFallback
                          src={booking.image}
                          alt={booking.serviceName}
                          className="w-full h-40 object-cover"
                        />
                        <div
                          className={`absolute top-3 right-3 ${statusInfo.bg} ${statusInfo.color} px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1`}
                        >
                          <StatusIcon className="w-3 h-3" />
                          {statusInfo.label}
                        </div>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">{booking.serviceName}</h3>
                      <p className="text-sm text-gray-600">{booking.provider}</p>
                    </div>

                    {/* Booking Details */}
                    <div className="md:col-span-2 space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">
                          Mã đơn hàng: {booking.id}
                        </h4>
                        <p className="text-sm text-gray-600">
                          Ngày đặt: {formatDate(booking.bookingDate)}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2">
                          <Calendar className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Ngày sử dụng</p>
                            <p className="text-sm text-gray-600">
                              {formatDate(booking.startDate)}
                              {booking.startDate !== booking.endDate &&
                                ` - ${formatDate(booking.endDate)}`}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <Clock className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Thời gian</p>
                            <p className="text-sm text-gray-600">
                              {booking.startTime} - {booking.endTime}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <MapPin className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Địa điểm</p>
                            <p className="text-sm text-gray-600">{booking.location}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-pink-600 font-bold">₫</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">Tổng tiền</p>
                            <p className="text-sm font-semibold text-pink-600">
                              {booking.price}đ
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="md:col-span-1 flex flex-col gap-3">
                      <Link
                        to={`/service/${booking.serviceId}`}
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all text-sm"
                      >
                        <Eye className="w-4 h-4" />
                        Xem chi tiết
                      </Link>

                      {booking.status === "pending" && (
                        <button className="flex items-center justify-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-full border border-pink-200 hover:border-pink-300 transition-all text-sm">
                          <XCircle className="w-4 h-4" />
                          Hủy đơn
                        </button>
                      )}

                      {booking.status === "confirmed" && (
                        <button className="flex items-center justify-center gap-2 bg-pink-50 text-pink-600 px-4 py-2 rounded-full border border-pink-200 hover:bg-pink-100 transition-all text-sm">
                          <MessageCircle className="w-4 h-4" />
                          Liên hệ
                        </button>
                      )}

                      {booking.status === "completed" && (
                        <button className="flex items-center justify-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-full border border-pink-200 hover:border-pink-300 transition-all text-sm">
                          Đặt lại
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-10 h-10 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Chưa có đơn hàng nào
            </h3>
            <p className="text-gray-600 mb-6">Khám phá các dịch vụ và đặt ngay hôm nay!</p>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-3 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg"
            >
              Khám phá dịch vụ
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
