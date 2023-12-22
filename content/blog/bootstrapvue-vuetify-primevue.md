---
title: BootstrapVue-Vuetify-PrimeVue.
description: Vue.js frameworklerinden  BootstrapVue-Vuetify-PrimeVue açıklaması ve karşılaştırması
date: 2020-08-11
cover: vue.jpeg
tags:
- Türkçe
- Vue
- BootstrapVue
- Vuetify
- PrimeVue

---
![askd](/images/blog/vue.jpeg)

# BootstrapVue-Vuetify-PrimeVue

Öncelikle yazımıza Vue.js’ nin ne olduğu ile başlayacağız. Vue.js interaktif web arayüzleri oluşturmak ve tek sayfa web uygulamaları geliştirmek için kullanılan açık kaynak kodlu (Open Source) JavaScript kütüphanesidir. Vue.js gibi açık kaynak kodlu kullanıcı arayüzü geliştirmeye yarayan React ve Angular’dan bahsetmemek olmaz. Aralarındaki en büyük fark React ‘Facebook’ ve Angular ‘Google’ tarafından geliştirilmektedir. Vue.js ise ‘Evan You’ tarafından Şubat 2014’te piyasaya sürüldü. Bir çok kişinin aklına gelen soru eğer bu kütüphanenin arkasındaki kişiye bir şey olursa veya projenin arkasındaki kişi yanlış kararlar alırsa ne olacağıdır ? Bunun cevabı ise Vue.js açık kaynak kodlu bir kütüphanedir ve arkasında bir çok sponsor olmaktadır bir çok büyük şirket ve web sayfası kullanmaktadır .

Gelelim Vue.js ‘ ın gücünü nereden aldığına. Vue.js’in büyümesi bünyesinde geliştirilen kütüphanelerin basitliği, kullanılabilirliği ,bileşenleri ,mevcut kütüphaneye implement edilebilir olması , Chrome geliştirici eklentisi .. gibi bir çok faktörden bahsedilebilir. Biz bu yazıda BootstrapVue,Vuetify ve PrimeVue  kütüphanelerine odaklanacağız.

 ## BOOTSTRAPVUE
 BootstrapVue adını en bilinir kütüphanelerden biri olan , web sitelerinde ve web uygulamarında kullanılan Bootstrap’tan almaktadır. BootstrapVue ise Bootstrap’ın Vue.js için geliştirilmiş ve kişiselleştirilmiş halidir. Bununla beraber Vue.js ile daha kolay Bootstrap kullanımına sahip, içerisinde hazır Bootstrap yapıları ve HTML-CSS tabanlı tasarım şablonları içeren bir kütüphane ortaya çıkmıştır.

Tek kütüphane birçok cihaz ilkesini benimsemiştir. Boostrap, kolay ve etkili bir şekilde tek bir kod alanı ile (single code base)   web sitenizi  veya web uygulamanızı telefondan tablete , tabletten kişisel bilgisayara ölçeklendirir.
    BootStrap birçok eklentiyi, modül paketleyicilerini (webpack,parcel,rollup.js) ve Nuxt.js ‘i desteklemektedir. Bu modül paketleyicileri  modülleri bir araya getirir ve kullanılmasını önleyen yükleme işlemlerini hızlandırmak ve kaldırmak için optimize eder. Nuxt.js ise server side rendering yapılmasına olanak tanır yani sayfa indexlemesinde kullanılır. Bu indexleme işlemi ise Google arama motorunun robotları tarafından okunan veriler ile sayfamızın aramada gözüküp gözükmeyeceği, gözükecekse hangi sırada gözükeceğine karar verme aşamasında etkisi olur. Vue.js ile oluşturduğumuz sade HTML dosyamızda BootstrapVue ile kullanabileceğimiz Nuxt.js’ı kullanmadığımızda ise Google robotları HTML tagı vs olduğu için indexlenemiyor. Bu noktada sayfamıza trafik almak için Nuxt.js güzel bir seçenek.

### BootstrapVue üç prensip etrafında toplanır ;

• Hassas (Responsive)

•Modüler (Modular)

•Erişilebilir ( Accessible)

