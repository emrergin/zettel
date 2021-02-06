[[Girdi çıktı modelinin varsayımları]]
Bu alandaki en geniş veritabanı: [[WIOD veritabanı]]

Devletin beş yılda bir yayınladığı girdi çıktı verilerine dayanarak analiz yapabilmeye yarıyor.

Şöyle işliyor: Devlet bütün sektörlerin üretimini ve diğer sektörlerden ne kadar girdi aldıklarını açıklıyor. Bu matrise $X$ diyelim.

Sonra $i$ satırındaki her hücreyi satırın sonundaki _çıktı_ miktarına bölüyoruz. Bu bize yeni bir matris veriyor. Buna da $A$ diyelim.

$A$ matrisi bize kısaca her sektörün üretimini bir birim artırmak için, diğer sektörlerden almaları gereken girdi miktarını veriyor. Bu yanıyla graph theory'deki [[adjacency matrix]]'e benziyor. $A$ matrisi aynı zamanda bize, herhangi bir sektörün üretiminin o sektörün girdilerinin bir [[lineer kombinasyon]]u olduğunu varsaydığımızı aktarıyor.

$x_{ij}$: $i$ endüstrisi tarafından talep edilen $j$ malı miktarı.

- İleri bağlantı etkisi: bütün sektörlerdeki bir birimlik talep artışının belli bir sektörün üretiminde yol açtığı artış.
	- Satırın toplamı. Yani, *farklı sütunlardaki aynı satırın* toplamı.
- Geri bağlantı etkisi: x ürününün talebi 1 birim arttığında piyasada gereken toplam üretim artışı.
	- Sütunun toplamı. Yani, *farklı satırlardaki aynı sütunun* toplamı.

**Doğrudan etkiler**, A matrisinin satır yahut sütun toplamlarıyla bulunuyor. 
**Toplam etkiler** için Leontief matrisine ihtiyacımız var, o da şöyle bulunuyor:

$X=AX+Y_0$ alıyoruz. Burada $X$ üretim, $A$ teknoloji matrisi. 
$X-AX=Y_0$ 
$X=(I-A)^{-1}Y_0$. Burada $(I-A)^{-1}$ matrisine Leontief matrisi deniyor. ^008b2b

[[Girdi Çıktı Analizi Python Kodu]]

#### Makale fikri:
Bütün bu iş [[Centrality Girdi Çıktı İlişkisi]] fikrine yaslanıyor.
Alakalı başlıklar:
- [[igraph]]
- [[Sektörlerin merkeziliği ve kilitliği arasındaki ilişki]]

#### Modelin henüz bilmediğim kısımları:
- İthalat nasıl dahil ediliyor?
- Zaman nasıl dahil ediliyor?

### Alakalı linkler
- [[centrality-part2]]
- [[Dünya için Girdi Çıktı Tablosu Analizi]]
- [[Eigenvector ile Leontief birbirine ne kadar benziyor]]
- [[Girdi Çıktı Analizi Python Kodu]]
- [[Girdi çıktı modeli hakkında sorular]]
- [[WIOD veritabanı]]
- [[Girdi Çıktı Modeli Abdullah Hoca]]

### Okunacaklar
- [[@liu2020dynamical]]
- [[Türkiye Ekonomisinde Sürükleyici Endüstri Analizi]]

