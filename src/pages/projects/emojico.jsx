import React from 'react';
import { Box } from '@mui/material';

import CompleteMessage from '../../components/completeMessage';

const Emojico = () => {
    const messages = [
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://avatars.githubusercontent.com/u/83665497?v=4",
            role: "Owner",
            message: "EmojiCo is a web-based tool that allows you to easily add emojis to your commit messages. <br>" +
                "It provides a user-friendly interface that makes it simple and fun to incorporate expressive emojis into your Git workflow. <br><br>" +
                "You can check out EmojiCo <a href='https://emojico.vercel.app'>https://emojico.vercel.app</a>\n\n" +
                "<img src='https://i.ibb.co/Gs1WBHn/561979c09808.png'><br><br>" +
                "EmojiCo eliminates the need to remember emoji codes or manually type them in your commit messages. <br>" +
                "I'm planning on making a desktop app for EmojiCo in the future.",
            reactions: [
                {
                    emoji: '👍',
                    count: 1
                },
                {
                    emoji: '🚀',
                    count: 1
                },
            ]

        },
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://avatars.githubusercontent.com/u/83665497?v=4",
            role: "Owner",
            message: "Oh also, you can use EmojiCo in your browser as an extension! <br>" +
                "As of now it's only available Firefox, but I'm planning on adding support for other browsers as well. <br><br>" +
                "<a href='https://addons.mozilla.org/en-US/firefox/addon/emojico/'>EmojiCo Extension on Firefox</a><br>",
            reactions: [
                {
                    emoji: '🔥',
                    count: 1
                }
            ]

        },
        {
            username: "Kurizu",
            time: "12:00",
            avatar: "https://avatars.githubusercontent.com/u/83665497?v=4",
            role: "Owner",
            message: "And the code is open source too! <br>" +
                "You can find the source code from the links below:<br>" +
                "<a href='https://github.com/crizmo/EmojiCo'>Github</a><br>" +
                "<a href='https://emojico.vercel.app'>Website</a><br>" +
                "If you want to contribute to the project, feel free to open a pull request on GitHub.<br>" +
                "If you have any suggestions or feedback, feel free to contact me on Discord (kurizu.taz) or " +
                "<a href='https://discord.gg/drunkbetch-782646778347388959'>Join the Discord Server</a>",
            badgeImages: [
                {
                    src: 'https://img.shields.io/github/stars/crizmo/EmojiCo?style=social',
                    alt: 'github stars'
                }
            ],
        }
    ];
    
    

    return (
        <Box width="100%" height="90vh" backgroundColor="#313338" overflow="auto">
            <CompleteMessage messages={messages} />
        </Box>
    );
};

export default Emojico;
