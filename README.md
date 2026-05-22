 <!-- HERO -->

    <!-- STORY SECTION -->

    <section class="story">
        <div class="container-story">

            <h2 class="story-title">
                We Take Storytelling Seriously
            </h2>

            <div class="story-wrapper">
                <!-- LEFT SIDE -->
                <div class="story-left">
                    <!-- VIDEO -->
                    <div class="story-video">

                        <!-- PREVIEW IMAGE -->
                        <img src="img/Rectangle-1x.png" alt="video preview" class="story-video-preview">

                        <!-- PLAY BUTTON -->
                        <button class="play-btn"
                            data-video="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&mute=1">
                            <img src="img/Group-1x.png" alt="video preview" data-video="#">
                        </button>

                    </div>

                </div>

                <!-- RIGHT SIDE -->
                <div class="story-right">

                    <!-- DECOR -->
                    <div class="story-shape">
                        <img src="img/Holographic1-1x.png" alt="shape">
                    </div>

                    <!-- CATEGORY -->
                    <div class="story-category">
                        <img src="img/play.png" alt="shape">
                        Mixed Reality
                    </div>

                    <!-- LIST -->
                    <ul class="story-list">
                        <li>Storytelling</li>
                        <li>360° Content</li>
                        <li>Immersive Marketing</li>
                        <li>Virtual Tours</li>
                        <li>
                            Augmented Reality
                            <span>(COMING SOON)</span>
                        </li>
                        <li>
                            Virtual Reality
                            <span>(COMING SOON)</span>
                        </li>
                    </ul>

                </div>

            </div>

            <!-- BRANDS -->
            <!-- <div class="brands">

                <div class="brand-item">
                    <img src="img/brand-1.png" alt="brand">
                </div>

                <div class="brand-item">
                    <img src="img/brand-2.png" alt="brand">
                </div>

                <div class="brand-item">
                    <img src="img/brand-3.png" alt="brand">
                </div>

                <div class="brand-item">
                    <img src="img/brand-4.png" alt="brand">
                </div>

                <div class="brand-item">
                    <img src="img/brand-5.png" alt="brand">
                </div>

            </div> -->

        </div>

    </section>

    <!-- VIDEO MODAL -->

    <!-- <div class="video-modal" id="videoModal">

        <div class="video-modal-content">

            <button class="video-close">
                ✕
            </button>

            <iframe id="youtubeFrame" src="" title="YouTube video player" allow="autoplay; encrypted-media"
                allowfullscreen></iframe>

        </div>

    </div> -->




     .story {
         padding: 120px 0;
         background: #f7f7f7;
         color: #1f2340;
     }

     .container-story {
         width: 100%;
         margin: 0 auto;
         padding: 0 85px;
     }


     .story-wrapper {
         display: grid;
         grid-template-columns: 1fr 1fr;

     }


     /* LEFT */

     .story-left {
         width: 1002px;
         display: flex;
         align-content: center;
         justify-content: center;


         background-size: cover;
     }

     .story-title {
         font-family: 'Outfit', sans-serif;
         font-size: 54px;
         line-height: 1.1;
         font-weight: 700;
         margin-bottom: 60px;
     }

     /* VIDEO */

     .story-video {
         position: relative;
         border-radius: 30px;
         overflow: hidden;
     }

     .story-video-preview {
         width: 100%;
         height: 100%;
         object-fit: cover;
     }

     /* PLAY BUTTON */

     .play-btn {
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         z-index: 4;
         cursor: pointer;
         transition: 0.3s ease;
     }

     .play-btn:hover {
         transform: translate(-50%, -50%) scale(1.08);
     }

     /* RIGHT */

     .story-right {
         background: #ece7f8;
         padding: 40px;
         display: flex;
         flex-direction: column;
         justify-content: center;
     }

     .story-shape {
         max-width: 180px;
         margin-left: auto;
         margin-bottom: 40px;
     }

     /* CATEGORY */

     .story-category {
         color: #ff3ebf;
         font-size: 22px;
         font-weight: 600;
         margin-bottom: 30px;
     }

     /* LIST */

     .story-list {
         display: flex;
         flex-direction: column;
         gap: 18px;
     }

     .story-list li {
         font-size: 34px;
         line-height: 1.2;
         font-weight: 500;
     }

     .story-list span {
         font-size: 12px;
         opacity: 0.5;
         margin-left: 5px;
     }

     /* =========================

BRANDS
========================= \*/

     .brands {
         display: grid;
         grid-template-columns: repeat(5, 1fr);
         gap: 40px;

         align-items: center;

         padding-top: 70px;
     }

     .brand-item {
         display: flex;
         align-items: center;
         justify-content: center;
     }

     .brand-item img {
         max-width: 140px;
         opacity: 0.8;
         transition: 0.3s ease;
     }

     .brand-item img:hover {
         opacity: 1;
         transform: scale(1.05);
     }

     /* =========================

VIDEO MODAL
========================= \*/

     .video-modal {
         position: fixed;
         inset: 0;

         background: rgba(0, 0, 0, 0.9);

         display: flex;
         align-items: center;
         justify-content: center;

         opacity: 0;
         visibility: hidden;

         transition: 0.3s ease;

         z-index: 999;
     }

     .video-modal.active {
         opacity: 1;
         visibility: visible;
     }

     .video-modal-content {
         position: relative;
         width: 90%;
         max-width: 1000px;
         aspect-ratio: 16/9;
     }

     .video-modal iframe {
         width: 100%;
         height: 100%;
         border: 0;
         border-radius: 20px;
     }

     .video-close {
         position: absolute;
         top: -50px;
         right: 0;

         font-size: 30px;
         color: #fff;

         cursor: pointer;
     }

     /* =========================

TABLET
========================= \*/

     @media (max-width: 992px) {

         .story {
             padding: 90px 0;
         }

         .story-wrapper {
             grid-template-columns: 1fr;
         }

         .story-title {
             font-size: 42px;
         }

         .story-right {
             padding: 60px 40px;
         }

         .story-list li {
             font-size: 28px;
         }

         .brands {
             grid-template-columns: repeat(3, 1fr);
             gap: 30px;
         }
     }

     /* =========================

MOBILE
========================= \*/

     @media (max-width: 576px) {

         .story {
             padding: 70px 0;
         }

         .story-title {
             font-size: 34px;
             margin-bottom: 40px;
         }

         .story-right {
             padding: 30px 24px;
         }

         .story-list li {
             font-size: 22px;
         }

         .play-btn {
             width: 90px;
             height: 90px;
             font-size: 30px;
         }

         .brands {
             grid-template-columns: repeat(2, 1fr);
         }
     }

     /* =========================

SMALL MOBILE
========================= \*/

     @media (max-width: 340px) {

         .story-title {
             font-size: 28px;
         }

         .story-list li {
             font-size: 18px;
         }

         .story-category {
             font-size: 18px;
         }
     }
