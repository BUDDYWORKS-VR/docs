import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.buddyworks.wtf',
	integrations: [
		starlight({
			title: 'BUDDYWORKS Docs',
			favicon: '/favicon.ico',
			description: 'All the details you could ever need.',
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'og:image',
						content: 'https://docs.buddyworks.wtf/og-image.png',
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:image',
						content: 'https://docs.buddyworks.wtf/og-image.png',
					}
				}
			],
      		customCss: [
        	// Relative path to your custom CSS file
        	'./src/styles/custom.css',
      		],
			social: {
				github: 'https://github.com/BUDDYWORKS-VR',
				twitter: 'https://twitter.com/JustBuddy_DE',
				discord: 'https://buddyworks.wtf',
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
						{ label: 'Scene Overview', link: '/scene/overview/' },
					],
				},
				{
					label: 'Poses Extension',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting started', link: '/posesextension/intro/' },
						{ label: 'Installation', link: '/posesextension/setup/' },
						{ label: 'Structure', link: '/posesextension/structure/' },
						{ label: 'Action Controller', link: '/posesextension/action/' },
					],
				},
				{
					label: 'Expressions Extension',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting started', link: '/expressionsextension/intro/' },
						{ label: 'Installation', link: '/expressionsextension/setup/' },
						{ label: 'Structure', link: '/expressionsextension/structure/' },
						{ label: 'FX Controller', link: '/expressionsextension/fx/' },
						{ label: 'Interface', link: '/expressionsextension/interface/'},
						{ label: 'Custom Blendshapes', link: '/expressionsextension/customize/'}
					],
				},
				{
					label: 'Toolbox',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting started', link: '/toolbox/intro/' },
						{ label: 'Installation', link: '/toolbox/setup/' },
						{ label: 'Components', link: '/toolbox/overview' },
					],
				},
			],
		}),
	],
});
