önceki parça: [[centrality-part1]]

8. ### Percolation centrality
	Betweenness centrality'e benziyor, ama noktaların önemi enfektelerse artıyor. Bilgisayar virüsü, dedikoduların yayılması yahut hastalıkların analizinde kullanılabiliyor.
9. ### Cross-clique centrality
	her birinin birbirine bağı olan gruplara "klik" deniyor ve bu merkezilik buradan hareket ediyor. Bir noktanın dahil olduğu klik sayısı.

10. ### freeman centrality
	Meta centrality ölçüsü gibi bir şey.
		- $C_x(p_i)$ bir $i$ noktasının merkeziliği		
		- $C_x(p_*)$ bir ağdaki maksimum merkezilik
		- $\max \sum _{{i=1}}^{{N}}C_{x}(p_{*})-C_{x}(p_{i})$ aynı sayıda noktalı bütün grafikler için olası en büyük farklar toplamı.	
	Bu durumda ağın merkeziliği, yukarıdaki farklar toplamının maksimum farklar toplamına bölünmesiyle bulunuyor.
11. ### Dissimilarity based
	Komşuların ortaklığı üzerinden hareket eden bir merkezilik ölçütü. Kümelerin arasındaki benzemezlik (dissimilarity)'i ölçen [[Jaccard index]]'i kullanıyor.
12. ### Alpha centrality
	Eigenvalue centrality'nin bazı hücrelere dışsal önem atanmış hali. Mesela savunma sanayii, kâğıt vesaire, girdi çıktı matrisinin yorumlanması için kullanılabilir.

Ağırlıklandırılmış ağlar için:

![[Node centrality in weighted networks.pdf]]

