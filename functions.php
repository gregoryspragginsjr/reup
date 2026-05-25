<?php
/**
 * Timber starter-theme
 * https://github.com/timber/starter-theme
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

/**
 * If you are installing Timber as a Composer dependency in your theme, you'll need this block
 * to load your dependencies and initialize Timber. If you are using Timber via the WordPress.org
 * plug-in, you can safely delete this block.
 */
$composer_autoload = __DIR__ . '/vendor/autoload.php';
if ( file_exists( $composer_autoload ) ) {
	require_once $composer_autoload;
	$timber = Timber\Timber::init();
}

/**
 * This ensures that Timber is loaded and available as a PHP class.
 * If not, it gives an error message to help direct developers on where to activate
 */
if ( ! class_exists( 'Timber' ) ) {

	add_action(
		'admin_notices',
		function() {
			echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php' ) ) . '</a></p></div>';
		}
	);

	add_filter(
		'template_include',
		function( $template ) {
			return get_stylesheet_directory() . '/static/no-timber.html';
		}
	);
	return;
}

/**
 * Sets the directories (inside your theme) to find .twig files
 */
$static_timber_dirs = array(
	'src/twig/layouts',
	'src/twig/pages',
	'src/twig/components',
);

$theme_base = get_template_directory() . '/';

$component_dirs = array_map(
	function ( $str ) use ( &$theme_base ) {
		return str_replace( $theme_base, '', $str );
	},
	array_filter( glob( $theme_base . 'src/twig/components/*' ), 'is_dir' )
);

Timber::$dirname = array_merge( $static_timber_dirs, $component_dirs );

/**
 * By default, Timber does NOT autoescape values. Want to enable Twig's autoescape?
 * No prob! Just set this value to true
 */
Timber::$autoescape = false;

function my_register_query_vars( $vars ) {
    $vars[] = 'audience';
    return $vars;
}

/**
 * We're going to configure our theme inside of a subclass of Timber\Site
 * You can move this to its own file and include here via php's include("MySite.php")
 */
