---
title: An agent-based model of the observed distribution of wealth in the United States
authors: Hunter A. Vallejos, James J. Nutaro, Kalyan S. Perumalla
year: 2017
---

Amerika'da GINI ve GDP artışı başabaş gidiyor, bizde öyle değil. Bu yüzden eşitsizlik hakkındaki modellerini büyümeyle irtibatlandırmışlar.

Ben en azından tek kişili olan kısmını Python koduyla replike edebildim, ancak çoklu kişi devreye girdiği kısmı henüz yapmadım. Bir diğer kısım da gerçekteki dağılımın şartlarına sahip bir başlangıç koşulu oluşturmak. Ben şu an normal dağılımla ilerliyorum, daha ziyade.

- Ülkenin toplam büyümesi, klasik manada anlaşılıyor. Burada $\lambda$ değişkeni ülkelerin GDP (GSYH) artış oranı. Mesela Amerika için yüzde 2,5 herhalde bizim için yüzde 5 kullanmak gerekir.
$$\varOmega (t) = \varOmega (0) e^{\lambda t}$$
- Büyüme sürekli bir akış halinde değil, kişilere verilen büyüme "paketleri" şeklinde gerçekleşiyor bu paketlerin her birinin büyüklüğü:
$$n = \frac{\varOmega (0)(e^{\lambda T} - 1)}{\delta \omega }$$
	Burada paydanın gerçek hayatta bir karşılığı yok, büyüme paketlerinin büyüklüğünü değiştiren bir parametre.
- Kişilerin bu paketleri almaları zenginliklerine bağlı. Toplam kazanma gücüne kıyasla ne kadar gücü haizler ona bakılıyor.
$$\varPsi (i,k+1) = \frac{p(\omega_{i,k})}{\sum_i{p(\omega_{i,k})}}$$
- Son olarak bu güçlerin nasıl dağıldığı bahsi. Herkesin zenginleşme ihtimalleri, önceki zenginlikleriyle ilintili.
$$p(\omega_{i,k}) = \left( {\omega_{i,k}}\right)^\beta$$
	Burada betanın hayati bir önemi var. Eğer birden büyük seçilirse zenginlerin büyümeyle daha da zenginleştikleri, durduğu yerden GINI artışı türeten bir ekonomiden bahsediyoruz. Amerika için bu mantıklı. Eğer bir belirlersek eşitsizlikle büyümenin bir alakasının olmadığını varsayıyoruz. Birden küçük değerlerde ise fakirlerin bu büyüme paketlerini alma ihtimalleri daha fazla.
	
Ben buraya kadar kodlaştırdım, şöyle:

```py
def Buyume1(array,bbeta,Aartis,llamda):
	GDPartismiktari=sum(array)*(math.exp(llamda)-1)
	GeriyeKalanGDP=GDPartismiktari
	while GeriyeKalanGDP>0:
		KazancIhtimali=np.power(array,bbeta)
		KazancIhtimali=np.transpose(KazancIhtimali/sum(KazancIhtimali))
		kazanan = np.random.choice(np.array(list(range(1,len(array)+1))).flatten(), 1, p=KazancIhtimali.flatten())
		array[kazanan-1]=array[kazanan-1]+min(Aartis,GeriyeKalanGDP)
		GeriyeKalanGDP=GeriyeKalanGDP-min(Aartis,GeriyeKalanGDP)
	return(array)
```

^251fbf

Burada array dağılımı, *bbeta* betayı, *Aartis* omega çarpı deltayı *llamda* ise lambdayı temsil ediyor.

Burada büyüme paketlerinin belirli bir oranının fakirlere dağıtılacak paketlere dönüştürülmesi bahsi de var ve konu zaten orada [[GINI ve zekât]] işine bağlanıyor. 