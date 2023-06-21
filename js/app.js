document.addEventListener('mousemove', e => {
	//.005 for --move-x for smother and smaller moving
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.01}deg; 
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})
