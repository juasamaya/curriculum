import { useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Container, Section, Card, Title, Subtle } from "./components/UI"
import PortfolioCard from "./components/PortfolioCard"
import { content, Lang } from "./content/i18n"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin } from "lucide-react"

export default function App() {
  const [lang, setLang] = useState<Lang>('es')
  const T = content[lang]

  return (
    <div data-theme="cvtheme" className="min-h-screen bg-gradient-to-b from-brand1 to-brand0 text-white">
      <Navbar lang={lang} setLang={setLang} labels={T.nav} />

      {/* HERO */}
      <Section className="border-b border-white/10">
        <Container className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              {T.hero.title}
            </motion.h1>
            <p className="mt-2 text-brand4 font-semibold">{T.hero.role}</p>
            <p className="mt-4 text-lg text-white/80">{T.hero.subtitle}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn btn-outline btn-sm gap-2" href="mailto:contact@example.com"><Mail size={16}/> Email</a>
              <a className="btn btn-outline btn-sm gap-2" href="#" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
              <a className="btn btn-outline btn-sm gap-2" href="#" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
            </div>
          </div>

          <Card className="md:ml-auto">
            <Title className="mb-4">{T.profile.title}</Title>
            <p className="prose prose-invert">{T.profile.about}</p>
            <p className="mt-4">{T.profile.traits}</p>
          </Card>
        </Container>
      </Section>

      {/* PROFILE */}
      <Section id="profile" className="border-b border-white/10">
        <Container>
          <Title>{T.profile.title}</Title>
          <Subtle className="mt-2">{T.profile.skillsIntro}</Subtle>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {T.profile.skills.map((s, i) => (
              <Card key={i}><p>{s}</p></Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* PORTFOLIO */}
      <Section id="portfolio" className="border-b border-white/10">
        <Container>
          <Title>{T.portfolio.title}</Title>
          <Subtle className="mt-2">{T.portfolio.note}</Subtle>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {T.projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <PortfolioCard
                    index={i + 1}
                    title={project.title}
                    desc={project.desc}
                    techs={project.techs}
                    url={project.url}
                    image={project.image}
                  />
                </motion.div>
              ))}
            </div>
        </Container>
      </Section>

      {/* EDUCATION */}
      <Section id="education" className="border-b border-white/10">
        <Container>
          <Title>{T.education.title}</Title>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {T.education.items.map((e, i) => (
              <Card key={i}>
                <h3 className="font-bold text-lg">{e.school}</h3>
                <p className="text-sm text-white/70">{e.place}</p>
                <p className="mt-2 text-white/80">{e.details}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience">
        <Container>
          <Title>{T.experience.title}</Title>
          <div className="mt-6 grid gap-6">
            {T.experience.items.map((job, i) => (
              <Card key={i}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-xl">{job.company}</h3>
                    <p className="text-brand4">{job.role}</p>
                  </div>
                  <p className="text-sm text-white/70">{job.date}</p>
                </div>
                <ul className="mt-4 list-disc pl-5 space-y-2 text-white/90">
                  {job.bullets.map((b: string, idx: number) => <li key={idx}>{b}</li>)}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  )
}
