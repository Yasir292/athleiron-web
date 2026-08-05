import { Target, Users, Globe, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Performance First",
    desc: "Every stitch is designed to support movement, recovery, and results.",
  },
  {
    icon: Users,
    title: "Built For Athletes",
    desc: "We test our gear with real athletes — not mannequins — to ensure it performs under pressure.",
  },
  {
    icon: Globe,
    title: "Responsible Manufacturing",
    desc: "We prioritise recycled materials and ethical factories to reduce our footprint.",
  },
  {
    icon: Award,
    title: "Durability Guaranteed",
    desc: "If your gear doesn't last, we make it right. Quality is our promise.",
  },
];

export function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Our Story</h1>
        <p className="mt-4 text-lg text-iron-300">
          ATHLEIRON was born from a simple belief: athletes deserve gear that works
          as hard as they do. No shortcuts. No compromises. Just premium
          sportswear built to outlast the competition.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1200&auto=format&fit=crop&q=80"
            alt="Gym training"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-white">From the UK, for the world</h2>
          <p className="mt-4 text-iron-400">
            Designed in the UK and tested in real gyms, tracks, and fields, our
            collections combine technical performance fabrics with clean,
            athletic style. We focus on the details that matter: flatlock seams
            that don't chafe, waistbands that stay put, and fabrics that breathe
            when you're pushing your limits.
          </p>
          <p className="mt-4 text-iron-400">
            Whether you're training for a marathon, chasing a PB, or just
            starting your fitness journey, ATHLEIRON is made to move with you.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-center text-2xl font-bold text-white">What we stand for</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-iron-800 bg-iron-900 p-6 text-center"
            >
              <div className="mx-auto mb-4 inline-flex rounded-full bg-flame-500/10 p-3 text-flame-500">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white">{v.title}</h3>
              <p className="mt-2 text-sm text-iron-400">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 rounded-2xl bg-iron-900 p-8 text-center sm:p-12">
        <h2 className="text-2xl font-bold text-white">The ATHLEIRON difference</h2>
        <p className="mx-auto mt-4 max-w-2xl text-iron-400">
          We don't chase trends. We build timeless performance pieces that you'll
          reach for session after session. Durable. Functional. Undeniably
          athletic.
        </p>
      </div>
    </div>
  );
}
