Hiç eşitleme mekanizmasının olmadığı, gelir vergisinin olduğu ve zekatın olduğu üç ayrı simülasyondaki eşitsizlik verisini kıyaslıyorum. Eşitsizliği [[GINI]] ile hesaplatıyorum.

Sonuçlar umut vadedici. Toplumun gelişimini, [[@Vallejos2017]] makalesi ile denetliyorum. Burada, gelir vergisini de gelir hakeden bir insan olduğunda belirliyorum.

Alakalı: [[Zekât eşitsizlikleri nasıl düşürür]]

Zekât kodu genel manada şöyle işliyor:
1. Toplumda toplam ne kadar zekât verileceğini hesaplatıyorum.
```py
def zekatadim1(array,zekatesigi):
	zekatmiktari=0
	for i in range(len(array)):
		if array[i]>zekatesigi:
			zekatmiktari=zekatmiktari+array[i]/40
			array[i]=array[i]*39/40
	return array,zekatmiktari
```
Burada başlangıçtaki gelir dağılımı ve ne kadar paranın nisab miktarı sayılacağını belirtmemiz yetiyor.

2. Ardından toplanan zekât miktarını toplumdaki fakirlere dağıtıyorum. Buradaki fakirleri nisab miktarının altında kalanlar olarak belirliyorum. Her defasında toplumun dağılımını yeniden sıralamaya tabii tutuyorum ki her defasında en fakire gitsin para.
```py
def zekatadim2(array,birim,zekmik,esik):
	fakirsayisi=(array<zekatesigi).sum()
	while zekmik>0 and fakirsayisi>0:
		array=np.sort(array) #en fakirin onceligi
		"+str(geriyekalanzekat))
		for i in range(len(array)):
			if array[i]<esik:
				array[i]=array[i]+birim
				zekmik=zekmik-birim
				break
		fakirsayisi=(array<esik).sum()
	array=array+zekmik/len(array)
	return(array)
```
Burada iki yeni değişkenimiz var, birincisi az önceki fonksiyonun sonucu olan zekar miktarı, diğeri ise zekatların dağıtılma miktarı. Paketlerin veya bağışların büyüklüğü diye düşünebiliriz. Bütün zekât miktarının tek bir kişiye gitmeyeceğini düşündüğümden böyle yaptım ama belki zekât miktarının bütün fakirlere eşit olarak dağıtımı da düşünülebilirdi. Buradaki kilit nokta, döngünün fakir kalmayana yahut dağıtacak para kalmayana kadar çalışıyor olması. Eğer toplumdaki fakirler biterse ama elimizde hâlâ dağıtacak para kalırsa, bunu herkese eşit olarak dağıtıyorum. Bu kamu hizmetlerini temsil ediyor, diye düşündüm.
3. Burada, [[@Vallejos2017]] makalesinin ilk kısmının yeniden türetilmesi devreye giriyor. Buna Büyüme1 diyorum, içinde gelir vergisi olmayan saf büyüme olduğu için. Bazı parametreler için [[GINI]]yi arttırması muhakkak.
Kod şurada: [[@Vallejos2017#^251fbf]]
4. Büyüme2 ise, Büyüme1'deki büyüme paketlerinin sahibine verilmeden önce belirli bir yüzdesinin kesilip, yine fakirlere dağıtılacak bir fon haline getirilmesiyle alakalı. Dağıtım algoritması 2 ile aynı.
```py
def Buyume2(array,bbeta,Aartis,llamda,vvergiorani):
	vergimiktari=0
	GDPartismiktari=sum(array)*(math.exp(llamda)-1)
	GeriyeKalanGDP=GDPartismiktari
	while GeriyeKalanGDP>0:
		KazancIhtimali=np.power(array,bbeta)
		KazancIhtimali=np.transpose(KazancIhtimali/sum(KazancIhtimali))
		kazanan = np.random.choice(np.array(list(range(1,len(array)+1))).flatten(), 1, p=KazancIhtimali.flatten())
		array[kazanan-1]=array[kazanan-1]+(min(Aartis,GeriyeKalanGDP))*(1-vvergiorani)
		vergimiktari=vergimiktari+(min(Aartis,GeriyeKalanGDP))*(vvergiorani)
		GeriyeKalanGDP=GeriyeKalanGDP-min(Aartis,GeriyeKalanGDP)
	return array,vergimiktari
```
Burada vergi oranı, paketin ne kadarının fakirlere ayrılacağını belirliyor.

