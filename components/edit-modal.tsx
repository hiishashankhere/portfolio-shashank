"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface EditModalProps {
  isOpen: boolean
  onClose: () => void
  content: any
  setContent: (content: any) => void
}

export default function EditModal({ isOpen, onClose, content, setContent }: EditModalProps) {
  const [editedContent, setEditedContent] = useState(content)

  const handleSave = () => {
    setContent(editedContent)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 rounded-lg border border-purple-500/30 w-full max-w-2xl max-h-screen overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-purple-500/20 sticky top-0 bg-slate-900">
          <h2 className="text-2xl font-bold">Edit Content</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded transition">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              value={editedContent.name}
              onChange={(e) => setEditedContent({ ...editedContent, name: e.target.value })}
              className="w-full px-4 py-2 bg-slate-800 border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              value={editedContent.title}
              onChange={(e) => setEditedContent({ ...editedContent, title: e.target.value })}
              className="w-full px-4 py-2 bg-slate-800 border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              value={editedContent.description}
              onChange={(e) => setEditedContent({ ...editedContent, description: e.target.value })}
              className="w-full px-4 py-2 bg-slate-800 border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none h-24"
            />
          </div>

          <div className="border-t border-purple-500/20 pt-6">
            <h3 className="font-bold mb-4">Stats</h3>
            <div className="space-y-4">
              {editedContent.stats?.map((stat: any, index: number) => (
                <div key={index} className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={stat.label}
                    onChange={(e) => {
                      const newStats = [...editedContent.stats]
                      newStats[index].label = e.target.value
                      setEditedContent({ ...editedContent, stats: newStats })
                    }}
                    placeholder="Label"
                    className="px-4 py-2 bg-slate-800 border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    value={stat.value}
                    onChange={(e) => {
                      const newStats = [...editedContent.stats]
                      newStats[index].value = e.target.value
                      setEditedContent({ ...editedContent, stats: newStats })
                    }}
                    placeholder="Value"
                    className="px-4 py-2 bg-slate-800 border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-purple-500/20 pt-6">
            <h3 className="font-bold mb-4">Skills</h3>
            <textarea
              value={editedContent.skills?.join(", ") || ""}
              onChange={(e) =>
                setEditedContent({
                  ...editedContent,
                  skills: e.target.value.split(",").map((s) => s.trim()),
                })
              }
              placeholder="Enter skills separated by commas"
              className="w-full px-4 py-2 bg-slate-800 border border-purple-500/30 rounded-lg text-white focus:border-purple-500 focus:outline-none h-20"
            />
          </div>

          <div className="flex gap-4 justify-end border-t border-purple-500/20 pt-6">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700" onClick={handleSave}>
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
