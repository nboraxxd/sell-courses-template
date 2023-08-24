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
      {/* Hamburger Icon */}
      <div className="boder-r-gray-200 ease flex h-full w-14 items-center justify-center border-r transition duration-300 hover:bg-black/5">
        <HamburgerMenu isOpen={isOpenSidebar} seIsOpen={seIsOpenSidebar} />
      </div>
      {/* End Hamburger Icon */}
      {/* Logo */}
      <Link to={PATH.home}>
        <img src={logo} alt="Spacedev" className="h-12 w-12 object-cover" />
      </Link>
      {/* End Logo */}
      {/* Account */}
      <button className="mr-4 flex items-center gap-2 p-2" ref={refs.setReference} {...getReferenceProps()}>
        <div className="h-9 w-9 overflow-hidden rounded-full">
          <img src={defaultAvatar} alt="Default avatar" className="h-full w-full object-cover" />
        </div>
        <div className="bg-down-arrow h-3 w-3"></div>
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
