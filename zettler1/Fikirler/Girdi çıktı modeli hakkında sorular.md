1. Neden çıktıya bölmemiz gerekiyor? Çıktıya bölünce büyük sektörlerin etkisini azaltmış oluyoruz, ama tanım itibariyle büyük sektörler zaten bir öneme haiz değiller mi?
	-  Cevap: Büyük bir sektörün kendisinin büyüklüğünden kaynaklı bir sürü girdi ihtiyacı olur. Girdinin geldiği sektörlerin büyük olması gerekmez. 
	-  Cevap: Büyük sektörlere yapılacak sektör de büyük olmak zorunda, ölçekleme sayesinde büyük sektöre büyük para gitmesi durumunu devre dışı bırakıyoruz.
2. Bütün bu süreç Ağ teorisine ne kadar bağlanıyor?
	- Bulduğumuz doğrudan kilit sektörler weighted graph lerdeki [[degree]] centrality'ler ile aynı mı?
		- Değil, çünkü sadece akışlara odaklandığımızda XT, yani sektördeki nihai üretimi hesaba katmıyoruz.
	- Bulduğumuz toplam kilit sektörler weighted graph lerdeki [[Eigenvector centrality]] ile aynı mı? $A$ bir directed graph. Eigenvector centrality'nin doğrultulu grafiklerde kullanılması sorunlu bunun yerine:
		- [[Katz centrality]] kullanılabilir.
		- Yahut directed graph undirected graph'e çevrilebilir. 
		- Weight'lerin de kaldırılması düşünülebilir.
3. 1 ile 2 yi birleştirince. Yüzdesel artışla tanımlanmayan yeni bir merkezilik düşünülebilir mi?
4. Directed graph indirected graphe nasıl çevrilecek?

#soru 
2 ve 3 şununla ilintili: [[Centrality Girdi Çıktı İlişkisi]]