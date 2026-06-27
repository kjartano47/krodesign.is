export default function ProductCard({ title, desc }: { title: string; desc: string }) {
  return (
    <article className="border p-6">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-700">{desc}</p>
    </article>
  )
}
