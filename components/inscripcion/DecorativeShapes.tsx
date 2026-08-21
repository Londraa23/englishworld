const COLOR_MAP: Record<string, string> = {
  red: "#CF142B",
  navy: "#002868",
  sky: "#5B9BD5",
  gold: "#C8A225",
}

export function RingShape({
  className,
  color = "red",
  size = 80,
}: {
  className?: string
  color?: keyof typeof COLOR_MAP
  size?: number
}) {
  return (
    <svg
      className={`pointer-events-none ${className || ""}`}
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="40"
        cy="40"
        r="36"
        stroke={COLOR_MAP[color]}
        strokeWidth="3"
        strokeDasharray="8 7"
        opacity="0.35"
      />
    </svg>
  )
}

export function SquareShape({
  className,
  color = "gold",
  size = 44,
}: {
  className?: string
  color?: keyof typeof COLOR_MAP
  size?: number
}) {
  return (
    <div
      className={`pointer-events-none rounded-xl border-[3px] rotate-12 ${className || ""}`}
      style={{ width: size, height: size, borderColor: COLOR_MAP[color], opacity: 0.3 }}
      aria-hidden="true"
    />
  )
}

export function DotCluster({ className, color = "sky" }: { className?: string; color?: keyof typeof COLOR_MAP }) {
  return (
    <div className={`pointer-events-none flex gap-2 ${className || ""}`} aria-hidden="true">
      <span className="w-2.5 h-2.5 rounded-full opacity-40" style={{ backgroundColor: COLOR_MAP[color] }} />
      <span className="w-1.5 h-1.5 rounded-full opacity-30 mt-3" style={{ backgroundColor: COLOR_MAP[color] }} />
      <span className="w-2 h-2 rounded-full opacity-25 mt-1.5" style={{ backgroundColor: COLOR_MAP[color] }} />
    </div>
  )
}
