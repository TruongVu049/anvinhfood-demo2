import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-[1240px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Hỗ trợ khách hàng</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#">Cách đặt hàng</Link>
              </li>
              <li>
                <Link href="#">Chính sách vận chuyển</Link>
              </li>
              <li>
                <Link href="#">Chính sách đổi trả</Link>
              </li>
              <li>
                <Link href="#">Hướng dẫn thanh toán</Link>
              </li>
              <li>
                <Link href="#">Câu hỏi thường gặp</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Về chúng tôi</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#">Giới thiệu công ty</Link>
              </li>
              <li>
                <Link href="#">Hệ thống cửa hàng</Link>
              </li>
              <li>
                <Link href="#">Liên hệ hợp tác</Link>
              </li>
              <li>
                <Link href="#">Tuyển dụng</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Danh mục nổi bật</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#">Xi măng & Vữa</Link>
              </li>
              <li>
                <Link href="#">Gạch xây & Ốp lát</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Phương thức thanh toán</h3>
            <div className="flex gap-2 mb-4">
              <div className="w-10 h-10 bg-white border rounded flex items-center justify-center text-xs">
                💳
              </div>
              <div className="w-10 h-10 bg-white border rounded flex items-center justify-center text-xs">
                🏦
              </div>
              <div className="w-10 h-10 bg-white border rounded flex items-center justify-center text-xs">
                💵
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>© 2024 An Vĩnh Building Materials. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