Kullanım amacı mobil öncelikli hassas yapılar oluşturmaktır , Mobil öncelikli ile amaçlanan ise projenin başından sonuna kadar olan süreçte kullanıcı deneyimi ve tasarımının mobil cihazlar için odak alınmasıdır bunun akabinde yapılacak planlama, test ve değerlendirmenin mobil ekranlarda yapılmasıdır . Nedeni ise mobil cihazların yapısının değişkenliği ,mobil cihazlarda performans internet kotası ile oluşabilecek uyumsuzluğu gidermek, telefon, tablet ve kişisel bilgisayarlarda maksimum performans elde etmektir.

Modüler yapıda olması ise sistemi bağımsız olarak ele almamıza olanak tanır bunun ile birlikte bağımsız olarak  oluşturabilir  ve değiştirebiliriz. Ayrıca bu tasarım ilkesi ile farklı sistemler arasında modülleri oluşturup değiştirebiliriz .
Erişilebilirlik ise kısaca BootStrap’ın sahip olduğu özellikler ve sınırlandırmalar sayesinde istediğimiz alanda erişmemize olanak tanır.

Ayrıca Vue.js ile web’de  **ARIA** (Accessible Rich Internet Applications)   projeler yapabiliriz.Bu projelerin özelliği engelli olan kullanıcıların kurumsal web sitelerini normal bir kullanıcı ile aynı seviyede rahat bir şekilde kullanmasına olan sağlayan uygulamalar olmasıdır .BootstrapVue ile bu mümkündür.

## Vuetify
Vuetify Google tarafından geliştirilen,Vue ile kullanıcı arayüzü tasarlamaya olanak tanıyan çok gelişmiş bir kütüphanedir. Vuetify tekrardan kullanabilir,kullanımı kolay bileşenlere sahiptir bunun ile geliştiriciler zengin bir kullanıcı deneyimi yaşarlar . Ücretli paketlerin yanında birçok ücretsiz layout da barındırmaktadır.

Vue.js ‘da olduğu gibi mobil öncelikli yaklaşımı benimsemektedir . Bunun ile birlikte BootstrapVue’ da bahsettiğimiz gibi mobil cihazlarda oluşabilecek uyumsuzlukları gidermek , performans artışı ve mobil veriyi minimum kullanmayı amaçlayan kullanıcı dostu yaklaşımı benimsemektedir.

Vuetify  birçok tool barındırır ve ‘*Material Desig*n’  tasarım dili ile mobil cihazlarda üst seviyede tasarım geliştirilmesine olanak tanır . Bu tasarımları diğer tasarımlardan ayıran en büyük artı ise dinamik renk konfigürasyonu yapabiliriz , tasarımımızda gerçeğe en yakın renklere sahip  , gölge ve  derinlik sahip bileşenler oluşturabiliriz. 
   Bunun yanı sıra Vuetify ile  katlanabilir cihazlar için tasarım uyumluluğunu yönetmek olanağa sahibiz .  Dizayn Token’ı  ile renk ve font gibi bazı verileri tutup  bunu kolay bir şekilde tekrardan tanımlamaya gerek kalmadan projemizde kullanabiliriz.

Vuetify’da kullanılan ‘Material Design’ ;
Material Design, Google tarafından geliştirilen bir tasarım dilidir. Bu dilin doğmasına sebep olan ana amaç kullanıcılara daha kararlı bir arayüz sağlayabilmektir çünkü Material Design’dan önceki Android uygulamalarının her birinde kullanıcı farkli bir tasarım şeması ile karşılaşıyordu . Material Design bu soruna farklı ekran boyutlarına uyumlu hale getiren bir tasarım şekli çözüm getirmiş oldu ve bu çözümün yanında kullanıcı deneyimini üst düzeye çıkaracak standartları da getirdi.

Material Design üç prensibe dayanmaktadır;
-Materyal Metaforu

- Cesur, Grafik,Amaca Yönelik

Hareket ve Anlam Bütünlüğü
Materyal metaforu : Google’ın tanımına göre ‘Materyal , dokunulabilir gerçeklik üzerine kurulu, kâğıt ve mürekkepten ilham alınmış buna rağmen teknolojik açıdan gelişebilir ve yaratıcı düşünceye açık bir malzemedir.’

