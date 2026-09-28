# Strudel Music Learning Notes

Strudel is a music live coding environment for the browser, porting the TidalCycles pattern language to JavaScript.

## Core Concepts

- **Cycles**: The basic unit of time. Patterns repeat every cycle.
- **CPS**: Cycles Per Second. Use `setcps(1)` to set the tempo.
- **Chaining**: Most things in Strudel are done by chaining functions: `s("bd sd").gain(0.8)`.

## Basic Functions

- `s(pattern)`: Play a sound or sample.
- `n(pattern)`: Select a sample index or note offset.
- `note(pattern)`: Play musical notes (e.g., "c4 e4 g4").
- `gain(amount)`: Control volume (0 to 1).
- `pan(amount)`: Stereo panning (0 to 1, 0.5 is center).

## Sounds & Synths

- **Default Drums**: `bd` (bass), `sd` (snare), `hh` (closed hat), `oh` (open hat), `cp` (clap).
- **Banks**: `bank("RolandTR808")`, `bank("RolandTR909")`.
- **Synths**: `sine`, `sawtooth`, `square`, `triangle` (default).

## Mini-Notation (Pattern Strings)

- `"a b"`: Sequential (a then b).
- `"[a b] c"`: Sub-grouping (a and b take half the cycle together).
- `"a*2"`: Speed up (a twice in its slot).
- `"a/2"`: Slow down (a once every two cycles).
- `"<a b>"`: Alternate (a in cycle 1, b in cycle 2).
- `"a:2"`: Select sample index 2 for sound 'a'.

## Effects & Modifiers

- `room(0.5)`: Reverb room size.
- `delay(0.5)`: Delay feedback/amount.
- `lpf(freq)`: Low pass filter.
- `hpf(freq)`: High pass filter.
- `fast(factor)`: Speed up the whole pattern.
- `slow(factor)`: Slow down the whole pattern.
- `rev()`: Reverse the pattern.
- `struct(pattern)`: Use a pattern string to define the rhythm (e.g., "x ~ x x").

## DougDoug Style (DJ Mug Fucker)

DougDoug popularized Strudel by recreating Eurodance hits like "Better Off Alone". Here are his signature moves:

- **The Acid Sound**: Use a sawtooth wave with a low-pass filter and high resonance.
  - `.s("sawtooth").lpf(1200).lpq(20)`
- **Speeding Up**: Use `.fast(2)` or `.fast(4)` to turn a simple melody into a techno lead.
- **Layering with Stack**: Use `stack()` to keep drums, bass, and melody organized.
- **The "Better Off Alone" Melody**:
  - `note("eb4 bb3 eb4 g4 f4 d4 bb3 d4 f4").fast(2).s("sawtooth")`

## Example Patterns

```javascript
// DougDoug's Alice Deejay Style
stack(
  // Acid Lead
  note("eb4 bb3 eb4 g4 f4 d4 bb3 d4 f4")
    .s("sawtooth")
    .fast(2)
    .lpf(1200)
    .lpq(20), 

  // Techno Kick
  s("bd*4"),

  // Off-beat Hats
  s("~ hh").struct("x x x x").gain(0.8)
)
```
