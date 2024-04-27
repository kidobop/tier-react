import { useState } from 'react';

export function useTierState() {
    return useState([
        { name: 'S', data: [], className: 'bg-rose-500' },
        { name: 'A', data: [], className: 'bg-orange-300' },
        { name: 'B', data: [], className: 'bg-amber-200' },
        { name: 'C', data: [], className: 'bg-green-400' },
        { name: 'D', data: [], className: 'bg-teal-400' },
        { name: 'F', data: [], className: 'bg-fuchsia-400' },
        {
            name: 'Unranked',
            className: 'bg-slate-100',
            data: [
                {
                    id: '1',
                    imageUrl: 'https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Fplaylists%2Fsquare_covers%2F000%2F459%2F856%2Ffull%2Fjotai.png&w=256&q=75',
                },
                {
                    id: '2',
                    imageUrl: 'https://i.ibb.co/JxbTpcY/image.png',
                },
                {
                    id: '3',
                    imageUrl: 'https://i.ibb.co/JFpNxkd/image.png',
                },
                {
                    id: '4',
                    imageUrl: 'https://i.ibb.co/cxqYt00/image.png',
                },
                {
                    id: '5',
                    imageUrl: 'https://i.ibb.co/zRzwsCD/image.png',
                },
            ],
        },
    ]);
}
