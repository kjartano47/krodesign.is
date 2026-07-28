type Props = {
  title: string
  subtitle: string
}

export default function Hero({ title, subtitle }: Props) {
  return (
    <section className="bg-kroOrange py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-black break-words">{title}</h1>
        <p className="text-xl text-black/70">{subtitle}</p>
      </div>
    </section>
  )
}
