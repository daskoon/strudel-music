// Final Fantasy VII - "One-Winged Angel" (Sephiroth's Theme)
// Paste this into https://strudel.cc/

// Dramatic, high-intensity final boss tempo
setcps(140/60/4) 

stack(
  // --- THE "CHANTED" CHORUS (Sephiroth!) ---
  // Using a filtered sawtooth to mimic the powerful choral chant rhythm
  // A - G# - A - Bb (as noted in research)
  note("<[a4 ab4 a4 bb4] [~ ~ ~ ~]>") // Alternates with the orchestral hits
    .s("sawtooth")
    .lpf(1200)
    .decay(0.15)
    .gain(0.7)
    .room(0.6) // Lots of reverb for that "cathedral" sound
    .pan(0.5),

  // --- THE ICONIC AGGRESSIVE STRINGS (Purple Haze riff) ---
  // Sharp, staccato stabs with high chromaticism
  note("<[e4 e4 e4 eb4] [d4 d4 d4 db4]>*2")
    .s("sawtooth")
    .hpf(1500) // Piercing high-end
    .decay(0.08)
    .gain(0.45)
    .pan(0.3),

  // --- OMINOUS DRIVING BASSLINE ---
  // Fast, chromatic pedal notes that build massive tension
  note("<[e1 e1 e1 e1] [eb1 eb1 eb1 eb1] [d1 d1 d1 d1] [db1 db1 db1 db1]>*2")
    .s("sine")
    .lpf(350)
    .gain(0.9),

  // --- APOCALYPTIC PERCUSSION ---
  stack(
    // Orchestral Snare "Marches"
    s("sd:2*8").gain(range(0.3, 0.7, sine)),
    // Heavy, Thumping Orchestral Kick
    s("bd [~ bd] bd [bd bd]"),
    // High-pitched "bell" or cymbal stabs for drama
    s("~ ~ oh ~").gain(0.5).room(0.8)
  ).bank("RolandTR808").gain(1.2)
)
