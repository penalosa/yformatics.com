## Processes

A process is an OS's abstraction of execution. A program is a list of instructions and initialised data. A process is the execution of a program. This is often paired with the abstraction of other computational space like memory.

This abstraction is very important as it allows us to run multiple programs on a CPU. Only one process can run on the CPU in any given instant and different processes may run the same program.

## Inside a process

A process consists of:

- An address space  
  - Code for the running program
  - Data for the running program (static data, heap, stack)

- A CPU state  
  - Program counter (PC) indicating the next instruction
  - Stack pointer (SP) at the current stack position
  - Other general-purpose register values

- A set of OS resources  
  - Open files, network connections, sound channels etc.

## Address space

The process's address space is a 32-bit area of memory that contains everything outlined above. It looks something like this:

<!-- Diagram -->

## Process namespace

Each process is identified by an integer process ID (PID). The PID namespace is global to the system so only one program can have a unique name at one time.

Operations that create processes return a PID, such as `fork()`. Operations on processes take a PID as an argument, such as `kill(), wait(), nice()`. These may differ based on the specific OS.

## Process representation

The OS maintains a data structure to keep track of a process's state. This is called the process control block (PCB) and is identified by the PID. It contains all of the information about the process's state such as the PC, SP and registers when the process isn't running. When the process is running its information may still be kept in the PCB but its execution state will be stored in the CPU directly.

The PCB has many fields, including:

- Process ID (PID)
- Parent process ID
- Execution state
- Program counter, stack pointer, registers
- Address space info
- UNIX user ID and group ID
- Scheduling priority
- Accounting info
- Pointers for state queues

## Running processes

When a process is running, its execution state is stored directly in the CPU. This includes program counter, stack pointer and registers.

The OS may then take control because of:

- A syscall
- An exception
- An interrupt

The OS saves the CPU state of the running process in that process's PCB and stops the process.

When the OS returns the process to the running state it loads the hardware registers with the values from that process's PCB.

The act of switching the CPU from one process to another is called 'context switching'. Systems may do hundreds or thousands of these switches every second. This only takes a few microseconds on today's hardware but that is still relatively expensive compared to thread-based switching. Choosing which process to run next is called scheduling.

## Execution states

Each process has an execution state that indicates what it is currently doing. This can take three forms:

- Ready  
  Waiting to be assigned to a CPU

- Running  
  Executing on a CPU

- Waiting  
  Waiting for an event such as I/O completion or a message from another process

As a process executes, it moves from state to state.

<!-- ## Ready queue -->

## Process creation

All new processes are created by existing processes. The creator is called the parent and the created process is called the child. Depending on the OS, child processes may inherit certain attributes of the parent.

In Unix, when a child is created, the parent may either wait for the child to finish or continue in parallel. This is done through the `fork()` system call. This function:

- Creates and initialises a new PCB  
  - Initialises kernel resources of the new process with resources of the parent
  - Initialises PC, SP to be the same as the parent

- Creates new address space  
  - Initialises new address space with a copy of the entire contents of the address space of the parent

- Places new PCB in the ready queue
