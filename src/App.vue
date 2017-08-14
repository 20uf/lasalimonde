<template>
    <div class="container" :style="backgroundStyle">
        <app-header></app-header>
        <div class="row">
            <div class="col-xs-12">
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    export default {
        components: {
            appHeader: Header
        },
        computed:{
            backgroundStyle: function() {
                return {
                    'background-image':'url("'+this.pic_url+'")'
                }
            }
        },
        methods:{
            startRotation: function() {
                this.timer = setInterval(this.next, 3000);
            },

            stopRotation: function() {
                clearTimeout(this.timer);
                this.timer = null;
            },

            next: function() {
                this.currentNumber += 1
            },
            prev: function() {
                this.currentNumber -= 1
            }
        },
        ready:function(){
            this.startRotation();
        }
    }
</script>

<style>
    body {
        padding: 30px;
    }

    .slide-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-out 200ms ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }

    
	nav { height:auto; float:left; width:100%; top:0; margin-bottom:20px; background:none !important; clear:both; position:relative }
	nav ul { float:left; width:100%; height:auto }
	nav ul li a { margin:0; text-shadow:none }	
	nav .navbar-collapse.collapse.in { overflow:hidden; }
	.nav-justified > li > a { margin-bottom:2px}
	.navbar-inverse { border-bottom:none; }
	.navbar-collapse { max-height:none; border-color:none }
	.navbar { margin-bottom:0px !important; z-index:10 }
	.navbar .container { background:#000000 !important }		
	nav ul { margin:1px auto 0 auto; padding-bottom:10px }
	nav ul li:hover { color:#B4C401; background:#38170e }	
	.menumobile { font-size:1.2em }	
	nav ul li.active a, nav ul li:hover a, nav li:focus a { }
	nav ul li:hover { background:#610006 !important }
	nav ul li.active { background:#b42d00 }
	nav ul li.active span, nav ul li:hover span { display:none }
</style>

