<?php  /* Template Name: home */ 
get_header()
?>



    <section class="section-00-00">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="content">
                        <h1>نبولار</h1>
                        <h2>طراح و توسعه دهنده وب</h2>
                        <p>

                        </p>

                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="img-frame">
                        <img src="<?= $GLOBALS[ 'root' ]; ?>/assets/imgs/pic.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section-00-01">
        <div class="container">
            <div class="row skill-frame justify-content-center">
                <div class="col-lg-4 skill-items">
                    <div class="card-item">
                        <div class="icon-frame" style="background:#ff7058;">
                            <img src="<?= $GLOBALS[ 'root' ]; ?>/assets/imgs/design.png" alt="">
                        </div>
                        <h4 class="text-center my-2">
                            طراحی سایت
                        </h4>
                        <p class="text-center">
                            طراحی انواع وب سایت های شخصی، شرکتی، فروشگاهی و خبری همراه با آموزش و پشتیبانی
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 skill-items">
                    <div class="card-item">
                        <div class="icon-frame" style="background:#ffd05b">
                            <img src="<?= $GLOBALS[ 'root' ]; ?>/assets/imgs/develop.png" alt="">
                        </div>
                        <h4 class="text-center my-2">
                            وب اپلیکیشن
                        </h4>
                        <p class="text-center">
                            طراحی و توسعه وب اپلیکیشن با طراحی و کاربرد های اختصاصی
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 skill-items">
                    <div class="card-item">
                        <div class="icon-frame" style="background: #90dfaa;">
                            <img src="<?= $GLOBALS[ 'root' ]; ?>/assets/imgs/support.png" alt="">
                        </div>
                        <h4 class="text-center my-2">
                            پشتیبانی
                        </h4>
                        <p class="text-center">
                            تعمیر وبسایت هایی که کارکرد آنها مختل شده است ، بروزرسانی و رفع ایراد ها
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section-00-02">
        <div class="container">


                  <?= do_shortcode('[contact-form-7 id="13" title="فرم تماس 1"]') ?>
           
                 
        </div>
    </section>
    <section class="section-00-03">
        <div class="container">
            <h4 class="title">وبلاگ</h4>
            <p class="text-center mb-5">سعی میکنیم در این قسمت محتوای باکیفیت در زمینه طرحی و توسعه وب قرار دهیم</p>
            <div class="row mb-3">
             <?php
$args = array(
'post_type' => 'post',
'posts_per_page' =>3,

);

$the_query = new WP_Query( $args ); ?>

          <?php if ( $the_query->have_posts() ) : while ( $the_query->have_posts() ) : $the_query->the_post(); ?>


               <div class="col-lg-4">
                    <div class="blog-item p-4">
                        <span class="date"><?php echo get_the_date("Y/m/d"); ?></span>
                        <h4 class="title">
                                <?php the_title(); ?>
                        </h4>
                        <span class="description">
                           <?php // the_excerpt() ?>
                        </span>
                        <span class="author"><?php the_author(); ?></span>
                    </div>
                </div>
          

            <?php endwhile; else: _e('مطلبی وجود ندارد', 'nebular_theme'); ?><?php endif; ?>
            </div>


            <a href="<?php echo esc_url( get_category_link(1) ); ?>" class="neobtn mx-auto ">همه موارد</a>
        </div>
    </section>
    <section class="section-00-04">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="user-item card">
                        <div class="profile-img">
                            <img src="<?= $GLOBALS[ 'root' ]; ?>/assets/imgs/ali-aghakhani.jpg" alt="">
                        </div>
                        <div class="card-content">
                            <h5>علی آقاخانی</h5>
                            <p>طراح و توسعه دهنده وب</p>
                            <div class="icon-frame">
                                <img src="<?= $GLOBALS[ 'root' ]; ?>/assets/imgs/js.png" alt="">
                            </div>
                            <div class="icon-frame">
                                <img src="<?= $GLOBALS[ 'root' ]; ?>/assets/imgs/vue.png" alt="">
                            </div>
                            <div class="icon-frame">
                                <img src="<?= $GLOBALS[ 'root' ]; ?>/assets/imgs/nxt.png" alt="">
                            </div>
                            <div class="icon-frame">
                                <img src="<?= $GLOBALS[ 'root' ]; ?>/assets/imgs/wp.png" alt="">
                            </div>
                            <div class="icon-frame">
                                <img src="<?= $GLOBALS[ 'root' ]; ?>/assets/imgs/gsap.png" alt="">
                            </div>
                            <div class="icon-frame">
                                <img src="<?= $GLOBALS[ 'root' ]; ?>/assets/imgs/sass.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

<?php get_footer() ?>