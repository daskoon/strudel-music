// Early SonReal Vibe (Inspired by "The Closest" / "Good News")
// Paste this into https://strudel.cc/

setcps(85/60/4) // Chill, melodic hip-hop tempo

stack(
  // --- JAZZY PIANO / KEYS ---
  // Using minor/major 7ths for that soulful boom-bap flavor
  // Filtered triangle wave to mimic an electric piano
  note("<[c3,eb3,g3,bb3] [f2,a2,c3,eb3] [bb2,d3,f3,a3] [g2,b2,d3,f3]>")
    .s("triangle")
    .decay(0.4)
    .lpf(1500)
    .lpq(5)
    .gain(0.6)
    .room(0.3)
    .pan(0.4),

  // --- WARM SUB-BASS ---
  // Smooth sine bass that sits right under the piano
  note("<c2 f2 bb1 g1>")
    .s("sine")
    .lpf(400)
    .gain(0.8),

  // --- BOOM-BAP DRUMS ---
  stack(
    // Crisp Snare on 2 and 4
    s("~ sd ~ sd"),
    // "Thumpy" Boom-Bap Kick with some ghost notes
    s("bd [~ bd] [~ bd] [~ bd] bd ~ sd ~").struct("x ~ ~ ~ x ~ x ~"),
    // Shuffling Hi-hats
    s("hh*8").gain(0.5).pan(0.6)
  ).bank("RolandTR808").gain(0.9),

  // --- TEXTURE / AMBIENCE ---
  // A light high-passed noise for that "vinyl crackle" or atmospheric feel
  s("sawtooth*16")
    .hpf(5000)
    .gain(0.15)
    .room(0.8)
)
