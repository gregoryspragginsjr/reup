<?php
/**
 * The template for displaying pages with sidebars.
 *
 * Template Name: Page for Embeds
 * 
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context = Timber::context();

$timber_post     = Timber::get_post();
$context['post'] = $timber_post;
Timber::render( 'page_no-vue.twig', $context );
