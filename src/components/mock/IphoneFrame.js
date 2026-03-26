export default function IphoneFrame({ children }) {
  return (
    <div className="relative mx-auto w-full max-w-[360px]">
      <div className="rounded-[2.5rem] bg-gradient-to-b from-white/20 via-white/5 to-transparent p-[2px] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[#0b0f1c]">
          <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-full bg-black/80 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-60" />
          <div className="relative z-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
