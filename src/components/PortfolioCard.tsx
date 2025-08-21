import { Badge, Card } from "./UI"

type Props = {
  index: number
  title: string
  desc: string
  techs: readonly string[]
  url?: string,
  image?: string 
}

export default function PortfolioCard({ image, title, desc, techs, url }: Props) {
  return (
    <Card className="h-full">
      <div className="aspect-video rounded-2xl bg-gradient-to-br from-brand2/40 to-brand3/40 grid place-items-center text-white/70">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-white/70">{desc}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {techs.map((tech, i) => (
          <Badge key={i}>{tech}</Badge>
        ))}
      </div>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-sm text-brand2 hover:underline"
        >
          Ver proyecto →
        </a>
      )}
    </Card>
  )
}