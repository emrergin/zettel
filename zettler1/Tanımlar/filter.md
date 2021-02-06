Kısmi sıralı küme, partially ordered setin özel bir alt kümesidir.

### Genel Tanım
Filtrenin tanımlı olduğu kümeye $P$ diyelim.
1. F boş değildir.
2. F aşağı doğrudur, yani, F'teki bütün elemanlar için, o elemanların altında yahut ona eşit elemanlar bulunabilir:
	- Bütün $x,y \in F$ için, $z\leq x$ ve $z\geq y$ olacak şekilde bir $z$ vardır.
3. F yukarıya doğru kapalıdır, yani:
	- Bütün $x\in F$ ve $y\in P$ için, $x\leq y$ ise $y\in F$'dir.

- Eğer $P\not=F$ ise $F$'e bir proper filtre, (öz filtre?) denir.
- Dualine **ideal** deniyor.

### **Lattice**ler için tanım
- Bir lattice'in altkümesi onun filtresidir, ancak ve ancak, boş olmayan, sonlu **meet**lerde kapalı bir **üstel küme**dir.
	- Üstel küme: **Upper set**. Bütün elemanlarının üzerlerinin de dahil olduğu küme.
	- Meet: Kısmi sıralı bir kümenin iki elemanının *meet*i, her ikisininin de altında kalan en büyük kümedir. infimum da denebilir. $∧$ ile gösterilir.
		- Join: Meetin tersi. $⋁$ ile gösterilir.
- Yani özetle herhangi bir elemandan başlayıp en iyisine giden bir doğru bir filtre olmuş oluyor. Eğer bu başlangıç elemanı en kötü elemansa, bir [[Ultrafilter|ultrafiltre]] elde ediyoruz.

### Örnekler
- **principal filter at x**: herhangi bir eleman alındığında, meselâ x, bu elemanın üzerinde kalan elemanlara deniyor.
- **filter of neighbourhoods of x**: herhangi bir eleman alındığında, x'i içinde içeren bütün kümelerin ailesi.
- **Frechet filter** : Sonsuz bir kümede, tamlayanı sonlu olan bütün kümeler.
	- Eğer $(X,\mu)$ $\mu(X)=\infty$ koşulunu sağlayan bir **ölçü uzayı** ise, $\mu(X\setminus A)<\infty$ koşulunu sağlayan bütün kümeler bir filtre oluşturur. Frechet filtresi bu ölçünün üye sayısı ve kümenin doğal sayılar olduğu özel durumdır.

### Referanslar
- H. Cartan,"Théorie des filtres", _CR Acad. Paris_, **205**, (1937) 595–598.
- H. Cartan, "Filtres et ultrafiltres", _CR Acad. Paris_, **205**, (1937) 777–779




