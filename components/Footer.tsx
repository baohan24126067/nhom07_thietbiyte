import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a2440] text-white">
      {/* Top Footer Section */}
      <div className="w-full px-4 sm:px-10 lg:px-24 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1.2fr] gap-x-12 gap-y-10">
          {/* Brand Column */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-11 h-11 rounded-[14px] bg-[#007BFF] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-[28px] leading-none">M</span>
              </div>
              <span className="text-[28px] font-black tracking-tight leading-none">
                <span className="text-[#007BFF]">MEDI</span>
                <span className="text-white">SHOP</span>
              </span>
            </div>

            {/* Tagline */}
            <p className="text-sm font-normal text-gray-300 leading-relaxed max-w-[220px]">
              MediShop - Hệ thống nhà thuốc cung cấp sản phẩm chăm sóc sức khỏe chính hãng, đồng hành cùng gia đình bạn mỗi ngày.
            </p>

            {/* Social Links */}
            <div className="flex flex-col gap-3">
              {/* Facebook */}
              <a href="https://www.facebook.com/medishop.vn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <g clipPath="url(#fb-clip)">
                    <path d="M40 20C40 8.95438 31.0456 0 20 0C8.95437 0 0 8.95438 0 20C0 29.9825 7.31375 38.2567 16.875 39.757V25.7813H11.7969V20H16.875V15.5938C16.875 10.5813 19.8609 7.8125 24.4294 7.8125C26.6175 7.8125 28.9062 8.20313 28.9062 8.20313V13.125H26.3844C23.8998 13.125 23.125 14.6667 23.125 16.2484V20H28.6719L27.7852 25.7813H23.125V39.757C32.6862 38.2567 40 29.9827 40 20Z" fill="#1877F2"/>
                    <path d="M27.7852 25.7812L28.6719 20H23.125V16.2484C23.125 14.6666 23.8998 13.125 26.3844 13.125H28.9062V8.20312C28.9062 8.20312 26.6175 7.8125 24.4292 7.8125C19.8609 7.8125 16.875 10.5813 16.875 15.5938V20H11.7969V25.7812H16.875V39.757C17.9088 39.919 18.9536 40.0002 20 40C21.0464 40.0002 22.0912 39.919 23.125 39.757V25.7812H27.7852Z" fill="white"/>
                  </g>
                  <defs><clipPath id="fb-clip"><rect width="40" height="40" fill="white"/></clipPath></defs>
                </svg>
                <span className="text-sm font-medium text-white">https://www.facebook.com/medishop.vn</span>
              </a>

              {/* YouTube */}
              <a href="https://www.youtube.com/@medishop" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                <svg width="46" height="32" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <g clipPath="url(#yt-clip)">
                    <path d="M39.1173 5.01102C38.8878 4.04247 38.4403 3.15947 37.8192 2.44996C37.1981 1.74045 36.4251 1.22917 35.5772 0.967041C32.4731 0 19.9801 0 19.9801 0C19.9801 0 7.48641 0.0292717 4.38229 0.996313C3.53439 1.25846 2.76139 1.76976 2.14029 2.47931C1.51919 3.18885 1.07165 4.07188 0.842232 5.04047C-0.0966903 11.3407 -0.460915 20.9408 0.868013 26.989C1.09745 27.9575 1.545 28.8405 2.16611 29.55C2.78721 30.2596 3.56019 30.7708 4.40807 31.033C7.51219 32 20.0055 32 20.0055 32C20.0055 32 32.4987 32 35.6027 31.033C36.4506 30.7709 37.2236 30.2596 37.8447 29.5501C38.4659 28.8406 38.9134 27.9576 39.1429 26.989C40.1332 20.6798 40.4384 11.0856 39.1173 5.01102Z" fill="#FF0000"/>
                    <path d="M18.4038 22.7662L30.3221 15.9363L18.4038 9.10645V22.7662Z" fill="white"/>
                  </g>
                  <defs><clipPath id="yt-clip"><rect width="46" height="32" fill="white"/></clipPath></defs>
                </svg>
                <span className="text-sm font-medium text-white">https://www.youtube.com/@medishop</span>
              </a>

              {/* TikTok */}
              <a href="https://www.tiktok.com/@medishop" target="_blank" rel="noopener noreferrer" className="flex items-center gap-8 hover:opacity-80 transition-opacity">
                <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <g clipPath="url(#tt-clip)">
                    <path d="M25.9383 14.4028C28.4919 16.2435 31.6203 17.3266 34.999 17.3266V10.7707C34.3595 10.771 33.7218 10.7036 33.0962 10.5699V15.7303C29.7177 15.7303 26.5897 14.6474 24.0356 12.8068V26.1856C24.0356 32.8784 18.6549 38.3035 12.018 38.3035C9.5416 38.3035 7.2398 37.5486 5.32779 36.2539C7.51009 38.504 10.5535 39.8997 13.9203 39.8997C20.5577 39.8997 25.9385 34.4746 25.9385 27.7815V14.4028H25.9383Z" fill="#FF004F"/>
                    <path d="M24.0356 12.8067C26.5899 14.6473 29.7176 15.7302 33.0962 15.7302V10.5697C31.2103 10.1646 29.5408 9.17098 28.2856 7.78878C26.1371 6.43678 24.589 4.20643 24.1351 1.59595H19.3987V27.7812C19.3879 30.8339 16.9311 33.3056 13.9013 33.3056C12.116 33.3056 10.5298 32.4475 9.52533 31.118C7.73158 30.2052 6.50138 28.331 6.50138 26.1666C6.50138 23.1055 8.96232 20.6235 11.9986 20.6235C12.5803 20.6235 13.141 20.7148 13.6669 20.8831V15.6663C7.14656 15.8022 1.90271 21.1743 1.90271 27.7813C1.90271 31.0795 3.20851 34.0695 5.32792 36.2542C7.23994 37.5486 9.5416 38.3038 12.0181 38.3038C18.6551 38.3038 24.0357 32.8783 24.0357 26.1856L24.0356 12.8067Z" fill="black"/>
                    <path d="M33.0962 10.5697V9.17462C31.3956 9.17711 29.7285 8.69689 28.2856 7.78883C29.5628 9.19878 31.2447 10.1711 33.0962 10.5699M24.135 1.59586C24.0917 1.34642 24.0585 1.09532 24.0354 0.843172V0H17.4956V26.1855C17.4852 29.2379 15.0284 31.7097 11.9984 31.7097C11.1395 31.7109 10.2922 31.5084 9.5252 31.1183C10.5297 32.4476 12.1159 33.3055 13.9012 33.3055C16.9308 33.3055 19.3879 30.8341 19.3986 27.7814V1.596L24.135 1.59586Z" fill="#00F2EA"/>
                  </g>
                  <defs><clipPath id="tt-clip"><rect width="35" height="40" fill="white"/></clipPath></defs>
                </svg>
                <span className="text-sm font-medium text-white">https://www.tiktok.com/@medishop</span>
              </a>

              {/* Zalo */}
              <a href="https://zalo.me/19008485" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 hover:opacity-80 transition-opacity">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <g clipPath="url(#zalo-clip)">
                    <path d="M20.8167 17.1201V16.3701H23.0617V26.9067H21.7783C21.5243 26.9072 21.2804 26.8069 21.1002 26.6279C20.9199 26.4489 20.818 26.2058 20.8167 25.9517C19.8797 26.638 18.7481 27.0087 17.5867 27.0067C16.1356 27.0067 14.744 26.4305 13.7176 25.4048C12.6913 24.3791 12.1142 22.9878 12.1133 21.5367C12.1142 20.0857 12.6913 18.6944 13.7176 17.6687C14.744 16.6429 16.1356 16.0667 17.5867 16.0667C18.7475 16.0651 19.8802 16.4341 20.8167 17.1201ZM11.5317 12.9834V13.3251C11.5317 13.9617 11.4467 14.4817 11.0317 15.0917L10.9817 15.1484C10.8435 15.3036 10.7091 15.4619 10.5783 15.6234L3.37333 24.6667H11.5317V25.9467C11.5317 26.0729 11.5068 26.1979 11.4584 26.3145C11.4101 26.4311 11.3392 26.537 11.2499 26.6261C11.1606 26.7153 11.0546 26.786 10.9379 26.8341C10.8212 26.8823 10.6962 26.9069 10.57 26.9067H0V26.3034C0 25.5651 0.183333 25.2351 0.416667 24.8917L8.09667 15.3834H0.32V12.9834H11.5317ZM25.7833 26.9067C25.5712 26.9067 25.3677 26.8224 25.2176 26.6724C25.0676 26.5224 24.9833 26.3189 24.9833 26.1067V12.9834H27.385V26.9067H25.7833ZM34.4883 16.0001C35.2119 15.9998 35.9285 16.1421 36.597 16.4189C37.2656 16.6956 37.8732 17.1012 38.385 17.6127C38.8968 18.1242 39.3028 18.7315 39.5799 19.3999C39.857 20.0684 39.9998 20.7848 40 21.5084C40.0002 22.232 39.8579 22.9485 39.5812 23.6171C39.3045 24.2857 38.8988 24.8932 38.3873 25.405C37.8758 25.9169 37.2685 26.3229 36.6001 26.6C35.9317 26.8771 35.2152 27.0198 34.4917 27.0201C33.0303 27.0205 31.6287 26.4404 30.595 25.4074C29.5614 24.3744 28.9804 22.9731 28.98 21.5117C28.9796 20.0504 29.5597 18.6487 30.5927 17.6151C31.6257 16.5814 33.027 16.0005 34.4883 16.0001Z" fill="white"/>
                  </g>
                  <defs><clipPath id="zalo-clip"><rect width="40" height="40" fill="white"/></clipPath></defs>
                </svg>
                <span className="text-sm font-medium text-white">https://zalo.me/19008485</span>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Điều Hướng</h3>
            <ul className="flex flex-col gap-2.5">
              <li><Link href="/" className="text-white text-base font-medium hover:text-blue-300 transition-colors">Trang chủ</Link></li>
              <li><Link href="#" className="text-white text-base font-medium hover:text-blue-300 transition-colors">Sản phẩm</Link></li>
              <li><Link href="#" className="text-white text-base font-medium hover:text-blue-300 transition-colors">Về chúng tôi</Link></li>
              <li><Link href="#" className="text-white text-base font-medium hover:text-blue-300 transition-colors">Tin tức y tế</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Hỗ Trợ Khách Hàng</h3>
            <ul className="flex flex-col gap-2.5">
              <li><Link href="#" className="text-white text-base font-medium hover:text-blue-300 transition-colors">Chính sách bảo mật</Link></li>
              <li><Link href="#" className="text-white text-base font-medium hover:text-blue-300 transition-colors">Chính sách đổi trả</Link></li>
              <li><Link href="#" className="text-white text-base font-medium hover:text-blue-300 transition-colors">Hướng dẫn mua hàng</Link></li>
              <li><Link href="#" className="text-white text-base font-medium hover:text-blue-300 transition-colors">Quy định sử dụng</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Liên Hệ</h3>
            <ul className="flex flex-col gap-2.5">
              <li className="text-white text-base font-medium leading-relaxed">
                <span className="font-bold">Địa chỉ:</span> Số 1 Võ Văn Ngân, Phường Linh Chiểu, TP. Thủ Đức, TP. Hồ Chí Minh
              </li>
              <li className="text-white text-base font-medium">
                <span className="font-bold">Hotline:</span>{" "}
                <a href="tel:19008485" className="hover:text-blue-300 transition-colors">1900 84 85</a>
              </li>
              <li className="text-white text-base font-medium">
                <span className="font-bold">Email:</span>{" "}
                <a href="mailto:contact@medishop.vn" className="hover:text-blue-300 transition-colors">contact@medishop.vn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar Section */}
      <div className="border-t border-white/10">
        <div className="w-full px-4 sm:px-10 lg:px-24 py-4 flex justify-end">
          <p className="text-white text-sm font-light italic">
            © {currentYear} MediShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
