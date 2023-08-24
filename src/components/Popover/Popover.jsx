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
  } = props

  const [_isOpen, _setIsOpen] = useState(false)

  const { refs, context, floatingStyles } = useFloating({
    open: _isOpen,
    onOpenChange: _setIsOpen,
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

  return (
    <>
      <Element className={referenceClassName} ref={refs.setReference} {...getReferenceProps()}>
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
