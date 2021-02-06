[[igraph_r#^520709]]
Directed weighted graphe layık gördüğü bütün centralityler:
1. "Alpha Centrality"
2. "Burt's Constraint"                               
3. "Page Rank"
4. "Average Distance"                                
5. "Barycenter Centrality"
6. "BottleNeck Centrality"
7. "Centroid value"
8. "Closeness Centrality (Freeman)"
9. "ClusterRank"
10. "Decay Centrality"                                
11. "Degree Centrality"
12. "Diffusion Degree"                                
13. "DMNC - Density of Maximum Neighborhood Component"
14. "Eccentricity Centrality"                         
15. "Harary Centrality"
16. "eigenvector centralities"                
17. "K-core Decomposition"
18. "Geodesic K-Path Centrality"
19. "Katz Centrality (Katz Status Index)"
20. "Kleinberg's authority centrality scores"         
21. "Kleinberg's hub centrality scores"
22. "clustering coefficient"                          
23. "Lin Centrality"
24. "Lobby Index (Centrality)"                        
25. "Markov Centrality"
26. "Radiality Centrality"                            
27. "Shortest-Paths Betweenness Centrality"
28. "Current-Flow Closeness Centrality"               
29. "Closeness centrality (Latora)"
30. "Communicability Betweenness Centrality"          
31. "Community Centrality"
32. "Cross-Clique Connectivity"                       
33. "Entropy Centrality"
34. "EPC - Edge Percolated Component"                 
35. "Laplacian Centrality"
36. "Leverage Centrality"                             
37. "MNC - Maximum Neighborhood Component"
38. "Hubbell Index"                                   
39. "Semi Local Centrality"
40. "Closeness Vitality"                              
41. "Residual Closeness Centrality"
42. "Stress Centrality"                               
43. "Load Centrality"
44. "Flow Betweenness Centrality"                     
45. "Information Centrality"
46. "[[Dangalchev Closeness Centrality]]"                 
47. "Group Centrality"
48. "Harmonic Centrality"                             
49. "Local Bridging Centrality"
50. "Wiener Index Centrality"                         
51. "Weighted Vertex Degree"

48inci centrality Harmonic Centrality'i bazı değerleri sonsuza götürdüğünden eliyorum.

Bunun yanında, hesaplanamayan bazı başka centralityleri de çıkardım. 
Ayrıca, sabit olanları da çıkardım.
7,27,32,34,39 ve 44 çok zor hesaplanıyor.
NULL değer veren bazı centralityler var.

Geriye şunlar kaldı:

Zor hesaplananlar ve nullar hariç PCAdan en yüksek değer verenler:
1. [[Harary Centrality]] Bu sadece 1 ve 0.5 değerleri veriyor.
2. "[[Information Centrality]]"
3. "[[Stress Centrality]]"
4. [[Load Centrality]]
5. "Kleinberg's hub centrality scores" Sadece bunun bizim kilit sektörlerle bir korelasyonu çıkıyor.
[[Kleinberg's Centrality]]
7. [[Eccentricity Centrality]] Bu 1in aynısı

Bir başka iş de bütün Centrality'leri hesaplatıp, sektörler arasında ilk ona en çok girenleri tespit etmek. Bunu da yaptım, aslında. Dosyanın adı: **butunkilitler.r**