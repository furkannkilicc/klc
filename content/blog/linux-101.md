---
title: LİNUX 101- “Giriş”
description: linux giriş seviye bilgiler
date: 20.11.2023
cover: linuximg.jpg
tags:  
    - Türkçe
    - Blog
    - Linux
    - Bash
---
#  LINUX 101 


![Linux Image From Web](/images/blog/linuximg.jpg)

<!-- # LINUX - 101

![Linux](public\images\blog\linuximg.jpg) -->

<!-- ![Linux](/assets/blog-images/linuximg.jpg) -->
```js
console.log('HELLO-WORLD - LINUX 101');
``` 

## Directories
/bin : Sistem ile ilgili komutlar tutulur. (ls ,cd vb.)

/etc : Sistem konfigürasyon dosyaları tutulur. (ip config,security config vb.)

/var : Loglar burada tutulur.

/opt : Üçüncü parti programlar burada tutulur.

/tmp : Temporary (geçici dosyalar) burada tutulur.

/usr : Kullanıcı ile ilgili dosyalar burada tutulur.

/lib : Linux kernel (çekirdek) modülleri ve paylaşılan dosyalar tutulur.

/dev : Aygıtların dosyaları tutulur (dev/sda1 gibi depolama aygıtı)

/mnt : Geçici depolama aygıtları dosyaları tutulur. (Disk, CD vb.)

*sistemin görmesi için kapı açarız.

/srv :Server ile alakalı dosyalar tutulur.

/sys :Sistem ile ilgili dosyalar tutulur.

/run : Geçici çalışma zamanı dosyaları tutulur.

> Temel Komutlar
cd : Dizin ve dosyalara geçiş sağlamak için kullanılır.

ls : Bulunulan dizindeki dosyaları listeler.

touch: Dosya oluşturmak için kullanılır.

man: İstenilen komut ile ilgili referanslara ve seçeneklere erişiriz.

–help: man gibi istenilen komut hakkında bilgilere erişiriz.

clear: Komut istemini temizler.

cat: Dosya oluşturma ve okumak için kullanılır.

cp: İstenilen dosyayı kopyalamak için kullanılır.

mv: Dosya taşıma ve isim değiştirme için kullanırız.

rm: Dosya — Klasör silmek için kullanılır.

mkdir: Klasör oluşturmak için kullanılır.

rmdir: Klasör boş ise silebiliriz.

df: Disk kullanımı hakkında bilgi verir.

su: Kullanıcı değiştir.

sudo: Root yetkisi ile komut çalıştırılır.

less: Boyutunu bilmediğimiz dosyaları açmak için kullanılır.(Az göster)

head: Dosyanın ilk kısmını gösterir.

tail: Dosyanın son kısımlarını göster:

chmod: Dosyanın yetkinliğini değiştirir. (Okuma-Yazma-Çalıştırma)

*Kullanımı +rwx veya 775 “yetkilendirme değeri” ile olur

tar: Dosyaları sıkıştırmak için arşivlerken kullanırız.

“pipe”: Birden çok komutu aynı anda kullanmamıza olanak tanır.

top: Sistemde gerçekleşen işlemleri realtime görmemize olanak tanır.

grep: Dosya ve dizinde arama yapmak için kullanırız.

locate: Dosya ve dizinleri bulmak için kullanılır.(cache den alır). güncel verileri de dahil edebilmek için updatedb ile yenilememiz lazım. Cachden aldığı için daha hızlı.

find: Dosya ve dizinleri bulmak için kullanılır. (aktif olarak arar).

whereis: Program dosyaları ve komutların yolunu arayabiliriz.

ps: Aktif İşlemleri ve Id sini görüntüleyebiliriz.

kill: İşlemleri ID sini yazarak sonlandırırız.

echo: Ekrana yazdırma ve yeni yeni dosya oluşturup içine yazmak için kullanılır.

zip: Dosyaları sıkıştırmak için kullanırız.(gzip ve bzip2 de kullanılabilir)

unzip: Sıkıştırılan dosyaları çıkarmak için kullanılır.

hostname: Hostname i ekrana basar.

diff: İki dosya arasındaki farkları detaylı bir şekilde gösterir.

comm: Sıralanmış iki dosyayı satır satır karşılaştırır.

cmp: İki dosyanın içeriğini karşılaştırır ve ilk farklı alana geldiğinde işlemi durdurur. Farklı olan yerin konumu ve karakter kodunu verir.

