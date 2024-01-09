import '../styles/about-section.css'

export const About = () => {

  const itemsAbout = [
    {
      img: 'url_de_la_imagen',
      title: 'Título del elemento',
      text: 'Texto descriptivo del elemento.'
    },
    {
      img: 'url_de_la_imagen',
      title: 'Título del elemento',
      text: 'Texto descriptivo del elemento.'
    },
    {
      img: 'url_de_la_imagen',
      title: 'Título del elemento',
      text: 'Texto descriptivo del elemento.'
    },
  ]

  return (
    <div className="about-wrapper">
      <div className="about-container">
        <div className='top-container'>
          <p className="title-about">
            AWS explora 
          </p>
        </div>
        <div className='bot-container'>
        {itemsAbout.map((item, index) => (
          <div key={index} className="about-item">
            <img src={item.img} alt={`Imagen ${index}`} />
            <p className="item-title">{item.title}</p>
            <p className="item-text">{item.text}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}
