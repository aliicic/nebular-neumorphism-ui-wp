<?php get_header() ?>
<section class="section-02-00">
    <div class="container">
        <div class="row">
        <div class="col-12">

            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>


                    <span class="date"><?php echo get_the_date("Y/m/d"); ?></span>
                    <span class="author"><?php the_author(); ?></span>
                    <h4 class="title text-end">
                        <?php the_title(); ?>
                    </h4>
                    <div class="description">
                        <?php the_content() ?>
                    </div>
              
      
            <?php endwhile; else: _e('مطلبی وجود ندارد', 'nebular_theme'); ?><?php endif; ?>
          </div>
        </div>
    </div>
</section>

<?php get_footer() ?>