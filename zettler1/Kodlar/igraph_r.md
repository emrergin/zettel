
```r
grafik <-  graph_from_adjacency_matrix(data.matrix(yurtici2012),"directed",TRUE,TRUE,NULL)
```

koduyla grafiğe dönüştürüyorum. Veriseti zaten İsimli olduğundan grafik için ayrıca bir şey yapmama gerek yok.

```r
e_centrality=eigen_centrality(grafik, directed = TRUE, scale = TRUE,
                            weights = NULL, options = arpack_defaults)
c_centrality=closeness(grafik, vids = V(grafik), mode =  "total", weights = max(E(grafik)$weight) - E(grafik)$weight, normalized = FALSE)
b_centrality <- betweenness(grafik, v = V(grafik), directed = TRUE, weights = max(E(grafik)$weight) - E(grafik)$weight+0.0001,nobigint = TRUE, normalized = FALSE)
d_centrality <- centr_degree(grafik, mode = "all",loops = TRUE, normalized = TRUE)
```

Belli başlı 4 centrality'i hesaplattığım kod bu şekilde. Buradan sonra korelasyon kullanarak, Girdi Çıktı modeliyle alakasını kurabilirim, ama iki sorun var.
1. Ağırlıklar girdi çıktı modelinde iyi bir şeyken, closeness centrality ve betweenness centrality'de iyi bir şey değil. Tersine çevirmek için maksimumdan hepsini çıkarınca closeness yine çalışıyor ama betweenness pozitif bir ağırlık istiyor ve rastgele bir ekleme yapmak gerekiyor.
2. Pearson korelasyon mu yoksa sadece sıralamarla ilgilenen Kendall Tau korelasyonu mu kullanmalıyım?
3. Hangi merkezilikleri kullanmalıyım? Directed ve weighted (doğrultulu ve ağırlıklı) olan grafiğim için eigenvector centrality o kadar da iyi değil, ama bütün centralitylerin dünyasına girersem de çıkamayabilirim.
	- Bu konuda aşağıdaki kütüphaneyi buldum.

### CINNA-Central Informative Nodes in Network Analysis

^520709

Bu konuda şurayı buldum: https://www.datacamp.com/community/tutorials/centrality-network-analysis-R
	- Adım adım anlatıyor, ama sanki tam çalışmıyor adımlar. Referanslar:
	- ```\cite{ashtiani2018systematic,ashtiani2019cinna}```
	- https://cran.r-project.org/web/packages/CINNA/vignettes/CINNA.html
	- https://cran.r-project.org/web/packages/CINNA/CINNA.pdf
[[CINNA sonuçları]]
	
	
	