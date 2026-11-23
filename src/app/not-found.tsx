import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-[#090d16] text-white">
      <div className="p-3 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 font-mono text-xs font-semibold mb-4">
        404 • Page Not Found
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
        Page Not Found
      </h1>
      <p className="text-slate-400 text-sm max-w-md mb-6">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}
