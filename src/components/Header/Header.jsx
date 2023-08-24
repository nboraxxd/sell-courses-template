import { useState } from 'react'
import { Link } from 'react-router-dom'

import ICONS from '@/contants/icons'
import { PATH } from '@/contants/path'
import { HamburgerMenu } from '@/components/Header'
import defaultAvatar from '@/assets/images/default-avatar.png'
import logo from '@/assets/images/logo.svg'
import { Popover } from '@/components/Popover'

export default function Header() {
  const [isOpenSidebar, seIsOpenSidebar] = useState(false)

  return (
    <header className="boder-b-gray-200 flex h-14 w-full items-center justify-between border-b bg-white shadow-sm">
      {/* Hamburger Menu */}
      <HamburgerMenu isOpen={isOpenSidebar} seIsOpen={seIsOpenSidebar} />
      {/* End Hamburger Menu */}
      {/* Logo */}
      <Link to={PATH.home}>
        <img src={logo} alt="Spacedev" className="h-9 w-9 object-cover sm:h-12 sm:w-12" />
      </Link>
      {/* End Logo */}
      {/* Account */}
      <Popover
        referenceClassName="mr-4 flex items-center gap-2 p-2"
        renderFloating={
          <>
            <Link
              to="#!"
              className="block border-b border-b-gray-200 p-4 text-right font-semibold transition-all hover:bg-gray-100 md:p-5"
            >
              Khoá học của tôi
            </Link>
            <Link
              to="#!"
              className="block border-b border-b-gray-200 p-4 text-right font-semibold transition-all hover:bg-gray-100 md:p-5"
            >
              Thông tin tài khoản
            </Link>
            <Link to="#!" className="block p-4 text-right font-semibold transition-all hover:bg-gray-100 md:p-5">
              Đăng xuất
            </Link>
          </>
        }
      >
        <div className="h-9 w-9 overflow-hidden rounded-full">
          <img src={defaultAvatar} alt="Default avatar" className="h-full w-full object-cover" />
        </div>
        <ICONS.chevronDown className="h-4 w-4" />
      </Popover>
      {/* End Account */}
    </header>
  )
}
