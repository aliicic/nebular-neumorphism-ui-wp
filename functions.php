<?php


// ? for install style and scripts file 
function nebular_scripts_styles() {
wp_enqueue_style( 'style-name', get_stylesheet_uri() );

wp_enqueue_style( 'bootstrap',get_template_directory_uri(). '/assets/css/bootstrap.min.css');
Wp_enqueue_style( 'style', get_template_directory_uri().'/assets/css/style.min.css');

}
add_action( 'wp_enqueue_scripts', 'nebular_scripts_styles' );
 
add_theme_support( 'menus');

 //?add menu location
 function register_my_menus() {
 register_nav_menus(
 array(
 'main-menu' => __( 'main menu' ),
 )
 );
 }
 add_action( 'init', 'register_my_menus' );

 
 function mytheme_custom_excerpt_length( $length ) {
 return 20;
 }
 add_filter( 'excerpt_length', 'mytheme_custom_excerpt_length', 999 );