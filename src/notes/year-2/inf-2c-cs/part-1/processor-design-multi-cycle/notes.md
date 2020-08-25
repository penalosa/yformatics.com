## Drawbacks of single cycle

Although single cycle processors form the foundation of many of the processing concepts, there are many ways they are lacking:

- Speed <br>
  Cycle time must be long enough for the most complex instruction to complete. The average instruction takes far less time and so there is a lot of inefficiencies there.

- Cost <br>
  Functional circuits cannot be reused within one instruction's execution.

Processor speed execution time is measured by:

$$\text{instruction count} \times \text{cycles per instruction} \times \text{cycle time}$$

## Multi-cycle processors

The basic idea is to break up the execution of each instruction into multiple cycles. Ensure that the actions performed within each cycle are 'generic', i.e. common to many instructions. Reuse a common set of datapath and control components across cycles.

All of this ensures that no instructions take more time than necessary. The entire processor is being used in a modular way as much as possible.

## Datapath building blocks

- One memory <br>
  - Shared between instructions & data
  - Common interface
- Registers <br>
  - Read early in instruction execution
  - Write late (if ever) in instruction execution
- One ALU <br>
  - All PC calculations (conditional & unconditional)
  - All arithmetic (including branch condition evaluation)

## Basic operation

Each instruction takes multiple cycles to execute, meaning each cycle has at least one basic function performed. Multiple functions can be performed in one cycle if they use different functional units.

The cycle time is determined by the propagation delay through the slowest functional unit. This is the biggest delay between any two registers. It is also called the critical path.

The number of cycles varies for different instructions.

At the end of each cycle, data required in subsequent cycles must be stored somewhere:

- Data used by subsequent instructions stored in memory and registered, as in a single cycle processor.
- Data for the current instruction is stored in special registers not visible to the programmer.

## Control signals

## Control design

## Cycle by cycle

## Other stuff
