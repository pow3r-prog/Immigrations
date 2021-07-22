jQuery(($) => {
	$('.select').on('click', '.select__head', function () {
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$(this).next().fadeOut();
		} else {
			$('.select__head').removeClass('open');
			$('.select__list').fadeOut();
			$(this).addClass('open');
			$(this).next().fadeIn();
		}
	});
	$('.select').on('click', '.select__item_vip', function () {
		$('.select__head').removeClass('open');
		$(this).parent().fadeOut();
		$(this).parent().prev().text($(this).text());
		$(this).parent().prev().prev().val($(this).text());
		if ($(this).text() == "Vip на 30дней - 50грн.") {
			$('.price_vip').text("50");
		}
		if ($(this).text() == "Vip на 60дней - 90грн.") {
			$('.price_vip').text("90");
		}
		if ($(this).text() == "Vip на 120дней - 160грн.") {
			$('.price_vip').text("160");
		}
	});
	$('.select').on('click', '.select__item_admin', function () {
		$('.select__head').removeClass('open');
		$(this).parent().fadeOut();
		$(this).parent().prev().text($(this).text());
		$(this).parent().prev().prev().val($(this).text());
		if ($(this).text() == "Admin на 30дней - 100грн.") {
			$('.price_admin').text("100");
		}
		if ($(this).text() == "Admin на 60дней - 180грн.") {
			$('.price_admin').text("180");
		}
		if ($(this).text() == "Admin на 120дней - 320грн.") {
			$('.price_admin').text("320");
		}
	});
	$(document).click(function (e) {
		if (!$(e.target).closest('.select').length) {
			$('.select__head').removeClass('open');
			$('.select__list').fadeOut();
		}
	});

});