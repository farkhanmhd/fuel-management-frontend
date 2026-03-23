import Image from "next/image";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* Left panel — decorative */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-zinc-950 p-12 text-white lg:flex">
        {/* Blueprint doodle SVG background */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 600 900"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker
              id="tick"
              markerHeight="6"
              markerWidth="4"
              orient="auto"
              refX="2"
              refY="3"
            >
              <line
                stroke="white"
                strokeWidth="0.8"
                x1="2"
                x2="2"
                y1="0"
                y2="6"
              />
            </marker>
          </defs>

          <g
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* ── PRESSURE GAUGE (top-left) ── */}
            <g opacity="0.13" transform="translate(80, 90)">
              {/* Outer ring */}
              <circle cx="0" cy="0" r="42" strokeWidth="1.2" />
              <circle
                cx="0"
                cy="0"
                r="36"
                strokeDasharray="2 3"
                strokeWidth="0.6"
              />
              {/* Tick marks */}
              <line strokeWidth="1" x1="0" x2="0" y1="-36" y2="-30" />
              <line strokeWidth="1" x1="25.5" x2="21.2" y1="-25.5" y2="-21.2" />
              <line strokeWidth="1" x1="36" x2="30" y1="0" y2="0" />
              <line strokeWidth="1" x1="25.5" x2="21.2" y1="25.5" y2="21.2" />
              <line
                strokeWidth="1"
                x1="-25.5"
                x2="-21.2"
                y1="-25.5"
                y2="-21.2"
              />
              <line strokeWidth="1" x1="-36" x2="-30" y1="0" y2="0" />
              <line strokeWidth="1" x1="-25.5" x2="-21.2" y1="25.5" y2="21.2" />
              {/* Half-tick marks */}
              <line strokeWidth="0.6" x1="18" x2="15.6" y1="-31.2" y2="-27" />
              <line strokeWidth="0.6" x1="-18" x2="-15.6" y1="-31.2" y2="-27" />
              <line strokeWidth="0.6" x1="31.2" x2="27" y1="-18" y2="-15.6" />
              <line strokeWidth="0.6" x1="31.2" x2="27" y1="18" y2="15.6" />
              <line strokeWidth="0.6" x1="-31.2" x2="-27" y1="-18" y2="-15.6" />
              <line strokeWidth="0.6" x1="-31.2" x2="-27" y1="18" y2="15.6" />
              {/* Needle pointing ~2 o'clock */}
              <line strokeWidth="1.2" x1="0" x2="22" y1="4" y2="-26" />
              <circle cx="0" cy="0" r="3.5" strokeWidth="1" />
              {/* Label arc suggestion */}
              <text
                fill="white"
                fontSize="6"
                opacity="0.8"
                stroke="none"
                textAnchor="middle"
                x="0"
                y="18"
              >
                PSI
              </text>
            </g>

            {/* ── FUEL PUMP NOZZLE (top-right) ── */}
            <g opacity="0.11" transform="translate(480, 120)">
              {/* Handle body */}
              <path d="M0 0 L0 -50 Q0 -62 12 -62 L28 -62" strokeWidth="1.2" />
              {/* Nozzle barrel */}
              <path
                d="M28 -62 L28 -56 L52 -56 L56 -60 L56 -52 L52 -48 L28 -48 L28 -62Z"
                strokeWidth="1"
              />
              {/* Grip */}
              <path
                d="M0 0 Q-8 0 -8 -10 L-8 -36 Q-8 -44 0 -44"
                strokeWidth="1"
              />
              <line strokeWidth="2" x1="-8" x2="-8" y1="-18" y2="-28" />
              {/* Hose curl */}
              <path
                d="M0 0 Q8 12 2 24 Q-6 36 4 46 Q14 56 8 70"
                strokeDasharray="3 2"
                strokeWidth="1"
              />
              {/* Dimension lines */}
              <line
                opacity="0.6"
                strokeDasharray="2 2"
                strokeWidth="0.5"
                x1="-22"
                x2="-22"
                y1="-62"
                y2="0"
              />
              <line
                opacity="0.6"
                strokeWidth="0.5"
                x1="-26"
                x2="-18"
                y1="-62"
                y2="-62"
              />
              <line
                opacity="0.6"
                strokeWidth="0.5"
                x1="-26"
                x2="-18"
                y1="0"
                y2="0"
              />
              <text
                fill="white"
                fontSize="5.5"
                opacity="0.7"
                stroke="none"
                textAnchor="middle"
                transform="rotate(-90,-34,-28)"
                x="-34"
                y="-28"
              >
                H: 62
              </text>
            </g>

            {/* ── PIPE CROSS-SECTION (center-left area) ── */}
            <g opacity="0.10" transform="translate(60, 340)">
              {/* Main horizontal pipe */}
              <rect
                height="28"
                rx="2"
                strokeWidth="1"
                width="90"
                x="0"
                y="-14"
              />
              {/* Inner pipe wall */}
              <rect
                height="20"
                rx="1"
                strokeDasharray="3 2"
                strokeWidth="0.6"
                width="82"
                x="4"
                y="-10"
              />
              {/* Tee junction going down */}
              <rect
                height="55"
                rx="2"
                strokeWidth="1"
                width="28"
                x="30"
                y="14"
              />
              <rect
                height="47"
                rx="1"
                strokeDasharray="3 2"
                strokeWidth="0.6"
                width="20"
                x="34"
                y="18"
              />
              {/* Flange rings */}
              <rect
                height="36"
                rx="1"
                strokeWidth="1"
                width="12"
                x="-6"
                y="-18"
              />
              <rect
                height="36"
                rx="1"
                strokeWidth="1"
                width="12"
                x="84"
                y="-18"
              />
              {/* Flow arrows inside */}
              <line
                markerEnd="url(#tick)"
                strokeWidth="0.8"
                x1="20"
                x2="36"
                y1="0"
                y2="0"
              />
              <line
                markerEnd="url(#tick)"
                strokeWidth="0.8"
                x1="44"
                x2="44"
                y1="18"
                y2="42"
              />
              {/* Label */}
              <text
                fill="white"
                fontSize="5.5"
                opacity="0.7"
                stroke="none"
                textAnchor="middle"
                x="45"
                y="-22"
              >
                TEE JUNCTION — DN50
              </text>
            </g>

            {/* ── FLOW METER (center-right) ── */}
            <g opacity="0.11" transform="translate(400, 320)">
              {/* Outer body */}
              <rect
                height="100"
                rx="4"
                strokeWidth="1.2"
                width="60"
                x="-30"
                y="-50"
              />
              {/* Display window */}
              <rect
                height="28"
                rx="2"
                strokeWidth="0.8"
                width="44"
                x="-22"
                y="-40"
              />
              {/* Reading lines */}
              <line strokeWidth="0.5" x1="-16" x2="16" y1="-30" y2="-30" />
              <line strokeWidth="0.5" x1="-16" x2="10" y1="-24" y2="-24" />
              <line strokeWidth="0.5" x1="-16" x2="14" y1="-18" y2="-18" />
              {/* Dial knob */}
              <circle cx="0" cy="18" r="12" strokeWidth="0.8" />
              <circle cx="0" cy="18" r="4" strokeWidth="0.8" />
              <line strokeWidth="1.2" x1="0" x2="0" y1="14" y2="10" />
              {/* Pipe stubs top/bottom */}
              <rect
                height="12"
                rx="1"
                strokeWidth="0.8"
                width="16"
                x="-8"
                y="-60"
              />
              <rect
                height="12"
                rx="1"
                strokeWidth="0.8"
                width="16"
                x="-8"
                y="48"
              />
              {/* Bolt holes on flanges */}
              <circle cx="-4" cy="-56" r="1.5" strokeWidth="0.6" />
              <circle cx="4" cy="-56" r="1.5" strokeWidth="0.6" />
              <circle cx="-4" cy="54" r="1.5" strokeWidth="0.6" />
              <circle cx="4" cy="54" r="1.5" strokeWidth="0.6" />
              {/* Label */}
              <text
                fill="white"
                fontSize="5.5"
                opacity="0.7"
                stroke="none"
                textAnchor="middle"
                x="0"
                y="72"
              >
                FLOW METER
              </text>
            </g>

            {/* ── STORAGE TANK SCHEMATIC (bottom-center) ── */}
            <g opacity="0.10" transform="translate(220, 680)">
              {/* Tank body */}
              <rect
                height="90"
                rx="6"
                strokeWidth="1.2"
                width="140"
                x="0"
                y="0"
              />
              {/* Dome top */}
              <path d="M0 0 Q70 -28 140 0" strokeWidth="1" />
              {/* Liquid level line */}
              <line
                strokeDasharray="4 2"
                strokeWidth="0.8"
                x1="4"
                x2="136"
                y1="55"
                y2="55"
              />
              {/* Fill level hatch */}
              <line
                opacity="0.5"
                strokeWidth="0.5"
                x1="8"
                x2="8"
                y1="60"
                y2="88"
              />
              <line
                opacity="0.5"
                strokeWidth="0.5"
                x1="18"
                x2="18"
                y1="60"
                y2="88"
              />
              <line
                opacity="0.5"
                strokeWidth="0.5"
                x1="28"
                x2="28"
                y1="60"
                y2="88"
              />
              <line
                opacity="0.5"
                strokeWidth="0.5"
                x1="38"
                x2="38"
                y1="60"
                y2="88"
              />
              <line
                opacity="0.5"
                strokeWidth="0.5"
                x1="48"
                x2="48"
                y1="60"
                y2="88"
              />
              <line
                opacity="0.5"
                strokeWidth="0.5"
                x1="58"
                x2="58"
                y1="60"
                y2="88"
              />
              <line
                opacity="0.5"
                strokeWidth="0.5"
                x1="68"
                x2="68"
                y1="60"
                y2="88"
              />
              <line
                opacity="0.5"
                strokeWidth="0.5"
                x1="78"
                x2="78"
                y1="60"
                y2="88"
              />
              <line
                opacity="0.5"
                strokeWidth="0.5"
                x1="88"
                x2="88"
                y1="60"
                y2="88"
              />
              <line
                opacity="0.5"
                strokeWidth="0.5"
                x1="98"
                x2="98"
                y1="60"
                y2="88"
              />
              <line
                opacity="0.5"
                strokeWidth="0.5"
                x1="108"
                x2="108"
                y1="60"
                y2="88"
              />
              <line
                opacity="0.5"
                strokeWidth="0.5"
                x1="118"
                x2="118"
                y1="60"
                y2="88"
              />
              <line
                opacity="0.5"
                strokeWidth="0.5"
                x1="128"
                x2="128"
                y1="60"
                y2="88"
              />
              {/* Outlet pipe bottom */}
              <rect
                height="18"
                rx="1"
                strokeWidth="0.8"
                width="24"
                x="58"
                y="88"
              />
              {/* Vent pipe top */}
              <line strokeWidth="0.8" x1="70" x2="70" y1="-28" y2="-48" />
              <line strokeWidth="0.8" x1="60" x2="80" y1="-48" y2="-48" />
              {/* Measurement arrow */}
              <line
                opacity="0.7"
                strokeDasharray="2 2"
                strokeWidth="0.5"
                x1="150"
                x2="150"
                y1="0"
                y2="90"
              />
              <line
                opacity="0.7"
                strokeWidth="0.5"
                x1="145"
                x2="155"
                y1="0"
                y2="0"
              />
              <line
                opacity="0.7"
                strokeWidth="0.5"
                x1="145"
                x2="155"
                y1="90"
                y2="90"
              />
              <text
                fill="white"
                fontSize="5.5"
                opacity="0.7"
                stroke="none"
                textAnchor="start"
                x="156"
                y="48"
              >
                3000 L
              </text>
              {/* Label */}
              <text
                fill="white"
                fontSize="5.5"
                opacity="0.7"
                stroke="none"
                textAnchor="middle"
                x="70"
                y="-58"
              >
                STORAGE TANK — TYPE A
              </text>
            </g>

            {/* ── VALVE SYMBOL (upper-center) ── */}
            <g opacity="0.09" transform="translate(290, 190)">
              {/* Pipe in */}
              <line strokeWidth="1.2" x1="-50" x2="-18" y1="0" y2="0" />
              {/* Pipe out */}
              <line strokeWidth="1.2" x1="18" x2="50" y1="0" y2="0" />
              {/* Butterfly valve body (bowtie) */}
              <path d="M-18 -14 L18 14 L18 -14 L-18 14 Z" strokeWidth="1" />
              {/* Actuator stem */}
              <line strokeWidth="1" x1="0" x2="0" y1="-14" y2="-34" />
              <rect
                height="10"
                rx="2"
                strokeWidth="0.8"
                width="20"
                x="-10"
                y="-44"
              />
              {/* Label */}
              <text
                fill="white"
                fontSize="5.5"
                opacity="0.7"
                stroke="none"
                textAnchor="middle"
                x="0"
                y="26"
              >
                GATE VALVE — 2"
              </text>
            </g>

            {/* ── SMALL DIAL / THERMOMETER (right edge) ── */}
            <g opacity="0.09" transform="translate(545, 500)">
              {/* Bulb */}
              <circle cx="0" cy="50" r="10" strokeWidth="1" />
              {/* Stem */}
              <rect
                height="110"
                rx="4"
                strokeWidth="1"
                width="8"
                x="-4"
                y="-60"
              />
              {/* Scale ticks */}
              <line strokeWidth="0.8" x1="4" x2="10" y1="-50" y2="-50" />
              <line strokeWidth="0.8" x1="4" x2="10" y1="-30" y2="-30" />
              <line strokeWidth="0.8" x1="4" x2="10" y1="-10" y2="-10" />
              <line strokeWidth="0.8" x1="4" x2="10" y1="10" y2="10" />
              <line strokeWidth="0.8" x1="4" x2="10" y1="30" y2="30" />
              {/* Half ticks */}
              <line strokeWidth="0.5" x1="4" x2="8" y1="-40" y2="-40" />
              <line strokeWidth="0.5" x1="4" x2="8" y1="-20" y2="-20" />
              <line strokeWidth="0.5" x1="4" x2="8" y1="0" y2="0" />
              <line strokeWidth="0.5" x1="4" x2="8" y1="20" y2="20" />
              <line strokeWidth="0.5" x1="4" x2="8" y1="40" y2="40" />
              {/* Labels */}
              <text
                fill="white"
                fontSize="5"
                opacity="0.7"
                stroke="none"
                textAnchor="start"
                x="12"
                y="-48"
              >
                100°
              </text>
              <text
                fill="white"
                fontSize="5"
                opacity="0.7"
                stroke="none"
                textAnchor="start"
                x="12"
                y="-8"
              >
                50°
              </text>
              <text
                fill="white"
                fontSize="5"
                opacity="0.7"
                stroke="none"
                textAnchor="start"
                x="12"
                y="32"
              >
                0°
              </text>
              <text
                fill="white"
                fontSize="5.5"
                opacity="0.7"
                stroke="none"
                textAnchor="middle"
                x="0"
                y="-72"
              >
                TEMP
              </text>
            </g>

            {/* ── DIMENSION / CALLOUT LINES scattered ── */}
            <g opacity="0.07">
              {/* Top-left corner cross-hair */}
              <line strokeWidth="0.6" x1="30" x2="50" y1="20" y2="20" />
              <line strokeWidth="0.6" x1="40" x2="40" y1="10" y2="30" />
              {/* Bottom-right cross-hair */}
              <line strokeWidth="0.6" x1="540" x2="570" y1="820" y2="820" />
              <line strokeWidth="0.6" x1="555" x2="555" y1="810" y2="830" />
              {/* Scattered dimension annotations */}
              <line
                strokeDasharray="2 2"
                strokeWidth="0.5"
                x1="160"
                x2="220"
                y1="160"
                y2="160"
              />
              <text
                fill="white"
                fontSize="5"
                stroke="none"
                textAnchor="middle"
                x="190"
                y="155"
              >
                Ø 50mm
              </text>
              <line
                strokeDasharray="2 2"
                strokeWidth="0.5"
                x1="370"
                x2="430"
                y1="560"
                y2="560"
              />
              <text
                fill="white"
                fontSize="5"
                stroke="none"
                textAnchor="middle"
                x="400"
                y="555"
              >
                L = 200
              </text>
            </g>
          </g>
        </svg>

        {/* Top brand */}
        <div className="relative z-10">
          <div className="flex items-center gap-3">
            <Image
              alt="Alfa Scorpii"
              className="rounded-xl bg-white object-contain p-2 shadow"
              height={48}
              src="/alfa-scorpii.png"
              width={48}
            />
            <span className="font-semibold text-white/70 text-xs uppercase tracking-[0.2em]">
              Alfa Scorpii
            </span>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="relative z-10 space-y-3">
          <h2 className="font-semibold text-2xl leading-snug tracking-tight">
            Fuel Management Information System
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Centralized monitoring and reporting for fuel operations
          </p>
        </div>
      </div>

      {/* Right panel — login form */}
      <div className="flex items-center justify-center bg-background p-8">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
