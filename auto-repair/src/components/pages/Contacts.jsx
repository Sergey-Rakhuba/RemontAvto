import React from 'react';
import { Box, Typography, Container, Grid, TextField, Button } from '@mui/material';
import { Phone, Email, LocationOn } from '@mui/icons-material';

const Contacts = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Контакты
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Свяжитесь с нами любым удобным способом
        </Typography>
      </Box>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 1 }}>
            <Typography variant="h5" gutterBottom>
              Наши контакты
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Grid container spacing={2}>
                <Grid item>
                  <Phone color="primary" />
                </Grid>
                <Grid item>
                  <Typography>+7 (XXX) XXX-XX-XX</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item>
                  <Email color="primary" />
                </Grid>
                <Grid item>
                  <Typography>info@example.com</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item>
                  <LocationOn color="primary" />
                </Grid>
                <Grid item>
                  <Typography>г. Москва, ул. Примерная, д. 1</Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box component="form" sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 1 }}>
            <Typography variant="h5" gutterBottom>
              Запись на обслуживание
            </Typography>
            <Box sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Ваше имя"
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Ваш телефон"
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Ваш автомобиль"
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Описание проблемы"
                margin="normal"
                variant="outlined"
                multiline
                rows={4}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2 }}
              >
                Отправить заявку
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contacts;
