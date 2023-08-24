import classNames from 'classnames'

export default function ButtonHamburger({ isOpen, seIsOpen }) {
  const genericHamburgerLine =
    'h-[0.1875rem] w-6 my-[0.125rem] rounded-full bg-gray-700 transform transition ease duration-300'

  return (
    <button
      className="flex flex-col justify-center items-center"
      onClick={() => seIsOpen((hamburger) => !hamburger)}
    >
      <div
        className={classNames(genericHamburgerLine, {
          'rotate-45 translate-y-[0.4375rem]': isOpen,
        })}
      />
      <div
        className={classNames(genericHamburgerLine, {
          'opacity-0': isOpen,
        })}
      />
      <div
        className={classNames(genericHamburgerLine, {
          '-rotate-45 -translate-y-[0.4375rem] ': isOpen,
        })}
      />
    </button>
  )
}
