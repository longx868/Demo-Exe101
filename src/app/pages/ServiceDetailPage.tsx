import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router";
import {
  Star,
  MapPin,
  Clock,
  Shield,
  CheckCircle,
  Heart,
  Share2,
  Calendar,
  ChevronLeft,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const serviceData: Record<string, any> = {
  "1": {
    name: "Váy dạ hội màu hồng",
    provider: "Xinh Boutique",
    rating: 4.9,
    reviews: 156,
    price: "300,000",
    location: "123 Nguyễn Huệ, Quận 1, TP.HCM",
    image: "https://images.unsplash.com/photo-1768767112566-dc12dbe40aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwZXZlbmluZyUyMGdvd24lMjBkcmVzc3xlbnwxfHx8fDE3NzI4OTk5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1768767112566-dc12dbe40aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwZXZlbmluZyUyMGdvd24lMjBkcmVzc3xlbnwxfHx8fDE3NzI4OTk5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1720005398225-4ea01c9d2b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBkcmVzcyUyMGZhc2hpb258ZW58MXx8fHwxNzcyODgxNjA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    description: "Váy dạ hội màu hồng sang trọng, thiết kế hiện đại phù hợp cho các dịp tiệc tùng, sinh nhật, dạ hội. Chất liệu cao cấp, form dáng ôm body tôn dáng.",
    features: [
      "Chất liệu vải cao cấp",
      "Thiết kế sang trọng, hiện đại",
      "Nhiều size cho bạn lựa chọn",
      "Miễn phí giặt là sau khi sử dụng",
    ],
    includes: ["Váy chính", "Khăn choàng (nếu có)", "Túi bảo quản"],
    policy: {
      deposit: "30% giá trị đơn hàng",
      rental: "Tối thiểu 1 ngày, tối đa 7 ngày",
      cancellation: "Hoàn 100% nếu hủy trước 48 giờ",
    },
  },
  graduation: {
    name: "Combo Tốt nghiệp",
    provider: "XINH.DAY Package",
    rating: 5.0,
    reviews: 234,
    price: "1,500,000",
    location: "Dịch vụ toàn quốc",
    image: "https://images.unsplash.com/photo-1660485345088-c398363c1f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzI3OTQ2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1660485345088-c398363c1f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzI3OTQ2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1742540676438-722880414f33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGhvdG9zaG9vdCUyMHN0dWRpb3xlbnwxfHx8fDE3NzI4OTk5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    description: "Gói dịch vụ trọn gói cho ngày tốt nghiệp đáng nhớ của bạn. Bao gồm thuê váy, makeup chuyên nghiệp, chụp ảnh và phụ kiện đi kèm.",
    features: [
      "Thuê váy tốt nghiệp cao cấp",
      "Makeup & làm tóc chuyên nghiệp",
      "Photographer kinh nghiệm (100 ảnh đã chỉnh sửa)",
      "Phụ kiện hoàn chỉnh (giày, túi, trang sức)",
      "Tư vấn concept miễn phí",
    ],
    includes: [
      "1 bộ váy tốt nghiệp",
      "Makeup & tóc (3-4 giờ)",
      "Photographer + 100 ảnh edited",
      "Bộ phụ kiện đầy đủ",
    ],
    policy: {
      deposit: "40% giá trị gói",
      rental: "Dịch vụ trong ngày",
      cancellation: "Hoàn 80% nếu hủy trước 7 ngày",
    },
  },
};

const defaultService = {
  name: "Dịch vụ",
  provider: "XINH.DAY",
  rating: 4.8,
  reviews: 100,
  price: "500,000",
  location: "TP.HCM",
  image: "https://images.unsplash.com/photo-1720005398225-4ea01c9d2b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBkcmVzcyUyMGZhc2hpb258ZW58MXx8fHwxNzcyODgxNjA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  images: ["https://images.unsplash.com/photo-1720005398225-4ea01c9d2b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBkcmVzcyUyMGZhc2hpb258ZW58MXx8fHwxNzcyODgxNjA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"],
  description: "Dịch vụ làm đẹp chất lượng cao",
  features: ["Chất lượng cao", "Giá cả hợp lý", "Dịch vụ chuyên nghiệp"],
  includes: ["Dịch vụ cơ bản"],
  policy: {
    deposit: "30% giá trị",
    rental: "Theo thỏa thuận",
    cancellation: "Hoàn tiền theo chính sách",
  },
};

export function ServiceDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = serviceData[id || ""] || defaultService;
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const reviews = [
    {
      name: "Minh Anh",
      rating: 5,
      date: "15/02/2026",
      comment: "Dịch vụ tuyệt vời! Váy đẹp, makeup artist rất chuyên nghiệp. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1745869482293-902065d1ad5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwd29tYW4lMjBzbWlsaW5nfGVufDF8fHx8MTc3Mjg2NDYwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Thu Hà",
      rating: 5,
      date: "10/02/2026",
      comment: "Giá cả hợp lý, chất lượng dịch vụ tốt. Nhân viên tư vấn nhiệt tình.",
      avatar: "https://images.unsplash.com/photo-1745869482293-902065d1ad5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwd29tYW4lMjBzbWlsaW5nfGVufDF8fHx8MTc3Mjg2NDYwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Phương Linh",
      rating: 4,
      date: "05/02/2026",
      comment: "Rất hài lòng với dịch vụ. Sẽ quay lại lần sau!",
      avatar: "https://images.unsplash.com/photo-1745869482293-902065d1ad5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwd29tYW4lMjBzbWlsaW5nfGVufDF8fHx8MTc3Mjg2NDYwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Back Button */}
      <div className="bg-white border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Quay lại</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Images */}
          <div>
            <div className="relative rounded-2xl overflow-hidden mb-4 shadow-lg">
              <ImageWithFallback
                src={service.images[selectedImage]}
                alt={service.name}
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {service.images.map((img: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-pink-500 shadow-md"
                      : "border-pink-200 hover:border-pink-300"
                  }`}
                >
                  <ImageWithFallback
                    src={img}
                    alt={`${service.name} ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{service.name}</h1>
                <p className="text-lg text-gray-600">{service.provider}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="p-3 rounded-full bg-pink-50 hover:bg-pink-100 transition-colors"
                >
                  <Heart
                    className={`w-6 h-6 ${
                      isFavorite ? "fill-pink-600 text-pink-600" : "text-pink-600"
                    }`}
                  />
                </button>
                <button className="p-3 rounded-full bg-pink-50 hover:bg-pink-100 transition-colors">
                  <Share2 className="w-6 h-6 text-pink-600" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-6 mb-6 pb-6 border-b border-pink-200">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="font-semibold text-gray-900">{service.rating}</span>
                <span className="text-gray-600">({service.reviews} đánh giá)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>{service.location}</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 mb-1">Giá thuê</p>
                  <p className="text-3xl font-bold text-pink-600">{service.price}đ</p>
                  <p className="text-sm text-gray-600 mt-1">/ ngày</p>
                </div>
                <Link
                  to={`/booking/${id}`}
                  className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg"
                >
                  <Calendar className="w-5 h-5" />
                  Đặt ngay
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Mô tả</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Đặc điểm nổi bật</h3>
                <ul className="space-y-2">
                  {service.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Bao gồm</h3>
                <ul className="space-y-2">
                  {service.includes.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Policy */}
        <div className="bg-white rounded-2xl p-8 mb-12 shadow-md border border-pink-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Chính sách dịch vụ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-pink-100 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Đặt cọc</h3>
                <p className="text-gray-600">{service.policy.deposit}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-pink-100 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Thời gian thuê</h3>
                <p className="text-gray-600">{service.policy.rental}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-pink-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Chính sách hủy</h3>
                <p className="text-gray-600">{service.policy.cancellation}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-2xl p-8 shadow-md border border-pink-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Đánh giá khách hàng</h2>
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div key={index} className="pb-6 border-b border-pink-100 last:border-0">
                <div className="flex items-start gap-4">
                  <ImageWithFallback
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">{review.name}</h4>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
