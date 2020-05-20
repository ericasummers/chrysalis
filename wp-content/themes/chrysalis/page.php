<?php
class Page extends Core_Template {

	public function template_file() {
		return 'views/page.twig';
    }

    public function fields() {

		$fields['post'] = get_post($this->obj_id);
		return $fields;

	}

}

global $post;
new Template_Contact( $post->ID );
