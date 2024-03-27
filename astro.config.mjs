import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.buddyworks.wtf',
	integrations: [
		starlight({
			title: 'BUDDYWORKS Docs',
			social: {
				github: 'https://github.com/justbuddy',
			},
			sidebar: [
				{
					label: 'Avatar Framework',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Intro', link: '/framework/intro/' },
					],
				},
				{
					label: 'Avatar Scene',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Intro', link: '/scene/intro/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
