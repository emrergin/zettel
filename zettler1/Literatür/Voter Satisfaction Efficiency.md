## Voter Satisfaction Efficiency

http://electionscience.github.io/vse-sim/VSE/

Kullandıkları kodlar: https://github.com/electionscience/vse-sim

Bayesian Regretle de alakalı bir seçim metodu kriteri. Kısaca, kişilerin elde edebileceği mutlulukları hangi seçim sisteminin maksimumlaştırabileceğini analiz ediyor. Bu yönüyle [[How to compare dictators]] makalesiyle alakalı.

Seçmenlerin seçim sonrası tatminleri ile gerçekte erişecekleri faydanın birbiriyle birebir ilintili olmayabileceğinden hareket ettiği için Fayda yerine Tatmin kelimesi kullanılmış.

Formülü şu: 

$$\mathit{VSE}=\frac {E[{\text{selected candidate}}]-E[{\text{random candidate}}]}{E[{\text{maximizing candidate}}]-E[{\text{random candidate}}]}$$

### Varsayımlar:
1. Hangi seçim metodu kullanılacak
2. Seçmenlerin adaylar için hissettikleri faydalar. Bu [[induced preferences]] yoluyla test edilebilir de kılınabilir.
	- Özellikler burada, [[How to compare dictators]] makalesi önem kazanıyor. Yani kişiler bu adayları verebilecekleri kararlar ve yapabilecekleri seçimler için seviyorlar.
3. Seçmenlerin neyi bildikleri. "medya modeli"
4. Seçmenlerin nasıl hareket ettikleri. "strateji modeli"

Haliyle, seçim sisteminin karmaşıklığını, aday olma davranışını, seçim kampanyası detaylarını filan inceleyemiyor.

### Kendisinin kullandığı farklı varsayımlar
*Seçmenlerin Faydaları Hakkında*
1. [[Impartial Culture]]: Herkesin adaylardan alacağı faydalar independent, normally distributed bir sayı.
2. Kişilerin ideolojilerinin n boyutlu olduğu ve bu n boyuttaki yerlerinin standard sapması gitgide azalan bir dağılımla dağıldığını varsayıyor, yani her yüksek boyuttaki dağılımda herkes birbirine yakınlaşıyor.
3. Hiyerarşik Kümeler: En karmaşığı bu.
	- İdeoloji n boyutlu.
	- Bu boyutların bazıları birbiriyle gruplanmış.
	- Az önceki farkılılık azalması bu sefer kümelerin içinde de var, genelde de var.
	- Kişiler kimlik kümelerine dahil ediliyor, farklı konulardaki duruşlarının birbiriyle bağlantılı olmadığı varsayılıyor.
	- Bu kimlik kümelerinin dağılımında [[Chinese restaurant process]] diye istatistiksel bir teknik kullanmışlar.
	- Yani, önceden şu kadar tane cluster olsun diye seçmek yerine dağılımın parametrelerini seçerek doğal bir sonuç elde etmeye çalışmışlar.

*Seçmenlerin stratejileri hakkında* sadece ikinci gelecek adayların seçmenlerinin stratejilere başvurduğunu varsaymışlar.

### Test edilen seçim metodları:
#linklenebilir 
- [[Plurality voting]]. 
- [[Majority Approval Voting]]
- [[Majority Judgment]]
- [[instant run off]]
- [[Schulze Metodu]]
- [[Ranked Pairs]]
- [[Approval voting]]
- [[Score voting]]
- [[STAR Voting]] (Score then Automatic runoff) !!
- [[3-2-1 Voting]] !!

### Diğer Seçim Kıyas Kriterleri:
- [[Condorcet Efficiency]]
- Bayesian regret:
- Smith Efficiency. Seçimlerin yüzde kaçında Smith Set'ten bir eleman seçiliyor?
	- Smith Set: Smith Set'teki bütün elemanlar dışarıdaki elemanları ikili karşılaştırmalarda yeniyorlar.