Eigenvector centrality'nin bir varyasyonu. degree centrality'nin genelleştirilmiş versiyonu, doğrudan komşuların yanında dolaylı komşular da, daha düşük ağırlıklandırılarak hesaplamaya dahil ediliyor.

Directed graphs ile ilgilenmek için eigenvector centralitye göre daha elverişli.

$C_{Katz}(v_i)=\alpha\sum_{j=1}^nA_{i,j}C_{Katz}(v_j)+\beta$

$\beta$ hariç formül [[Eigenvector centrality]] ile aynı.

$C_{Katz}=\beta(I-\alpha A^T)1$