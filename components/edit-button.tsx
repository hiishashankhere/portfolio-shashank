"use client"
import { Edit2 } from "lucide-react"

interface EditButtonProps {
  isEditing: boolean
  setIsEditing: (value: boolean) => void
}

export default function EditButton({ isEditing, setIsEditing }: EditButtonProps) {
  return (
    <button
      onClick={() => setIsEditing(!isEditing)}
      className="fixed bottom-8 right-8 z-40 p-4 rounded-full bg-purple-600 hover:bg-purple-700 transition shadow-lg"
    >
      <Edit2 className="w-6 h-6" />
    </button>
  )
}
