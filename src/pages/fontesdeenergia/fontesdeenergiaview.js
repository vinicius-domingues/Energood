import React from 'react';
import './fontesdeenergia.css';

import secao1Image from '../../assets/secao1.png';
import secao2Image from '../../assets/secao2.png';
import secao3Image from '../../assets/secao3.png';

import Header from '../../components/loginStatus';

const FontesDeEnergiaView = () => {
  const fontes = [
    {
      title: 'ELÉTRICA',
      description: `A principal fonte de energia usada para carregar carros elétricos. Ela é fornecida por redes de distribuição de energia elétrica e pode vir de várias fontes, como:`,
      image: secao1Image,
    },
    {
      title: 'SOLAR DIRETA',
      description: 'Alguns veículos elétricos podem ser carregados usando energia solar por meio de estações de carregamento equipadas com painéis solares.',
      image: secao2Image,
    },
    {
      title: 'SMART GRID (ELÉTRICA ESPECIAL)',
      description: 'Redes de energia modernas que permitem que os carros elétricos interajam com a rede elétrica, possibilitando carregamento eficiente e otimizado, podendo até devolver energia à rede quando necessário.',
      image: secao3Image,
    }
  ];

  return (
    <div className="fontesdeenergia-container">
      <Header />
      
      <h1 className="fontesdeenergia-header">FONTES DE ENERGIA</h1>

      <div className="fontesdeenergia-section fontesdeenergia-section-1">
        <div className="image-container">
          <img src={fontes[0].image} alt={fontes[0].title} />
        </div>
        <div className="text-container">
          <h2 className="section-title">{fontes[0].title}</h2>
          <p className="section-description">{fontes[0].description}</p>
          <ul className='lista'>
            <li><strong>Energia solar:</strong> Usando painéis solares para gerar eletricidade.</li>
            <li><strong>Energia eólica:</strong> Gerada por turbinas eólicas.</li>
            <li><strong>Energia hidrelétrica:</strong> Gerada a partir da água.</li>
          </ul>
        </div>
      </div>

      <div className="fontesdeenergia-section fontesdeenergia-section-2">
        <div className="text-container">
          <h2 className="section-title">{fontes[1].title}</h2>
          <p className="section-description">{fontes[1].description}</p>
        </div>
        <div className="image-container">
          <img src={fontes[1].image} alt={fontes[1].title} />
        </div>
      </div>

      <div className="fontesdeenergia-section fontesdeenergia-section-3">
        <div className="image-container">
          <img src={fontes[2].image} alt={fontes[2].title} />
        </div>
        <div className="text-container">
          <h2 className="section-title">{fontes[2].title}</h2>
          <p className="section-description">{fontes[2].description}</p>
        </div>
      </div>
    </div>
  );
};

export default FontesDeEnergiaView;
