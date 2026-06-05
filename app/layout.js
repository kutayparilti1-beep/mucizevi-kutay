export const metadata = {
title: "Mucizevi Kutay",
description: "Mucizevi Kutay Video Platformu"
};

export default function RootLayout({ children }) {
return ( <html lang="tr">
<body
style={{
margin: 0,
background: "#0a0a0a"
}}
>
{children} </body> </html>
);
}
