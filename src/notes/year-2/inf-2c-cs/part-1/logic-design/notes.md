## Combinational logic circuits

Combinational logic circuits have two voltage levels, 0 and 1, which allow it to be built from transistors used as on/off switches. For each of these, the output depends only on the current inputs.

- Inverter (NOT gate) <br>
  1 input and 1 output.

  <!-- Image -->

- AND gate <br>
  2 inputs and 1 output.

  <!-- Image -->

- NAND gate <br>
  2 inputs and 1 output.

  <!-- Image -->

- OR gate <br>
  2 inputs and 1 output.

  <!-- Image -->

- NOR gate <br>
  2 inputs and 1 output.

  <!-- Image -->

We can also have gates with multiple inputs. Certain sets of gates are sufficient to express any boolean function, this is called functional completeness. Such sets include:

- AND + OR + NOT
- NAND
- NOR

## Multiplexer (mux)

The core concept of a multiplexer is a circuit for selecting one of multiple inputs. It has three inputs: $c, i_0, i_1$, and from these it gives one output based on the following minimised sum of products:

$$\bar{c}.i_0 + c.i_1$$

This can be implemented with 1 inverter, 2 AND gates & 1 OR gate.

<!-- Image -->

The sum of products is not practical for circuits with a large number of inputs. The number of possible products can be proportional to $2^n$ where $n$ is the number of inputs.

## Arithmetic circuits

A 32-bit adder has 64 inputs which is too complex for the sum of products method. In order to compensate for this, we need to modularise. Design a generic 1-bit adder block and then replicate it $N$ number of times for an $N$-bit adder.

This block is called a full adder with three inputs ($a,b,c$) and 2 outputs: sum and carry. Each of those are calculated by:

$\text{sum} = \bar{a}.\bar{b}.c + \bar{a}.b.\bar{c} + a.\bar{b}.\bar{c} + a.b.c$

$\text{carry} = b.c + a.c + a.b$

## Ripple carry adder

A 32-bit adder made from a chain of 32 full adders.

<!-- Image Important?! slide 21 -->

The carry bits $c_i$ are computed in sequence $c_1, c_2, ... , c_{32}$ (where $c_{32} = s_{32}$), as $c_i$ depends on $c_{i-1}$. Since the sum bits $s_i$ also depend on $c_i$, they too are computed in sequence.

## Propagation delays

A propagation delay is the time delay between an input signal change and output signal change at the other end. This delay can vary widely and depends on:

- Technology (transistor parameters, wire capacitance, etc.)
- Delay through each gate (function of gate type)
- Number of gates driven by a gate's output (fan out)

Basically, it's how many gates the bits have to pass through to complete an operation.

## Sequential logic circuits

These are similar to the combinational logic circuits above but with the key difference that the output depends on current and past inputs. This essentially means that the circuit has memory. Sequences of inputs generate sequences of outputs, with $n$ feedback signals we have up to $2^n$ stable states.

<!-- Diagram -->

As an example of how this works in action, imagine an OR gate where the output feeds back into the second input. At first, both inputs and out are all 0. If the external input is then set to 1, the output and therefore the feedback is then set to 1. This means that now even if the input is set back to 0, the output will remain 1 due to the feedback. The output never changes back.

<!-- Diagram -->

## Practical circuits

Although the above is just one-time use, there are more practical applications of this concept. Imagine two NOR gates hooked up so that each of their outputs feeds into one of the inputs of the other. _In this case, one gate having the input 0 will affect its output and therefore will mean that regardless of the input on the other it will not affect either output. There are two possible stable states in this system and the outputs are inverse to each other._ -fix this

<!-- Diagram -->

## SR latch

This utilises the set up of the circuit of the last example above. It acts at a 1-bit memory by maintaining $S=0$ and $R=0$. The value can be set or reset, changed to 1 or 0, by setting $S=1$ or $R=1$ respectively for a short time.

<!-- Labelled diragram -->

## Timing of events

Asynchronous sequential logic is where the state and possibly output of a circuit changes whenever the inputs change. However, problems can occur if there are different delays on different circuit paths.

The solution to this is synchronous sequential logic. The state and possibly output can only change at times synchronized to an external signal - the clock.

This clock signal is passed through an additional AND gate with each other signal path to prevent the small spikes of faster signals. The output can only be 1 when the clock is also 1.

## D latch

This extends the SR latch to control its inputs. Suppose some data is computed and then we want to write that bit into memory. If this data is a 1 then we need to send a 1 to $S$ and a 0 to $R$, if the data is a 0 then we want to send a 1 to $R$ and 0 to $S$. However, we also don't want to save every output, only when the data is flagged to be stored.

To solve the first of these problems, we add a NOT gate to the signal path going to $R$. TO solve the second, we also connect up the Write Enable input with an AND gate on each signal path so that it will only write when that outputs a 1. This SR latch with the extra circuit is called a D latch.

<!-- Diagram -->

## Clock memory element

- Level-triggered <br>
  Connects the clock to the D latch so that whenever the clock is 1, D is propagated to Q.

- Edge-triggered <br>
  Adds a NOT and an AND gate to the D latch to create what is called a D flip flop. This creates much smaller spikes exactly when the clock changes to 1 which is a more effective method of preventing glitches.

## General sequential logic

D flip flops are the building blocks that are the foundation of registers.

<!-- Diagram -->

At every rising clock edge, next state signals are propagated to current state signals. Current state signals plus inputs work through combinational logic and generate output and next state signals.

## Hardware FSM
