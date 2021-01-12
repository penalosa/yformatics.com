## Armstrong’s axioms

The important three you need are:

1. Reflexivity  
   If $Y \subseteq X$ then $X \to Y$.

2. Augmentation  
   If $X \to Y$ then $XZ \to YZ$.

3. Transitivity  
   If $X \to Y$ and $Y \to Z$ then $X \to Z$.

There are also two more which you can assume but are derived from the three above:

4. Union  
   If $X \to Y$ and $X \to Z$ then $X \to YZ$.

5. Decomposition  
   If $X \to YZ$ then $X \to Y$ and $X \to Z$.

## Closure of FDs

The closure $F^+$ of a set of FDs $F$ is the set of all FDs implied by $F$.

It can be computed manually by Armstrong’s axioms but its much easiler to use the algorithm.

This provides a solution to 'the implication problem'. Essentially, if asked if an implied FD is true then calculate the closure of the left hand side and see if the right hand side appears in that closure.

## Closure algorithm

Input a set of FDs and a set of attributes.

1. Put these in two columns with FDs on the left the lhs pf the implied FD on the left.
2. Use the attributes in the right column to see if they imply others with the FDs on the left.
3. If an FD fits the bill cross it out and add its rhs to the list on the left.
4. Repeat until all FDs crossed out or no more can be triggered.

The list of attributes on the left at this point is the closure. For the impliation problem, if the rhs of the implied FD is there then it is true.

## Candidate keys

A key is a subset of attributes which imply all other attribites in the set acording to the FDs.

Candidate keys are keys for which none of their subsets of attributes are keys. Think of it as a minimal set of attributes to form a key. However, there can still be more than one. These also have an algorithm to find them.

Attibutes in the set of the candidate key are called 'prime attributes'.

## Candidate key algorithm

Create a graph where the nodes are the power set of all attributes.

1. Start at the lowest node. Check if the closure of its value is equal to the set of all attributes.
2. If it is, it is a candidate key. Cross it off and all its ancestors.
3. If not, cross it off.
4. Work your way up the tree until everything is crossed off.

You may not need the whole tree for this. You can generally tell by the FDs that certain attributes are required and any that don't contain that are doomed.

## Implication of INDs

1. Send help

2. See online test, lecture slides and maybe tutorial 5...
