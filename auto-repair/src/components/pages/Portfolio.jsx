import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

const projects = [
  {
    title: 'Ремонт двигателя',
    description: 'Замена поршневой группы и ремонт ГРМ',
    image: '/portfolio/engine.jpg'
  },
  {
    title: 'Кузовной ремонт',
    description: 'Восстановление после ДТП с покраской',
    image: '/portfolio/bodywork.jpg'
  },
  {
    title: 'Электрика',
    description: 'Ремонт электронных систем управления',
    image: '/portfolio/electric.jpg'
  },
  {
    title: 'Техобслуживание',
    description: 'Комплексное ТО с заменой масла и фильтров',
    image: '/portfolio/service.jpg'
  }
];

const Portfolio = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Наши работы
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Примеры выполненных проектов и работ
        </Typography>
      </Box>
      
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography paragraph>
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;