ifconfig: Ağ hakkında bilgileri görüntülenir (İp)

yum: Üçüncü parti paketleri indirmek için kullanılır (RHEL için) . Debian tabanlılar için apt

history: Komut istemcisi geçmişini ekrana basar.

systemctl: Sistemdeki çalışan servisleri görüntüleme durdurma başlatma için kullanılır.

nano: Dosya düzenleme aracı.

vi : Dosya düzenleme aracı nano dan farkı daha low level olduğu için sistem servisleri dursa da vi ile dosyaları açıp müdahale edebiliriz.

ping: İstenilen IP adresine ping atmak için kullanılır.

Temel Komutlar ve Örnek kullanımları
cd /bin/ >bin dizinine gider

man ls
> ls hakkında bilgi ve seçeneklere erişiriz.

örn: ls -la “ bütün dosyaları listeli şekilde göster (la seçeneği ile”

echo $SHELL
> Ekrana hangi Shell kullanıldığını ve dizinini bastık örn : /bin/bash

touch hakkimda.txt veya hakkımda.sh
> istediğimiz dosya uzantısını yazarak dosyaları oluşturabiliriz.

nano hakkimda.txt veya nano hakkimda.sh
>oluşturduğumuz dosyayı açıp düzenleyebiliriz.

vi hakkimda.txt veya vi hakkimda.sh
>oluşturduğumuz dosyayı nano veya vim ile açıp aynı şekilde düzenlemeleri yaparız. yazmak için (INSERT) kaydetmek için ESC , :wq ENTER yaparız. Vi editöre tekrardan bakacağız.

ls -la
> dosyaların yetkilerini boyutunu ne zaman oluşturulduğunu vb. görüntülüyoruz
-rw-r — r-

sudo chmod 775 hakkimda.sh veya sudo chmod +x hakkimda.sh
>.sh uzantılı dosyasını çalıştırabilmek için x yani execute +x (çalıştırılabilir ) olması lazım

mkdir PersonelBilgileri
> PersonelBilgileri isimli klasör oluşturduk

pwd
>hangi dizinde olduğumuzu yazar. /home gibi

mv hakkimda.txt ./PersonelBilgileri
> hakkimda.txt dosyasını klasöre taşıdık

cp hakkimda.sh ./PersonelBilgileri
> PersonelBilgileri klasörüne kopyaladık

cat dosya.txt | grep “aranan kelime”
> Bu kodda pipe ile (|) 2 ayrı komutu birleştirdik 1) dosyanın içeriğini ekrana basmak, 2) grep ile dosya içerisinde arama yapmak.
bu kodun sonucunda aradığımız kelime varsa ekrana basacak.

head hakkimda.txt
> Dosyanın ilk 10 satırını ekrana basar. -n seçeneği ile satır sayısını değiştirebiliriz. => head -n 20 hakkimda.txt

tail hakkimda.txt
> Dosyanın son 10 satır görüntülenir. Güncel log kayıtlarını görüntülemek için kullanılır.

less hakkimda.txt
>Uzun dosyaları görüntülemek için kullanılır.Boşluk ile yükleyebiliriz diğer kısımları.

ping google.com
>google a ping atarız

tar -cf arsiv.tar hakkimda.txt kitaplar.txt /home
>home altına arsiv.tar isimli arsivi oluşturuyoruz, c seçeneği arşiv oluştur, f isim veririz.

dışarı çıkarmak için => -xf

görüntülemek için => -tf

tar -czf archive.tar.gz file1 file2 directory/
>Sıkıştırmak için kullanılır z => gzip, j => bzip2
>Dışarı çıkarmak için tar -xzf archive.tar.gz

zip -r archive.zip hakkimda.txt kitaplar.txt /home
>zip ile’de sıkıştırabiliriz, home dizininin altına.
** sıkıştırıken wildcard (*) da kullanabilirz.
zip -r archive.zip *.txt
>txt uzantılı bütün dosyaları ekliyoruz.

unzip archive.zip -d /home/arsivim
> home dizinindeki arsivim klasörüne çıkarmak için kullanılır

diff -u file1 file2
>dosya1 ve 2 arasındaki farkları ekrana basar -u daha okunabilir özelliğini açma seçeneği.

diff file1 file2 > differences.txt
farklılıkları text dosyasına kaydetmek için > kullanılır.