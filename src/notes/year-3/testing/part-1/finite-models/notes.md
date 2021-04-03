## Introduction

This is an inbetweem step between black box and white box testing although it is generally considered as the latter. The idea is to definite the main structure of the implementation while still abstracting the fine details. You can model program control flow and software system structure with graphs as well as model finite state behavior with finite state machines.

There are many different types of models but good models are:

- Compact  
  Representable and manipulable in a reasonably compact form, depending on the intention.

- Predictive  
  Must represent some salient characteristics of the modeled artifact well enough to distinguish between good and bad outcomes of analysis.

- Semantically meaningful  
  It is usually necessary to interpret analysis results in a way that permits diagnosis of the causes of failure.

- Sufficiently general  
  Models intended for analysis of some important characteristic must be general enough for practical use in the intended domain of application.

## Control flow graphs

Usually shown as a directed graph but can take many forms, we can label nodes with the names or descriptions of the entities they represent. The directed edges then show the order of execution. Guaranteed sequential lines of code are called a "basic block" and can be combined into a single node and branching edges indiation conditional logic. A junction node such as an if statement should be labeled as it would be in the code but should have each of its child edges lebeled with 'T' and 'F' for true and false.

Here are some control flow types for different semantics:

<!-- Diagram -->

the point of a control flow graph is to get a high level idea of the implementation and deeper information on code structure, optimizations that could be made and null pointer analysis are omitted.

## Call graphs

A control flow graph is used to represent a single function. To show the interactions between different functions we need to use a call graph. In these directed graphs, nodes represent methods and edges represent calls from one method to another.

Call graphs are normally generated statically by simply looking through the code but this could lead to an over-estimate where you draw edges that are possible but would not be drawn in an dynamic execution. However, generating the graphs dynamically would be very difficult since it is reliant on the input and you cannot be sure how much of the input space you have covered until you run a exaustive range of values.

Static call graphs can either take their context into account or not. This refers to which parent function called a function and which which arguments. Graphs without arguments included are called "context insensitive" and you can imagine what they are called with.

In context insensitive graphs you can combine like nodes into one if it fits the tree because they are identical. However, context sensitive graphs may have two nodes that both contain the same function but with different arguments so they cannot be combined.

## Finite state machines
