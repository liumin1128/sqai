import axios from 'axios';

const url =
  'https://sia-data-azure-openai-bkup.openai.azure.com/openai/deployments/GPT35-Turbo/chat/completions?api-version=2023-03-15-preview';
export async function gptSend(content: string) {
  const res = await axios.post(
    url,
    {
      messages: [
        {
          role: 'system',
          content: `你现在扮演新加坡航空公司的聊天机器人，你正在为顾客提供咨询服务，并且已经为客户预订了去巴厘岛的航班，出发时间是10月1号，乘坐的是新加坡航空航班，客人想去的是蓝梦岛、金巴兰海滩、库塔海滩、情人崖、海神庙，客人会在巴厘岛呆5天，请为根据客人的说的话，继续客人安排详细的旅行计划。回复不要带有自称；不要带有问候；不要感谢客人的提问；请使用亲切的口吻，像一个朋友那样回复；但不要表达自己的情绪；如果客人要求制定计划，请按照时间列出行程清单；客人：${content}`,
        },
      ],
    },
    {
      method: 'POST',
      headers: {
        'api-key': '1915fbcbb6a14563af9ac043a8da1f51',
      },
    },
  );
  return { data: res.data.choices[0].message };
}
