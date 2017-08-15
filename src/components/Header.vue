<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">La salimonde</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link :to="{ name: 'home'}" activeClass="active" tag="li"><a>La bâtisse</a></router-link>
                    <router-link :to="{ name: 'bedrooms'}" activeClass="active" tag="li"><a>Les chambres d'hôtes</a></router-link>
                    <router-link :to="{ name: 'gallery'}" activeClass="active" tag="li"><a>La galerie</a></router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
</script>