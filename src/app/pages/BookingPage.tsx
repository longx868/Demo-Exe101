import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Calendar, Clock, User, Phone, Mail, MapPin, CreditCard, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const serviceData: Record<string, any> = {
  "1": {
    name: "Váy dạ hội màu hồng",
    provider: "Xinh Boutique",
    price: "300,000",
    image: "https://images.unsplash.com/photo-1768767112566-dc12dbe40aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwZXZlbmluZyUyMGdvd24lMjBkcmVzc3xlbnwxfHx8fDE3NzI4OTk5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  graduation: {
    name: "Combo Tốt nghiệp",
    provider: "XINH.DAY Package",
    price: "1,500,000",
    image: "https://images.unsplash.com/photo-1660485345088-c398363c1f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzI3OTQ2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
};

const defaultService = {
  name: "Dịch vụ",
  provider: "XINH.DAY",
  price: "500,000",
  image: "https://images.unsplash.com/photo-1720005398225-4ea01c9d2b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBkcmVzcyUyMGZhc2hpb258ZW58MXx8fHwxNzcyODgxNjA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
};

export function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = serviceData[id || ""] || defaultService;

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    notes: "",
  });

  const [agreed, setAgreed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("Vui lòng đồng ý với điều khoản và chính sách");
      return;
    }
    // Simulate booking success
    alert("Đặt dịch vụ thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.");
    navigate("/my-bookings");
  };

  const calculateDays = () => {
    if (!formData.startDate || !formData.endDate) return 1;
    const start = new Date(formData.startDate);
    const end = new Date(formData.endDate);
    const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  };

  const days = calculateDays();
  const pricePerDay = parseInt(service.price.replace(/,/g, ""));
  const totalPrice = pricePerDay * days;
  const deposit = Math.ceil(totalPrice * 0.3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="bg-gradient-to-br from-pink-100 to-white border-b border-pink-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">
            Đặt dịch vụ
          </h1>
          <p className="text-xl text-gray-600">Điền thông tin để hoàn tất đặt dịch vụ</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-md border border-pink-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Thông tin khách hàng</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    <User className="inline w-4 h-4 mr-1" />
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    <Phone className="inline w-4 h-4 mr-1" />
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="0123 456 789"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2">
                  <Mail className="inline w-4 h-4 mr-1" />
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="example@email.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2">
                  <MapPin className="inline w-4 h-4 mr-1" />
                  Địa chỉ *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành"
                />
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Thời gian sử dụng</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    <Calendar className="inline w-4 h-4 mr-1" />
                    Ngày bắt đầu *
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    <Clock className="inline w-4 h-4 mr-1" />
                    Giờ bắt đầu *
                  </label>
                  <input
                    type="time"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    <Calendar className="inline w-4 h-4 mr-1" />
                    Ngày kết thúc *
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                    min={formData.startDate || new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    <Clock className="inline w-4 h-4 mr-1" />
                    Giờ kết thúc *
                  </label>
                  <input
                    type="time"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Ghi chú (không bắt buộc)</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Yêu cầu đặc biệt, kích thước, màu sắc..."
                />
              </div>

              <div className="mb-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 w-5 h-5 text-pink-600 border-pink-300 rounded focus:ring-pink-500"
                  />
                  <span className="text-gray-700">
                    Tôi đã đọc và đồng ý với{" "}
                    <a href="#" className="text-pink-600 hover:underline">
                      điều khoản dịch vụ
                    </a>{" "}
                    và{" "}
                    <a href="#" className="text-pink-600 hover:underline">
                      chính sách hủy đặt
                    </a>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-4 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg font-semibold"
              >
                Xác nhận đặt dịch vụ
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-pink-100 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Chi tiết đơn hàng</h2>

              <div className="mb-6">
                <div className="relative rounded-xl overflow-hidden mb-4">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.name}
                    className="w-full h-40 object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{service.name}</h3>
                <p className="text-sm text-gray-600">{service.provider}</p>
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-pink-200">
                <div className="flex justify-between text-gray-700">
                  <span>Giá thuê / ngày</span>
                  <span className="font-medium">{service.price}đ</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Số ngày</span>
                  <span className="font-medium">{days} ngày</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tổng tiền</span>
                  <span className="font-medium">{totalPrice.toLocaleString()}đ</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <CreditCard className="w-5 h-5 text-pink-600" />
                  <span className="font-semibold text-gray-900">Đặt cọc trước</span>
                </div>
                <p className="text-2xl font-bold text-pink-600">{deposit.toLocaleString()}đ</p>
                <p className="text-sm text-gray-600 mt-1">30% tổng giá trị</p>
              </div>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Miễn phí hủy trước 48 giờ</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Hỗ trợ tư vấn 24/7</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Nhắc lịch tự động</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
