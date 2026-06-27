type Props = {
  title: string
  subtitle: string
}

export default function Hero({ title, subtitle }: Props) {
  return (
    <section className="bg-gray-900 text-white py-28 md:py-40">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="w-12 h-1 bg-kroOrange mx-auto mb-10"></div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">{title}</h1>
        <p className="text-lg text-gray-400 max-w-lg mx-auto">{subtitle}</p>
      </div>
    </section>
  )
}
