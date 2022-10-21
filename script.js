gsap.registerPlugin(ScrollTrigger);

const hero = gsap.timeline({
	scrollTrigger: {
		trigger: '#hero-parallax',
		start: 'top top',
		end: 'bottom top',
		scrub: true,
	},
});

const cam = gsap.timeline({
	scrollTrigger: {
		trigger: '#cam-parallax',
		start: 'top top',
		end: 'bottom top',
		scrub: true,
	},
});

try {
	gsap.utils.toArray('.hero-parallax').forEach((layer) => {
		const depth = layer.dataset.depth;
		const movement = -(layer.offsetHeight * depth);
		hero.to(layer, { y: movement, ease: 'none' }, 0);
	});
} catch (error) {
	console.log(error);
}

const introduction = gsap
	.timeline({
		scrollTrigger: {
			trigger: '#introduction',
			scrub: true,
			pin: true,
			start: 'center center',
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
			pin: true,
			start: 'center center',
			end: '+=50%',
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
			trigger: '#showreel-loop',
			scrub: true,
			pin: true,
			start: 'center center',
			end: '+=50%',
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
			trigger: '#what-i-offer',
			scrub: true,
			pin: true,
			start: 'top top',
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
