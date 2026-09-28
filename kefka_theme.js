// Final Fantasy VI - Kefka's Theme (Imperial March Edit)
// Paste this into https://strudel.cc/

// 130 BPM - Exactly twice as fast as the 65 BPM version
setcps(130/60/4) 

stack(
  // --- THE "SMIRKING" MELODY (Woodwinds/Piccolo) ---
  // A tighter, more rhythmic version of the theme
  note("<[bb4 c5 db5 e5 f5 e5 db5 c5] [bb4 a4 bb4 db5 f4 ~ f4 ~]>")
    .s("triangle")
    .decay(0.3) // Tighter decay for the faster tempo
    .gain(0.5)
    .room(0.2)
    .pan(0.3),

  // --- REGAL ORCHESTRAL STABS ---
  // Sharp, rhythmic strings to emphasize the 1-2-3-4 march
  note("<[bb3,db4,f4] [gb3,bb3,db4] [f3,a3,c4] [bb3,db4,f4]>")
    .s("sawtooth")
    .lpf(1200)
    .decay(0.15)
    .gain(0.4)
    .pan(0.7),

  // --- THE "AUTHORITARIAN" BASSLINE ---
  // Driving root notes with a bit more punch
  note("<[bb1 bb2] [gb1 gb2] [f1 f2] [bb1 bb2]>")
    .s("sine")
    .lpf(500)
    .gain(0.8),

  // --- IMPERIAL MARCH PERCUSSION ---
  stack(
    // Snappy Snare Rolls on the backbeat
    s("~ sd:2 [sd:2 sd:2] [sd:2 sd:2 sd:2 sd:2]"),
    // Driving Kick on every beat
    s("bd bd bd bd"),
    // Short, crisp Hi-hats
    s("hh*8").gain(0.4).pan(0.5)
  ).bank("RolandTR808").gain(1.0)
)
