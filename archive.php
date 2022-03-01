<?php get_header() ?>
        <section class="section-01-00">
            <div class="container">
                <div class="row">
                
                <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

                    <div class="col-lg-4">
                        <div class="blog-item p-4">
                            <span class="date">تاریخ</span>
                            <h4 class="title">
                                عنوان اول
                            </h4>
                            <span class="description">
                                خلاصه موضوع اول
                            </span>
                            <span class="author">نام نویسنده</span>
                        </div>
                    </div>

                <?php endwhile; else: _e('مطلبی وجود ندارد', 'nebular_theme'); ?><?php endif; ?>
                </div>
            </div>
        </section>

<?php get_footer() ?>