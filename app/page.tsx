import Banner from "./components/Banner";
import GiftCard from "./GiftCard";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fff8fc",
        padding: "30px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <Banner />

        <div
          style={{
            marginTop: "30px",
            background: "#ffffff",
            borderRadius: "25px",
            padding: "25px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ margin: 0 }}>🎁 Wishlist Аллы</h2>

          <p style={{ marginTop: "15px", color: "#666" }}>
            Спасибо, что заглянули в мой Wishlist! Здесь собраны подарки, которые сделают меня немного счастливее. 
            Ваше внимание для меня — самый ценный подарок. 💖
          </p>
        </div>
      </div>
<GiftCard
  title="Dior Backstage Eye Palette 01"
  price="79 000 ₩"
  description="Универсальная палетка в натуральных оттенках 🤍"
  image="/images/dior-backstage-01.jpg"
/>
<GiftCard
  title="New Balance 530 White"
  price="119 000 ₩"
  description="Универсальные белые кроссовки, которые подойдут ко всему 🤍"
  image="/images/newbalance530.jpg"
  link="https://kream.co.kr/products/23928"
/> 
<GiftCard
  title="LEGO Ideas Tuxedo Cat"
  price="140 000 ₩"
  description="Очень милый набор LEGO с черно-белым котиком. Давно хочу собрать его 🐈🧱"
  image="/images/legocat.jpg"
  link="https://www.lego.com/"
/>
<GiftCard
  title="Levi Ackerman Figure"
  price="Любая цена"
  description="Любая фигурка Леви из «Атаки титанов» будет отличным подарком ❤️"
  image="/images/levi.jpg"
/>
<GiftCard
  title="Gintama Blind Box Figure"
  price="Любая цена"
  description="Любая Blind Box фигурка из Gintama станет отличным подарком 💙 Купить можно в магазине POP MART."
  image="/images/gintama.jpg"
  link="https://www.popmart.com/"
/>
<GiftCard
title="Charles & Keith Rachel Elongated Multi-Pocket Shoulder Bag"
price="Любая цена"
description="Чтоб купить со скидкой, можете ввести мой номер телефона."
image="/images/charles-keith-rachel.jpg"
link="https://www.charleskeith.com/kr/CK2-20160187_NOIR_M.html"
 />
 <GiftCard
title="Adidas Samba OG"
price="Любая цена"
description="(W) Adidas Samba OG Cloud White Core Black. Размер: 240."
image="/images/samba.jpg"
link="https://kream.co.kr/products/309722"
/>
<GiftCard
title="BORNTOSTANDOUT Dirty Milk"
price="Любая цена"
description="Объем: 7.5 мл."
image="/images/dirtymilk.jpg"
link="https://borntostandout.com/"
/>
<GiftCard
title="BORNTOSTANDOUT Musc X"
price="Любая цена"
description="Объем: 7.5 мл."
image="/images/muscx.jpg"
link="https://borntostandout.com/"
/>
<GiftCard
title="Сертификат на массаж"
price="Любая сумма"
description="Подарочный сертификат на расслабляющий массаж."
image="/images/massage.jpg"
/>
<GiftCard
title="Эстетичные или оригинальные кружки (2 шт.) ☕🤍"
price=""
description="Эстетичная или оригинальная пара кружек для уютных чаепитий и красивых моментов дома."
image="/images/cup.jpg"
/>
<GiftCard
title="Серьги Swarovski Constella ✨"
price=""
description="Изящные серьги Swarovski Constella с сияющими кристаллами — элегантное украшение, которое подойдет как на каждый день, так и для особых случаев."
image="/images/swarovski-earrings.jpg"
link="https://www.swarovski.com/ko-KR/p-M5692262/Constella-%EC%8A%A4%ED%84%B0%EB%93%9C-%EC%9D%B4%EC%96%B4%EB%A7%81-%EB%9D%BC%EC%9A%B4%EB%93%9C-%EC%BB%B7-%ED%99%94%EC%9D%B4%ED%8A%B8-%EB%A1%9C%EB%93%90-%ED%94%8C%EB%9E%98%ED%8C%85?variantID=5692262"
/>
<section style={{ textAlign: "center", marginTop: "50px", padding: "20px" }}>
  <h2>💝 Спасибо!</h2>
  <p>
    Спасибо, что заглянули в мой список желаний! Мне очень приятно ваше внимание.
    Если вы решите сделать мне подарок, я буду искренне благодарна. ❤️
  </p>
</section>
</main>
  );
   }
   
