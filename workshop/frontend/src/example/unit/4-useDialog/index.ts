import { useCallback, useState } from "react"

export default function useDialog(title: string, content: string) {
  const [open, setOpen] = useState(false)

  const handleClose = useCallback(() => setOpen(false), [])
  const handleOpen = useCallback(() => setOpen(true), [])

  return {
    open,
    handleOpen,
    handleClose,
    title,
    content,
  }
}
