// Britney Spears - "Toxic" (Structural Recreation)
// Paste this into https://strudel.cc/

setcps(143/60/4) // The high-energy pop BPM

stack(
  // --- THE ICONIC BOLLYWOOD STRING HOOK ---
  // High-pitched, slides, and very rhythmic
  // We use a high-passed sawtooth to mimic that piercing string sound
  note("g5*2 g5*2 g5 [~ f5] eb5 ~ [eb5 d5] c5 [~ d5] [eb5 eb5] eb5 ~")
    .s("sawtooth")
    .hpf(2000)
    .lpq(15)
    .gain(0.4)
    .room(0.3)
    .pan(0.3),

  // --- THE TWANGY SURF GUITAR ---
  // This is the lower, "spy-movie" riff that answers the strings
  note("g2 [~ g2] bb2 [~ bb2] c3 [~ c3] eb3 d3")
    .s("sawtooth")
    .lpf(800)
    .lpq(20)
    .decay(0.1)
    .gain(0.6)
    .pan(0.7),

  // --- THE "PUMPING" SYNTH BASS ---
  // Heavy sidechain feel, constant 8th notes
  note("g1*8")
    .s("sine")
    .lpf(400)
    .gain(0.85),

  // --- DANCE-POP PERCUSSION ---
  stack(
    // Snappy Snare/Clap on 2 and 4
    s("~ sd ~ sd"),
    // Driving Kick (Four-on-the-floor style but with Toxic's syncopation)
    s("bd [~ bd] bd [~ bd]"),
    // Shimmering Hi-hats
    s("hh*16").gain(range(0.2, 0.5, sine)).pan(0.5)
  ).bank("RolandTR808").gain(1.1)
)
