try {
	gsap.registerPlugin(ScrollTrigger);

	const hero = gsap.timeline({
		scrollTrigger: {
			trigger: '#hero-parallax',
			start: 'top top',
			end: 'bottom top',
			scrub: true,
		},
	});

	gsap.utils.toArray('.hero-parallax').forEach((layer) => {
		const depth = layer.dataset.depth;
		const movement = -(layer.offsetHeight * depth);
		hero.to(layer, { y: movement, ease: 'none' }, 0);
	});

	const introduction = gsap
		.timeline({
			scrollTrigger: {
				trigger: '#introduction',
				scrub: true,
				start: 'top center',
				end: '+=50%',
				// markers: { startColor: 'green', endColor: 'red', fontSize: '12px' },
			},
		})

		.from('#introduction div', {
			scale: 0.5,
			ease: 'none',
		});

	const introduction_images = gsap
		.timeline({
			scrollTrigger: {
				trigger: '#introduction-images',
				scrub: true,
				start: 'top center',
				end: '+=25%',
				// markers: { startColor: 'green', endColor: 'red', fontSize: '12px' },
			},
		})

		.from('#intro-one', {
			opacity: 0,
			ease: 'none',
		})

		.from('#intro-two', {
			opacity: 0,
			ease: 'none',
		})

		.from('#intro-three', {
			opacity: 0,
			ease: 'none',
		});

	const sectionThree = gsap
		.timeline({
			scrollTrigger: {
				trigger: '#showreel-loop.video-section',
				scrub: true,
				pin: true,
				start: 'center center',
				end: '+=25%',
				// markers: { startColor: 'green', endColor: 'red', fontSize: '12px' },
			},
		})

		.from('#showreel-loop video', {
			scale: 0.5,
			opacity: 0.5,
			ease: 'none',
		});

	const sectionThreeOverlay = gsap
		.timeline({
			scrollTrigger: {
				trigger: '#showreel-loop',
				scrub: true,
				start: 'center center',
				end: '+=100%',
				// markers: { startColor: 'green', endColor: 'red', fontSize: '12px' },
			},
		})

		.from('#showreel-overlay', {
			opacity: 0,
			ease: 'none',
		});

	const sectionFour = gsap
		.timeline({
			scrollTrigger: {
				trigger: '#showreel-loop',
				scrub: true,
				start: '75% center',
				end: '+=50%',
				// markers: { startColor: 'green', endColor: 'red', fontSize: '12px' },
			},
		})

		.from('#what-i-offer #text-1', {
			translateX: -200,
			opacity: 0,
			ease: 'none',
		})

		.from('#what-i-offer #text-2', {
			opacity: 0,
			ease: 'none',
		})
		.from('#what-i-offer #text-3', {
			opacity: 0,
			ease: 'none',
		});

	const portfolio_one = gsap
		.timeline({
			scrollTrigger: {
				trigger: '#what-i-offer',
				scrub: true,
				start: 'bottom center',
				end: '+=50%',
				// markers: { startColor: 'green', endColor: 'red', fontSize: '12px' },
			},
		})

		.from('#ben-james>div>h1', {
			translateX: -200,
			opacity: 0,
			ease: 'none',
		})

		.from('#ben-james>div>p', {
			opacity: 0,
			ease: 'none',
		})

		.from('#ben-james>.video-hover', {
			opacity: 0,
			ease: 'none',
		});

	const portfolio_two = gsap
		.timeline({
			scrollTrigger: {
				trigger: '#ben-james',
				scrub: true,
				start: 'bottom center',
				end: '+=50%',
				// markers: { startColor: 'green', endColor: 'red', fontSize: '12px' },
			},
		})

		.from('#nomadic-paddler>div>h1', {
			translateX: -200,
			opacity: 0,
			ease: 'none',
		})

		.from('#nomadic-paddler>div>p', {
			opacity: 0,
			ease: 'none',
		})

		.from('#nomadic-paddler>.video-hover', {
			opacity: 0,
			ease: 'none',
		});

	const portfolio_three = gsap
		.timeline({
			scrollTrigger: {
				trigger: '#nomadic-paddler',
				scrub: true,
				start: 'bottom center',
				end: '+=50%',
				// markers: { startColor: 'green', endColor: 'red', fontSize: '12px' },
			},
		})

		.from('#i-remember>div>h1', {
			translateX: -200,
			opacity: 0,
			ease: 'none',
		})

		.from('#i-remember>div>p', {
			opacity: 0,
			ease: 'none',
		})

		.from('#i-remember>.video-hover', {
			opacity: 0,
			ease: 'none',
		});

	const portfolio_four = gsap
		.timeline({
			scrollTrigger: {
				trigger: '#i-remember',
				scrub: true,
				start: 'bottom center',
				end: '+=50%',
				// markers: { startColor: 'green', endColor: 'red', fontSize: '12px' },
			},
		})

		.from('#vantage>div>h1', {
			translateX: -200,
			opacity: 0,
			ease: 'none',
		})

		.from('#vantage>div>p', {
			opacity: 0,
			ease: 'none',
		})

		.from('#vantage>.video-hover', {
			opacity: 0,
			ease: 'none',
		});

	const portfolio_five = gsap
		.timeline({
			scrollTrigger: {
				trigger: '#vantage',
				scrub: true,
				start: 'bottom center',
				end: '+=50%',
				// markers: { startColor: 'green', endColor: 'red', fontSize: '12px' },
			},
		})

		.from('#shadow-automation>div>h1', {
			translateX: -200,
			opacity: 0,
			ease: 'none',
		})

		.from('#shadow-automation>div>p', {
			opacity: 0,
			ease: 'none',
		})

		.from('#shadow-automation>.video-hover', {
			opacity: 0,
			ease: 'none',
		});

	const parts_of_product = gsap
		.timeline({
			scrollTrigger: {
				trigger: '#shadow-automation',
				scrub: true,
				start: 'bottom center',
				end: '+=50%',
				// markers: { startColor: 'green', endColor: 'red', fontSize: '12px' },
			},
		})
		.from('#production>h1', {
			opacity: 0,
			ease: 'none',
		})
		.from('#production>h2', {
			opacity: 0,
			ease: 'none',
		});
} catch (error) {}
