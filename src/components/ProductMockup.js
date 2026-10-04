import React from 'react';
import { motion } from 'framer-motion';

const ProductMockup = () => {
  const checks = [
    ['Login Flow', 'Passed'],
    ['Checkout Process', 'Passed'],
    ['Payment Integration', 'Passed'],
    ['User Dashboard', 'Running'],
  ];

  return (
    <motion.div
      initial={{ opacity:0,y:35,scale:.97 }}
      animate={{ opacity:1,y:0,scale:1 }}
      transition={{ duration:.85,delay:.25,ease:[.22,1,.36,1] }}
      className="relative mx-auto w-full max-w-2xl"
    >
      <motion.div
        animate={{ y:[0,-5,0], rotateX:[0,.35,0], rotateY:[0,-.35,0] }}
        transition={{ duration:9,repeat:Infinity,ease:'easeInOut' }}
        style={{ transformStyle:'preserve-3d',perspective:1400 }}
        className="animated-border shimmer-surface relative rounded-[24px] border border-white/[0.10] bg-[#08111f]/95 p-1.5 shadow-[0_35px_100px_rgba(0,0,0,.45)]"
      >
        <div className="absolute -inset-8 -z-10 rounded-[40px] bg-cyan-400/[0.035] blur-3xl" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[24px]"><span className="scan-line" /></div>

        <div className="overflow-hidden rounded-[19px] border border-white/[0.07] bg-[#070c16]">
          <div className="flex items-center justify-between border-b border-white/[0.07] bg-white/[0.02] px-4 py-3 sm:px-5">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-red-400/55"/><span className="h-2 w-2 rounded-full bg-amber-300/55"/><span className="h-2 w-2 rounded-full bg-emerald-400/55"/></div>
              <span className="text-[10px] text-white/35 sm:text-xs">QraftAI / Control Center</span>
            </div>
            <div className="flex items-center gap-2 text-[9px] text-emerald-300"><span className="status-dot"/> Agent Online</div>
          </div>

          <div className="grid min-h-[350px] grid-cols-[72px_1fr] sm:grid-cols-[116px_1fr]">
            <aside className="border-r border-white/[0.07] bg-white/[0.012] p-2.5 sm:p-3">
              <div className="mb-3 rounded-lg bg-cyan-300/[0.08] px-2.5 py-2 text-[9px] text-cyan-200 sm:text-[10px]">Overview</div>
              {['Tests','Agents','Runs','Reports','Settings'].map((item) => <div key={item} className="rounded-lg px-2.5 py-2 text-[9px] text-white/32 sm:text-[10px]">{item}</div>)}
            </aside>

            <main className="p-3.5 sm:p-5">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div><p className="text-[9px] uppercase tracking-[.18em] text-white/30">Test execution</p><h3 className="mt-1 text-base font-semibold sm:text-lg">Good morning, Agent.</h3></div>
                <div className="text-right"><p className="text-[8px] uppercase tracking-[.14em] text-white/30">Pass rate</p><motion.p animate={{ opacity:[.65,1,.65] }} transition={{ duration:2.8,repeat:Infinity }} className="text-xl font-semibold text-cyan-300 sm:text-2xl">98.7%</motion.p></div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {[['184','Tests run'],['182','Passed'],['2','Failed']].map(([value,label],i) => (
                  <motion.div key={label} whileHover={{ y:-2 }} className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-2.5 sm:p-3">
                    <p className={`text-base font-semibold sm:text-lg ${i===2 ? 'text-rose-300' : ''}`}>{value}</p><p className="mt-1 text-[8px] text-white/30 sm:text-[9px]">{label}</p>
                  </motion.div>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-[1.25fr_.75fr]">
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.018] p-3">
                  <div className="mb-2.5 flex items-center justify-between"><span className="text-[10px] font-medium">Test execution</span><span className="text-[8px] text-white/25">Last 24 hours</span></div>
                  <div className="flex h-24 items-end gap-1.5 sm:h-28">
                    {[35,48,42,58,52,66,61,75,68,82,78,90].map((height,i) => <motion.span key={i} initial={{ height:0 }} animate={{ height:`${height}%` }} transition={{ delay:.6+i*.05,duration:.55 }} className="dashboard-bar flex-1 rounded-t-sm bg-gradient-to-t from-cyan-400/20 to-cyan-300/70" />)}
                  </div>
                </div>
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.018] p-3">
                  <p className="mb-2.5 text-[10px] font-medium">AI Insights</p>
                  <div className="rounded-lg border border-amber-300/10 bg-amber-300/[0.035] p-2.5"><p className="text-[9px] text-amber-200">Found 3 flaky tests</p><p className="mt-1 text-[8px] leading-4 text-white/30">Suggested fixes are ready for review.</p></div>
                </div>
              </div>

              <div className="mt-3 rounded-xl border border-white/[0.07] bg-white/[0.018] p-3">
                <div className="mb-2.5 flex items-center justify-between"><span className="text-[10px] font-medium">Recent tests</span><span className="text-[8px] text-white/25">Live</span></div>
                <div className="grid gap-1.5 sm:grid-cols-2">
                  {checks.map(([name,status],i) => <motion.div key={name} initial={{ opacity:0,x:8 }} animate={{ opacity:1,x:0 }} transition={{ delay:.8+i*.1 }} className="flex items-center justify-between rounded-lg bg-white/[0.022] px-2.5 py-2"><span className="flex items-center gap-2 text-[9px] text-white/55"><span className={`h-1.5 w-1.5 rounded-full ${status==='Running'?'bg-cyan-300':'bg-emerald-400'}`}/>{name}</span><span className={`text-[8px] ${status==='Running'?'text-cyan-300':'text-emerald-300'}`}>{status}</span></motion.div>)}
                </div>
              </div>
            </main>
          </div>
        </div>
      </motion.div>

      <motion.div animate={{ y:[0,-4,0] }} transition={{ duration:5,repeat:Infinity,ease:'easeInOut' }} className="absolute -bottom-4 right-0 rounded-xl border border-white/10 bg-[#0b1424]/95 px-3.5 py-2.5 shadow-xl backdrop-blur-xl sm:-right-5">
        <div className="flex items-center gap-2.5"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-300/[0.08] text-cyan-300">✦</span><div><p className="text-[8px] uppercase tracking-[.14em] text-white/30">Agent status</p><p className="text-[10px] font-medium">Learning your product</p></div></div>
      </motion.div>
    </motion.div>
  );
};

export default ProductMockup;
