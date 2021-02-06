[[How to compare dictators]]
[[SunumDenemesi]]

### Slide 1
Hello everyone, I am Emre Ergin from Bolu Abant İzzet Baysal University, Turkey and will be presenting "How to compare rulers"
This paper was originally named as how to compare dictators. But nowadays, in this political climate, the word itself is a bit loaded, so instead I went with "ruler"
What do I mean by that?

### Slide 2
When we elect a representative, they decide on behalf of us for some period of time. This is basically how representative democracy works. We do not select between different world states, but someone to decide for us. This implies, just as any voter has a preference regarding different options that the country will face with, the ruler herself may also be represented by a ranking. This understanding can be modelled by the concept of [[Social Welfare Rule]]s.

### Slide 3
When trying to understand how the agents compare different rulers in this sense, in the literature, distances that are defined on permutations can be used. While there are many such distances, the most commonly used distance is the Kemeny distance. It basically measures the number of swaps needed to reach to a ranking from another one. And it is used to formulate strategy proofness in some papers including one of ours and one from Walter.

### Slide 4
But there are some problems with this. First, we detach the order between rulers from the valuations of alternatives. Even if we have any information about the intensities of preferences for example, we ignore this. And second, this way of looking at the social welfare rules are not testable. If we [[induced preferences|induce some preferences]] in the lab, there is a straightforward way to translate any result of a social choice functions to monetary payments, but same is not true for social welfare rules.

### Slide 5
Then how should we understand a ranking as the collective preference? As Arrow says:
>... sometimes not all of the ... alternatives will be available. In analogy with the usual utility analysis of the individual consumer under conditions of constant wants and variable price-income situations, rational behavior on the part of the community would mean that the community orders the three alternatives according to its collective preferences once for all, and then chooses in any given case that alternative among those actually available which stands highest on this list.

### Slide 6
This implies a framework in which, rankings are not compared directly, instead, we check which alternatives they will be preferring in each of the world states. If the availability set is singleton or empty there will be no difference in the selected alternative. In contrast to this, any non-singleton alternative set can be reduced to their maximal element according to the ranking we are considering.

### Slide 7
Finally, some notation to formalize the discussion. $A$ is a set of alternatives. $p$ is a preference of the agent, and this is a total order. $R$ is also a total order and is understood as a ranking for some ruler. $u$ is a utility vector that represents $p$.

### Slide 8
$R(i)$ denotes the alternative ranked at $i^{th}$ position in ranking $R$. The intersection between two rankings are the pairs that they agree on. Union is defined similarly. Finally, probability vector $v$ is defined as the probability that some alternative is available in the future. I assume the availability of different alternatives is independent from each other.

### Slide 9
This simple framework, without introducing any specific parameters, already agrees with some notion that is used in the literature. A ranking is between two others if it agrees with at least one of them. And an ordering of rankings satisfy betweenness if $R_1$ is preferrred to $R_2$ whenever $R_1$ is between $p$ and $R_2$. Walter's 2014 paper use this to form a partial order over all orders. And the current framework also agrees with it.

### Slide 10
Here is an example. If the preference of the agent is $dcba$ betweenness condition tells us they will be preferring $dcba$ to $cdba$ and $cdba$ to $cdab$ and so on and so forth, but this relation is not complete. Just using this notion is not enough to compare for example $cadb$ with $cbda$. To complete the relation, we can use metrics that satisfy this condition, or we can assume some specific parameters in the framework I am suggesting.

### Slide 11
Based on all of this, the utility function that represents the ordering by the agent is as follows. For a preference $p$, for a utility function that represent $p$ and a probability vector $v$, we have the following. To sum it up, agent will check the valuation of the first alternative, in the order of the _ruler_ and this is multiplied by the probability that the first alternative is available. If it is not available, then we go to the next one. Utility for the any alternative in the order of the _ruler_ is multiplied by probability that this alternative is available, plus probability that prior alternatives in the order of the ruler are _not_ available. As you can see, this is an expected utility formulation.

### Slide 12
From betweenness assumption we know that the agent will like their own rule best. To make the discussion more analogous to that of distances, I define a dissimilarity function, as follows. For a preference $p$, for a utility function that represent $p$ and a probability vector $v$, we have the dissimilarity function. This basically measures the decrease in the utility of the agent compared to the case where their ranking is ruling over them. To be able to analyze the implications, I am assuming that the intensities are common across any rankings.

### Slide 13
Here is a reminder for the metric properties. Identity of indescernibles is the most natural one here. The 'disutility' the agent will get from their own ranking is zero, and only that ranking has this. Symmetry[^1] means if we happened to change places with the ruler, the disutility would not change. This may also be seen as natural but not to the extent of the first one. And the last property, the triangle inequality is the least natural one. It may be seen as a superiority of a direct democracy if we take $R_1$ as some voter, $R_2$ as some delegate or a senator, and $R_3$ as the president. But the difficulty in the interpretation already hints the main result: It is not that natural to expect it.

### Slide 14
Identity of indiscernibles is almost always satisfied, except when the probability vector includes some $1$s or some $0$. 

### Slide 15
For symmetry to be satisfied we need two conditions. First, the probability vector should be constant. Second, the increase in the utility level between adjacent intensity levels should follow a specific rule. As an example, for the constant probability of $0.5$, and for four alternatives the utilities should be $1,2,4,8$.

### Slide 16
Not possible for any $u$ and $v$ pair.

### Slide 17
Understood this way, the order of the agent can be formalized by at-most a semi-metric. My main result implies the distances may not be natural for comparing rulers, and it suggests a way to understand the problem of representation in a more consequentialist way.





[^1]:can be understood as, the distance from me to the ruler is always equal to the distance from the ruler to me.

