<?php
/**
 * The template for displaying Archive pages.
 *
 * Used to display archive-type pages if nothing more specific matches a query.
 * For example, puts together date-based pages if no date.php file exists.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.2
 */

$templates = array( 'archive.twig', 'index.twig' );

$context = Timber::context();

$context['title'] = 'Archive';
if ( is_day() ) {
	$context['title'] = 'Archive: ' . get_the_date( 'D M Y' );
} elseif ( is_month() ) {
	$context['title'] = 'Archive: ' . get_the_date( 'M Y' );
} elseif ( is_year() ) {
	$context['title'] = 'Archive: ' . get_the_date( 'Y' );
} elseif ( is_tag() ) {
	$context['title'] = single_tag_title( '', false );
} elseif ( is_category() ) {
	$context['title'] = single_cat_title( '', false );
	$context['description'] = term_description();
	array_unshift( $templates, 'archive-' . get_query_var( 'cat' ) . '.twig' );
} elseif ( is_tax() ) {
	$context['title'] = single_cat_title( '', false );
	$context['description'] = term_description();
	array_unshift( $templates, 'archive-' . get_query_var( 'cat' ) . '.twig' );
} elseif ( is_post_type_archive() ) {
	$context['title'] = post_type_archive_title( '', false );
	array_unshift( $templates, 'archive-' . get_post_type() . '.twig' );
}

// Additional querying needed to
// exclude PAGES that are also tagged
// for a particular audience. So in 
// this line, we are explicitly telling
// Wordpress to query posts ONLY that
// that match the current queried object

$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

if (is_tax()) {
	$context['posts'] = Timber::get_posts([
		'post_type' => 'post',
		'paged'     => $paged,
		'tax_query' => array(
			array(
				'taxonomy' => 'audiences',
				'field' => 'slug',
				'terms' => get_queried_object()->slug,
			)
		)
	]);

	$context['featured_posts'] = Timber::get_posts([
		'post_type' => 'post',
		'paged'     => $paged,
		'tax_query' => array(
			'relation' => 'AND',
			array(
				'taxonomy' => 'audiences',
				'field' => 'slug',
				'terms' => get_queried_object()->slug,
			),
			array(
				'taxonomy' => 'resource-categories',
				'field' => 'slug',
				'terms' => 'featured',
			)
		)
	]);
} elseif (is_post_type_archive('resources')) {
	$context['post'] = Timber::get_post(333);
	$context['posts'] = Timber::get_posts([
		'post_type' => 'resources',
		'paged'     => $paged,
		'tax_query' => array(
			array(
				'taxonomy' => 'audiences',
				'field' => 'slug',
				'terms' => get_query_var('audience'),
			),
			array(
				'taxonomy' => 'resource-categories',
				'field' => 'slug',
				'terms' => 'featured',
				'operator' => 'NOT IN',
			)
		)
	]);

	$context['featured_posts'] = Timber::get_posts([
		'post_type' => 'resources',
		'paged'     => $paged,
		'tax_query' => array(
			'relation' => 'AND',
			array(
				'taxonomy' => 'audiences',
				'field' => 'slug',
				'terms' => get_query_var('audience'),
			),
			array(
				'taxonomy' => 'resource-categories',
				'field' => 'slug',
				'terms' => 'featured',
			)
		)
	]);
} elseif (is_post_type_archive('our-team')) {
	$context['posts'] = Timber::get_posts();
} else {
	$context['posts'] = Timber::get_posts(array_merge($wp_query->query_vars, [
		'post_type' => 'post',
		'paged'     => $paged,
		'category__not_in' => 10,
	]));

	$context['featured_posts'] = Timber::get_posts(array_merge($wp_query->query_vars, [
			'post_type' => 'post',
			'paged'     => $paged,
			'category_name'  => 'featured',
	]));
}

Timber::render( $templates, $context );
