---
title: Formal structure of majority decision
authors: Yasusuke Murakami
year: 1966
---

[[@may1952set]] makalesini demokrasinin en kuvvetli hali olarak düşünürken, onun en zayıf hali hakkında konuşmaya niyet ediyor. Temsilî demokrasinin en asgarî tanımını yapacak. Gerçek hayattaki demokrasiler bu ikisinin arasındadır, diyor.

Kullandığı fonksiyona, May,1952'deki gibi [[decision function]] diyor.  any group decision function is a single-valued function of the form D =
$F(D_1, D_2, \cdots, D_n)$ whose domain is the n-fold cartesian product of the set $\{1, 0,-1\}$ and whose range is the set $\{1, 0, - 1\}$.

 (majority voting operation dediği 0,1 ve -1'lerin toplamından ibaret, ancak bu toplam katmanlı olabilir. Katmanlarda her kişi birden fazla kere bulunabileceği gibi, bazı kişiler birden fazla ayrı ayrı katmanda da bulunabilirler.
 
 Bunun tek istisnası [[Diktatörlük]] durumunun aksi. Yani, makalenin ilgilendiği çoğunluk oylarında, kişilerin ağırlığı yüzde 50'yi geçemiyor, ama toplamanın katmanları hakkında bir kısıtlama yok.
 
Rosser and Turquette'in bir teoremini kullanarak, üç değerli mantık fonksiyonunun bazı özellikleri kullanılıyor, ve şu iki koşul en teknik halleriyle dahil ediliyor.
1. otonomi: fonksiyonumuz dışsal mantık kısıtlarına tabi olmamalı.
2. nonreversal: fonksiyonumuzun tanımı negation kullanmadan yapılabilmeli.

[[Neutrality]]'ye May neutrality yahut self-duality diyor. Self-duality iff otonomi gösteriliyor.

- Strong monotonicity'i daha net tanımlıyor ve bunun da aslında nonreversalla alakasını gösteriyor. Nonreversal varsa, monotonicity de vardır. self-duality varsayımı olduğunda, buradaki strong monotonicity tanımıyla May'in tanımı aynı.
	- if the function is strongly monotonic, nonreversal is satisfied.
	- only if the function is monotonic, nonreversal is satisfied.
	- necessary ve sufficient koşul strong monotonicity'den daha zayıf ama monotonicity'den de daha güçlü olmalı.
		- Beraberlik durumlarında tanımsız olan fonksiyonlar için nonreversal iff monotonicity.
		- Eğer herkesin sadece tek bir seçime girebildiği varsayımı sağlanıyorsa, nonreversal iff monotonicity.
- A group decision function is a majority decision, only if the function is self-dual, monotonic, and nondictatorial. Yani necessary koşulları bulmuş oluyoruz.
- Koşulları çok güçlendirince, May'in teoremine geri dönmüş oluyoruz. Yani tek bir seçimin doğrudan yapıldığı simple majority rule'a.



Evet, hayır ve boş oy durumları var. (abstention, seçime katılmama da denebilir)


```murakami1966formal - Formal structure of majority decision```
#makale