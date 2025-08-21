import { Container } from "./UI"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Juan Sebastián Amaya Serrano — Built with React, Tailwind & DaisyUI.
      </Container>
    </footer>
  )
}
