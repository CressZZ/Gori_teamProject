@import "source"
@import "mixin"

.header
  background: $main-color

.header__logo
  // background: $main-color
  color: $point-color
  height: 72px
  padding: 18px 0px
  font-size: 38px
  font-weight: 800

.header__navi
  position: relative

.header__navi__btn-menu--open
  height: 68px
  float: right
  color: $point-color

.header__navi__btn-menu--close
  // background-color: #ff5c5c
  height: 64px
  position: absolute
  right: 0
  color: $point-color

.icon-menu, .icon-cancel
  font-size: 30px
  font-weight: 800


.header__navi__lnb_list
  margin: 71px 0
  font-size: $font-m-size

.navi_menu
  display: inline-block

.navi_menu_tutor, .navi_menu_service
  padding-left: 20px

.navi_menu_tutor
  margin: 30px 0


.navi_menu_service
  margin: 28px 0
  &::before
    content: ''
    background: #aaa
    position: absolute
    top: 148px
    left: 20px
    width: 90%
    height: 1px

.navi_menu_join , .navi_menu_login
  padding: 17px 0
  text-align: center
  border: 2px solid $point-color
  background: $point-color
  color: #fff



@media screen and (min-width: 600px)
  .header
    background: $main-color

  .header__heading
    max-width: 940px
    margin: 0 auto


  .icon-menu, .icon-cancel
    display: none

  .header__navi__btn-menu--close
    height: 64px
    position: absolute
    right: 0

  .header__navi__lnb_list
    display: inline-block
    float: right
    padding: 14.5px 0
    margin: 71px 0
    height: 168px
    position: absolute
    top: -88px
    right: 40px


  .navi_menu
    display: inline

  .header__navi__lnb_list li,
  .header__navi__lnb_list a
    display: inline-block
    vertical-align: middle
    color: #fff


  .navi_menu_tutor
    margin: 30px 0

  .navi_menu_service
    margin: 28px 0
    &::before
      display: none

  .navi_menu_join , .navi_menu_login
    padding: 17px 0
    text-align: center
    border: 0
    background: none
    color: $font-main-color


  .navi_menu_join
    padding-left: 20px
