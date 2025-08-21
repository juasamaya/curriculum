import { Container } from './UI'
import { Lang } from '../content/i18n'

type Props = {
  lang: Lang
  setLang: (l: Lang) => void
  labels: { profile: string; portfolio: string; education: string; experience: string }
}

export default function Navbar({ lang, setLang, labels }: Props) {
  return (
    <div className="sticky top-0 z-50">
      <div className="backdrop-blur bg-base-100/70 border-b border-white/10">
        <Container className="navbar px-0">
          <div className="flex-1">
            <a href="#" className="text-xl md:text-2xl font-black">Juan Sebastián<span className="text-brand4">.dev</span></a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal hidden md:flex gap-2">
              <li><a href="#profile">{labels.profile}</a></li>
              <li><a href="#portfolio">{labels.portfolio}</a></li>
              <li><a href="#education">{labels.education}</a></li>
              <li><a href="#experience">{labels.experience}</a></li>
            </ul>
            <select className="select select-sm ml-3" value={lang} onChange={e => setLang(e.target.value as Lang)}>
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
          </div>
        </Container>
      </div>
    </div>
  )
}
