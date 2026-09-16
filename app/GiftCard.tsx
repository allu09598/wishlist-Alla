"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./GiftCard.module.css";

type GiftCardProps = {
  title: string;
  price: string;
  description: string;
  image: string;
  link?: string;
};

export default function GiftCard({
  title,
  price,
  description,
  image,
  link,
}: GiftCardProps) {
  const [reserved, setReserved] = useState(false);

  const storageKey = `reserved-${title}`;

  useEffect(() => {
    const savedReservation = localStorage.getItem(storageKey);

    if (savedReservation === "true") {
      setReserved(true);
    }
  }, [storageKey]);

  const handleReserve = () => {
    const ok = confirm(
      "Вы уверены, что хотите забронировать этот подарок?\n\nПосле этого другие гости увидят, что он уже выбран."
    );

    if (ok) {
      setReserved(true);
      localStorage.setItem(storageKey, "true");
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageBox}>
        <div
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            fontSize: "24px",
            zIndex: 2,
            background: "#fff",
            borderRadius: "50%",
            width: "38px",
            height: "38px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          🤍
        </div>

        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className={styles.image}
        />
      </div>

      <h2>{title}</h2>

      <h3 style={{ color: "#b46ddb" }}>{price}</h3>

      <p>{description}</p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            marginTop: "10px",
            marginBottom: "20px",
            color: "#b46ddb",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          🔗 Посмотреть товар
        </a>
      )}

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        <button
          onClick={handleReserve}
          disabled={reserved}
          style={{
            flex: 1,
            background: "#d6b2ec",
            color: "#fff",
            border: "none",
            padding: "12px",
            borderRadius: "14px",
            cursor: reserved ? "default" : "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          {reserved ? "💜 Забронировано" : "🎁 Я подарю"}
        </button>
      </div>
    </div>
  );
}