Burda anlatılmak istenen şey uygulamamızda kullandığımız objelerin, nesnelerin yapısı , boyutu , büyüklüğü 3Boyutlu ortam ile olan etkileşimi, gölgesi, derinliği, renk geçişi vs aklımızda bir objeyi hayal ederken düşündüğümüz bütün detayları ile gerçeğe en yakın şekilde tasarlamaktır.

## PrimeVue

Primefaces / PrimeTek BİLİŞİM ile Türk mühendisler tarafından Açık kaynaklı olarak geliştirilmiş ve geliştirilmeye devam etmektedir. Bünyesi altında Vue,React,Angular kullanıcı arayüzü oluşturmaya yarayan JavaScript kütüphaneleri için kütüphane geliştirmektedir. Vue için PrimeVue, Angular için PrimeNG,React için PrimeReact.

PrimeVue’dan bahsedecek olursak daha çok kullanıcı deneyimine odaklanır hızlı ve verimli bir şekilde sayfamızı oluşturmaya odaklanır. En büyük kolaylıklarından biri arayüz tasarlarken çok fazla detaylara takılmadan componentleri çağırıp basit düzenlemeler ile ara yüzü tamamlamış oluyoruz.
       içerisindeki PrimeBlocks  ile hazır tablo , liste ve paneller ile istediğimiz gibi manipule edip şekil boyut renk vs hızlı bir şekilde oluşturabiliriz. Ayrıca içerisinde tema düzenleyici de hazır ve değiştirilebilir temalara ve şablonlara erişebiliyoruz. Ek olarak Nuxt.js ile sayfamızın indexlenmesinde bi adım daha öne geçebiliyoruz.

### EK AVANTAJLAR
Üç kitaplıkta son derece güçlü ve şirketler tarafından tercih edilen kitaplıktır. Her ne kadar kullanım amaçları birbirlerine benzesede bazı artıları vardır;

### BootstrapVue ;
• Bootstrap bilen biri kolayca ustalaşabilir ve son derece geniş yelpazede kullanım amacı vardır entegre edebileceğimiz paketler sayesinde ve kullanım kolaylığı sayesinde başlangıç- ileri derece projelerde kullanılabilir .

Satır sütun kart gibi Bootstrap öğelerini Vue bileşenleri olarak kullanabiliriz.
Entegre edebileceğimiz Nuxt.js ile sayfamızın görünürlüğünü arttırabiliriz.
Mobil öncelik yaklaşımı ile uyumluluk ve performans arttırmış oluruz.
ARIA (Accessible Rich Internet Applications) ile topluma daha duyarlı ve kurumsal projelerde kullanabileceğimiz işler yapabiliriz.
### Vuetify;
•Geliştirilmesi Google tarafından devam eden stabil , güvenilir , kolay bir kütüphanedir.

•Material Design ile sade şık ve görsel anlamda doyurucu projeler yapılabilir

Hazır bileşenler kullanılabilir zamandan tasarruf ederken ‘Material Design ‘ ile profesyonel işler ortaya çıkarabiliriz.
• Mobil öncekli yaklaşımı benimsemektedir .
PrimeVue;
interaktif Vue uygulamaları oluşturmak için hazır tablolar , listeler paneller sayesinde kısa zamanda bir e-ticaret sayfası ,kişisel web sayfası, kurumsal yazılımlar için arayüz tasarlanabilir.
Daha çok kolay kullanım ve hıza önem verir.
Hazır tema,şablon vs de ufak değişiklikler yaparak projemizi kısa zamanda hayata geçirebiliriz.
Daha profesyonel tasarım deneyimi için ücretli paketleri ve desteği ile kullanıcı deneyimizi arttırabiliriz.

## FARKLAR
Üç kitaplıkta son derece güçlüdür ancak aralarında bazı avantajlar ve dezavantajlar bulunmaktadır.

#### BootstrapVue:
 Piyasada kendini kanıtlamış olan kullanıcı dostu,performans açısından stabil ve geliştiricilerin kullanmaya alışık olduğu Bootstrap yapısını Vue.js içerisinde kullanabilmek hem geliştiriciler için büyük kolaylık sağlamış hem de beraberinde kullanabildiğimiz Nuxt.js ve ARIA artılarından fayfalanmış oluruz.

