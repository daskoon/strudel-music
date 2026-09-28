// Final Fantasy VI (Uematsu) Inspired Strudel Jam
// Paste this into https://strudel.cc/

setcps(135/60/4) // A driving, dramatic battle tempo

stack(
  // --- DRAMATIC MELODY (Strings/Brass Feel) ---
  // Using filtered sawtooth for that "16-bit orchestra" texture
  note("<[c4 eb4 g4 f4] [ab4 g4 eb4 d4]>")
    .s("sawtooth")
    .lpf(1200)
    .gain(0.6)
    .room(0.5) // Lots of reverb for that "Grand Theater" feel
    .pan(0.5),

  // --- HARP / CRYSTAL ARPEGGIOS ---
  // Fast arps are a FFVI staple for faking high-end orchestration
  note("<[c4 eb4 g4 bb4 ab4 g4 eb4 d4]>*2")
    .s("triangle")
    .decay(0.3)
    .gain(0.4)
    .pan(0.3),

  // --- BOLD ORCHESTRAL BASS ---
  // Moving between roots and fifths
  note("<[c2 c3] [ab1 ab2] [f1 f2] [g1 g2]>")
    .s("sine")
    .gain(0.8)
    .lpf(400),

  // --- BATTLE PERCUSSION ---
  stack(
    // Orchestral Snare "Roll" feel
    s("~ sd:2 ~ [sd:2 sd:2]"),
    // Heavy Kick
    s("bd ~ bd ~"),
    // Fast Hats for tension
    s("hh*16").gain(0.5).pan(0.7)
  ).bank("RolandTR808")
)
