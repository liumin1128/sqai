import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
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
  const [visible, setVisible] = React.useState(false);
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
        message: '您好，很高兴见到你，上次新西兰之旅怎么样？',
      });
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleSend = async () => {
    const content = inputRef?.current?.value;
    inputRef.current.value = '';
    inputRef.current?.focus();

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
          message:
            '好的，根据您以往的旅行偏好，澳大利亚看起来是个不错的选择！需要我给您推荐几个目的地吗？',
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
          message: '哇哦，提前祝您生日快乐，以下是我为你悉心挑选的目的地：',
          options: [
            { label: '悉尼', value: 'xn', image: '/images/xn.jpeg' },
            { label: '墨尔本', value: 'meb', image: '/images/meb.jpeg' },
            { label: '布里斯班', value: 'blsb', image: '/images/blsb.jpeg' },
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
          message: `悉尼是澳大利亚最大的城市和经济中心，位于新南威尔士州东海岸。它是一个多元文化的城市，拥有世界上最著名的景点和观光目的地之一。

悉尼的地标建筑是悉尼歌剧院和悉尼海港大桥。这两个建筑与海港和周围的山脉相得益彰，形成了一个世界著名的风景区。

悉尼市区拥有许多博物馆和艺术中心，包括国立艺术学院、悉尼科技博物馆和新南威尔士州美术馆。此外，悉尼还拥有多个美丽的海滩、公园和花园，如邦迪海滩、曼利公园和皇家植物园等。

悉尼也是一个文化和娱乐中心，在城市中心和周围地区有许多餐厅、酒吧、夜总会和购物中心。每年11月的悉尼奥地利音乐节和12月的新年烟花表演是该市重要的节日活动。

总之，悉尼是一个美丽、多元和活力四射的城市，是一个令人难以忘怀的旅游目的地。

为您列举了一些热门景点：`,
          options: [
            { label: '达令港', value: '1', image: '/images/1.jpeg' },
            { label: '悉尼歌剧院', value: '2', image: '/images/2.jpeg' },
            { label: '邦迪海滩', value: '3', image: '/images/3.jpeg' },
            { label: '悉尼皇家植物园', value: '4', image: '/images/4.jpeg' },
            { label: '悉尼港大桥', value: '5', image: '/images/5.jpeg' },
          ],
        });
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
          message: `根据您以往的行程记录，已经为您推荐了清晨出发的行程，您看一下是否满意？`,
          images: ['/images/booking1.png'],
        });
        iframeRef.current?.open('/html/booking1.html');
      }, 1000);
    }

    if (messages.length === 9) {
      pushMessage({
        key: `${Date.now()}`,
        isMe: true,
        message: content || '',
      });
      setTimeout(() => {
        pushMessage({
          key: `${Date.now()}`,
          isMe: false,
          message: `正在跳转付款页面，请支付。`,
        });
        iframeRef.current?.open('/html/booking2.html');
      }, 1000);
    }

    if (messages.length === 11) {
      pushMessage({
        key: `${Date.now()}`,
        isMe: true,
        message: content || '',
      });
      setTimeout(() => {
        pushMessage({
          key: `${Date.now()}`,
          isMe: false,
          message: `已帮您预订成功！我们会发送邮件到您的邮箱，请注意查收！已为您添加提醒事项。`,
        });
        iframeRef.current?.open('/html/Booking3.html');
      }, 1000);
    }

    if (messages.length === 13) {
      pushMessage({
        key: `${Date.now()}`,
        isMe: true,
        message: content || '',
      });
      setTimeout(() => {
        pushMessage({
          key: `${Date.now()}`,
          isMe: false,
          message: `不客气，十月的悉尼气候宜人，您之前回程购买了额外行李额，现在有行李额活动，是否提前购买？`,
        });
      }, 1000);
    }

    if (messages.length === 15) {
      pushMessage({
        key: `${Date.now()}`,
        isMe: true,
        message: content || '',
      });
      setTimeout(() => {
        pushMessage({
          key: `${Date.now()}`,
          isMe: false,
          message: `十月二日是您的生日，我们也为您在1号的航班上预订了生日惊喜，请查收哟！`,
        });
      }, 1000);
    }

    if (messages.length === 17) {
      pushMessage({
        key: `${Date.now()}`,
        isMe: true,
        message: content || '',
      });
      setTimeout(() => {
        pushMessage({
          key: `${Date.now()}`,
          isMe: false,
          message: `不客气，为您跳转行程管理页面，您可以继续问我有关悉尼的人文风俗和美食问题。`,
        });
        iframeRef.current?.open('/html/Booking4.html');
      }, 1000);
    }

    if (messages.length >= 17) {
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
          mt: 30,
          width: 600,
          position: 'relative',
        }}
      >
        <ButtonBase
          onClick={() => {
            setVisible(!visible);
          }}
        >
          <img style={{ width: 80, height: 80 }} src="/images/rk.png" alt="" />
        </ButtonBase>

        <Card sx={{ zIndex: 9 }}>
          {visible && (
            <Box>
              <Box ref={messagesRef} sx={{ height: 500, overflowY: 'scroll' }}>
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
                  placeholder="Just say something casual"
                  sx={{ flexGrow: 1 }}
                  defaultValue=""
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
