import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const services = [
  {
    title: 'Диагностика',
    description: 'Комплексная диагностика автомобиля',
    image: '/services/diagnostic.jpg'
  },
  {
    title: 'Ремонт',
    description: 'Ремонт всех систем автомобиля',
    image: '/services/repair.jpg'
  },
  {
    title: 'Техобслуживание',
    description: 'Регулярное техническое обслуживание',
    image: '/services/service.jpg'
  },
  {
    title: 'Кузовной ремонт',
    description: 'Восстановление кузова после ДТП',
    image: '/services/bodywork.jpg'
  },
  {
    title: 'Электрика',
    description: 'Ремонт электронных систем',
    image: '/services/electric.jpg'
  },
  {
    title: 'Шиномонтаж',
    description: 'Установка и балансировка колес',
    image: '/services/tire.jpg'
  }
];

const Services = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Наши услуги
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Полный спектр услуг по ремонту и обслуживанию автомобилей
        </Typography>
      </Box>
      
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {service.title}
                </Typography>
                <Typography paragraph>
                  {service.description}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  endIcon={<ArrowForward />}
                >
                  Узнать больше
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
