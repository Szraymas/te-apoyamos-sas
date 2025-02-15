import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';


const MainContent = () => {
    return (
      <div className="container">
        <h2 className="section-title">Nuestra Propuesta</h2>
        
        
        <Card className="feature-card">
          <Card.Body>
            <Card.Title className="mb-4" style={{fontSize: '1.75rem'}}>
              <span className="badge-icon"><i className="fas fa-search"></i></span>
              Paso 1: Análisis del Problema
            </Card.Title>

            <Card.Subtitle className="mb-3 text">Requerimientos</Card.Subtitle>
            <ListGroup>
              <ListGroup.Item>
                <i className="fas fa-desktop text-primary"></i>
                Presencia profesional en línea
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="fas fa-mobile-alt text-primary"></i>
                Diseño responsivo y accesible
              </ListGroup.Item>
              <ListGroup.Item>
                <i className='fas fa-mobile-alt text-primary'></i>
                Secciones claras: servicios, equipo, contacto
              </ListGroup.Item>
              <ListGroup.Item>
                <i className='fas fa-mobile-alt text-primary'></i>
                Compatibilidad con múltiples dispositivos
              </ListGroup.Item>
              <ListGroup.Item>
                <i className='fas fa-mobile-alt text-primary'></i>
                Optimización para SEO básico
              </ListGroup.Item>
            </ListGroup>
  
            <Card.Subtitle className="mt-4 mb-3 text">Actores Involucrados</Card.Subtitle>
            <div className="row">
              <div className="col-md-4">
                <div className="actor-card p-3 text-center">
                  <i className="fas fa-users fa-3x text-primary mb-3"></i>
                  <h5>Clientes potenciales</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="actor-card p-3 text-center">
                  <i className="fas fa-users fa-3x text-primary mb-3"></i>
                  <h5>Abogados de la firma</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="actor-card p-3 text-center">
                  <i className="fas fa-users fa-3x text-primary mb-3"></i>
                  <h5>Administradores del sitio</h5>
                </div>
              </div>
            </div>

            <Card.Subtitle className="mt-4 mb-3 text">Información a registrar</Card.Subtitle>
            <ListGroup>
              <ListGroup.Item>
                <i className="fas fa-desktop text-primary"></i>
                Servicios jurídicos ofrecidos
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="fas fa-desktop text-primary"></i>
                Perfiles de abogados
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="fas fa-desktop text-primary"></i>
                Formulario de contacto
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="fas fa-desktop text-primary"></i>
                Reconocimientos y certificaciones
              </ListGroup.Item>
            </ListGroup>

          </Card.Body>
          </Card>

          <Card className="feature-card">
          <Card.Body>
            <Card.Title className="mb-4" style={{fontSize: '1.75rem'}}>
              <span className="badge-icon"><i className="fas fa-tools"></i></span>
              Paso 2: Funciones del proyecto
            </Card.Title>

            <Card.Subtitle className='mb-3 text'>Presentación Institucional</Card.Subtitle>
            <ListGroup>
              <ListGroup.Item>
                <i className="fas fa-desktop text-primary"></i>
                Mostrar información corporativa "misión, visión, valores".
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="fas fa-mobile-alt text-primary"></i>
                Destacar certificaciones y reconocimientos de la firma.
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="fas fa-mobile-alt text-primary"></i>
                Incluir una sección de "Sobre Nosotros" con historia y filosofía.
              </ListGroup.Item>
            </ListGroup>

            <Card.Subtitle className='mt-4 mb-3 text'>Servicios Jurídicos</Card.Subtitle>
            <ListGroup>
              <ListGroup.Item>
                <i className="fas fa-desktop text-primary"></i>
                Catálogo detallado de áreas de práctica "laboral, civil, comercial".
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="fas fa-mobile-alt text-primary"></i>
                Explicación clara de cada servicio con ejemplos prácticos.
              </ListGroup.Item>
            </ListGroup>
            
            <Card.Subtitle className='mt-4 mb-3 text'>Equipo Profesional</Card.Subtitle>
            <ListGroup>
              <ListGroup.Item>
                <i className="fas fa-desktop text-primary"></i>
                Perfiles interactivos de abogados "foto, especialización, experiencia".
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="fas fa-mobile-alt text-primary"></i>
                Sistema de filtrado por área de expertise.
              </ListGroup.Item>
            </ListGroup>

            <Card.Subtitle className='mt-4 mb-3 text'>Interacción con Usuarios</Card.Subtitle>
            <ListGroup>
              <ListGroup.Item>
                <i className="fas fa-desktop text-primary"></i>
                Formulario de contacto.
              </ListGroup.Item>
            </ListGroup>

            <Card.Title className="mt-3 mb-4" style={{fontSize: '1.75rem'}}>
              <i className="fas fa-tools"></i>
              Tratamiento de información
            </Card.Title>

            <Card.Subtitle className='mt-4 mb-3 text'>Datos</Card.Subtitle>
            <ListGroup>
              <ListGroup.Item>
                <i className="fas fa-desktop text-primary"></i>
                Se almecenará en archivos JSON
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="fas fa-desktop text-primary"></i>
                Reutilización de componentes de React
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="fas fa-desktop text-primary"></i>
                Almacenamiento temporal en el localStorage
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="fas fa-desktop text-primary"></i>
                Validaciones de datos
              </ListGroup.Item>              
            </ListGroup>

            <Card.Subtitle className='mt-4 mb-3 text'>Seguridad y Privacidad</Card.Subtitle>
            <ListGroup>
              <ListGroup.Item>
                <i className="fas fa-desktop text-primary"></i>
                Encriptación de datos sensibles en formularios. 
              </ListGroup.Item>
              <ListGroup.Item>
                <i className="fas fa-desktop text-primary"></i>
                Exclusión deliberada de bases de datos externas para evitar riesgos de filtración. 
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
  
        <Card className="feature-card">
          <Card.Body>
            <Card.Title className="mb-4" style={{fontSize: '1.75rem'}}>
              <span className="badge-icon"><i className="fas fa-tools"></i></span>
              Paso 3: Herramientas Utilizadas
            </Card.Title>
            
            <div className="row">
              <div className="col-md-6">
                <div className="tech-card p-4 mb-4">
                  <i className="fab fa-react fa-2x text-info mb-3"></i>
                  <h5>React JS</h5>
                  <p>Biblioteca principal para el desarrollo</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="tech-card p-4 mb-4">
                  <i className="fab fa-react fa-2x text-info mb-3"></i>
                  <h5>React-Boostrap</h5>
                  <p>Diseño Responsive</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="tech-card p-4 mb-4">
                  <i className="fab fa-react fa-2x text-info mb-3"></i>
                  <h5>React Router</h5>
                  <p>Navegación</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="tech-card p-4 mb-4">
                  <i className="fab fa-react fa-2x text-info mb-3"></i>
                  <h5>CSS</h5>
                  <p>Estilos modulares</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="tech-card p-4 mb-4">
                  <i className="fab fa-react fa-2x text-info mb-3"></i>
                  <h5>Vercel</h5>
                  <p>Deploy automático</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="tech-card p-4 mb-4">
                  <i className="fab fa-react fa-2x text-info mb-3"></i>
                  <h5>Google Fonts</h5>
                  <p>Tipografía</p>
                </div>
              </div>            
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  };

export default MainContent;