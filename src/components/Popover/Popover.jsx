import {
  FloatingPortal,
  safePolygon,
  useFloating,
  useHover,
  useInteractions,
  useTransitionStyles,
} from '@floating-ui/react'
import { useState } from 'react'

export default function Popover(props) {
  const {
    children,
    as: Element = 'button',
    referenceClassName,
    floatingClassName = 'flex flex-col rounded-sm border border-gray-200 bg-white shadow-md',
    placement = 'bottom-end',
    renderFloating,
    isOpenFloating,
    setIsOpenFloating,
  } = props

  const [_isOpen, _setIsOpen] = useState(false)

  const { refs, context, floatingStyles } = useFloating({
    open: isOpenFloating ?? _isOpen,
    onOpenChange: setIsOpenFloating ?? _setIsOpen,
    placement: placement,
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

  function onClickReference() {
    if (isMounted === true) {
      !setIsOpenFloating ?? setIsOpenFloating(false)
      setIsOpenFloating ?? _setIsOpen(false)
    }
  }

  return (
    <>
      <Element
        className={referenceClassName}
        ref={refs.setReference}
        {...getReferenceProps()}
        onClick={onClickReference}
      >
        {children}
      </Element>
      {isMounted && (
        <FloatingPortal>
          <div
            className={floatingClassName}
            ref={refs.setFloating}
            style={{ ...floatingStyles, ...styles }}
            {...getFloatingProps()}
          >
            {renderFloating}
          </div>
        </FloatingPortal>
      )}
    </>
  )
}
