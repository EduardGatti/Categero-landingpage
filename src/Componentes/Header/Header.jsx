import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Header() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '300px',
        backgroundColor: '#0A192F',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        textAlign: 'center',
        flexDirection: 'column',
        padding: 2
      }}
    >
      <Typography variant="h3" fontWeight="bold">
        Categeró Centro Esportivo
      </Typography>
      <Typography variant="subtitle1" sx={{ mt: 2, color: '#00D2FF' }}>
        Sua jornada fitness começa aqui
      </Typography>
    </Box>
  );
}

export default Header;
