Google tarafından geliştirilen bu algoritmada, her defasında $\alpha$  ihtimalle duracak bir insanın tahminen nerede duracağını temsil ediliyor. 
Merkezi noktaların komşularını etkilerken bütün merkeziliği değil, belli bir payını aktaracağı düşünülüyor.

https://www.youtube.com/watch?v=bpCRuslQTVo

$$C_p(v_i)=\alpha \sum _{j} A_{i,j} \frac{C_p(v_j)}{d^{out}_j}+\beta$$
$$C_p=\alpha A^T D^{-1} C_p+\beta 1=\beta(I-\alpha A^T D^{-1})^{-1}1$$
Burada $D$ outdegreeleri içeren diyagonal matris

https://www.youtube.com/watch?v=P8Kt6Abq_rM

1. İlk başta bütün noktalara $1/n$ ile başlıyoruz.
2. Sonraki basamakta, her nokta kendisine bağlı noktaların ağırlığını, o noktaya bağlı diğer hücrelerle eşit olarak paylaşıyor. Meselâ elimizdeki $x$ hücresine bağlı sadece $y$ varsa ve $y$ iki farklı noktaya bağlıysa, $y$nin o anki ağırlığını ikiye bölüyoruz ve $x$ in yeni ağırlığı bu oluyor.