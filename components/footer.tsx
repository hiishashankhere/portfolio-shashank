export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-purple-500/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center text-gray-400">
          <p>© {currentYear} Shashank. All rights reserved.</p>
          <p className="text-sm mt-2">Designed & Built with passion</p>
        </div>
      </div>
    </footer>
  )
}
