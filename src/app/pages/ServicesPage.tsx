import { useState } from "react";
import { Link, useParams } from "react-router";
import { Search, SlidersHorizontal, Star, MapPin, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const categories = [
  { id: "all", label: "Tất cả" },
  { id: "dress", label: "Thuê váy" },
  { id: "makeup", label: "Makeup & Tóc" },
  { id: "photographer", label: "Photographer" },
  { id: "accessories", label: "Phụ kiện" },
  { id: "combo", label: "Combo" },
];

const services = [
  {
    id: "1",
    category: "dress",
    name: "Váy dạ hội màu hồng",
    provider: "Xinh Boutique",
    rating: 4.9,
    reviews: 156,
    price: "300,000",
    location: "Quận 1, TP.HCM",
    image: "https://images.unsplash.com/photo-1768767112566-dc12dbe40aae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwZXZlbmluZyUyMGdvd24lMjBkcmVzc3xlbnwxfHx8fDE3NzI4OTk5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Dạ hội", "Tiệc cưới", "Sinh nhật"],
  },
  {
    id: "2",
    category: "dress",
    name: "Váy trắng thanh lịch",
    provider: "Elegant Dress",
    rating: 4.8,
    reviews: 134,
    price: "350,000",
    location: "Quận 3, TP.HCM",
    image: "https://images.unsplash.com/photo-1720005398225-4ea01c9d2b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBkcmVzcyUyMGZhc2hpb258ZW58MXx8fHwxNzcyODgxNjA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Thanh lịch", "Tốt nghiệp", "Sự kiện"],
  },
  {
    id: "3",
    category: "makeup",
    name: "Makeup Artist Chuyên nghiệp",
    provider: "Beauty Pro Studio",
    rating: 5.0,
    reviews: 89,
    price: "500,000",
    location: "Quận 10, TP.HCM",
    image: "https://images.unsplash.com/photo-1698181842513-2179d5f8bc65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBhcnRpc3QlMjBiZWF1dHl5fGVufDF8fHx8MTc3MjgwNTA4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Makeup", "Làm tóc", "Chuyên nghiệp"],
  },
  {
    id: "4",
    category: "makeup",
    name: "Makeup & Tóc Cô dâu",
    provider: "Bridal Beauty",
    rating: 4.9,
    reviews: 201,
    price: "800,000",
    location: "Quận 1, TP.HCM",
    image: "https://images.unsplash.com/photo-1626383137804-ff908d2753a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMGludGVyaW9yfGVufDF8fHx8MTc3Mjg5MTY3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Cô dâu", "Makeup", "Tóc"],
  },
  {
    id: "5",
    category: "photographer",
    name: "Photographer Chuyên nghiệp",
    provider: "Photo Art Studio",
    rating: 4.8,
    reviews: 167,
    price: "1,200,000",
    location: "Quận 2, TP.HCM",
    image: "https://images.unsplash.com/photo-1696273338595-178a113ead5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBjYW1lcmF8ZW58MXx8fHwxNzcyODcyODA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Photographer", "Studio", "Outdoor"],
  },
  {
    id: "6",
    category: "photographer",
    name: "Chụp ảnh tốt nghiệp",
    provider: "Graduation Photos",
    rating: 4.7,
    reviews: 98,
    price: "600,000",
    location: "Quận 5, TP.HCM",
    image: "https://images.unsplash.com/photo-1742540676438-722880414f33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGhvdG9zaG9vdCUyMHN0dWRpb3xlbnwxfHx8fDE3NzI4OTk5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Tốt nghiệp", "Chụp ảnh", "Portrait"],
  },
  {
    id: "7",
    category: "accessories",
    name: "Bộ phụ kiện cao cấp",
    provider: "Luxury Accessories",
    rating: 4.9,
    reviews: 143,
    price: "200,000",
    location: "Quận 1, TP.HCM",
    image: "https://images.unsplash.com/photo-1769116416641-e714b71851e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBqZXdlbHJ5fGVufDF8fHx8MTc3Mjg5OTk2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Phụ kiện", "Trang sức", "Giày"],
  },
  {
    id: "8",
    category: "accessories",
    name: "Giày cao gót & Túi xách",
    provider: "Chic Accessories",
    rating: 4.6,
    reviews: 87,
    price: "150,000",
    location: "Quận 7, TP.HCM",
    image: "https://images.unsplash.com/photo-1769116416641-e714b71851e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBqZXdlbHJ5fGVufDF8fHx8MTc3Mjg5OTk2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Giày", "Túi", "Phụ kiện"],
  },
  {
    id: "graduation",
    category: "combo",
    name: "Combo Tốt nghiệp",
    provider: "XINH.DAY Package",
    rating: 5.0,
    reviews: 234,
    price: "1,500,000",
    location: "Toàn quốc",
    image: "https://images.unsplash.com/photo-1660485345088-c398363c1f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzI3OTQ2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Combo", "Tốt nghiệp", "Trọn gói"],
  },
  {
    id: "birthday",
    category: "combo",
    name: "Combo Sinh nhật",
    provider: "XINH.DAY Package",
    rating: 4.9,
    reviews: 178,
    price: "1,200,000",
    location: "Toàn quốc",
    image: "https://images.unsplash.com/photo-1650584997985-e713a869ee77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzcyODg4OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Combo", "Sinh nhật", "Party"],
  },
  {
    id: "photoshoot",
    category: "combo",
    name: "Combo Photoshoot",
    provider: "XINH.DAY Package",
    rating: 5.0,
    reviews: 156,
    price: "2,000,000",
    location: "Toàn quốc",
    image: "https://images.unsplash.com/photo-1742540676438-722880414f33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGhvdG9zaG9vdCUyMHN0dWRpb3xlbnwxfHx8fDE3NzI4OTk5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Combo", "Photoshoot", "Studio"],
  },
];

