import { useEffect, useRef } from 'react'
export function NoticeDialog({
  title,
  message,
  onClose,
}: {
  title: string
  message: string
  onClose: () => void
}) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    ref.current?.showModal()
  }, [])
  return (
    <dialog className="notice-dialog" ref={ref} onClose={onClose} aria-labelledby="notice-title">
      <h3 id="notice-title">{title}</h3>
      <p>{message}</p>
      <button className="button" onClick={() => ref.current?.close()}>
        Close
      </button>
    </dialog>
  )
}
