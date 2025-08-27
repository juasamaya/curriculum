import { Badge, Card } from "./UI"
import './../assets/css/defensive.css'

type Props = {
  index: number
  title: string
  desc: string
  techs: readonly string[]
  url?: string,
  image?: string 
  onClick: () => void
}

export default function PortfolioCard({ image, title, desc, techs, url, onClick  }: Props) {
  return (
    <Card className="h-full" onClick={onClick}>
      <div className="aspect-video rounded-2xl bg-gradient-to-br from-brand2/40 to-brand3/40 grid place-items-center text-white/70">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">{title}</h3>
        <p  className="nowrap text-sm text-white/70">{desc}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {techs.map((tech, i) => (
          <Badge key={i}>{tech}</Badge>
        ))}
      </div>
    </Card>
  )
}