export function ServicesPage() {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || "all");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState("all");

  const filteredServices = services.filter((service) => {
    const matchCategory =
      selectedCategory === "all" || service.category === selectedCategory;
    const matchSearch =
      searchQuery === "" ||
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.provider.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchPrice = true;
    if (priceRange !== "all") {
      const price = parseInt(service.price.replace(/,/g, ""));
      if (priceRange === "low") matchPrice = price < 500000;
      else if (priceRange === "mid") matchPrice = price >= 500000 && price < 1000000;
      else if (priceRange === "high") matchPrice = price >= 1000000;
    }

    return matchCategory && matchSearch && matchPrice;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-pink-100 to-white border-b border-pink-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">
            Khám phá dịch vụ
          </h1>
          <p className="text-xl text-gray-600">
            Tìm kiếm và đặt dịch vụ làm đẹp phù hợp với bạn
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Tìm kiếm dịch vụ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-md"
                    : "bg-white text-gray-700 border border-pink-200 hover:border-pink-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Price Filter */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Giá:</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setPriceRange("all")}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  priceRange === "all"
                    ? "bg-pink-600 text-white"
                    : "bg-white text-gray-700 border border-pink-200 hover:border-pink-300"
                }`}
              >
                Tất cả
              </button>
              <button
                onClick={() => setPriceRange("low")}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  priceRange === "low"
                    ? "bg-pink-600 text-white"
                    : "bg-white text-gray-700 border border-pink-200 hover:border-pink-300"
                }`}
              >
                &lt; 500K
              </button>
              <button
                onClick={() => setPriceRange("mid")}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  priceRange === "mid"
                    ? "bg-pink-600 text-white"
                    : "bg-white text-gray-700 border border-pink-200 hover:border-pink-300"
                }`}
              >
                500K - 1M
              </button>
              <button
                onClick={() => setPriceRange("high")}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  priceRange === "high"
                    ? "bg-pink-600 text-white"
                    : "bg-white text-gray-700 border border-pink-200 hover:border-pink-300"
                }`}
              >
                &gt; 1M
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Tìm thấy <span className="font-semibold text-pink-600">{filteredServices.length}</span> dịch vụ
          </p>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Link
                key={service.id}
                to={`/service/${service.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-pink-100 hover:border-pink-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                    <span className="text-pink-600 font-semibold">{service.price}đ</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-1">{service.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{service.provider}</p>
                  
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-medium text-gray-900">{service.rating}</span>
                      <span className="text-sm text-gray-500">({service.reviews})</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{service.location}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-pink-50 text-pink-600 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Không tìm thấy dịch vụ
            </h3>
            <p className="text-gray-600">
              Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