#### Vuetify
 Google tarafından geliştirilir , Bootstrap ve PrimeVue açık kaynaktır. Bu sebeple Vuetify’ın destek olanağı daha fazladır. Kullandığımız kütüphanede herhangi bir açık olduğunda sistemin güncellenmesi ve açığın kapatılması daha fazla zaman alırken bi kuruluşun arkasında olduğu yazılım proje veya kütüphanede açığın kapatılması daha kolay olur . Açık kaynak kodlu uygulama veya kütüphane vb. de güncellenmemiş cihazlarda güvenlik zafiyeti devam eder.

#### PrimeVue:
 Daha çok basit ve hızlı kullanımı ile pratik ve hızlı bir şekilde projemizi ortaya çıkarabiliriz. Ana odağımız projeyi hızlı bir şekilde ortaya çıkarmaktır sornasında ise ufak değişiklikler ile biraz özgünleştirmiş oluruz. Bunun yanında bir çok hazır ve daha profesyonel olan ürünleri belli bir ücret karşılığında alabiliriz.

 ## Sonuç
Card oluşturmak için olan kod örneklerine baktığımızda PrimeVue daha sade ve kullanışlı geldi bu örnek için çünkü kullanış şekli açısından daha kolay ve değiştirilebilir bir yapıya sahip .Ancak daha önce de bahsettiğimiz gibi PrimeVue daha çok hız odaklı ve daha kolay işleri daha hızlı yapma amacıyla öne çıkıyor. Grafikte kominitenin kullanımına baktığımızda ise BootstrapVue ve Vuetify daha çok tercih edlimiş nedeni ise daha küçük-büyük ölçekli işleri yapma konusunda daha verimli bir şekilde kullanılması ve projemize göre birini veya ikisini birden kullanmamıza olanak sağlaması . Küçük- büyük ölçekli projelerde benim tercihim Vuetify’dan yana olurdu ihtiyaca göre de BootstrapVue nun artılarından yararlanırdım .

Card oluşturmak için olan kod örneklerine baktığımızda PrimeVue daha sade ve kullanışlı geldi bu örnek için çünkü kullanış şekli açısından daha kolay ve değiştirilebilir bir yapıya sahip .Ancak  daha önce de bahsettiğimiz gibi PrimeVue daha çok hız odaklı ve daha kolay işleri daha hızlı yapma amacıyla öne çıkıyor. Grafikte kominitenin kullanımına baktığımızda ise BootstrapVue ve Vuetify daha çok tercih edlimiş  nedeni ise daha küçük-büyük ölçekli işleri yapma konusunda daha verimli bir şekilde kullanılması ve projemize göre birini veya ikisini birden kullanmamıza olanak sağlaması . Küçük- büyük ölçekli projelerde benim tercihim Vuetify’dan yana olurdu ihtiyaca göre de BootstrapVue nun artılarından yararlanırdım .

#### KAYNAKLAR :

•BootstrapVue Dokümantasyon :https://bootstrap-vue.org/

•Vuetify Dokümantasyon : https://vuetifyjs.com/en/

•PrimeVue Dokümantasyon : https://www.primefaces.org/primevue/#/

•Vue.js https://tr.wikipedia.org/wiki/Vue.js

• BootstrapVue-Vuetify-PrimeVue Karşılaştırması: https://www.npmtrends.com/bootstrap-vue-vs-vuetify-vs-primevue

• MATERIAL DESIGN NEDİR? https://univera-ng.blogspot.com/2015/09/material-design-nedir.html

• MATERIAL DESIGN DOCUMENTATION https://material.io/design/introduction#components

•Prime FACES https://www.primefaces.org/

• Accessibility : https://medium.com/turkishkit

•PrimeVue https://esenbaharturkay.medium.com/

•JS Frameworks : https://www.monocubed.com/

•PrimeFaces: https://www.primetek.com.tr/

•Vue Frameworks:https://blog.bitsrc.io/

•ARIA:https://medium.com/@serkankonakci

•Mobile first :http://www.pitstop.com.tr/

•Material Design :https://wmaraci.com/

•Modular Design : en.wikipedia.org/wiki/Modular_design

Furkan Kılıç