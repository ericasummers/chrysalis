<?php
class Front_Page extends Core_Template {

	public function fields() {

		$fields = core_get_fields($this->obj_id, '', array(
			'home_carousel_slider',
			'reviews',
			'author_promo'
		));
		$fields['post'] = get_post($this->obj_id);
		return $fields;

	}

}
global $post;
new Front_Page( $post->ID );
