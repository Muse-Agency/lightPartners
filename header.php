
<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package LightPartners
 */

?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
    <!--==================== UNICONS ====================-->
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">

    <title>Трековый светильник Magnetic CSMV5335MC0S - Профессиональные световые решения</title>
    <script defer src="<?php echo get_template_directory_uri(); ?>/assets/js/app.js"></script>
    <link href="<?php echo get_template_directory_uri(); ?>/assets/css/app.css" rel="stylesheet">
    <?php wp_head(); ?>
</head>
<body>
    <!--==================== HEADER ====================-->
    <header class="header__top-wrap js--header">
        <div class="header__top flex">
            <div class="header__logo">
                <a href="/" style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/images/header__logo.svg');" class="header__logo-img"></a>
            </div>
            <nav class="header__nav">



                <ul class="nav__list flex">
                    <li class="nav__item">
                        <a href="#" class="nav__link clickable-element">Компания</a>
                    </li>
                    <li class="nav__item">
                        <a href="/services.html" class="nav__link clickable-element">Услуги</a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link clickable-element">Бренды</a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link clickable-element">Каталог</a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link clickable-element">Проекты</a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link clickable-element">Контакты</a>
                    </li>
                </ul>

                <ul class="nav__list-mob flex">
                    <li class="nav__item">
                        <a href="#" class="nav__link clickable-element">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/header/search__icon.svg" alt="search">
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link clickable-element">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/header/phone__icon.svg" alt="phone">
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link clickable-element">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/header/cart__icon.svg" alt="cart">
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#" class="nav__link clickable-element">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/header/login__icon.svg" alt="login">
                        </a>
                    </li>
                    <li class="nav__item">
                        <button id="btn_open" href="#" class="nav__link clickable-element">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/header/burger__icon.svg" alt="burger">
                        </button>
                    </li>
                </ul>
            </nav>

            <div class="burger-menu" id="burger-menu">
                <div class="container">
                    <div class="burger-menu__wrapper">
                        <button id="btn_close" class="burger-menu__btn-close"></button>
                        <img class="burger-menu__logo" src="<?php echo get_template_directory_uri(); ?>/assets/images/header__logo.svg" alt="logo">
                        <nav class="burger-menu__nav">
                            <ul class="burger-menu__list">
                                <li class="burger-menu__item">
                                    <a href="" class="burger-menu__link">Компания</a>
                                </li>
                                <li class="burger-menu__item">
                                    <a href="" class="burger-menu__link">Услуги</a>
                                </li>
                                <li class="burger-menu__item">
                                    <a href="" class="burger-menu__link">Бренды</a>
                                </li>
                                <li class="burger-menu__item">
                                    <a href="" class="burger-menu__link">Каталог</a>
                                </li>
                                <li class="burger-menu__item">
                                    <a href="" class="burger-menu__link">Проекты</a>
                                </li>
                                <li class="burger-menu__item">
                                    <a href="" class="burger-menu__link">Контакты</a>
                                </li>
                            </ul>
                        </nav>
                        <div class="burger-menu__contacts-box">
                            <a href="tel:+74957761188" class="burger-menu__link-contact">+7 495 77-611-88</a>
                            <a href="email:+order@lightpartners.ru"
                                class="burger-menu__link-contact">order@lightpartners.ru</a>
                        </div>
                    </div>
                </div>
            </div>


            <!-- <div class="header__info flex"> -->
            <div class="header__info grid">
                <!-- <div class="header__contacts"> -->
                <div class="header__info-number">+7 495 77-611-88</div>
                <div class="header__info-email"><a href="mailto:order@lightpartners.ru">order@lightpartners.ru</a></div>
                <!-- </div> -->
                <div class="header__search_account flex">

                    <form action="#" class="header__search_form">
                        <input type="text" class="header__search_form-input" name="q">
                        <button type="submit" class="header__search_form-button">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M7.28662 0.833984C3.84426 0.833984 1.04443 3.63729 1.04443 7.08393C1.04443 10.5306 3.84426 13.3339 7.28662 13.3339C10.729 13.3339 13.5288 10.5306 13.5288 7.08393C13.5288 3.63729 10.729 0.833984 7.28662 0.833984ZM7.2868 14.1665C3.3859 14.1665 0.212402 10.9891 0.212402 7.08327C0.212402 3.17747 3.3859 0 7.2868 0C11.1869 0 14.3612 3.17747 14.3612 7.08327C14.3612 10.9891 11.1869 14.1665 7.2868 14.1665Z"
                                    fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M19.7733 19.9999C19.6668 19.9999 19.5602 19.9591 19.4787 19.8783L11.7034 12.0925C11.5403 11.9292 11.5403 11.6659 11.7034 11.5034C11.8657 11.34 12.1287 11.34 12.2918 11.5034L20.0671 19.2883C20.2302 19.4516 20.2302 19.7149 20.0671 19.8783C19.9864 19.9591 19.8798 19.9999 19.7733 19.9999Z"
                                    fill="white" />
                            </svg>
                        </button>
                    </form>


                    <a href="" class="header__account_link"><svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M10.1484 0.869141C5.11986 0.869141 1.0293 4.96479 1.0293 9.99957C1.0293 15.0344 5.11986 19.13 10.1484 19.13C15.1769 19.13 19.2675 15.0344 19.2675 9.99957C19.2675 4.96479 15.1769 0.869141 10.1484 0.869141ZM10.1497 20C4.64261 20 0.162109 15.5139 0.162109 10C0.162109 4.48609 4.64261 0 10.1497 0C15.6567 0 20.1372 4.48609 20.1372 10C20.1372 15.5139 15.6567 20 10.1497 20Z"
                                fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M15.3608 15.6475C15.1211 15.6475 14.9266 15.4527 14.9266 15.2127C14.9266 12.5762 12.7832 10.4301 10.15 10.4301C7.51675 10.4301 5.37336 12.5762 5.37336 15.2127C5.37336 15.4527 5.17882 15.6475 4.93912 15.6475C4.69942 15.6475 4.50488 15.4527 4.50488 15.2127C4.50488 12.0962 7.03735 9.56055 10.15 9.56055C13.2626 9.56055 15.795 12.0962 15.795 15.2127C15.795 15.4527 15.6005 15.6475 15.3608 15.6475Z"
                                fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M10.1531 3.47656C8.9555 3.47656 7.98193 4.45134 7.98193 5.65047C7.98193 6.8496 8.9555 7.82439 10.1531 7.82439C11.3508 7.82439 12.3243 6.8496 12.3243 5.65047C12.3243 4.45134 11.3508 3.47656 10.1531 3.47656ZM10.15 8.69438C8.47386 8.69438 7.11035 7.32916 7.11035 5.6509C7.11035 3.97264 8.47386 2.60742 10.15 2.60742C11.8262 2.60742 13.1897 3.97264 13.1897 5.6509C13.1897 7.32916 11.8262 8.69438 10.15 8.69438Z"
                                fill="white" />
                        </svg></a>

                </div>
            </div>
        </div>
    </header>