import { useNavigate } from 'react-router-dom';
import Header from '../Componentes/Header/Header';
import { Box, Typography, Button, Container, Grid, Card, CardContent } from '@mui/material';

function PaginaHome() {
  const navigate = useNavigate()
  return (
    <>
      <Header />

      {/* Seção de apresentação */}
      <Box sx={{ backgroundColor: '#0D1B2A', color: '#FFFFFF', py: 8 }}>
        <Container>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            O que oferecemos
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '700px' }}>
            A Categeró une academia, funcional, lutas, quadras esportivas e muito mais em um único centro esportivo completo para você atingir seus objetivos com qualidade.
          </Typography>
        </Container>
      </Box>

      {/* Seção de serviços em cards */}
      <Box sx={{ backgroundColor: '#102542', py: 8 }}>
        <Container>
          <Grid container spacing={4}>
            {[
              { title: 'Academia', desc: 'Equipamentos modernos e acompanhamento profissional.' },
              { title: 'Muay Thai', desc: 'Aulas com treinadores experientes.' },
              { title: 'Funcional', desc: 'Treinos dinâmicos e eficazes.' },
              { title: 'Quadras de areia', desc: 'Beach Tennis e vôlei com ótima estrutura.' },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: '100%', backgroundColor: '#1E2A38', color: '#fff' }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2">{item.desc}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ backgroundColor: '#0A192F', color: '#FFFFFF', py: 6, textAlign: 'center' }}>
        <Container>
          <Typography variant="h5" gutterBottom>
            Pronto para transformar sua rotina?
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 2,
              backgroundColor: '#00D2FF',
              color: '#0A192F',
              '&:hover': { backgroundColor: '#00aacc' }
            }}
            onClick={() => {navigate('/botao')}}
          >
            Agende uma aula experimental
          </Button>
        </Container>
      </Box>
    </>
  );
}

export default PaginaHome;
