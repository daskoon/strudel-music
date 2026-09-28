// First Strudel Jam!
// Copy this into https://strudel.cc/

setcps(120/60/4) // 120 BPM

stack(
  // The Beat
  s("bd [~ bd] bd sd").bank("RolandTR808"),
  
  // The Hi-hats
  s("hh*8").gain(0.7).pan(0.3),
  
  // A simple bassline
  note("<c2 f2 g2 c2>").s("sawtooth").lpf(500).gain(0.6),
  
  // A chord sequence
  note("<[c3,e3,g3] [f3,a3,c4] [g3,b3,d4] [c3,e3,g3]>")
    .s("triangle")
    .room(0.5)
    .delay(0.5)
    .gain(0.4)
)
