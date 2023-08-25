export type Emoji = keyof typeof emojis;

export const emojis = {
	apple: '🍎',
	banana: '🍌',
	carrot: '🥕',
	doughnut: '🍩',
	egg: '🥚'
} as const;
