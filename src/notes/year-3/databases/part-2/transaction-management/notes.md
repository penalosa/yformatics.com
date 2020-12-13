## Introduction

A transaction is a sequence of operations that together make up one logical unit.

We want either all the operations in each sequence to execute or none. Any other outcome with leave the system with inconsistencies.

A transaction goes through several states throughout its life-cycle:

<!-- Graphic -->

## Scheduling

A schedule is a sequence of operations taken from a set of transactions where the order of the operations in the schedule are the same as in the transactions.

A schedule is called ‘serial’ if all of the operations from one transaction are executed before any of the next one. It is called ‘concurrent’ otherwise.

Most systems will use concurrent execution to increase efficiency. This increases throughput and reduces response time. The operations of different transactions are said to be ‘interleaved’.

## ACID rules

When doing concurrent computation, it is important to remember the ACID approach. This means that each transaction should have the properties of:

Atomicity  
Either all operations are carried out or none are.

Consistency  
Successful execution of a transaction leaves the database in a coherent state.

Isolation  
Each transaction is protected from the effects of other transactions executed concurrently.

Durability  
On successful completion, changes persist.

When creating a schedule, any concurrent operations must create a schedule that is equivalent to a serial one. This essentially amounts to keeping read/write pair operations together. From here on out only the read/writes will be referred to as operations, the rest is not consequential.

## Conflicts

Two operations from different transactions are said to be ‘conflicting’ if they refer to the same data item and at least one of them is a write. Two consecutive non-conflicting operations from different transactions in a schedule can be swapped.

A schedule is called ‘conflict serialisable’ if it can be transformed into a serial schedule by a sequence of swaps.

## Precedence graphs

## Aborts

So far we have assumed that transactions commit successfully after the last operation. But now we need to show either the commit or abort opertaion in the sequence to know if an abort is triggered.

Let's look at an example where the operations of $T_1$ sandwich the operations of $T_2$ such that $T_2$ is reading a value that has been written by $T_1$. If $T_1$ then `aborts` after $T_2$ has finished then $T_2$ also becomes invalid. This situation is called a 'dirty read'. To prevent this $T_2$ would not be allowed to `commit` until $T_1$ does to ensure any values it has read are permanent.

## Concurrency control

To avoid errors that could be caused by aborts we need to introduce an obejct called a 'lock'. This is a bookkeeping object associated with a data item. It tells us whether a data item is abvailable for read and/or write.

Locks have an owner, the transaction currently operating on the data item. A shared lock is available for read by the owner and can be aquired by more than one transaction. There can be multiple shared locks owned by the same transaction and refering to the same data item. An excusive lock is avilible for both read and write by the owner but cannot be aquired by other transactions. Two locks are said to be conflicting if at least one of them is excusive.

We can now add lock operations to our schedule:

- $s(A)$ - a shared lock on $A$ has been aquired
- $x(A)$ - an excusive lock on $A$ has been aquired
- $u(A)$ - lock on $A$ is released

Note that a transaction connot aquire a lock on $A$ if another transaction has an excusive lock on $A$. Equally a transaction cannot aquire an exclusive lock on $A$ until all locks on $A$ have been released. If either of these rules are not satisfied then the schedule is invalid.
