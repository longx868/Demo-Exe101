import { Link } from "react-router";
import {
  Sparkles,
  Heart,
  Camera,
  Gem,
  ArrowRight,
  Search,
  CreditCard,
  CheckCircle,
  Star,
  Clock,
  Shield,
  MessageCircle,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const services = [
  {
    id: "dress",
    title: "Thuê váy",
    description: "Bộ sưu tập váy đa dạng cho mọi dịp",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1720005398225-4ea01c9d2b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBkcmVzcyUyMGZhc2hpb258ZW58MXx8fHwxNzcyODgxNjA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "makeup",
    title: "Makeup & Tóc",
    description: "Trang điểm và làm tóc chuyên nghiệp",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1698181842513-2179d5f8bc65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBhcnRpc3QlMjBiZWF1dHl8ZW58MXx8fHwxNzcyODA1MDg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "photographer",
    title: "Photographer",
    description: "Nhiếp ảnh gia chuyên nghiệp",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1696273338595-178a113ead5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBjYW1lcmF8ZW58MXx8fHwxNzcyODcyODA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "accessories",
    title: "Phụ kiện",
    description: "Giày, túi, trang sức cao cấp",
    icon: Gem,
    image: "https://images.unsplash.com/photo-1769116416641-e714b71851e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBqZXdlbHJ5fGVufDF8fHx8MTc3Mjg5OTk2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const combos = [
  {
    id: "graduation",
    title: "Combo Tốt nghiệp",
    description: "Váy + Makeup + Photographer + Phụ kiện",
    price: "1,500,000",
    image: "https://images.unsplash.com/photo-1660485345088-c398363c1f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzI3OTQ2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "birthday",
    title: "Combo Sinh nhật",
    description: "Váy + Makeup + Phụ kiện",
    price: "1,200,000",
    image: "https://images.unsplash.com/photo-1650584997985-e713a869ee77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzcyODg4OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "photoshoot",
    title: "Combo Photoshoot",
    description: "Váy + Makeup + Photographer chuyên nghiệp",
    price: "2,000,000",
    image: "https://images.unsplash.com/photo-1742540676438-722880414f33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGhvdG9zaG9vdCUyMHN0dWRpb3xlbnwxfHx8fDE3NzI4OTk5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const features = [
  {
    icon: Clock,
    title: "Đặt lịch trực tuyến",
    description: "Hệ thống đặt lịch nhanh chóng, tiện lợi 24/7",
  },
  {
    icon: CreditCard,
    title: "Giá cả minh bạch",
    description: "Bảng giá rõ ràng, không phí ẩn",
  },
  {
    icon: MessageCircle,
    title: "Tư vấn chatbot",
    description: "Hỗ trợ tư vấn tự động mọi lúc",
  },
  {
    icon: Star,
    title: "Đánh giá & Review",
    description: "Hệ thống đánh giá từ khách hàng thực",
  },
  {
    icon: Shield,
    title: "Chính sách rõ ràng",
    description: "Đặt cọc và hoàn hủy minh bạch",
  },
  {
    icon: CheckCircle,
    title: "Nhắc lịch tự động",
    description: "Nhắc nhở lịch trả đồ tự động",
  },
];

const reviews = [
  {
    name: "Minh Anh",
    avatar: "https://images.unsplash.com/photo-1745869482293-902065d1ad5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwd29tYW4lMjBzbWlsaW5nfGVufDF8fHx8MTc3Mjg2NDYwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    comment: "Dịch vụ tuyệt vời! Thuê váy tốt nghiệp và makeup rất đẹp. Nhân viên tư vấn nhiệt tình.",
  },
  {
    name: "Thu Hà",
    avatar: "https://images.unsplash.com/photo-1745869482293-902065d1ad5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwd29tYW4lMjBzbWlsaW5nfGVufDF8fHx8MTc3Mjg2NDYwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    comment: "Giá cả hợp lý, váy đẹp, makeup artist chuyên nghiệp. Chắc chắn sẽ dùng lại!",
  },
  {
    name: "Phương Linh",
    avatar: "https://images.unsplash.com/photo-1745869482293-902065d1ad5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwd29tYW4lMjBzbWlsaW5nfGVufDF8fHx8MTc3Mjg2NDYwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    comment: "Rất tiện lợi! Đặt lịch online nhanh, nhận nhắc lịch tự động. Recommended!",
  },
];

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-100 via-pink-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTEsIDE4MiwgMjA2LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">
                Nền Tảng Dịch Vụ Làm Đẹp Toàn Diện
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Tìm kiếm, so sánh và đặt dịch vụ thuê váy, makeup artist và photographer tại một nơi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Khám phá dịch vụ
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/my-bookings"
                  className="inline-flex items-center justify-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-full border-2 border-pink-200 hover:border-pink-300 hover:bg-pink-50 transition-all"
                >
                  Đặt lịch ngay
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1626383137804-ff908d2753a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMGludGVyaW9yfGVufDF8fHx8MTc3Mjg5MTY3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Beauty Services"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-pink-100">
                <div className="flex items-center gap-3">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Star className="w-6 h-6 text-pink-600 fill-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">4.9/5.0</p>
                    <p className="text-sm text-gray-600">500+ đánh giá</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Dịch vụ của chúng tôi</h2>
            <p className="text-xl text-gray-600">Khám phá các dịch vụ làm đẹp đa dạng</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-pink-100 hover:border-pink-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white p-2 rounded-lg">
                        <Icon className="w-5 h-5 text-pink-600" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center text-pink-600 group-hover:gap-2 transition-all">
                      <span className="text-sm font-medium">Xem chi tiết</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Cách thức hoạt động</h2>
            <p className="text-xl text-gray-600">Đặt dịch vụ chỉ với 3 bước đơn giản</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-pink-400 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">1. Tìm kiếm dịch vụ</h3>
              <p className="text-gray-600">
                Tìm kiếm theo sự kiện, phong cách hoặc ngân sách của bạn
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-pink-400 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">2. So sánh & Đánh giá</h3>
              <p className="text-gray-600">
                So sánh giá cả và xem đánh giá từ khách hàng trước
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-pink-400 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">3. Đặt lịch & Xác nhận</h3>
              <p className="text-gray-600">
                Đặt lịch trực tuyến và nhận xác nhận ngay lập tức
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Combos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Combo Concept Nổi bật</h2>
            <p className="text-xl text-gray-600">Gói dịch vụ trọn gói tiết kiệm và tiện lợi</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {combos.map((combo) => (
              <div
                key={combo.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={combo.image}
                    alt={combo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {combo.price}đ
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{combo.title}</h3>
                  <p className="text-gray-600 mb-4">{combo.description}</p>
                  <Link
                    to={`/service/${combo.id}`}
                    className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all"
                  >
                    Đặt ngay
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Ưu điểm nền tảng</h2>
            <p className="text-xl text-gray-600">Những tính năng vượt trội của XINH.DAY</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-pink-100"
                >
                  <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Khách hàng nói gì</h2>
            <p className="text-xl text-gray-600">Đánh giá từ khách hàng đã sử dụng dịch vụ</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md border border-pink-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <ImageWithFallback
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
