<script setup>
import CardColumn from "../components/3-column-preview-card-component/CardColumn.vue";
</script>

<template>
    <main>
        <div class="card">
            <CardColumn columnTitle="Sedans"
                columnParagraph="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
                columnIcon="/3-column-preview-card-component-assets/icon-sedans.svg" bgColorClass="sedanBg" />
            <CardColumn columnTitle="Suvs"
                columnParagraph="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
                columnIcon="/3-column-preview-card-component-assets/icon-suvs.svg" bgColorClass="suvBg" />
            <CardColumn columnTitle="Luxury"
                columnParagraph="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
                columnIcon="/3-column-preview-card-component-assets/icon-luxury.svg" bgColorClass="luxuryBg" />
        </div>
    </main>
</template>

<style>
@font-face {
    font-family: "Lexend Deca";
    src: url("/3-column-preview-card-component/LexendDeca-VariableFont_wght.ttf") format("truetype");
}

@font-face {
    font-family: "Big Shoulders Display";
    src: url("/3-column-preview-card-component/BigShouldersDisplay-VariableFont_wght.ttf") format("truetype");
}

:root {
    --theme-bright-orange: hsl(31, 77%, 52%);
    --theme-dark-cyan: hsl(184, 100%, 22%);
    --theme-very-dark-cyan: hsl(179, 100%, 13%);

    --theme-transparent-white: hsla(0, 0%, 100%, 0.75);
    /* paragraphs */
    --theme-very-light-gray: hsl(0,
            0%,
            95%);
    /* background, headings, buttons */

    --font-theme-lexend: "Lexend Deca";
    --font-theme-shoulders: "Big Shoulders Display";
}

main {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--theme-very-light-gray);
}

.card {
    width: 864px;
    height: 460px;
    display: flex;
    border-radius: 14px;
    overflow: hidden;
}

@media (max-width: 720px) {

    body {
        overflow-y: scroll;
    }

    main {
        padding: 50px 0px 50px 0px;
    }

    .card {
        width: 288px;
        height: 1380px;
        flex-direction: column;
    }

}
</style>