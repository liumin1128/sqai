import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';

interface Option {
  label: string;
  image: string;
  value: string;
}

export interface Message {
  key: string;
  isMe: boolean;
  message: string;
  options?: Option[];
  images?: string[];
}

export default (props: Message) => {
  const { isMe, message, options, images } = props;
  return (
    <Box sx={{ p: 2 }}>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          ...(isMe && {
            justifyContent: 'flex-end',
          }),
        }}
      >
        {!isMe && <Avatar />}
        <Stack spacing={2}>
          <Box
            sx={{
              backgroundColor: '#f2f2f2',
              p: 2,
              borderRadius: '0 16px 16px 16px',
              display: 'inline-block',
              ...(isMe && {
                borderRadius: '16px 0px 16px 16px',
                backgroundColor: '#00266b',
                color: '#fff',
              }),
            }}
          >
            <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
              {message}
            </Typography>
          </Box>

          {images && (
            <Stack spacing={2}>
              {images.map((img) => (
                <img key={img} src={img} style={{ width: '100%' }} alt="" />
              ))}
            </Stack>
          )}

          {options && (
            <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
              {options.map((option) => {
                return (
                  <Stack
                    key={option.value}
                    sx={{ width: 128, mr: 2, mb: 2 }}
                    spacing={1}
                  >
                    <CardMedia
                      sx={{
                        width: '100%',
                        paddingTop: '64%',
                        borderRadius: 0,
                      }}
                      image={option.image}
                    />
                    <Typography variant="body2">{option.label}</Typography>
                  </Stack>
                );
              })}
            </Stack>
          )}
        </Stack>

        {isMe && <Avatar />}
      </Stack>
    </Box>
  );
};
