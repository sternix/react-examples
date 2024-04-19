import React, { Fragment, useEffect, useState } from "react";

function App() {

  const cinsler = [
    { key: 0, value: 'Seçiniz' },
    { key: 1, value: 'Erkek' },
    { key: 2, value: 'Bayan' }
  ];

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [cinsiyet, setCinsiyet] = useState(2);

  // eğer varsayılan olarak seçili olmasını istediğimiz varsa [1,2] gibi key verebiliriz
  const [categories, setCategories] = useState([]);

  const [rule, setRule] = useState(true);

  const [rules, setRules] = useState([
    { key: 1, value: '1. kuralı kabul ediyorum', checked: false },
    { key: 2, value: '2. kuralı kabul ediyorum', checked: false },
    { key: 3, value: '3. kuralı kabul ediyorum', checked: true },
    { key: 4, value: '4. kuralı kabul ediyorum', checked: false },
  ]);

  const [level, setLevel] = useState('');

  const [resim, setResim] = useState(false);
  const [image, setImage] = useState(false);

  useEffect(() => {
    if (resim) {
      const fileReader = new FileReader()
      fileReader.addEventListener('load', function () {
        setImage(this.result)
      })
      fileReader.readAsDataURL(resim)
    }
  }, [resim])

  const checkAll = (checked) => {
    if (checked) {
      setRule(true)
      setRules(rules => rules.map(r => {
        r.checked = true
        return r
      }))
    } else {
      setRule(false)
      setRules(rules => rules.map(r => {
        r.checked = false
        return r
      }))
    }
  }

  const categoryList = [
    { key: 0, value: 'Seçiniz' },
    { key: 1, value: 'PHP' },
    { key: 2, value: 'Rust' },
    { key: 3, value: 'Go' },
    { key: 4, value: 'Java' },
    { key: 5, value: 'Javascript' },
    { key: 6, value: 'HTML' },
    { key: 7, value: 'CSS' },
  ]

  const levels = [
    { key: 'beginner', value: 'Başlangıç' },
    { key: 'junior', value: 'Junior' },
    { key: 'senior', value: 'Senior' }
  ]

  // başına + koyarak Number yapıyoruz
  const selectedCins = cinsler.find(c => c.key === +cinsiyet)

  // iki küme kesişimi
  const selectedCategories = categoryList.filter(c => categories.includes(String(c.key)))

  const selectedLevel = levels.find(c => c.key === level)

  // devam et butonunun aktive olabilmesi için 4 rules + 1 rule true olmalı
  const enabled = rules.every(r => r.checked) && rule
  const checked = rules.every(r => r.checked) && rule

  const checkRule = (key, checked) => {
    setRules(rules => rules.map(r => {
      if (key === r.key) {
        r.checked = checked
      }
      return r
    }))
  }

  const uploadFile = () => {
    const formData = new FormData()
    formData.append('resim', resim)

    fetch('http://localhost:3001/upload', {
      method: 'POST',
      body: formData
      // diğer kontrollerde yapılabilir
    }).then(console.log('Dosya başarı ile upload edildi'))
      .catch(e => console.log(`Dosya yükleme hatası: ${e}`))
  }

  return (
    <>
      <button onClick={() => setName('TEST NAME')}>Adı değiştir</button>
      <br />
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <br />
      <p>{name}</p>

      <br />
      <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
      <br />
      <p>{description}</p>

      <br />
      Cinsiyet:
      <select value={cinsiyet} onChange={e => setCinsiyet(e.target.value)}>
        {
          cinsler.map(c => (
            <option key={c.key} value={c.key}>{c.value}</option>
          ))
        }
      </select>

      <pre>{JSON.stringify(selectedCins, null, 2)}</pre>

      <p>{cinsiyet}</p>

      <br />
      Dil Kategorileri
      <select multiple size="7" value={categories} onChange={(e) => setCategories([...e.target.selectedOptions].map(o => o.value))} >
        {
          categoryList.map(c => (
            <option key={c.key} value={c.key}>{c.value}</option>
          ))
        }
      </select>

      <pre>{JSON.stringify(selectedCategories, null, 2)}</pre>
      <p>{categories}</p>

      <br />
      Dosya yüklemek

      <label>
        <input type="file" onChange={e => setResim(e.target.files[0])} />
      </label>


      {
        resim && (
          <>
            {/* size, type, kontrolleri yapılabilir */}
            <h5>Name: {resim.name}</h5>
            <h5>Type: {resim.type}</h5>
            <h5>Size: {resim.size}</h5>
            {image && <img src={image} alt="resim" />}
          </>
        )
      }

      <br />

      <button onClick={uploadFile} disabled={!image} >Dosya Yükle</button>

      <br />

      Yeterlilik seviyeleri
      {
        // <></> 'de key kullanılmıyor bu şekilde yazmak gerekiyor
        // yada <div> kullanılabilir
        levels.map((l, i) => (
          <Fragment key={i}>
            <br />
            <label>
              <input type="radio" name="a" value={l.key} checked={l.key === level} onChange={e => setLevel(e.target.value)} />
              {l.value}
            </label>
          </Fragment>
        ))
      }

      <p>{level}</p>
      <pre>{JSON.stringify(selectedLevel, null, 2)}</pre>

      <br /><br />

      Kurallar
      {
        rules.map(r => (
          <div key={r.key}>
            <label >
              <input type="checkbox" checked={r.checked} onChange={e => checkRule(r.key, e.target.checked)} />
              {r.value}
            </label>
          </div>
        ))
      }

      <pre>{JSON.stringify(rules, null, 2)}</pre>

      <label>
        <input type="checkbox" checked={rule} onChange={e => setRule(e.target.checked)} />
        Kuralları kabul ediyorum
      </label>
      <p>{rule ? 'true' : 'false'}</p>

      <br />

      <label>
        <input type="checkbox" checked={checked} onChange={e => checkAll(e.target.checked)} />
        Yukarıdaki tüm kuralları kabul ediyorum
      </label>
      <br />

      <button disabled={!enabled}>Devam et</button>

    </>
  )
}

export default App