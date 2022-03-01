<?php get_header() ?>
<section class="section-01-00">
    <div class="container">
        <div class="row">

            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

            <div class="col-lg-4">
          
                <div class="blog-item p-4">
                <a href="<?php the_permalink() ?>">
                    <span class="date"><?php echo get_the_date("Y/m/d"); ?></span>
                    <h4 class="title">
                         <?php the_title(); ?>
                    </h4>
                    <span class="description">
                         <?php // the_excerpt() ?>
                    </span>
                    <span class="author"><?php the_author(); ?></span>
                </a>
                </div>
              
            </div>

            <?php endwhile; else: _e('مطلبی وجود ندارد', 'nebular_theme'); ?><?php endif; ?>
        </div>
    </div>
</section>

<?php get_footer() ?>