$(() => {
	// СПЕЦИАЛИСТЫ
	$('.specialists .slider').owlCarousel({
		loop: true,
		smartSpeed: 500,
		dots: false,
		nav: true,
		margin: 0,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			768: {
				items: 3
			},
			1024: {
				items: 3
			},
			1280: {
				items: 4
			}
		},
		onInitialized: (event) => {
			$('.specialists .count .total').text(event.item.count)
		},
		onTranslate: (event) => {
			let currentIndex = event.item.index - event.relatedTarget._clones.length / 2

			currentIndex < 0
				? currentIndex = event.item.count
				: currentIndex = currentIndex + 1

			if (currentIndex > event.item.count) { currentIndex = 1 }

			$('.specialists .count .current').text(currentIndex)
		}
	})


	// НАШИ РАБОТЫ
	$('.portfolio .slider').owlCarousel({
		loop: true,
		smartSpeed: 500,
		dots: false,
		nav: true,
		margin: 0,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			768: {
				items: 3
			},
			1024: {
				items: 3
			},
			1280: {
				items: 4
			}
		},
		onInitialized: (event) => {
			$('.portfolio .count .total').text(event.item.count)
		},
		onTranslate: (event) => {
			let currentIndex = event.item.index - event.relatedTarget._clones.length / 2

			currentIndex < 0
				? currentIndex = event.item.count
				: currentIndex = currentIndex + 1

			if (currentIndex > event.item.count) { currentIndex = 1 }

			$('.portfolio .count .current').text(currentIndex)
		}
	})


	// ИНТЕРЬЕР НАШИХ СТУДИЙ
	$('.interior .slider').owlCarousel({
		loop: true,
		smartSpeed: 500,
		dots: false,
		nav: true,
		margin: 0,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			768: {
				items: 3
			}
		},
		onInitialized: (event) => {
			$('.interior .count .total').text(event.item.count)
		},
		onTranslate: (event) => {
			let currentIndex = event.item.index - event.relatedTarget._clones.length / 2

			currentIndex < 0
				? currentIndex = event.item.count
				: currentIndex = currentIndex + 1

			if (currentIndex > event.item.count) { currentIndex = 1 }

			$('.interior .count .current').text(currentIndex)
		}
	})


	// ОТЗЫВЫ
	$('.reviews .slider').owlCarousel({
		loop: true,
		smartSpeed: 500,
		dots: false,
		nav: true,
		responsive: {
			0: {
				items: 1,
				margin: 20
			},
			1024: {
				items: 2,
				margin: 20
			},
			1280: {
				items: 2,
				margin: 30
			}
		}
	})


	// Спойлер в тексте
	$('.text_block .spoler_btn').click(function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.text_block')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')

			$parent.find('.hide').slideUp(500)
		} else {
			$(this).addClass('active')

			$parent.find('.hide').slideDown(500)
		}
	})
})