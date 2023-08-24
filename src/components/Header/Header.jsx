import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FloatingPortal,
  safePolygon,
  useFloating,
  useHover,
  useInteractions,
  useTransitionStyles,
} from '@floating-ui/react'

import ICONS from '@/contants/icons'
import { PATH } from '@/contants/path'
import { HamburgerMenu } from '@/components/Header'
import defaultAvatar from '@/assets/images/default-avatar.png'
import logo from '@/assets/images/logo.svg'

export default function Header() {
  const [isOpenSidebar, seIsOpenSidebar] = useState(false)
  const [isOpenPopover, setIsOpenPopover] = useState(false)

  const { refs, context, floatingStyles } = useFloating({
    open: isOpenPopover,
    onOpenChange: setIsOpenPopover,
    placement: 'bottom-end',
  })

  const hover = useHover(context, {
    handleClose: safePolygon({
      blockPointerEvents: true,
    }),
  })

  const { getReferenceProps, getFloatingProps } = useInteractions([hover])

  const { isMounted, styles } = useTransitionStyles(context, {
    duration: 400,
    initial: {
      opacity: 0,
    },
  })

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
      <button className="mr-4 flex items-center gap-2 p-2" ref={refs.setReference} {...getReferenceProps()}>
        <div className="h-9 w-9 overflow-hidden rounded-full">
          <img src={defaultAvatar} alt="Default avatar" className="h-full w-full object-cover" />
        </div>
        <ICONS.chevronDown className="h-4 w-4" />
      </button>
      {/* End Account */}
      {/* Popover */}
      {isMounted && (
        <FloatingPortal>
          <div
            className="flex flex-col rounded-sm border border-gray-200 bg-white shadow-md"
            ref={refs.setFloating}
            style={{ ...floatingStyles, ...styles }}
            {...getFloatingProps()}
          >
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
          </div>
        </FloatingPortal>
      )}
      {/* End Popover */}
    </header>
  )
}
