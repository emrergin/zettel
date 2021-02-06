## **Abdullah Topçuoğlu**'nun Konu Özeti
- Toplam Arz = Toplam Üretim (Yurtiçi) + İthalat
- Girdi katsayıları matrisi=Sektör verisi/ Toplam üretim (Toplam arz)
- İşgücü Katsayısı L=Sektörde Çalışana Yapılan Ödeme Toplamı/Toplam Üretim
	- L Katsayısı=Çalışanlara Yapılan Ödemeler/Toplam Arz
- Doğrudan gerisel bağlantı = Toplam Girdiler / Toplam Üretim
- Doğrudan önsel bağlantı = Ara Tüketim Toplamı/ Toplam talep
	- Aratüketim Toplamı/Toplam Kullanım
- İstihdam Çarpanı=L katsayısı x Ters Leontief Matrisi
- Üretim Çarpanı = Leontief Matrisinin Sütun Değerleri toplamı
	- Yapısal bağınlaşma üretim çarpanı değeri ile alakalı.
- "v" katsayısı ile gelir çarpanı hesaplanıyor.
- Gelir Çarpanı = V katsayısı x  Leontief Matrisi
	- "v" katsayısı=Gayrısafi Katma Değer (GSKD) / Toplam Üretim
- Leontief Matrisinin Satır Toplamı = Toplam İleri Bağlantı
- Leontief Matrisinin Sütun Toplamı = Toplam Gelir Bağlantı
	- Aynı zamanda buna üretim çarpanı da deniyor.
### İthalat Ters Matrisi
- $A_T=A_M+A_D$
	- Burada, $A_T$ toplam girdi katsayıları matrisi,
	- $A_D$ yerli matris, $A_M$ yabancı matris
- $R=A_M[I-A_D]^{-1}$
- İthal Girdi Katsayıları Matrisini Hesaplamak için, ithalat girdi-çıktı tablosunun sektörel verilerini, toplam girdi-çıktı tablosundaki arza bölüyoruz.
### Girdi Çıktı Analizinin Üretim Denkleminin Çözümü
$X=AX+Y$
$X-AX=Y$
$(I-A)X=Y$
$X=Y(I-A)^{-1}$
- Burada $(I-A)^{-1}$ Leontief matrisi
- $A$ girdi katsayıları matrisi
- Yani, önce girdi katsayıları matrisi ve $I$ ile gösterilen birim matrisi oluşturuyoruz. Sonra, birim matristen girdi katsayıları matrisini çıkarıyoruz ve elde edilen bu matrisin tersini alınca Leontief ters matrisini elde etmiş oluyoruz.

### Eviews kodu taslağı
Matrix birim = a identity 56
matrix fark = birim - At
matrix ters = a inverse fark

Gelir çarpanı = v katsayısı x Leontief Matrisi
- Ters ithalat matrisi
-  $A_T=A_M+A_D$
- $R=A_M[I-A_D]^{-1}$
matrix ifark = birim - ad
matrix iters = a inverse (ifark)
matrix tersith = Am x iters