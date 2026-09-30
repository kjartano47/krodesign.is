type Props = {
  title: string
}

export default function PageBanner({ title }: Props) {
  return (
    <section className="bg-kroOrange py-14">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-black text-black break-words">{title}</h1>
      </div>
    </section>
  )
}
