import { HTMLAttributes, PropsWithChildren } from "react"
import { clsx } from "clsx"

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx("max-w-6xl mx-auto px-4 md:px-6", className)} {...props} />
}

export function Section({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <section className={clsx("py-16 md:py-24", className)} {...props} />
}

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx("glass rounded-3xl p-6", className)} {...props} />
}

export function Title({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={clsx("text-3xl md:text-4xl font-extrabold tracking-tight text-brand4", className)} {...props} />
}

export function Subtle({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={clsx("text-white/70", className)} {...props} />
}

export function Badge({ children }: PropsWithChildren) {
  return <span className="px-3 py-1 rounded-full bg-brand2/40 text-brand4 text-sm">{children}</span>
}
