import { useState } from 'react'
import { Link } from 'react-router-dom'

import ICONS from '@/contants/icons'
import { PATH } from '@/contants/path'
import { HamburgerMenu } from '@/components/Header'
import { Popover } from '@/components/Popover'
import defaultAvatar from '@/assets/images/default-avatar.png'
import logo from '@/assets/images/logo.svg'

export default function Header() {
  const [isOpenSidebar, seIsOpenSidebar] = useState(false)
  const [isOpenPopover, setIsOpenPopover] = useState(false)

  return (
    <header className="boder-b-gray-200 h-heightHeaderSM fixed left-0 top-0 z-30 flex w-full items-center justify-between border-b bg-white shadow-sm sm:h-heightHeader">
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
        isOpenFloating={isOpenPopover}
        setIsOpenFloating={setIsOpenPopover}
        referenceClassName="mr-2 md:mr-4 flex items-center gap-2 p-2"
        renderFloating={
          <>
            <Link
              to="#!"
              className="block border-b border-b-gray-200 p-4 text-right font-semibold transition-all hover:bg-gray-100 md:p-5"
              onClick={() => setIsOpenPopover(false)}
            >
              Khoá học của tôi
            </Link>
            <Link
              to="#!"
              className="block border-b border-b-gray-200 p-4 text-right font-semibold transition-all hover:bg-gray-100 md:p-5"
              onClick={() => setIsOpenPopover(false)}
            >
              Thông tin tài khoản
            </Link>
            <Link
              to="#!"
              className="block p-4 text-right font-semibold transition-all hover:bg-gray-100 md:p-5"
              onClick={() => setIsOpenPopover(false)}
            >
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
