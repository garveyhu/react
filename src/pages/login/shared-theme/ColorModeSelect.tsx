import { Box, type SxProps, type Theme } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';

export default function ColorModeSelect(props: { sx?: SxProps<Theme> }) {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }

  const handleToggle = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <Box
      sx={{
        fontSize: '17px',
        position: 'relative',
        display: 'inline-block',
        width: '3.5em',
        height: '2em',
        transformStyle: 'preserve-3d',
        perspective: '500px',
        animation: 'toggle__animation 3s infinite',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          filter: 'blur(20px)',
          zIndex: -1,
          borderRadius: '50px',
          backgroundColor: '#d8ff99',
          backgroundImage: `
            radial-gradient(at 21% 46%, hsla(183,65%,60%,1) 0px, transparent 50%),
            radial-gradient(at 23% 25%, hsla(359,74%,70%,1) 0px, transparent 50%),
            radial-gradient(at 20% 1%, hsla(267,83%,75%,1) 0px, transparent 50%),
            radial-gradient(at 86% 87%, hsla(204,69%,68%,1) 0px, transparent 50%),
            radial-gradient(at 99% 41%, hsla(171,72%,77%,1) 0px, transparent 50%),
            radial-gradient(at 55% 24%, hsla(138,60%,62%,1) 0px, transparent 50%)
          `,
        },
        '@keyframes toggle__animation': {
          '0%, 100%': {
            transform: 'translateY(-10px) rotateX(15deg) rotateY(-20deg)',
          },
          '50%': {
            transform: 'translateY(0px) rotateX(15deg) rotateY(-20deg)',
          },
        },
        ...props.sx,
      }}
    >
      <Box
        component="input"
        type="checkbox"
        checked={mode === 'dark'}
        onChange={handleToggle}
        sx={{
          opacity: 0,
          width: 0,
          height: 0,
        }}
      />
      <Box
        onClick={handleToggle}
        sx={{
          position: 'absolute',
          cursor: 'pointer',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: mode === 'dark' ? '#17202A' : '#fdfefedc',
          transition: '.4s',
          borderRadius: '30px',
          '&::before': {
            position: 'absolute',
            content: '""',
            height: '1.4em',
            width: '1.4em',
            left: '0.3em',
            bottom: '0.35em',
            transition: '.4s',
            borderRadius: '50%',
            boxShadow:
              'rgba(0, 0, 0, 0.17) 0px -10px 10px 0px inset, rgba(0, 0, 0, 0.09) 0px -1px 15px -8px',
            backgroundColor: '#f0e6ff',
            backgroundImage: `
              radial-gradient(at 81% 39%, hsla(280,45%,85%,1) 0px, transparent 50%),
              radial-gradient(at 11% 72%, hsla(240,40%,88%,1) 0px, transparent 50%),
              radial-gradient(at 23% 20%, hsla(320,35%,90%,1) 0px, transparent 50%)
            `,
            transform: mode === 'dark' ? 'translateX(1.5em)' : 'translateX(0)',
          },
        }}
      />
    </Box>
  );
}
