https://www.centiserver.org/centrality/Kleinbergs_Centrality/

İki çeşidi var.
1. **Hub Score,** [[adjacency matrix]]'i alıyoruz, transpozu ile çarpıyoruz ve bunun principal eigenvectorünü buluyoruz. Bkz: [[eigenvalue]]. [[CINNA sonuçları]]nda bulduğumuz sonuçta bu hem anlamlı hem de Girdi Çıktı merkezilikleriyle ilişkili çıktı.
2. **Authority Score**. Bu da az öncekinin tam tersi, transpoz ile adjacency matrix'i çarpıyoruz. Grafik simetrik olduğunda bu iki farklı skor tipi birbirine eşit çıkıyor.

Kullanılabilmesi için, hiçbir [[vertex]]in kendisine bağlanmaması ve her elemanın birbirine bağlanması gerekiyormuş.

**Kleinberg1999**