### Python

```py
g= igraph.Graph.Weighted_Adjacency(X.tolist())
g.vs["name"]=Isimler.tolist()
```

- Elimdeki bir numpy matrisini listeye çeviriyorum. 
- İkinci adımda bütün vertexlere Isimler adındaki başka bir numpy'ı kullanarak isim belirliyorum.

```py
centrality_EV=igraph.Graph.evcent(g)
max_EV = max(centrality_EV)
print([g.vs[idx]["name"] for idx, CEV in enumerate(centrality_EV) if CEV == max_EV])
```

- Verili grafiğin [[eigenvector centrality]]'sini hesaplatıyorum. 
- Sonra maksimumumunu alıyorum.
- Eigenvector centrality'si bu maksimuma eşit olan [[vertex]]lerin ismini yazdırıyorum.

[[Sektörlerin merkeziliği ve kilitliği arasındaki ilişki]]

SIKINTI: Kodu her çalıştırmamda başka endüstrileri merkezi olarak veriyor.