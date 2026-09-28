// Accurate Recreation of SonReal's "No Warm Up"
// Paste this into https://strudel.cc/

setcps(126/60/4) // The exact BPM

stack(
  // --- THE ICONIC MAIN RIFF (Brass/Guitar Hybrid) ---
  // This captures that syncopated, jumping melody from the chorus
  // Using a "pulse-width" style sawtooth with a short decay
  note("c4*2 c4*2 c4 [~ eb4] f4 ~ [f4 g4] ab4 [~ bb4] [c5 c5] c5 ~")
    .s("sawtooth")
    .decay(0.1)
    .lpf(1500)
    .lpq(12)
    .gain(0.5)
    .room(0.2)
    .pan(0.3),

  // --- THE "CHORDAL" HARMONY ---
  // Adding weight to the riff with the power-chord layers
  note("<[c3,g3,c4] [ab2,eb3,ab3] [f2,c3,f3] [g2,d3,g3]>")
    .s("triangle")
    .decay(0.2)
    .gain(0.4)
    .pan(0.7),

  // --- SYNCOPATED SUB-BASS ---
  // The bass doesn't just hold the note; it jumps around the root
  note("<[c2 ~ c2 ~ c2 c3 c2 ~] [ab1 ~ ab1 ~ ab1 ab2 ab1 ~] [f1 ~ f1 ~ f1 f2 f1 ~] [g1 ~ g1 ~ g1 g2 g1 ~]>")
    .s("sine")
    .lpf(450)
    .gain(0.85),

  // --- DRUM ARRANGEMENT ---
  stack(
    // Snappy Snare on 2 and 4 (with a little ghost note)
    s("~ sd ~ [sd sd:2]"),
    // Driving 808-style Kick
    s("bd [~ bd] bd [~ bd] bd ~ bd ~").struct("x ~ x ~ x ~ x ~"),
    // Brighter Hi-hats with some velocity variation
    s("hh*16").gain(range(0.3, 0.6, sine)).pan(0.5)
  ).bank("RolandTR808").gain(1.2)
)
