<?php

$group_args = [
	'title'          => 'Home Options',
	'location_is'    => [ 'page_type', 'front_page' ]
];

$fields = [
	[ 'repeater', 'Home Carousel Slider', [
		'button_label' => 'Add Slide',
		'layout' => 'block',
		'min' => 2,
		'max' => 12,
		'sub_fields' => [
			[ 'image', 'Background Image', ['return_format' => 'url'] ],
			[ 'wysiwyg', 'Slide Content' ]
		]
	] ],

	['repeater', 'Reviews', [
		'button_label' => 'Add Review',
		'layout' => 'block',
		'min' => 2,
		'max' => 20,
		'sub_fields' => [
			[ 'textarea', 'Quote' ],
			[ 'text', 'Author' ]
		]
	] ],
	[ 'textarea', 'Author Promo' ]
];

$field_group = core_register_field_group( 'homepage-acf', $group_args, $fields );
