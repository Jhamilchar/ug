import "../styles/parameters.css";

const Parameters = () => {
  return (
    <>
      <div className="wrap">
        <div className="parameters-wrap">
          <div className="metricas">
            <div className="title-parameters">
              <p>
                AWS impulsa a los desarrolladores a innovar más rápido con herramientas nativas de la nube.
              </p>
            </div>
            <div className="statistics">
              <div className="percentages">
                <p className="big-letter">-47%</p>
                <p className="detail-percentage">
                  Reducción en costos operativos tras migrar a AWS
                </p>
              </div>
              <div className="percentages">
                <p className="big-letter">+190</p>
                <p className="detail-percentage">
                  Países que utilizan AWS para potenciar su infraestructura
                </p>
              </div>
            </div>
          </div>
          <div className="solutions">
            <div className="solutions-containers">
              <h2>Dificultades para Encontrar Mentores</h2>
              <p>
              Los nuevos miembros de la comunidad de AWS para todos tenían dificultades para encontrar mentores experimentados que pudieran guiarlos en sus proyectos y carreras en la nube.
              </p>
            </div>
            <div className="solutions-containers">
              <h2>Programa de Mentores AWS para todos</h2>
              <p>
              Se estableció un programa de mentores dentro de la comunidad de AWS para todos, conectando a nuevos miembros con expertos experimentados. Este programa ha proporcionado orientación personalizada y ha acelerado el aprendizaje y desarrollo profesional de los participantes.
              </p>
            </div>
            <div className="solutions-containers">
              <h2>Falta de Networking</h2>
              <p>
              Los miembros de la comunidad de AWS para todos no tenían suficientes oportunidades para conectarse con otros profesionales y expertos en la nube, limitando la colaboración y el intercambio de experiencias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parameters;
