import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/OutlinedInput';
import SendIcon from '@mui/icons-material/Send';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import MessageBox, { Message } from './Message';
import { gptSend } from '@/service/gpt';
import Iframe from '@/components/Iframe';

export default () => {
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [visible, setVisible] = React.useState(true);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const messagesRef = React.useRef<HTMLDivElement>(null);

  const iframeRef = useRef<HTMLIFrameElement>(null);

  const pushMessage = (message: Message) => {
    setMessages((messages) => [...messages, message]);
    setTimeout(() => {
      messagesRef.current?.scrollTo({
        top: messagesRef.current.scrollHeight,
      });
    }, 300);
  };

  useEffect(() => {
    iframeRef.current?.open('/html/booking.html');

    const timer = setTimeout(() => {
      pushMessage({
        key: `${Date.now()}`,
        isMe: false,
        message: '你好，请问有什么可以帮到你？',
      });
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleSend = async () => {
    const content = inputRef?.current?.value;
    inputRef.current.value = '';

    if (messages.length === 1) {
      pushMessage({
        key: `${Date.now()}`,
        isMe: true,
        message: content || '',
      });
      setTimeout(() => {
        pushMessage({
          key: `${Date.now()}`,
          isMe: false,
          message: '好的，根据您以往的旅行记录，我为您推荐了以下目的地：',
          options: [
            { label: '巴厘岛', value: 'bld', image: '/images/bld.jpeg' },
            { label: '曼谷', value: 'mg', image: '/images/mg.jpeg' },
            {
              label: '马尔代夫',
              value: 'medf',
              image: '/images/medf.jpeg',
            },
          ],
        });
      }, 1000);
    }

    if (messages.length === 3) {
      pushMessage({
        key: `${Date.now()}`,
        isMe: true,
        message: content || '',
      });
      setTimeout(() => {
        pushMessage({
          key: `${Date.now()}`,
          isMe: false,
          message: `巴厘岛是印尼的一个岛屿，因为其美丽的海滩和浪漫的度假体验而闻名于世。它是世界上最受欢迎的旅游目的地之一，每年吸引着数百万游客前来参观。

    巴厘岛的气候温暖舒适，全年可游玩。它的自然景观非常多样，包括茂密的热带雨林、火山和美丽的海滩。岛上还有很多有趣的文化和历史遗迹，如独特的巴厘岛神庙和印尼传统舞蹈。

    与其他许多亚洲国家相比，巴厘岛的食品文化非常独特。巴厘岛的美食以其独特的味道和风味为特色，包括烤猪、传统的巴厘岛饭、各种酱汁和当地烤鱼等。

    最重要的是，巴厘岛以其豪华和放松的度假体验而闻名于世。岛上的度假村和旅游胜地提供了各种各样的活动和服务，包括spa、高尔夫球场、水上运动、沙滩漫步和汗蒸房等。无论您是想放松身心还是充满活力地度过假期，巴厘岛都是一个完美的选择。

    为您列举了一些热门景点：`,
          options: [
            { label: '蓝梦岛', value: '1', image: '/images/1.jpeg' },
            { label: '金巴兰海滩', value: '2', image: '/images/2.jpeg' },
            { label: '库塔海滩', value: '3', image: '/images/3.jpeg' },
            { label: '情人崖', value: '4', image: '/images/4.jpeg' },
            { label: '海神庙', value: '5', image: '/images/5.jpeg' },
          ],
        });
      }, 1000);
    }

    if (messages.length === 5) {
      pushMessage({
        key: `${Date.now()}`,
        isMe: true,
        message: content || '',
      });
      setTimeout(() => {
        pushMessage({
          key: `${Date.now()}`,
          isMe: false,
          message: `根据您以往的行程记录，已经为您和您的家人选择了最优行程，请问是否可以按照这个行程来进行预订？`,
          images: ['/images/booking1.png'],
        });
        iframeRef.current?.open('/html/booking2.html');
      }, 1000);
    }

    if (messages.length === 7) {
      pushMessage({
        key: `${Date.now()}`,
        isMe: true,
        message: content || '',
      });
      setTimeout(() => {
        pushMessage({
          key: `${Date.now()}`,
          isMe: false,
          message: `已帮您预订成功！我们会发送邮件到您的邮箱，请注意查收！已为您添加提醒事项。是否需要添加行李额。`,
        });
      }, 1000);
    }

    if (messages.length >= 9) {
      pushMessage({
        key: `${Date.now()}`,
        isMe: true,
        message: content || '',
      });

      const { data } = await gptSend(content || '');

      pushMessage({
        key: `${Date.now()}`,
        isMe: false,
        message: data?.content,
      });
    }
  };

  return (
    <>
      <Iframe ref={iframeRef} />

      <Box
        sx={{
          mt: 40,
          width: 600,
          position: 'relative',
        }}
      >
        <Button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          Test
        </Button>

        <Card sx={{ zIndex: 9 }}>
          {visible && (
            <Box>
              <Box ref={messagesRef} sx={{ height: 600, overflowY: 'scroll' }}>
                {messages.map((message) => {
                  return (
                    <Box key={message.key}>
                      <MessageBox {...message} />
                    </Box>
                  );
                })}
              </Box>

              <Stack
                sx={{ borderTop: '1px #f2f2f2 solid', p: '8px 16px' }}
                direction="row"
                spacing={2}
              >
                <Input
                  inputRef={inputRef}
                  placeholder="Just say something casual, like ‘Where should we go for fun?’"
                  sx={{ flexGrow: 1 }}
                  defaultValue="帮我制定一份详细的旅行计划"
                />
                <IconButton
                  sx={{ width: '56px' }}
                  color="primary"
                  onClick={handleSend}
                >
                  <SendIcon />
                </IconButton>
              </Stack>
            </Box>
          )}
        </Card>
      </Box>
    </>
  );
};
