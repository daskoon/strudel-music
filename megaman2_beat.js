// Mega Man 2 Inspired Strudel Jam
// Paste this into https://strudel.cc/

// Fast, driving tempo for that NES action feel
setcps(155/60/4) 

stack(
  // --- LEAD MELODY (The "Hero" theme) ---
  // Using a square wave with a bit of pulse-width-like feel (lpf/hp filter)
  // Syncopated rhythm and dramatic leaps
  note("<[g4 eb5 d5 c5] [bb4 c5 d5 eb5] [g4 eb5 d5 c5] [f5 g5 ab5 bb5]>")
    .s("square")
    .gain(0.8)
    .lpf(2000)
    .room(0.2) // Just a tiny bit of "hallway" feel
    .pan(0.4),

  // --- HARMONY / COUNTER-MELODY ---
  // Fast arpeggios, typical of NES soundtracks to fake chords
  note("<[c4 eb4 g4 bb4] [ab3 c4 eb4 g4]>*4")
    .s("triangle")
    .gain(0.5)
    .pan(0.6),

  // --- DRIVING BASSLINE ---
  // Constant 8th notes with octaves, very common in MM2
  note("<c2*4 c3*4 g1*4 g2*4 f1*4 f2*4 bb1*4 bb2*4>")
    .s("square")
    .lpf(800)
    .gain(0.7),

  // --- CHIPTUNE DRUMS (Noise Channel & Samples) ---
  stack(
    // Snappy Snare on 2 and 4
    s("~ sd ~ sd"),
    
    // Driving Kick
    s("bd [~ bd] bd [~ bd]"),
    
    // Rapid Hi-hats
    s("hh*8").gain(0.6)
  ).bank("RolandTR808") // 808s work surprisingly well for chiptune if filtered
)
