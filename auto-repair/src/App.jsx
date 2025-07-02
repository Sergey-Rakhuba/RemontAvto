import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import Contacts from './components/pages/Contacts';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Автосервис
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button color="inherit" component={Link} to="/">
                Главная
              </Button>
              <Button color="inherit" component={Link} to="/services">
                Услуги
              </Button>
              <Button color="inherit" component={Link} to="/portfolio">
                Примеры работ
              </Button>
              <Button color="inherit" component={Link} to="/contacts">
                Контакты
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Container component="main" sx={{ flexGrow: 1, mt: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Container>
        <Box component="footer" sx={{ p: 3, bgcolor: 'background.paper' }}>
          <Typography variant="body2" color="text.secondary" align="center">
            © 2025 Автосервис. Все права защищены.
          </Typography>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
