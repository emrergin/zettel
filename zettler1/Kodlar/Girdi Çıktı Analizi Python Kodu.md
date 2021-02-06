### Leontief Matrisi
```py
for i in range(len(XT)):
	for j in range(len(XT)):
		A[i,j]=X[i,j]/XT[j]
ToplamEtkiler=np.linalg.inv(I-A) 

GeriEtkiler=np.sum(ToplamEtkiler,0)
IleriEtkiler=np.sum(ToplamEtkiler,1)

GeriDogrudan=np.sum(A,0)
IleriDogrudan=np.sum(A,1)
```
- Burada ilk kısım $X$ matrisini $A$ matrisine dönüştürüyor.
- İkinci kısım ise sırayla Toplam Etkileri ve Doğrudan Etkileri veriyor. 

Burada Doğrudan, Doğrudan Etkileri, İleri ve Geri Etkiler ise toplam etkileri söylüyor.

### Eigenvector centrality kodu
Burada yaptığımız en büyük eigenvalue'ya tekabül eden eigenvectorü bulmak
Eigenvector hesaplamasında X veya A kullanabiliriz.

```py
 Eigenvalues1,Eigenvectors1=np.linalg.eig(A)
 Eigenvalues1,Eigenvectors1=np.linalg.eig(X)

EigenEtkiler1=Eigenvectors1[:,np.argmax(Eigenvalues1)]
```

Diğer yönü bulmak için bağlantıları ters çeviriyorum.
```py
Eigenvalues2,Eigenvectors2=np.linalg.eig(np.transpose(A))
Eigenvalues2,Eigenvectors2=np.linalg.eig(np.transpose(X))
EigenEtkiler2=Eigenvectors2[:,np.argmax(Eigenvalues2)]
```


X değil de A'yı kullanınca transpoz versiyonu sıkıntı çıkarıyor.
Transpoz olmayandaki sıkıntı, eigenvector'ün hepsinin reel olmaması. Bu çok sıkıntı değilmiş.
Daha büyük sıkıntı, Gephi ile uyumsuz sonuçlar buluyor olmam. Gephi yanlış da diyemiyorum, ilk eigenvector değeri yüzde 99, ikincisi yüzde 4 çıkıyor. Anormal dalgalı.

#soru 
1) neden ilk eigenvaluelar kompleks cikti
2) ters eigenvalue nasil bulunur

#python