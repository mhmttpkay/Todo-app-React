import React, { useState } from "react";
import "./App.css";

const INITIAL_STATE = [
  { id: 1, baslik: "Alisveris Yap", tamamlandi: false },
  { id: 2, baslik: "Fatura ode", tamamlandi: true }
];

export default function App() {
  const [liste, setListe] = useState(INITIAL_STATE);
  const [yeniBaslik, setYeniBaslik] = useState("");
  
  const newtitle = title => {
    if (title ==='') {
      alert('Bu kısım boş bırakılamaz.')
    } else {
      setListe([...liste, { id: Date.now(), baslik: title, tamamlandi: false }]);
      setYeniBaslik('');
    }

  }

  const clickEvent= (id)=>{
    setListe(
      liste.map(el => el.id === id ? { ...el, tamamlandi: !el.tamamlandi } : el
      )
    );
  }

  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">

        <input
          value={yeniBaslik}
          onChange={e => setYeniBaslik(e.target.value)}
          placeholer="listeye ekle" />

        <button
          onClick={() => {
            newtitle(yeniBaslik);

          }}>Ekle</button>
      </div>
      <div className="liste">
        {liste.map(item => (
          <div key={item.id} onClick={() => {
            clickEvent(item.id);
          }}
            className={item.tamamlandi ? "yapildi" : ""}>{item.baslik}</div>
        ))}
      </div>
      <button
        className="temizle"
        onClick={() => {
          setListe(liste.filter(item => !item.tamamlandi))
        }}
      >Tamamlananları Temizle</button>
    </div>
  );
}