class StarterSite extends Timber\Site {
	/** Add timber support. */
	public function __construct() {
		add_action( 'after_setup_theme', array( $this, 'theme_supports' ) );
		add_filter( 'timber/context', array( $this, 'add_to_context' ) );
		// add_filter( 'timber/twig', array( $this, 'add_to_twig' ) );
		add_action( 'init', array( $this, 'register_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ) );
		add_action( 'acf/init', array( $this, 'my_acf_init') );
		add_filter( 'query_vars', 'my_register_query_vars' );
		parent::__construct();
	}
	
	/** This is where you can register custom post types. */
	public function register_post_types() {
		register_post_type(
			'our-team',
			array(
				'labels'            => array(
					'name'               => __( 'Our Team' ),
					'singular_name'      => __( 'Team Member' ),
					'add_new_item'       => __( 'Add Team Member' ),
					'edit_item'          => __( 'Edit Team Member' ),
					'new_item'           => __( 'New Team Member' ),
					'view_item'          => __( 'View Team Member' ),
					'search_items'       => __( 'Search Team Members' ),
					'not_found'          => __( 'Team Member not found.' ),
					'not_found_in_trash' => __( 'No Team Member found in trash.' ),
				),
				'rewrite'           => array( 'slug' => 'company/our-team' ),
				'public'            => true,
				'has_archive'       => true,
				'show_in_rest'      => true,
				'menu_icon'         => 'dashicons-groups',
				'show_in_nav_menus' => true,
				'supports'          => array( 'title', 'editor', 'revisions', 'excerpt', 'thumbnail' ),
			)
		);

		register_post_type(
			'Resources',
			array(
				'labels'            => array(
					'name'               => __( 'Resources' ),
					'singular_name'      => __( 'Resource' ),
					'add_new_item'       => __( 'Add Resource' ),
					'edit_item'          => __( 'Edit Resource' ),
					'new_item'           => __( 'New Resource' ),
					'view_item'          => __( 'View Resource' ),
					'search_items'       => __( 'Search Resources' ),
					'not_found'          => __( 'Resource not found.' ),
					'not_found_in_trash' => __( 'No Resource found in trash.' ),
				),
				'public'            => true,
				'has_archive'       => true,
				'show_in_rest'      => true,
				'menu_icon'         => 'dashicons-book-alt',
				'show_in_nav_menus' => true,
				'supports'          => array( 'title', 'editor', 'revisions', 'excerpt', 'thumbnail' ),
			)
		);
	}
	/** This is where you can register custom taxonomies. */
	public function register_taxonomies() {
		register_taxonomy(
			'audiences',
			array('page', 'post', 'resources'),
			array(
				'hierarchical'      => true,
				'show_ui'           => true,
				'show_in_rest'      => true,
				'show_admin_column' => true,
				'query_var'         => true,
				'public'            => true,
				'show_tagcloud'     => false,
				'capabilities'      => array(
					'manage_terms' => 'manage_options',
					'edit_terms'   => 'manage_options',
					'delete_terms' => 'manage_options',
					'assign_terms' => 'manage_options',
				),
				'labels'            => array(
					'name'          => __( 'Audiences' ),
					'singular_name' => __( 'Audience' ),
					'add_new_item'  => __( 'Add New Audience' ),
					'menu_name'     => __( 'Audiences' ),
				),
			)
		);
	}

	public function my_acf_init() {
        
		// check function exists
		if( function_exists('acf_register_block') ) {

			// register a hero block
			acf_register_block(array(
				'name'				=> 'hero',
				'title'				=> __('Hero'),
				'description'		=> __('Leading component typically found above the fold, with dynamic text and optional video.'),
				'render_callback'	=> 'my_acf_block_render_callback',
				'category'			=> 'layout',
				'icon'				=> 'block-default',
				'keywords'			=> array( 'layout', 'hero', 'loop', 'media', 'video', 'heading' ),
			));

			// register a cta context section
			acf_register_block(array(
				'name'				=> 'cta-context-section',
				'title'				=> __('CTA Context Section'),
				'description'		=> __('Call to action focused, center-aligned component which supports an optional headshot image.'),
				'render_callback'	=> 'my_acf_block_render_callback',
				'category'			=> 'layout',
				'icon'				=> 'block-default',
				'keywords'			=> array( 'layout', 'cta', 'call', 'to', 'action', 'section' ),
			));

			// register grids section
			acf_register_block(array(
				'name'				=> 'grids-section',
				'title'				=> __('Grids Section'),
				'description'		=> __('Layout dedicated to displaying either article or benefits grid. Features several column layout styles and supports varying image sizes.'),
				'render_callback'	=> 'my_acf_block_render_callback',
				'category'			=> 'layout',
				'icon'				=> 'block-default',
				'keywords'        => array( 'layout', 'benefit', 'article', 'grid', 'image', 'section' ),
			));

			// register stories carousel
			acf_register_block(array(
				'name'				=> 'stories-carousel',
				'title'				=> __('Stories Carousel'),
				'description'		=> __('Carousel featuring portrait images with supplemental context.'),
				'render_callback'	=> 'my_acf_block_render_callback',
				'category'			=> 'layout',
				'icon'				=> 'block-default',
				'keywords'        => array( 'layout', 'stories', 'story', 'carousel', 'image', 'section', 'slider' ),
			));

			// register the article grid block
			acf_register_block(array(
				'name'				=> 'article-grid',
				'title'				=> __('Article Grid'),
				'description'		=> __('Layout dedicated to article display. Features several column layout styles and supports varying image sizes.'),
				'render_callback'	=> 'my_acf_block_render_callback',
				'category'			=> 'layout',
				'icon'				=> 'block-default',
				'keywords'        => array( 'layout', 'article', 'grid', 'image' ),
			));

			// register the media context block
			acf_register_block(array(
				'name'				=> 'media-context',
				'title'				=> __('Media Context'),
				'description'		=> __('Traditional side-by-side layout for any style of media with cooresponding context.'),
				'render_callback'	=> 'my_acf_block_render_callback',
				'category'			=> 'layout',
				'icon'				=> 'block-default',
				'keywords'        => array( 'media', 'image', 'context', 'layout' ),
			));

			// register the blog media context block
			acf_register_block(array(
				'name'				=> 'blog-media-context',
				'title'				=> __('Blog Media Context'),
				'description'		=> __('Traditional side-by-side layout for any style of media with cooresponding context. This variant is only accessible in blog posts.'),
				'render_callback'	=> 'my_acf_block_render_callback',
				'category'			=> 'layout',
				'icon'				=> 'block-default',
				'keywords'        => array( 'media', 'image', 'context', 'layout' ),
			));

			// register the video block
			acf_register_block(array(
				'name'				=> 'video',
				'title'				=> __('Video'),
				'description'		=> __('Full-width video component for standalone instances or subcomponent utility.'),
				'render_callback'	=> 'my_acf_block_render_callback',
				'category'			=> 'layout',
				'icon'				=> 'block-default',
				'keywords'        => array( 'media', 'video' ),
			));
			
			// register the accordion block
			acf_register_block(array(
				'name'				=> 'accordion',
				'title'				=> __('Accordion'),
				'description'		=> __('A custom block with toggleable panels housing individual WYSIWYG.'),
				'render_callback'	=> 'my_acf_block_render_callback',
				'category'			=> 'layout',
				'icon'				=> 'block-default',
				'keywords'			=> array( 'accordion', 'panels', 'WYSIWYG' ),
			));

			// register the list accordion block
			acf_register_block(array(
				'name'				=> 'list-accordion',
				'title'				=> __('List Accordion'),
				'description'		=> __('A section dedicated to either an accordion, unordered list, or both. Each accordion comes with toggleable panels housing individual WYSIWYG.'),
				'render_callback'	=> 'my_acf_block_render_callback',
				'category'			=> 'layout',
				'icon'				=> 'block-default',
				'keywords'			=> array( 'list', 'unordered', 'accordion', 'panels', 'WYSIWYG' ),
			));
		}
	}

	/** This is where you add some context
	 *
	 * @param string $context context['this'] Being the Twig's {{ this }}.
	 */
	public function add_to_context( $context ) {
		$context['post'] = Timber::get_post();
		$context['term'] = Timber::get_term();
		global $wp;
	
		if ( ! is_404() ) {
			if ( is_tax() ) {
				$crumbs = null;
			} else {
				$crumbs = get_post_ancestors( $context['post']->ID );
			}

			$breadcrumbs_menu = array();

			if ( is_tax('audiences') ) {
				array_push(
					$breadcrumbs_menu,
					array(
						'id'    => $context['term']->ID,
						'title' => single_cat_title( '', false ),
						'url'   => get_permalink($context['term']->ID),
					)
				);

				array_push(
					$breadcrumbs_menu,
					array(
						'title' => 'Resources',
						'url'   => '/resources',
					)
				);
			} elseif (is_category()) {
				array_push(
					$breadcrumbs_menu,
					array(
						'id'    => $context['term']->ID,
						'title' => single_cat_title( '', false ),
						'url'   => get_permalink($context['term']->ID),
					)
				);

				if (is_category('press')) {
					array_push(
						$breadcrumbs_menu,
						array(
							'title' => 'Company',
							'url'   => '/company',
						)
					);
				}
			} elseif (is_post_type_archive('resources')) {
				if (get_query_var('audience')) {
					array_push(
						$breadcrumbs_menu,
						array(
							'title' => ucfirst(get_query_var('audience')),
							'url'   => '/resources?audience=' . get_query_var('audience'),
						)
					);
				}

				array_push(
					$breadcrumbs_menu,
					array(
						'title' => 'Resources',
						'url'   => '/resources',
					)
				);
			} elseif ( 'resources' == get_post_type() ) {
				array_push(
					$breadcrumbs_menu,
					array(
						'id'    => $context['post']->ID,
						'title' => get_the_title($context['post']->ID),
						'url'   => get_permalink($context['post']->ID),
					)
				);

				if ( get_the_terms($context['post']->ID, 'audiences') ) {
					array_push(
						$breadcrumbs_menu,
						array(
							'title' => get_the_terms($context['post']->ID, 'audiences')[0]->name,
							'url'   => '/audiences/' . get_the_terms($context['post']->ID, 'audiences')[0]->name,
						)
					);
				}

				array_push(
					$breadcrumbs_menu,
					array(
						'title' => 'Resources',
						'url'   => '/resources',
					)
				);
			} elseif ( is_archive('our-team') ) {
				array_push(
					$breadcrumbs_menu,
					array(
						'title' => 'Our Team',
						'url'   => '/company/our-team',
					)
				);

				array_push(
					$breadcrumbs_menu,
					array(
						'title' => 'Company',
						'url'   => '/company',
					)
				);
			} elseif ( 'our-team' == get_post_type() ) {
				array_push(
					$breadcrumbs_menu,
					array(
						'id'    => $context['post']->ID,
						'title' => get_the_title($context['post']->ID),
						'url'   => get_permalink($context['post']->ID),
					)
				);

				array_push(
					$breadcrumbs_menu,
					array(
						'title' => 'Our Team',
						'url'   => '/company/our-team',
					)
				);

				array_push(
					$breadcrumbs_menu,
					array(
						'title' => 'Company',
						'url'   => '/company',
					)
				);
			} else {
				array_push(
					$breadcrumbs_menu,
					array(
						'id'    => $context['post']->ID,
						'title' => get_the_title($context['post']->ID),
						'url'   => get_permalink($context['post']->ID),
					)
				);
			}

			if ( $crumbs ) {

				foreach ( $crumbs as $ancestor ) {
					array_push(
						$breadcrumbs_menu,
						array(
							'id'    => $ancestor,
							'title' => get_the_title( $ancestor ),
							'url'   => get_permalink( $ancestor ),
						)
					);
				}
			}

			if ( isset( $breadcrumbs_menu ) ) {
				$context['breadcrumbs_menu'] = array_reverse( $breadcrumbs_menu );
			}
		}

		$context['foo']   = 'bar';
		$context['stuff'] = 'I am a value set in your functions.php file';
		$context['notes'] = 'These values are available everytime you call Timber::context();';
		// $context['menu']  = new Timber\Menu(); OLD WAY FOR TIMBER
		// $context['main_menu'] = Timber::get_menu('Main Menu'); NEW WAY
		$context['footer_menu'] = Timber::get_menu('Footer Menu');
		$context['copyright_menu'] = Timber::get_menu('Copyright Menu');
		$context['global_address'] = get_field( 'address', 'options' );
		$context['site']  = $this;
		return $context;
	}

	public function theme_supports() {
		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
			)
		);

		/*
		 * Enable support for Post Formats.
		 *
		 * See: https://codex.wordpress.org/Post_Formats
		 */
		add_theme_support(
			'post-formats',
			array(
				'aside',
				'image',
				'video',
				'quote',
				'link',
				'gallery',
				'audio',
			)
		);

		add_theme_support( 'menus' );

		add_image_size( 'Square', 800, 800, true );
		add_image_size( 'Hero', 1920, 1080, true );
		add_image_size( 'Hero_mobile', 960, 540, true );
		add_image_size( 'Rectangle', 800, 600, true );
		add_image_size( 'Rectangle_mobile', 400, 300, true );
		add_image_size( 'Portrait', 1280, 1440, true );
		add_image_size( 'Portrait_mobile', 640, 720, true );
		add_image_size( 'Large Icon', 600, 600, false );
		add_image_size( 'Story Portrait', 460, 700, true );

		if ( function_exists( 'acf_add_options_page' ) ) {
			acf_add_options_page(
				array(
					'page_title' => 'Global Settings',
					'menu_title' => 'Global Settings',
					'menu_slug'  => 'global-settings',
					'capability' => 'edit_posts',
					'redirect'   => false,
				)
			);
		}
	}

