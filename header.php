<!DOCTYPE html>
<html lang="fa-IR">

<?php  $GLOBALS[ 'root' ] =  get_template_directory_uri()  ?>
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php wp_title(''); ?></title>
<?php wp_head(); ?>
</head>

<body>
    <div class="frame"></div>
      <main>
          <header>
              <div class="nav">
                  <ul>
                       <?php
                              
                        $defaults = array(
                            
                          
                            'theme_location'  => 'main-menu',
                            'menu'            => 'main menu',
                            'container'       => '',
                            'container_class' => '',
                            'container_id'    => '',
                            'menu_class'      => '',
                            'menu_id'         => '',
                            'echo'            => true,
                            'fallback_cb'     => '',
                            'before'          => '',
                            'after'           => '',
                            'link_before'     => '',
                            'link_after'      => '',
                            'items_wrap'      => '%3$s',
                            'depth'           => '',
                            'walker'          => '',
              
                        );


                        wp_nav_menu( $defaults );

                        ?>
                  </ul>
              </div>
          </header>