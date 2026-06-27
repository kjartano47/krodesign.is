export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="text-kroOrange font-black text-xl tracking-widest mb-2">KRÓ</div>
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} KRÓ Design — Designed and made in Akureyri.</p>
      </div>
    </footer>
  )
}
