Aşağıda $A$, [[adjacency matrix]]. $\lambda$ ise [[eigenvalue]].

Kısaca şöyle işliyor: bütün noktaların merkeziliği, komşularının merkeziliğine bağlı. Meselâ, $x_1$ noktasının 2 adet komşusu olsun.

$C(x_1)=\frac{1}{\lambda}(aC(x_2)+aC(x_3))$.

$\lambda C = A^T C$ (undirected graph için $A^T=A$)

Buradaki kilit nokta, x2 ve x3ün merkeziliklerinin de x1e ve birbirine bağlı olması. Bu bize (birden fazla da çözümü olabilecek) doğrudan bir lineer denklem sistemi veriyor. En yüksek [[eigenvalue]] bize fark denklemi şeklinde yazılabilecek prosedürün varacağı yeri söylemiş oluyor. Çözdüğümüzde her bir noktanın merkeziliğini buluyoruz.

$A$'dan $\lambda I$ yı çıkarıp determinantı sıfıra eşitleyip, sonra en büyük kökü alıyoruz. En büyük köke tekabül eden (normu 1 olan) eigenvectordeki hücreler bize noktaların tek tek merkeziliğini vermiş oluyor.

https://www.youtube.com/watch?v=1S1mD0l9FwU
https://www.youtube.com/watch?v=-LO9NLaccFQ

[[ağırlık ve doğrultu durumunda eigenvector centrality]]

En büyük sıkıntısı, doğrultulu grafiklerde, çok içbağı olan (inbound) bazı noktaların eğer kendisine iç bağı olan noktaların merkeziliği sıfırsa, sıfır merkeziliğe sahip olması. Ağda merkezi olsa da, komşularından farklı olamıyor.





