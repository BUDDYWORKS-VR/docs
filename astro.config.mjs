import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.buddyworks.wtf',
	integrations: [
		starlight({
			title: 'BUDDYWORKS Docs',
      		customCss: [
        	// Relative path to your custom CSS file
        	'./src/styles/custom.css',
      		],
			social: {
				github: 'https://github.com/justbuddy',
			},
			sidebar: [
				{
					label: 'Welcome!',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', link: '/welcome/intro/' },
					],
				},
				{
					label: 'Avatar Framework',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting started', link: '/framework/intro/' },
						{ label: 'Installation', link: '/framework/setup/' },
						{ label: 'Menu Structure', link: '/framework/structure-menu/' },
						{ label: 'FX Structure', link: '/framework/structure-fx/' },

					],
				},
				{
					label: 'Avatar Scene',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting started', link: '/scene/intro/' },
						{ label: 'Installation', link: '/scene/setup/' },
						{ label: 'Tester Prefabs', link: '/scene/testers/' },
					],
				},
				{
					label: 'Poses Extension',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting started', link: '/posesextension/intro/' },
						{ label: 'Installation', link: '/posesextension/setup/' },
					],
				},
			],
		}),
	],
});
