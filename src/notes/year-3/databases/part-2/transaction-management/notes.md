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

## Two-phase locking

This is a specific protocol which, if followed, guarentee good properties for schedules with locks. There are two main rules that are applied:

1. Before reading/wring a data item, a transaction must aquire a lock on it.
2. A transactions cannot request additional locks once it releases any locks.

A transaction undergoes two two processes:

1. The 'growing phase' where locks are acquired.
2. The 'shrinking phase' where locks are released.

Every completed schedule of committed transactions that follow the 2PL protocol is conflict serializable. The converse is not necessarily true.

## Strict 2PL

Note that a transaction can follow 2PL but could be subject of a dirty read if an abort is triggered in another concurrent transaction. To solve this we need to introduce a more strict version on 2PL:

1. Before reading/wring a data item, a transaction must aquire a lock on it.
2. All locks held by a transaction are released when the transaction is completed.

This ensures:

- The schedule is always recoverable.
- All aborted transactions can be rolled back without cascading aborts.
- The schedule consisting of the committed transactions is conflict serializable.

## Deadlocks

Even when each transaction is following strict 2PL, dirty read errors are still possible if one commits before another aborts. To avoid this we can add in waits, so any transaction requesting a lock must wait until all conflicting locks are released.

In the event that each of the concurrent transactions get stuck in a cyclical set of waits this is called a deadlock.

## Deadlock prevention

To prevent deadlocks, a priority is assigned to each transaction using a timestamp. The older the transaction, the higher the priority. This can be used in one of two ways:

> Suppose $T_i$ requests a lock and $T_j$ holds a conflicting lock.

1. Wait-die: $T_i$ waits if it is higher priority, otherwise it gets aborted.
2. Wound-die: $T_j$ aborted if $T_i$ has higher priority, otherwise $T_i$ waits.

In both of these schemes, the higher priority transaction is never aborted.

The case where a transaction is repeatedly aborted since it never has enough priority to wait is called 'starvation'. This can be prevented by restarting aborted transactions with their initial timestamp.

## Deadlock detection

This can be done by creating another graph where the nodes are transactions and the edges are from $T_i$ to $T_j$ if $T_i$ waits for $T_j$ to release a conflicting lock. Each cycle represents a deadlock.

To solve this, choose a transaction to kill to clear as many deadlocks as possible. You may need to kill more than one.

## Crash recovery

This starts with 'the log' also known as the 'trail' or 'journal' which records every single action executed in the database. It is also stored as a table in the database.

## Need to look at

- schedule unrecoveravle
- cascading aborts
