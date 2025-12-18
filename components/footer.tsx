import Link from "next/link"
import Image from "next/image"
import { Facebook, Youtube } from "lucide-react"

const footerLinks = {
  support: [
    { text: "Hotline: 1900-6035", bold: true, sub: "(1000 đ/phút, 8-21h kể cả T7, CN)" },
    "Các câu hỏi thường gặp",
    "Gửi yêu cầu hỗ trợ",
    "Hướng dẫn đặt hàng",
    "Phương thức vận chuyển",
    "Chính sách đổi trả",
    "Hướng dẫn trả góp",
    "Chính sách hàng nhập khẩu",
    "Hỗ trợ khách hàng: hotro@tiki.vn",
    "Báo lỗi bảo mật: security@tiki.vn",
  ],
  about: [
    "Giới thiệu Tiki",
    "Tiki Blog",
    "Tuyển dụng",
    "Chính sách bảo mật thanh toán",
    "Chính sách bảo mật thông tin cá nhân",
    "Chính sách giải quyết khiếu nại",
    "Điều khoản sử dụng",
    "Giới thiệu Tiki Xu",
    "Tiếp thị liên kết cùng Tiki",
    "Bán hàng doanh nghiệp",
    "Điều kiện vận chuyển",
  ],
  partners: ["Quy chế hoạt động Sàn GDTMĐT", "Bán hàng cùng Tiki"],
  payment: ["Chính sách thanh toán", "Visa", "MasterCard", "JCB", "TIKI", "ATM", "Trả góp"],
  delivery: ["TIKINOW", "Giao hàng tiết kiệm"],
}

export function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-[1240px] mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Support */}
          <div>
            <h3 className="font-medium text-[#27272a] mb-3 text-sm">Hỗ trợ khách hàng</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, idx) => (
                <li key={idx}>
                  {typeof link === "string" ? (
                    <Link href="#" className="text-xs text-gray-500 hover:text-[#0b74e5]">
                      {link}
                    </Link>
                  ) : (
                    <div>
                      <span className="text-xs text-gray-500 font-medium">{link.text}</span>
                      {link.sub && <span className="text-xs text-gray-400 block">{link.sub}</span>}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-medium text-[#27272a] mb-3 text-sm">Về Tiki</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link, idx) => (
                <li key={idx}>
                  <Link href="#" className="text-xs text-gray-500 hover:text-[#0b74e5]">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="font-medium text-[#27272a] mb-3 text-sm">Hợp tác và liên kết</h3>
            <ul className="space-y-2">
              {footerLinks.partners.map((link, idx) => (
                <li key={idx}>
                  <Link href="#" className="text-xs text-gray-500 hover:text-[#0b74e5]">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-medium text-[#27272a] mb-3 text-sm mt-6">Chứng nhận bởi</h3>
            <div className="flex gap-2">
              <Image
                src="/placeholder.svg?height=32&width=80"
                alt="Certification"
                width={80}
                height={32}
                className="object-contain"
              />
              <Image
                src="/placeholder.svg?height=32&width=80"
                alt="DMCA"
                width={80}
                height={32}
                className="object-contain"
              />
            </div>
          </div>

          {/* Payment & Delivery */}
          <div>
            <h3 className="font-medium text-[#27272a] mb-3 text-sm">Phương thức thanh toán</h3>
            <div className="flex flex-wrap gap-1 mb-6">
              {["visa", "mastercard", "jcb", "tiki", "atm", "installment"].map((method, idx) => (
                <div key={idx} className="w-8 h-5 bg-gray-100 rounded flex items-center justify-center">
                  <Image
                    src={`/placeholder-20px-height.png?height=20&width=32`}
                    alt={method}
                    width={32}
                    height={20}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            <h3 className="font-medium text-[#27272a] mb-3 text-sm">Dịch vụ giao hàng</h3>
            <div className="flex gap-2">
              <div className="bg-[#00ab56] text-white text-[10px] px-2 py-1 rounded font-bold">TIKINOW</div>
            </div>
          </div>

          {/* Social & App */}
          <div>
            <h3 className="font-medium text-[#27272a] mb-3 text-sm">Kết nối với chúng tôi</h3>
            <div className="flex gap-2 mb-6">
              <Link href="#" className="w-8 h-8 bg-[#3b5998] text-white rounded flex items-center justify-center">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="w-8 h-8 bg-[#ff0000] text-white rounded flex items-center justify-center">
                <Youtube className="h-4 w-4" />
              </Link>
              <Link href="#" className="w-8 h-8 bg-[#0077b5] text-white rounded flex items-center justify-center">
                <span className="text-xs font-bold">in</span>
              </Link>
            </div>

            <h3 className="font-medium text-[#27272a] mb-3 text-sm">Tải ứng dụng trên điện thoại</h3>
            <div className="flex gap-2">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="QR Code"
                width={80}
                height={80}
                className="rounded"
              />
              <div className="space-y-1">
                <Image
                  src="/placeholder.svg?height=32&width=100"
                  alt="App Store"
                  width={100}
                  height={32}
                  className="rounded"
                />
                <Image
                  src="/placeholder.svg?height=32&width=100"
                  alt="Google Play"
                  width={100}
                  height={32}
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Company info */}
        <div className="mt-8 pt-6 border-t">
          <h3 className="font-medium text-[#27272a] mb-2 text-sm">Công ty TNHH TI KI</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Địa chỉ trụ sở: Tòa nhà Viettel, Số 285, Đường Cách Mạng Tháng 8, Phường 12, Quận 10, Thành phố Hồ Chí Minh
            <br />
            Giấy chứng nhận đăng ký doanh nghiệp số 0309532909 do Sở Kế Hoạch và Đầu Tư Thành phố Hồ Chí Minh cấp lần
            đầu vào ngày 06/01/2010.
            <br />
            Hotline: 1900 6035
          </p>
        </div>

        {/* Tiki description */}
        <div className="mt-6 pt-6 border-t">
          <h3 className="font-medium text-[#27272a] mb-2 text-sm">Tiki - Thật nhanh, thật chất lượng, thật rẻ</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Tiki là một trong những sàn thương mại điện tử (ecommerce) hàng đầu tại Việt Nam với hàng triệu sản phẩm đa
            dạng như: Điện thoại smartphone, Laptop, Máy tính bảng, Tivi, Máy lạnh, Gia dụng, Thời trang...
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t text-center text-xs text-gray-500">
          <p>© 2025 - Bản quyền của Công ty TNHH Ti Ki</p>
        </div>
      </div>
    </footer>
  )
}