	/** This Would return 'foo bar!'.
	 *
	 * @param string $text being 'foo', then returned 'foo bar!'.
	 */
	public function myfoo( $text ) {
		$text .= ' bar!';
		return $text;
	}

	/** This is where you can add your own functions to twig.
	 *
	 * @param string $twig get extension.
	 */
	public function add_to_twig( $twig ) {
		$twig->addExtension( new Twig\Extension\StringLoaderExtension() );
		$twig->addFilter( new Twig\TwigFilter( 'myfoo', array( $this, 'myfoo' ) ) );
		return $twig;
	}

}

new StarterSite();

/**
 * Enqueue scripts and styles.
 */
function theme_scripts() {
  wp_enqueue_style( 'hvh', get_template_directory_uri() . '/dist/styles/scripts.css', array(), date("H:i:s"));
  wp_enqueue_script( 'main', get_template_directory_uri() . '/dist/scripts.js', array(), date("H:i:s"), true);
}
add_action( 'wp_enqueue_scripts', 'theme_scripts' );

/**
 *  This is the callback that displays the block.
 *
 * @param   array  $block      The block settings and attributes.
 * @param   string $content    The block content (emtpy string).
 * @param   bool   $is_preview True during AJAX preview.
 */
function my_acf_block_render_callback( $block, $content = '', $is_preview = false ) {
	$context = Timber::context();

	// Store block values.
	$context['block'] = $block;

	// Store field values.
	$context['fields'] = get_fields();

	// Store $is_preview value.
	$context['is_preview'] = $is_preview;

	$context['block_name'] = substr($block['name'], 4);

	// Render the block.
	Timber::render( 'src/twig/components/'. $context['block_name'] . '/' . $context['block_name'] . '.twig', $context['fields'] );
}
