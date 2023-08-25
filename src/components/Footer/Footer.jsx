import { useState } from 'react'
import { Link } from 'react-router-dom'

import { PATH } from '@/contants/path'
import ICONS from '@/contants/icons'
import { Popover } from '@/components/Popover'
import vn from '@/assets/images/vn-flag.svg'
import us from '@/assets/images/us-flag.svg'

export default function Footer() {
  const [isOpenPopover, setIsOpenPopover] = useState(false)

  return (
    <footer className="bg-white">
      <div className="container">
        <section className="flex flex-col flex-wrap items-start py-14 md:flex-row">
          {/* Info */}
          <section className="w-full md:w-2/5">
            <h3 className="text-sm font-semibold lg:text-lg">Kiến Thức Mở Ra Trang Mới Cuộc Đời Bạn</h3>
            <p className="mt-7">Tòa nhà Robot, 308, Điện Biên Phủ, Phường 4, Quận 3, TP. Hồ Chí Minh</p>
            <a href="tel:+84949816596" className="mt-1 block transition-all hover:text-shadow">
              (+84) 949 816 596
            </a>
            {/* Social */}
            <div className="mt-3 flex items-center md:gap-2 lg:gap-4">
              <p>Theo dõi chúng tôi:</p>
              <a
                href="https://www.linkedin.com/company/spacedev-vn/"
                target="_blank"
                rel="noreferrer"
                className="ml-2 mt-1 px-2 py-1 md:ml-0"
              >
                <ICONS.youtube className=" transition-all hover:text-[#F42717] md:text-2xl" />
              </a>
              <a href="https://www.youtube.com/@spacedevvn/" target="_blank" rel="noreferrer" className="px-2 py-1">
                <ICONS.facebook className=" transition-all hover:text-[#3D75F0] md:text-2xl" />
              </a>
              <a href="https://www.facebook.com/spacedev.vn/" target="_blank" rel="noreferrer" className="px-2 py-1">
                <ICONS.linkedin className=" transition-all hover:text-[#3D75F0] md:text-2xl" />
              </a>
            </div>
            {/* End Social */}
          </section>
          {/* End Info */}
          {/* Redirect Link */}
          <ul className="mt-7 flex w-full flex-wrap justify-center md:mt-0 md:w-3/5 md:justify-end">
            <li className="w-2/4 md:w-fit">
              <Link to={PATH.home} className="inline-block p-2 shadow-red-700 transition-all hover:text-shadow">
                Trang chủ
              </Link>
            </li>
            <li className="w-2/4 md:w-fit">
              <Link to={PATH.home} className="inline-block p-2 transition-all hover:text-shadow">
                Khóa học
              </Link>
            </li>
            <li className="w-2/4 md:w-fit">
              <Link to={PATH.home} className="inline-block p-2 transition-all hover:text-shadow">
                Thanh toán
              </Link>
            </li>
            <li className="w-2/4 md:w-fit">
              <Link to={PATH.home} className="inline-block p-2 transition-all hover:text-shadow">
                Liên hệ
              </Link>
            </li>
          </ul>
          {/* End Redirect Link */}
        </section>
        {/* Copyright */}
        <div className="border-t border-t-gray-200 p-4 text-center text-sm">
          <div className="flex items-center justify-center gap-3">
            <p>2023 spacedev.vn</p>
            <Popover
              isOpenFloating={isOpenPopover}
              setIsOpenFloating={setIsOpenPopover}
              referenceClassName="flex items-center gap-1 px-2 py-1 transition-all hover:text-black"
              floatingClassName="flex rounded-sm border border-gray-200 bg-white shadow-md"
              placement="top"
              renderFloating={
                <>
                  <button
                    className="block p-2 text-center text-sm transition-all hover:bg-gray-100"
                    onClick={() => setIsOpenPopover(false)}
                  >
                    <img src={vn} alt="Vietnam flag" className="h-5 w-5 object-cover" />
                  </button>
                  <button
                    className="block border-l border-l-gray-200 p-2 text-center text-sm transition-all hover:bg-gray-100"
                    onClick={() => setIsOpenPopover(false)}
                  >
                    <img src={us} alt="USA flag" className="h-5 w-5 object-cover" />
                  </button>
                </>
              }
            >
              <ICONS.language className="mt-[0.0625rem] h-3.5 w-3.5" />
              <span>Tiếng Việt</span>
              <ICONS.chevronDown className="mt-1 h-3 w-3" />
            </Popover>
          </div>
          <p className="mt-1">
            Đây là project trong khoá học của{' '}
            <a
              href="https://spacedev.vn/"
              target="_blank"
              rel="noreferrer"
              className="group inline-block text-[#e53935]"
            >
              spacedev.vn
              <span className="block h-[0.0625rem] max-w-0 bg-[#e53935] transition-all duration-300 group-hover:max-w-full"></span>
            </a>
          </p>
        </div>
        {/* End Copyright */}
      </div>
    </footer>
  )
}
