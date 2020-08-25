Ngl making notes on this part doesn't seem the most helpful.

## Main processor functions

There are many tasks required all the time in any system that are distributed among the different components. The processor is responsible for:

- Fetch instruction from instruction memory
- Read the register operands
- Use the ALU for computation
- Access data memory for load/store
- Store the result of a computation or loaded data in the destination register
- Update the program counter (PC)

## Instruction fetch

<!-- Diagram -->

## R-format instructions

1. Read 2 register operands
2. Perform arithmetic/logical operation
3. Write result to register

<!-- Diagram -->

N=5 for the registers because there are 32 registers so its a 5-bit index. Reading/writing data is 32 bits.

If the ALU ever computes a 32-bit output of zero, the 'zero' bit is set to 1. Any other output sets it to 0.

A 32-bit NOR gate is the logic for this.

## Load/store instructions

1. Read register operands
2. Calculate address using 16-bit offset. Use ALU but first sign-extend the offset
3. Read (load) or write (store) the memory
4. Load only - update destination register

<!-- Diagram -->

## Branch instructions

## Simplified datapath

## Main control unit

## ALU control
