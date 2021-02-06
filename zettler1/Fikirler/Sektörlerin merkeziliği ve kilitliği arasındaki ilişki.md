Aşağıdakileri hesaplatıp, hepsinin klasik [[Girdi Çıktı Modeli]]ndeki kilitlik katsayılarıyla [[korelasyon]]unu bulmaya çalıştım.
[[Page rank centrality]]
[[degree]] centrality
[[centrality-part1###betweenness centrality]]
[[Eigenvector centrality]]
[[centrality-part1###closeness centrality]]
Sonuncusu sabit merkezilik verdiğinden değerlendirmeye tabi değil. 

```
GeriEtkiler ve Pagerank arasındaki korelasyon:(0.14728354332881166,0.2533071265661581)
IleriEtkiler ve Pagerank arasındaki korelasyon:(0.1295901143935747, 0.3154420013281405)
GeriDogrudan ve Pagerank arasındaki korelasyon:(0.15591064040086744, 0.22625042962533148)
IleriDogrudan ve Pagerank arasındaki korelasyon:(0.1471122226612545, 0.2538657608292902)
GeriEtkiler ve EV arasındaki korelasyon:(0.1473151630844417, 0.25320411366626505)
IleriEtkiler ve EV arasındaki korelasyon:(0.12941521952002358, 0.3161011293128538)
GeriDogrudan ve EV arasındaki korelasyon:(0.15598064341282997, 0.22603944540906581)
IleriDogrudan ve EV arasındaki korelasyon:(0.14693148533353867, 0.25445600592005246)
GeriEtkiler ve BW arasındaki korelasyon:(0.24753462345751975, 0.05241279597747654)
IleriEtkiler ve BW arasındaki korelasyon:(0.38490936735924347, 0.0020079113888633875)
GeriDogrudan ve BW arasındaki korelasyon:(0.23642439352519332, 0.06430703452697911)
IleriDogrudan ve BW arasındaki korelasyon:(0.4258803346166194, 0.0005584222324356309)
GeriEtkiler ve DG arasındaki korelasyon:(0.1920983693203019, 0.13471334234953117)
IleriEtkiler ve DG arasındaki korelasyon:(0.22674929551860779, 0.07635246373799111)
GeriDogrudan ve DG arasındaki korelasyon:(0.19590776117515252, 0.1270059615457416)
IleriDogrudan ve DG arasındaki korelasyon:(0.2539575521256451, 0.04639810014633439)
```
Burada, ikinci değişkenler p değeri. Ve sadece çok azı istatistiksel olarak anlamlı:

```
IleriEtkiler ve BW arasındaki korelasyon: 0.385
GeriDogrudan ve BW arasındaki korelasyon: 0.236
IleriDogrudan ve BW arasındaki korelasyon: 0.426
IleriDogrudan ve DG arasındaki korelasyon: 0.254
```