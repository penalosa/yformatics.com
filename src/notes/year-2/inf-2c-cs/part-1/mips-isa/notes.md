## Processor instructions

Instruction set architecture (ISA) is the language of the computer. It is the interface between the software and the hardware. The ISA is like a contract which ensures that if it is given a program that is functionally correct and abides by the semantics of the ISA, it will correctly run.

The ISA abstracts away the hardware details from the programmer, similar to how an object hides its implementation details from the users. A good analogy is to imagine you are trying to get from point A to point B, you don't need to know the number of wheels on the vehicle used.

An implementation of an ISA is called a microarchitecture. Bear in mind there can be multiple different implementations. Changes to the microarchitecture can make the same system run faster and more efficiently, but it will still execute the same program.

## Assembly language

Machine instructions are strings of binary numbers. This makes them very difficult for humans to understand. Assembly language provides a symbolic representation of machine instrcutions which still has a 1-1 mapping to machine language. There can be no ambiguity in machine instructions and so the same applies to assembly.

This also means that instructoins are often more broken up than higher level languages. For example, accessing data and operating on it are separate steps; MIPS does not allow you to operate on memory directly.

## Logical operators

In MIPS, data processing instructions have a different form to most languages. They are written as _operation, destination, 1st operand, 2nd operand_. For example:

$$\text{add} \space a,b,c \\, \to \\, a = b + c \qquad \text{sub} \space a,b,c \\, \to \\, a = b - c$$

Some instructions are bit-wise:

- and
- or
- xor

Others are shift instructions:

- `sll a,b,shamt` - a = b shifted left by shift amount
- `srl a,b,shamt` - a = b shifted right by shift amount (logical)
- `sra a,b,shamt` - a = b shifted right by shift amount (arithmetic)

## Registers

Registers are storage locations inside the processor that hold program variables and control state. They are generally the same size as a machine's word (32 or 64 bits). MIPS processors operate only on registers. This means they will not access data in the system's memory.

Processors have relatively few programmer-exposed registers. Since MIPS can only process data in registers, much of the code is moving data in and out of different registers and reading/writing to memory.

## Instruction example

## Immediate operands

## Loading operands

## Data transfer
