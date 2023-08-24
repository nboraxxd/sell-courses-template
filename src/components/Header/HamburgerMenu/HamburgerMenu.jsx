import classNames from 'classnames'

export default function HamburgerMenu({ isOpen, seIsOpen }) {
  const genericHamburgerLine =
    'h-[0.1875rem] w-6 my-[0.125rem] rounded-full bg-gray-700 transform transition ease duration-300'

  return (
    <button
      className="boder-r-gray-200 ease flex h-full items-center justify-center gap-2 border-r px-4 transition-all duration-300 hover:bg-black/5"
      onClick={() => seIsOpen((hamburger) => !hamburger)}
    >
      <div className="flex flex-col items-center justify-center">
        <div
          className={classNames(genericHamburgerLine, {
            'translate-y-[0.4375rem] rotate-45': isOpen,
          })}
        />
        <div
          className={classNames(genericHamburgerLine, {
            'opacity-0': isOpen,
          })}
        />
        <div
          className={classNames(genericHamburgerLine, {
            '-translate-y-[0.4375rem] -rotate-45': isOpen,
          })}
        />
      </div>
      <span
        className={classNames('hidden text-sm transition-all duration-300 sm:block', {
          'text-shadow': isOpen,
        })}
      >
        MENU
      </span>
    </button>
  )
}
